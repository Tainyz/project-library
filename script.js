const myLibrary = [];

        // Function to add book details to the library
function addBookToLibrary(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const rating = document.getElementById('rating').value;

    const newBook = { name, author, rating };
    myLibrary.push(newBook); // Add the new book to the myLibrary array

    // Update the display of the library
    updateLibraryDisplay();

    // Clear the form
    document.getElementById('bookForm').reset();
}

        // Function to update the displayed library
function updateLibraryDisplay() {
    const libraryList = document.getElementById('libraryList');
    libraryList.innerHTML = ''; // Clear previous list

    myLibrary.forEach((book, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${book.name} by ${book.author} - Rating: ${book.rating}`;

        // Create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => deleteBook(index); // Attach the delete function

        // Append delete button to the list item
        listItem.appendChild(deleteBtn);
        libraryList.appendChild(listItem);
    });
}

        // Function to delete a book from the library
function deleteBook(index) {
    myLibrary.splice(index, 1); // Remove the book at the given index
    updateLibraryDisplay(); // Update the displayed list
}

        // Attach the addBookToLibrary function to the form submit event
document.getElementById('bookForm').addEventListener('submit', addBookToLibrary);