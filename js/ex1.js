/*  Este exercício, proponho a desenvolver um programa para gerenciar uma biblioteca virtual. Adicionando livros, 
    listando-os, emprendando-os para outros usuário e verificando os que estão emprestados.
*/

class Book {  //a class Book foi definindo um constructor, onde será atribuído o título de livro ao seu respectivo autor
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.available = true;  //a propriedade "available" armazenará um valor "true" indicando o livro que está disponível por padrão
  }
}
class Library {   //a class Libary possui constructors para inicializar as propriedades da biblioteca
  constructor() {
    this.books = [];  //as propriedades abaixo foram iniciadas como um array vazio para armazenar os livros na biblioteca
    this.users = [];  
  }
  addBook(book) {
    this.books.push(book);
  }
  listBooks() {
    console.log('Livros disponíveis na biblioteca:');
    this.books.forEach((book, index) => {
      console.log(`${index + 1}. ${book.title} - ${book.author}`);
    });
  }
  lendBook(bookIndex, userName) {
    if (bookIndex >= 0 && bookIndex < this.books.length) {
      const book = this.books[bookIndex];
      if (book.available) {
        book.available = false;
        this.users[userName] = this.users[userName] || [];
        this.users[userName].push(book);
        console.log(`${book.title} emprestado para ${userName}`);
      } else {
        console.log(`${book.title} no momento, não está disponível.`);
      }
    } else {
      console.log('Índice de livro inválido.');
    }
  }
  listBorrowedBooks(userName) {
    const borrowedBooks = this.users[userName];
    if (borrowedBooks && borrowedBooks.length > 0) {
      console.log(`${userName} possui os seguintes livros:`);
      borrowedBooks.forEach((book, index) => {
        console.log(`${index + 1}. ${book.title} - ${book.author}`);
      });
    } else {
      console.log(`${userName} não tem nenhum livro emprestado.`);
    }
  }
}

const library = new Library();
library.addBook(new Book("O Hobbit", "J. R. R. Tolkien"));
library.addBook(new Book("Clean Code", "Robert Cecil Martin"));
library.addBook(new Book("1984", "George Orwell"));

library.listBooks();
library.lendBook(0, "Ana");
library.listBorrowedBooks("Ana");