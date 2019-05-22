function forLoop(array) {
  for (let i = 1; i < 25; i++) {
    var sentence = `I am ${i} strange loop${i === 1 ? '' : 's'}.`;
    array.push(sentence);
  }
  return array;
}