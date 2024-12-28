function onTest(key){
  res = authCheck(key);

  if(res == 1){
    res = {
      status: "success",
      message: "Welcome to getStudent API"
    };
  }

  return res;
}