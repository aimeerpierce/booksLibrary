$(document).ready(function(){
	$("#login").click(function(){
		$("#library").show();
		$("#shelfArt").show();
		$("#shelfSci").show();
		$("#shelfSpor").show();
		$("#shelfLit").show();
	});

});

//prototype pattern Library object
//contains user of librarian or student
// librarian function of "add book to shelf'
// student function of 'checkout book' and 'return book'
function Library() {
	this.Shelves = [];
	this.student = {};
}

//function Student(){}

//prototype pattern Shelf object
//contains table of books
//Librarian can add book to shelf
//student can checkout/return book
function Shelf() {
	this.Books = [];
	//name
}

//prorotype pattern Book object
//contains borrowedBy username
//contains presence (1) or borrowed (0) 
function Book() {
	//status (present,borrowed)
	//type (ordinary,reference)
};


function loginxx(){
	var username = document.forms["form"]["user"].value;
	var pass = document.forms["form"]["psw"].value;

	if(username == "admin" && pass == "admin"){
		Library.prototype.user = "librarian";
		var librarianLib = new Library();
		createLibrary(librarianLib);
	}
	else if(username.charAt(0) == "U"){
		Library.prototype.user = "student";
		var studentLib = new Library();
		var student = {student:username, count:0};
		studentLib.student = student;
		//studentLib.student.count = 0;
		createLibrary(studentLib);
	}
	else {
		alert("Username and/or password incorrect");
	}
}

function createLibrary(library) {

    var shelfLit = new Shelf();
    shelfLit.name = "shelfLit";
    var shelfSci = new Shelf();
    shelfSci.name = "shelfSci";
    var shelfSpor = new Shelf();
    shelfSpor.name = "shelfSpor"
    var shelfArt = new Shelf();
    shelfArt.name = "shelfArt";
    var shelfRef = new Shelf();
    shelfRef.name = "shelfRef";

    library.Shelves = [shelfArt, shelfSci, shelfSpor, shelfLit, shelfRef];
    var s = library.Shelves.length;
    for(var k = 0; k < s-1; k++){
    	addFirstBooks(library.Shelves[k],k,library);
    	if(library.user == "librarian"){
    		clickToAdd(library.Shelves[k],k);
    	}
    }
    addFirstBooks(library.Shelves[4],4,library);
} 



function addFirstBooks(shelf, mod, library){

var table = document.getElementById("library");
var count = 1;
	for(i = 1; i < 21 ; i++){
		var book = new Book();
		book.type = "ordinary";
		book.status = "present";
		var studentUser = library.student;
		book.student = studentUser;
		book.id = i;

		var length = document.getElementById("library").rows.length;

		if(book.id % 4 == mod){			
			shelf.Books.push(book);

			if(length <= shelf.Books.length){
				var row = table.insertRow(length);
			} else {
				var row = table.rows[count];
				count++;
			}
					
			var cell = row.insertCell(mod);
			var cellId = "B"+i;
			cell.id = cellId;
			cell.innerHTML = "B"+i;	

			if(library.user == "librarian"){
				addStatusEvent(cell,book,shelf);	
			}
			if(library.user == "student"){
				addCheckoutEvent(cell,book,shelf);
			}
		}
	}

	for(j=1;j<6;j++){
		var book = new Book();
		book.type = "reference";
		book.status = "present";
		book.id = j;

		if(shelf.name == "shelfRef"){			
			shelf.Books.push(book);

			if(length <= shelf.Books.length){
				var row = table.insertRow(length);
			} else {
				var row = table.rows[count];
				count++;
			}					
			var cell = row.insertCell(mod);
			cell.innerHTML = "R"+j;	
			addStatusEvent(cell,book,shelf);		
		}
	}
}	


function addNewBook(shelf,mod){
	var table = document.getElementById("library");
	var length = document.getElementById("library").rows.length;
	var book = new Book();
	var lastID = shelf.Books[shelf.Books.length-1].id;
	book.id = lastID+4;
	shelf.Books.push(book);

	if(length <= shelf.Books.length){
		var row = table.insertRow(length);
	} else {
		var row = table.rows[shelf.Books.length];
	}
	if(row.cells.length <= mod){
		for(var i = row.cells.length; i <= mod; i++){
			var cell = row.insertCell(i);
		}
	}
	row.cells[mod].innerHTML = "R"+book.id;
	addStatusEvent(row.cells[mod],book,shelf);	

	shelf.size = shelf.Books.length;
}

function clickToAdd(shelf,mod){
	var name = shelf.name;
	document.getElementById(name).addEventListener("click",function(){
		addNewBook(shelf,mod);
	});
}

function addStatusEvent(cell,book,shelf){
	cell.addEventListener("click",function(){
		if(shelf.name == "shelfRef"){
			displayRefInfo(book.id,shelf.name,book.status);
		} else{
			displayInfo(book.id,shelf.name,book.status);
		}
	});
}

function addCheckoutEvent(cell,book,shelf){
	var user = book.student;
		cell.addEventListener("click",function(){

			if(user.count <= 2){
				if(user.count <=1 && book.status == "present"){
					cell.style.backgroundColor = 'red';
					book.status = "borrowed";
					user.count++;
					displayStuInfo(book.id,book.status,book.student.student);
				} 			
				else if(book.status=="borrowed") {		
					cell.style.backgroundColor = '';
					book.status = "present";
					user.count--;
					displayInfo(book.id,shelf.name,book.status);
				}
			} 
	});
}

function displayInfo(bookId,shelfName,status){
	var output = "Book "+bookId+" is "+status+" on "+shelfName;
	alert(output);
}

function displayRefInfo(bookId,shelfName,status){
	var output = "Reference book "+bookId+" is "+status+" on "+shelfName;
	alert(output);
}

function displayStuInfo(bookId,status,student){
	var output = "Book "+bookId+" is "+status+" by "+student;
	alert(output);
}
