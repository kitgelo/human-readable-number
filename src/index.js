module.exports = function toReadable (number) {
  const numberIndex = number.toString().length;
  const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const hundred = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const unitsIndex = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tenths = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let result = '';
  if (numberIndex === 1) {
    result = `${units[number]}`
  } else if (numberIndex === 2 && number > 10 && number < 20) {
    result = `${unitsIndex[number % 10]}`
  } else if (numberIndex === 2) {
    result = `${tenths[Math.trunc(number / 10)]} ${hundred[number % 10]}`.trim()
  } else if (numberIndex === 3 && number % 100 > 10 && number % 100 < 20) {
    result = `${hundred[Math.trunc(number / 100)]} hundred ${unitsIndex[number % 10]}`
  } else {result = `${hundred[Math.trunc(number / 100)]} hundred ${tenths[Math.trunc(number % 100 / 10)]} ${hundred[number % 10]}`.trim().replaceAll('  ', ' ')}
  return result
}
