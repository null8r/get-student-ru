function authCheck(key){
  if(!key){
    authCheck_res = {
      status: "error",
      message: "Require API key."
    };
  }
  else if(key === authKey){
    authCheck_res = 1;
  }
  else{
    authCheck_res = {
      status: "failed",
      message: "Invalid API Key."
    };
  }

  return authCheck_res;
}