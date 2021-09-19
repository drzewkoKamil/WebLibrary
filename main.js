function Book(title, author, genre, read) {
    this.title = title
    this.author = author;
    this.genre = genre;
    this.read = read;
}


function addBookToLibrary(book) {
    myLibrary.push(book)
}


function clearTable() {
    let table = document.getElementById("booksTable");
    table.innerHTML = ""
}


function displayBooks() {
    myLibrary.forEach(function (book, index) {
        let table = document.getElementById("booksTable");
        let row = table.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        cell1.innerText = book.title;
        cell2.innerText = book.author;
        cell3.innerText = book.genre;
        cell4.innerText = book.read;
        let btn = createRemoveButton(index);
        cell5.append(btn)
    });
}


function createRemoveButton(index) {
    let btn = document.createElement("button");
    btn.type = 'button';
    btn.className = 'removeButton';
    btn.id = index;
    btn.innerText = "REMOVE";
    btn.onclick = function () {
        showRemovedSnackbar(myLibrary[index].title, myLibrary[index].author, myLibrary[index].genre, myLibrary[index].read)
        myLibrary[index] = undefined;
        myLibrary.splice(index, 1);
        clearTable()
        displayBooks();
    };
    return btn;
}


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


let addBtn = document.getElementById("addBookButton")

addBtn.onclick = function () {
    console.log("Button clicked")
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    let read = document.getElementById("readStatus").checked ? "read" : "not" +
        " read";
    clearForm()
    showAddedSnackbar(title, author, genre, read)
    let book = new Book(title, author, genre, read);
    addBookToLibrary(book);
    clearTable()
    displayBooks()
};


function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("genre").value = "";
    document.getElementById("readStatus").checked = false;
}


function showAddedSnackbar(title, author, genre, read) {
    let snack = document.getElementById("snackbar");
    snack.innerText = `Added book titled "${title}" by ${author}, in ${genre}, ${read}`
    snack.className = "show";
    setTimeout(function () {snack.className = snack.className.replace("show", "");}, 5000);
}


function showRemovedSnackbar(title, author, genre, read) {
    let snack = document.getElementById("snackbar");
    snack.innerText = `Removed book titled "${title}" by ${author}, in ${genre}, ${read}`
    snack.className = "show";
    setTimeout(function () {snack.className = snack.className.replace("show", "");}, 5000);
}


// let removeButtons = document.querySelectorAll('.removeButton')
// removeButtons.forEach(function (btn) {
//     btn.onclick = function () {
//
//     };
// })


let myLibrary = []
clearTable()

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "Fantasy", "not" +
    " read")
const harryPotter = new Book("Harry Potter", "J.K. Rowling", "Fantasy", "read")

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);

displayBooks();
