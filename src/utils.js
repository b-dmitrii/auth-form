export const genToken = (len) => {
    let rnd = "";
    while (rnd.length < len) rnd += Math.random().toString(36).substring(2);
    return rnd.substring(0, len);
  };


  export const extend = (target, update) => Object.assign({}, target, update);