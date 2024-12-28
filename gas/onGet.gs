function onGet(key){
  res = authCheck(key);

  if(res == 1){
    res = {
      status: "success",
      message: "get method"
    }
  }

  return res;
}