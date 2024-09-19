export async function getNumberFact(number) {
  // define the target url
  const url = `http://numbersapi.com/${number}`;
  // create an empty array to store the facts
  const facts = [];
  // loop 4 times
  for (let i = 0; i < 4; i++) {
    //   call the fetch method on the URL and wait for the response
    const response = await fetch(url);
    //   convert the response to text
    const data = await response.text();
    facts.push(data);
    // console.log(data);
  }
  console.log(facts);

  return facts;
}
