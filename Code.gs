function onOpen(e) {
  var menu = SpreadsheetApp.getUi().createAddonMenu();
  menu.addItem('Setup sheet', 'setupSheet');
  menu.addToUi();
}

function setupSheet() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var headerRow = sheet.getRange('1:1');
  headerRow.setBackground('#222222');
  headerRow.setFontColor('#eeeeee')
  headerRow.setFontWeight("bold");
  headerRow.setHorizontalAlignment('center');
  sheet.getRange('A1').setValue('#');
  sheet.getRange('A2:A6').setFormula('=ROW()-1');
  sheet.getRange('A2:A6').setHorizontalAlignment('center');
  sheet.setColumnWidth(1, 20)
  sheet.getRange('B1').setValue('INPUT1');
  sheet.getRange('C1').setValue('INPUT2');
  sheet.getRange('B2:C6').setBackground('orange');
  sheet.getRange('D1').setValue('OUTPUT');
  sheet.getRange('D2:D6').setFormulaR1C1("=IF(ISBLANK(R[0]C[-2]), \"\", SUM(R[0]C[-2]:R[0]C[-1]))");
}