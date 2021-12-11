
function average(numbers) {
  const filteredNumbers = numbers.filter((number) => !isNaN(number));
  return filteredNumbers.reduce((p, c)=> p + c, 0) / filteredNumbers.length;
}

module.exports = {average};