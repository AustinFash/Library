const myLibrary = [];

class Book{
  constructor(title, author, pages, read) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  displayBook(){
    return `Title: ${this.title} <br>Author: ${this.author} <br># of Pages: ${this.pages} <br>Read Before: ${this.read} <br> ID: ${this.id} `;
  };

  changeRead(){
    this.read = !this.read;
  }

}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  return book.id
}


const formElement= document.querySelector('.form form')
const content = document.querySelector('.content')

formElement.addEventListener('submit', event => {
  event.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = parseInt(document.querySelector('#pages').value, 10);
  const read = document.querySelector('select[name="read"]').value === "true";
  addBookToLibrary(title, author, pages, read);


  let card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = myLibrary[myLibrary.length-1].displayBook();
  content.appendChild(card);
})