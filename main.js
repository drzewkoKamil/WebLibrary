class Book{
    constructor(title, author, genre, read){
        this._title = title;
        this._author = author;
        this._genre = genre;
        this._read = read;
    }

    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get genre() {
        return this._genre;
    }
    get read() {
        return this._read;
    }

    set title(value) {
        this._title = value;
    }
    set author(value) {
        this._author = value;
    }
    set genre(value) {
        this._genre = value;
    }
    set read(value) {
        this._read = value;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}


function clearTable() {
    let table = document.getElementById("booksTable");
    table.innerHTML = ""
}


function displayBooks() {
    let table = document.getElementById("booksTable");
    myLibrary.forEach(function (book, index) {
        let row = table.insertRow(index);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5)
        cell1.innerText = book.title;
        cell2.innerText = book.author;
        cell3.innerText = book.genre;
        cell4.innerText = book.read;
        cell5.append(createChangeReadStatusButton(index))
        let btn = createRemoveButton(index);
        cell6.append(btn)
    });
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5)
    cell1.innerText = "Title";
    cell2.innerText = "Author";
    cell3.innerText = "Genre";
    cell4.innerText = "Reading status";
}


function createChangeReadStatusButton(index) {
    let btn = document.createElement("button");
    btn.type = "button";
    btn.className = "changeStatusButton";
    btn.id = index;
    btn.innerText = "CHANGE STATUS";
    btn.onclick = function () {
        console.log("change status function")
        console.log(index);
        console.log(myLibrary[index]);
        console.log(myLibrary[index].read)
        if (myLibrary[index].read === "read") {
            myLibrary[index].read = "not read";
            console.log(myLibrary[index].read)
        } else {
            myLibrary[index].read = "read";
        }
        clearTable()
        displayBooks()
    };
    return btn
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

window.onclick = function (event) {
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
    setTimeout(function () {
        snack.className = snack.className.replace("show", "");
    }, 5000);
}


function showRemovedSnackbar(title, author, genre, read) {
    let snack = document.getElementById("snackbar");
    snack.innerText = `Removed book titled "${title}" by ${author}, in ${genre}, ${read}`
    snack.className = "show";
    setTimeout(function () {
        snack.className = snack.className.replace("show", "");
    }, 5000);
}


let myLibrary = []

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", "Fantasy", "not" +
    " read")
const harryPotter = new Book("Harry Potter", "J.K. Rowling", "Fantasy", "read")

addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);

displayBooks();
