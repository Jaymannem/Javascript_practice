function Throttle(fn, limit) {
  let flag = true;

  return function () {
    if (flag) {
      fn();
      flag = false;

      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

module.exports = Throttle;
