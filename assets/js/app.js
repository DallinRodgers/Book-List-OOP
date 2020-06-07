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

UI.prototype.showAlert = function (message, className) {
  const div = document.createElement("div");
  div.classList.add(className, "alert");

  div.appendChild(document.createTextNode(message));
  const newBook = document.querySelector(".new-book");

  const form = document.querySelector("#book-form");

  newBook.insertBefore(div, form);

  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
};

// Event Listeners
document.querySelector("#submit").addEventListener("click", function (e) {
  // Get values from form
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;

  // Instantiate book
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  if (notEmptyStr(title) && notEmptyStr(author) && notEmptyStr(isbn)) {
    // Add book to list
    ui.addBookToList(book);
    ui.clearFields();
    ui.showAlert("New Book Added", "success");
  } else {
    ui.showAlert("Please fill in all fields", "error");
  }

  //   console.log(book);
  //   console.log(title, author, isbn);
});

function notEmptyStr(str) {
  if (str.trim().length > 0) {
    return true;
  } else {
    return false;
  }
}
