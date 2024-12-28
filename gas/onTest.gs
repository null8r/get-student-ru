function onTest(key){
  res = authCheck(key);

  if(res == 1){
    res = {
      status: "success",
      message: "Correct API key."
    };
  }

  return res;
}