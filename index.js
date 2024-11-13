document.getElementById('addBook').addEventListener('click', function() {
    const bookTitle = document.getElementById('bookTitle').value;
    const bookAuthor = document.getElementById('bookAuthor').value;
    const issueDate = document.getElementById('issueDate').value;

    if (bookTitle && bookAuthor && issueDate) {
        addBookToList(bookTitle, bookAuthor, issueDate);
        clearInputFields();
    } else {
        alert('Please fill in all fields');
    }
});

function addBookToList(title, author, date) {
    const bookList = document.getElementById('bookList');
    const li = document.createElement('li');
    
    // Use backticks for template literals to correctly interpolate values
    li.innerHTML = `${title} by ${author} (Issued on: ${date}) 
    <button class="remove">Remove</button>`;
    
    // Add event listener for the remove button
    li.querySelector('.remove').addEventListener('click', function() {
        bookList.removeChild(li);
    });
    
    // Append the list item to the book list
    bookList.appendChild(li);
}



function clearInputFields() {
    document.getElementById('bookTitle').value = '';
    document.getElementById('bookAuthor').value = '';
    document.getElementById('issueDate').value = '';
}