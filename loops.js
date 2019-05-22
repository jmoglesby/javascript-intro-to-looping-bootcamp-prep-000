function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    var sentence = `I am ${i} strange loop${i === 1 ? '' : 's'}.`;
    array.push(sentence);
  }
  return array;
}

function whileLoop(n) {
  while (n > 0) {
    setTimeout(console.log(n--),1000);
  }
}