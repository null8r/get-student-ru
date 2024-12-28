const sheetUrl = "your-sheet-url";
const sheetName = "target-sheet-name";

const authKey = PropertiesService.getScriptProperties().getProperty('authKey') || ''

function response(content) {
  const res = ContentService.createTextOutput();
  res.setMimeType(ContentService.MimeType.JSON);
  res.setContent(JSON.stringify(content));
  return res;
}

function doGet(e){
  const params = e.parameter;
  const key = params.key;
  const method = params.method

  let res;

  try{
    switch(method){
      case "test":
        res = onTest(key);
        break;
      case "get":
        res = onGet(key);
        break;
      default:
        res = {
          status: "error",
          message: "Require method."
        }
    }
  } catch(e){
    res = {
      status: "error",
      message: e
    };
  }

  return response(res);
}