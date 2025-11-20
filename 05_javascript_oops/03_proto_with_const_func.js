function Book(name, author){
    if(!new.target){
        throw new Error("Please include the new keyword");
    }
    this.name = name;
    this.author = author;
}
Book.prototype.description = function(){
    return `The book ${this.name} is written by ${this.author} is awesome. You must read it.`
}
let book1 = new Book("Atomic Habits", "James Clear");
console.log(book1.description());
let book2 = new Book("Emotional Intelligence", "Daniel Goleman");
console.log(book2.description());
let book3 = Book("abc","xyz");

