function romanValue(num) {
  if(num == "I") {
    return 1;
  }
  else if(num == "II") {
    return 2;
  }
  else if(num == "III") {
    return 3;
  }
  return num;
}

module.exports = romanValue;
