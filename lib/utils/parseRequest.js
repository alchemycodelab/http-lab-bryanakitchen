module.exports = rawRequest => {

  const rawMethod = rawRequest.split(' ');
  const rawBody = rawRequest.split('\r\n');
  
  const parsed = {
    method: rawMethod[0],
    path: rawMethod[1],
    body: rawBody[2]
  };
  // if rawRequest contains body, push into parsed

  return parsed;

};
