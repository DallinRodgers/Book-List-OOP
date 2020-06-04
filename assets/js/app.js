// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add Book to List
UI.prototype.addBookToList = function (book) {
  const list = document.querySelector("#book-list");
  // Create tr element
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="favorite">Favorite</a></td>
  <td><a href="#" class="delete">X</a></td>
  `;

  list.appendChild(row);
};

UI.prototype.clearFields = function () {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#isbn").value = "";
};

// Event Listeners
document.querySelector("#submit").addEventListener("click", function (e) {
  console.log("click worked");

  // Get values from form
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Add book to list
  ui.addBookToList(book);

  ui.clearFields();

  //   console.log(book);
  //   console.log(title, author, isbn);
});
