const STRANGE_STRING = "hello world"
function findSize () {
  const upDownLen = STRANGE_STRING.toUpperCase().toLowerCase().length;
  const originalLen = STRANGE_STRING.length;
  
  if (upDownLen > originalLen) {
    return upDownLen;
  }
  else {
    return originalLen;
  }
}

console.log(findSize());