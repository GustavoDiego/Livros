
class Book {
    constructor(id, title, description, author) {
        this.id = id; 
        this.title = title;
        this.description = description;
        this.author = author;
    }
}

class Library {
    constructor() {
        this.books = [];
        this.nextId = 1; 
    }

    addBook(bookInfo) {
        const id = this.nextId++; 
        const newBook = new Book(id, bookInfo.title, bookInfo.description, bookInfo.author);
        this.books.push(newBook);
        return newBook;
    }

    getBooks() {
        return this.books;
    }

    removeBookById(id) {
        this.books = this.books.filter(book => book.id !== id);
    }

    getBookById(id) {
        return this.books.find(book => book.id === id);
    }

    updateBookById(id, info) {
        const book = this.getBookById(id);
        if (book) {
            if (info.title) book.title = info.title;
            if (info.description) book.description = info.description;
            if (info.author) book.author = info.author;
        }
        return book;
    }
}

const library = new Library();
const newBook = library.addBook({ title: 'Book 1', description: 'Description 1', author: 'Author 1' });
console.log(library.getBooks());
