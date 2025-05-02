export function fetchBooks() {
  return fetch("http://localhost:3000/books").then((response) => {
    return response.json();
  });
}
export function postBook(data) {
  return fetch("http://localhost:3000/books", {
    method: "POST",
    body: JSON.stringify(data),
  }).then((response) => {
    return response.json();
  });
}
