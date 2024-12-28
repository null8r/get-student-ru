function getStudent(){
  let res_studentInfo = [];

  const sheet = SpreadsheetApp.openByUrl(sheetUrl).getSheetByName(sheetName);

  const lastRow = sheet.getLastRow()-1;
  const values = sheet.getRange(2, 2, lastRow, 3).getValues();

  for(let i = 0; i < values.length; i++){
    res_studentInfo.push({
      mail: values[i][0],
      studentId: values[i][1],
      skill: values[i][2]
    });
  }
  console.log(res_studentInfo);

  return res_studentInfo;
}

function onGet(key){
  res = authCheck(key);

  if(res == 1){
    res = getStudent();
  }

  return res;
}
