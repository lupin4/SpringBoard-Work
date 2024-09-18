export function getNumberFact(number) {
    return fetch(`http://numbersapi.com/${number}`)
        .then(response => response.text());
}

