module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const object = bracketsConfig.reduce((acc,item) => {
    acc[item[1]] = item[0]
    return acc;
  },{});
  for (let i=0; i<str.length; i++) {
    let currentElement = str[i];
    let topElement = stack[stack.length-1];
    if(Object.values(object).includes(currentElement) && (topElement === currentElement) && (object[currentElement] === currentElement)){
      stack.pop(currentElement);
    }
    else if(Object.values(object).includes(currentElement)){
      stack.push(currentElement);
    }
    else{
      if(stack.length === 0) {
        return false;
      }
    
    if(object[currentElement] === topElement){
      
      stack.pop();
    }
    else {
      return false;
    }
    }  
  }
 return stack.length === 0;
}
