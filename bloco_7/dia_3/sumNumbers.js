const sumNumbers = (array) => {
    let output = 0;
    for (const item in array) {
      output += array[item];
    }
    return output;
  };

module.exports = sumNumbers;
