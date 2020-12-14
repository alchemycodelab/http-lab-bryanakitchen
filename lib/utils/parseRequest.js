module.exports = rawRequest => {
  
  const noBody = ['GET', 'DELETE'];

  const rawMethod = rawRequest.split(' ');
  const rawArray = rawRequest.split('\r\n');

  if(noBody.includes(rawMethod[0])) {
    return {
      method: rawMethod[0],
      path: rawMethod[1],
    };
  } else {
    return {
      method: rawMethod[0],
      path: rawMethod[1],
      body: rawArray[rawArray.length - 1]
    };
  }
  
};
