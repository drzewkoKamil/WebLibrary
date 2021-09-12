function Book(title, author, pages, read) {
    this.title = title
    this.author = author;
    this.pages = pages;
    this.read = read;
}


Book.prototype.info = function () {
    return(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read} yet`)
}


function addBookToLibrary(book) {
    myLibrary.push(book)
}


let myLibrary = []


function displayBooks() {
    myLibrary.forEach(function (book) {
        let table = document.getElementById("booksTable");
        let row = table.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        cell1.innerText = book.title;
        cell2.innerText = book.author;
        cell3.innerText = book.pages;
        cell4.innerText = book.read;
        let btn = createRemoveButton();
        cell5.append(btn)
    });
}


function createRemoveButton() {
    let btn = document.createElement("button");
    btn.type = 'button';
    btn.id = 'removeButton';
    btn.innerText = "REMOVE";
    btn.onclick = function () {
        console.log("remove")
    };
    return btn;
}


function createBook() {

}


const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, "not read")
const harryPotter = new Book("Harry Potter", "J.K. Rowling", 311, "read")

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);

displayBooks();

let modal = document.getElementById("myModal");
let btn = document.getElementById("createBookButton");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.classList.toggle("modalContainer")
};
span.onclick = function () {
    modal.classList.toggle("modalContainer")
};
window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.toggle("modalContainer")
    }
}