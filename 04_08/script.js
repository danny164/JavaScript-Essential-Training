function logScope(){
  var localVar = 2;

  // let localVar=2;
  if(localVar){
  let   localVar= "I'm different!";
  }

    console.log("logScope localVar =", localVar);
}
logScope();
