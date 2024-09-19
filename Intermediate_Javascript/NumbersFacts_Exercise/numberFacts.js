export async function getNumberFact(number) {
  const url = `http://numbersapi.com/${number}`;

  const facts = [];
  for (let i = 0; i < 4; i++) {
    const response = await fetch(url);
    const data = await response.text();
    facts.push(data);
    console.log(data);
    
    }
    console.log(facts);

  return facts;
}
