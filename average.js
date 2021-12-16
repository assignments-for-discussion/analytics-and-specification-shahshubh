function average(numbers) {
  const PERCENTAGE_THRESHOLD = 0.3;
  const CONSECUTIVE_NAN_THRESHOLD = Math.floor(Math.sqrt(numbers.length));
  
  let nanCount = 0;
  let numbersSum = 0;
  let consecutiveNanCount = 0;
  let maxConsecutiveNanCount = 0;
  
  numbers.forEach((number) => {
    if (isNaN(number)) {
      nanCount++;
      consecutiveNanCount++;
    } else {
      numbersSum += number;
      consecutiveNanCount = 0;
    }
    maxConsecutiveNanCount = Math.max(maxConsecutiveNanCount, consecutiveNanCount);
  });

  // Check 1: If percentage of NaN is greater than 30%, return NaN indicating sensors are faulty.
  if(nanCount / numbers.length > PERCENTAGE_THRESHOLD) return NaN;

  // Check 2: If length of consecutive NaN is greater than THRESHOLD, return NaN indicating sensors are faulty.
  // THRESHOLD = sqrt(length of numbers array).
  if(maxConsecutiveNanCount > CONSECUTIVE_NAN_THRESHOLD) return NaN;

  // else return average of numbers.
  return numbersSum / (numbers.length - nanCount);
}

module.exports = {average};