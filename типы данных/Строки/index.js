//1
function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
//2
function checkSpam(str) {
  if (str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX')) return true;
  return false
}
//3
function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str;
}
//4
function extractCurrencyValue(str) {
  return +str.slice(1);
}