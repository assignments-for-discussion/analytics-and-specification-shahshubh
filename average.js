
function average(numbers) {
  var sum = 0;
  var count = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (!isNaN(numbers[i])) {
      sum += numbers[i];
      count++;
    }
  }
  return sum / count;
}

module.exports = {average};
