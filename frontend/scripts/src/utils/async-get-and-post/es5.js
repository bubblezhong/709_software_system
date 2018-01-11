// 通过 https://babeljs.io/repl 在线转换为 es5语法
function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

module.exports = {
  asyncGet: function(url) {
    return _asyncToGenerator(function* () {
      console.log(`[Get URL]: ${url}`);
      try {
        const response = yield fetch(url);
        const result = response.json();
        return result;
      } catch (error) {
        console.log('[error] ', error);
        return false;
      }
    })();
  },

  asyncPost: function(url, value) {
    return _asyncToGenerator(function* () {
      console.log(`[POST URL]: ${url}`);
      console.log('[POST DATA]:', value);
      try {
        const response = yield fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(value)
        });
        const result = response.json();
        return result;
      } catch (error) {
        console.log('[error] ', error);
        return false;
      }
    })();
  },

  asyncPut: function(url, value) {
    return _asyncToGenerator(function* () {
      try {
        const response = yield fetch(url, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(value)
        });
        const result = response.json();
        return result;
      } catch (error) {
        console.log('[error] ', error);
        return false;
      }
    })();
  }
};
