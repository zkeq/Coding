// 本地 Gist 风格代码块渲染（2026-10-23 改造）
//
// 旧版逻辑：构建时把每个代码块按 MD5 同步到 GitHub Gist，再替换为
// <iframe srcdoc> 嵌入 gist.onmicrosoft.cn 镜像渲染。镜像失效后全站代码块白屏。
//
// 新版逻辑：不再调用 GitHub API、不再创建/删除 Gist、不再生成 iframe。
// 构建时直接用 highlight.js 把代码块渲染成仿 GitHub Gist 外观的静态 HTML
// （行号栏 + GitHub 配色 + 底部 meta 条），样式见 source/css/gist.css。
// 代码内容本来就完整保存在各篇文章的 markdown 里，无需从 Gist 回捞。

let hljs = null;
try {
    hljs = require('highlight.js');
} catch (e) {
    hljs = null; // 没有 highlight.js 时退化为无高亮的等宽代码块
}

// 与 Hexo 核心相同的代码块匹配正则（含引用块内的代码块）
const rBacktick = /^((?:[^\S\r\n]*>){0,3}[^\S\r\n]*)(`{3,}|~{3,})[^\S\r\n]*((?:.*?[^`\s])?)[^\S\r\n]*\n((?:[\s\S]*?\n)?)(?:(?:[^\S\r\n]*>){0,3}[^\S\r\n]*)\2[^\S\r\n]?(\n+|$)/gm;

// 需要改名/兜底的语言（hljs 原生 alias 如 js/py/sh/cmd/html 等可直接识别，不必列）
const LANG_MAP = {
    'c++': 'cpp',
    'vue': 'xml',
    'text': 'plaintext',
    'txt': 'plaintext',
    'sqlite': 'sql',
    'shell': 'bash'
};

function normalizeLang(raw) {
    // 旧版行为：未标注语言时默认按 javascript 高亮（旧版 gist 文件后缀为 .js）
    if (!raw) return 'javascript';
    const lower = String(raw).toLowerCase();
    if (LANG_MAP[lower]) return LANG_MAP[lower];
    if (hljs && hljs.getLanguage(lower)) return lower;
    return 'plaintext';
}

function escapeHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

// 把 highlight.js 的整段输出按行切开，跨行 span 在行尾闭合、下一行重开
function splitHighlighted(html) {
    const lines = [''];
    const stack = [];
    const re = /<span[^>]*>|<\/span>|\n|[^<\n]+/g;
    let m;
    while ((m = re.exec(html)) !== null) {
        const tok = m[0];
        if (tok === '\n') {
            lines[lines.length - 1] += '</span>'.repeat(stack.length);
            lines.push(stack.join(''));
        } else if (tok.charAt(0) === '<' && tok.charAt(1) === 's') {
            stack.push(tok);
            lines[lines.length - 1] += tok;
        } else if (tok === '</span>') {
            stack.pop();
            lines[lines.length - 1] += tok;
        } else {
            lines[lines.length - 1] += tok;
        }
    }
    return lines;
}

function renderGistBlock(code, rawLang) {
    const lang = normalizeLang(rawLang);
    let lines;
    if (hljs && lang !== 'plaintext' && hljs.getLanguage(lang)) {
        lines = splitHighlighted(hljs.highlight(code, { language: lang }).value);
    } else {
        lines = code.split('\n').map(escapeHtml);
    }
    const rows = lines.map((lineHtml, idx) =>
        '<tr><td class="blob-num" data-line-number="' + (idx + 1) + '"></td>' +
        '<td class="blob-code">' + (lineHtml === '' ? ' ' : lineHtml) + '</td></tr>'
    ).join('');
    const label = rawLang ? escapeHtml(String(rawLang)) : 'javascript';
    // 整段 HTML 不留空行，避免被 marked 拆成多个 HTML 块
    const html = '<div class="gist-clone"><div class="gist-file">' +
        '<div class="gist-data"><table class="highlight"><tbody>' + rows + '</tbody></table></div>' +
        '<div class="gist-meta"><span class="gist-meta-lang">' + label + '</span></div>' +
        '</div></div>';
    // Hexo 在 markdown 渲染后还会用 Nunjucks 处理全文（tag.render），代码里的
    // {{ }} / {% %} 会被当成模板语法解析甚至报错（旧版代码在 Gist 里、页面上
    // 没有代码原文，所以从未触发）。把花括号转成实体，Nunjucks 便无从下口，
    // 浏览器显示不受影响。自产的标签本身不含花括号，可安全整体替换。
    return html.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
}

hexo.extend.filter.register('before_post_render', function (data) {
    const dataContent = data.content;
    if ((!dataContent.includes('```') && !dataContent.includes('~~~'))) return;

    data.content = dataContent.replace(rBacktick, (match, start, $2, _args, _content, end) => {
        const code = _content
            .replace(/\n$/, '')
            .replace(/^>\s/mg, '');
        return '\n\n' + renderGistBlock(code, _args) + '\n\n';
    });
}, 9);
