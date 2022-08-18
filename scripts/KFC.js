hexo.extend.filter.register('before_post_render', function (data) {
const _log = global.console.log;
const _trace = global.console.trace;
const _debug = global.console.debug;
const _info = global.console.info;
const _warn = global.console.warn;
const _error = global.console.error;
/**
 * console.log will log KFC Crazy at the beginning on Thursday
 * @zh 当周四时，console.log 会打印疯狂星期四
 */
(global.console.log = function (...args) {
  if (new Date().getDay() === 4) {
    _log.call(
      global,
      "Uncaught Error: KFC Crazy Thursday, v me 50!",
      ...args
    );
  } else {
    _log.call(this, ...args);
  }
}),
  (global.console.trace = function (...args) {
    if (new Date().getDay() === 4) {
      _trace.call(
        global,
        "Uncaught Error: KFC Crazy Thursday, v me 50!",
        ...args
      );
    } else {
      _trace.call(this, ...args);
    }
  }),
  (global.console.debug = function (...args) {
    if (new Date().getDay() === 4) {
      _debug.call(
        global,
        "Uncaught Error: KFC Crazy Thursday, v me 50!",
        ...args
      );
    } else {
      _debug.call(this, ...args);
    }
  }),
  (global.console.info = function (...args) {
    if (new Date().getDay() === 4) {
      _info.call(
        global,
        "Uncaught Error: KFC Crazy Thursday, v me 50!",
        ...args
      );
    } else {
      _info.call(this, ...args);
    }
  }),
  (global.console.warn = function (...args) {
    if (new Date().getDay() === 4) {
      _warn.call(
        global,
        "Uncaught Error: KFC Crazy Thursday, v me 50!",
        ...args
      );
    } else {
      _warn.call(this, ...args);
    }
  }),
  (global.console.error = function (...args) {
    if (new Date().getDay() === 4) {
      _error.call(
        global,
        "Uncaught Error: KFC Crazy Thursday, v me 50!",
        ...args
      );
    } else {
      _error.call(this, ...args);
    }
  });

}, 9);