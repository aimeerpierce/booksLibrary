README.txt

Lab 4 - Aimee Pierce and Lige Liu
Participation 50/50

booksLibrary2.html
  Contains inputs for a username and password, as well as a table and buttons that show after logging in. 

booksLibrary2.js
lines 1-10: 
  jquery that shows table and buttons

lines 12-39:
  Library, Shelf, and Book initialized

lines 41-61:
  loginxx()
  Creates a library for a librarian or student depending on the login information
  If login information yields a student, a student object is created in the library.

lines 63-85:
  createLibrary(library)
  Called from loginxx() to create a library with the 5 shelves

lines 89-147:
  addFirstBooks(shelf, mod, library)
  Called from createLibrary() to add the first 20 ordinary books and 5 reference books

lines 150-179:
  addNewBook()
  If the library.user is a librarian, addNewBook() is called to create a new book in the library at desired shelf
  Adds an eventListener to each button in booksLibrary2.html to create a book

lines 181-189:
  addStatusEvent()
  adds an event listener to display the status of the book for an admin user

lines 191-210:
  addCheckoutEvent()
  adds event listener to change book to checked out/checked in status when user is a student and clicks on a book in the library

lines 212-222:
  displayInfo()
  Displays information when book in librar is clicked on

