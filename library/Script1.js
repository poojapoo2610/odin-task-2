const addBtn = document.querySelector('#addBtn');
addBtn.addEventListener('click', addBookToLibrary);

function popUp(value) {
    if (value == 'open') document.getElementById('popUp').style.display = 'block';
    if (value == 'close') document.getElementById('popUp').style.display = 'none';
}

let myLibrary = [];
let newBook;
function addBookToLibrary() {
    event.preventDefault();
    popUp('close');
    let obj = {
        id: '',
        title: document.getElementById('title').value,
        author: document.getElementById('author').value,
        pages: document.getElementById('pages').value,
        read: document.querySelector(`#read:checked`) ? document.querySelector(`#read:checked`).value : false
    }

    myLibrary.push(obj);
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary)); //saves updated array in local storage
    bookTable.innerHTML += obj;
    alert(bookTable);
    // render();

    // form.reset();
}

function render() {
    const bookTable = document.querySelector('tbody');
    // bookTable.innerHTML = ''
    for (var i = 0; i < myLibrary.length; i++) {
        bookTable.innerHTML +=
            `<tr>
                <td>${i+1}</td>
                <td>${myLibrary[i].title}</td>
                <td>${myLibrary[i].author}</td>
                <td>${myLibrary[i].pages}</td>
                <td>${myLibrary[i].read == 'on' ? 'read': 'not-read'}</td>
             <td> <button  id="status" class="status" onclick="changeStatus('${myLibrary[i].read}')">Read</button>

                <button class="deletebtn" onclick="onDeleteRow(${i})">Delete</button></td>
            </tr>
            `
    }
}

// function changeStatus(i) {

//     if (myLibrary[i].read == 'on') {
//         document.getElementById('status').innerHTML = "Read";
//         document.getElementById('status').style.backgroundColor = "green";
//     } else {
//         document.getElementById('status').innerHTML = "Not Read";
//         document.getElementById('status').style.backgroundColor = "red";
//     }
// }


// function onDeleteRow(key) {
//     myLibrary.splice(key, 1);
//     // localStorage.removeItem(key);
//     localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
//     render();
// }

function restore() {
    if (!localStorage.myLibrary) {
        console.log(localStorage.myLibrary);
        render();
    } else {
        myLibrary = JSON.parse(localStorage.getItem('myLibrary'));
        render();
    }
}
restore();




// function createBook(item) {
//     const library = document.querySelector('#Library-container');
//     const bookDiv = document.createElement('div');
//     const titleDiv = document.createElement('div');
//     const authDiv = document.createElement('div');
//     const pageDiv = document.createElement('div');
//     const removeBtn = document.createElement('button');
//     const readBtn = document.createElement('button');

//     bookDiv.classList.add('book');
//     bookDiv.setAttribute('id', myLibrary.indexOf(item));

//     titleDiv.textContent = item.title;
//     titleDiv.classList.add('title');
//     bookDiv.appendChild(titleDiv);

//     authDiv.textContent = item.author;
//     authDiv.classList.add('author');
//     bookDiv.appendChild(authDiv);

//     pageDiv.textContent = item.pages;
//     pageDiv.classList.add('pages');
//     bookDiv.appendChild(pageDiv);

//     readBtn.classList.add('readBtn')
//     bookDiv.appendChild(readBtn);
//     if (item.read === false) {
//         readBtn.textContent = 'Not Read';
//         readBtn.style.backgroundColor = '#e04f63';
//     } else {
//         readBtn.textContent = 'Read';
//         readBtn.style.backgroundColor = '#63da63'
//     }

//     removeBtn.textContent = 'Remove';
//     removeBtn.setAttribute('id', 'removeBtn');
//     bookDiv.appendChild(removeBtn);

//     // library.appendChild(bookDiv);


//     removeBtn.addEventListener('click', () => {
//         myLibrary.splice(myLibrary.indexOf(item), 1);
//         setData()
//         render();
//     });

//     readBtn.addEventListener('click', () => {
//         item.read = !item.read;
//         setData();
//         render();
//     });
// };
// function setData() {
//     localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
// }