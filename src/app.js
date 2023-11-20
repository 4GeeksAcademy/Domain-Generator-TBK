function domainGenerator() {
  let pron = ["the", "our", "my", "your", "their"];
  let adje = ["great", "big", "dumb", "wet", "strong"];
  let noun = ["jogger", "racoon", "squirrel", "pencil"];
  let doma = [".com", ".tv", ".net", ".es", ".cl"];

  var pronRandom = pron[Math.floor(Math.random() * pron.length)];
  var adjeRandom = adje[Math.floor(Math.random() * adje.length)];
  var nounRandom = noun[Math.floor(Math.random() * noun.length)];
  var domaRandom = doma[Math.floor(Math.random() * doma.length)];

  return `${pronRandom}${adjeRandom}${nounRandom}${domaRandom}`;
}

console.log(domainGenerator());
