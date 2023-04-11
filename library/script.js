function popUp(value) {
  if (value == "open") {
    document.getElementById("popUp").style.display = "block";
  } else {
    document.getElementById("popUp").style.display = "none";
  }
}

const title = document.getElementById('title');
const pages = document.getElementById('pages');
const form = document.getElementById('form');
// console.log(form);
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
  let message = []
  if(title.value === '' || title.value ==null){
    message.push('Name is required')
  }

  if(message.length > 0){
    e.preventDefault()
    errorElement.innerText = message.join(',')
  }
})



// document.getElementById("form").addEventListener("submit", addBookToLibrary);

var myLibrary = [];
let newBook;

function addBookToLibrary() {
  event.preventDefault();
  popUp("close");
  let obj = {
    id: myLibrary.length,
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    pages: document.getElementById("pages").value,
    read: document.querySelector("#read:checked")
      ? document.querySelector("#read:checked").value
      : false,
  };
  myLibrary.push(obj);
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
 
  addNewRow(obj);
}

function addNewRow(obj) {
  var table = document.getElementById("bookTable");
  var row = table.insertRow(myLibrary.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = obj.title;
  cell2.innerHTML = obj.author
  cell3.innerHTML = obj.pages
  cell4.innerHTML = obj.read == "yes" ? `<button id="status_${obj.id}" style="background-color: green" onclick="changeStatus(${obj.id})">Read</button>` 
                                      : `<button id="status_${obj.id}" style="background-color: red" onclick="changeStatus(${obj.id})">Not-read</button>`
  cell5.innerHTML = `<button class="deletebtn" onclick="onDeleteRow(${obj.id})">Delete</button>`
  form.reset();
}

function changeStatus(i) {
  if (myLibrary[i].read == "yes") {
    myLibrary[i].read = "";
    document.getElementById(`status_${i}`).innerHTML = "Not-read";
    document.getElementById(`status_${i}`).style.backgroundColor = "red";
  } else {
    myLibrary[i].read = "yes";
    document.getElementById(`status_${i}`).innerHTML = "Read";
    document.getElementById(`status_${i}`).style.backgroundColor = "green";
  }
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

function onDeleteRow(key) {
  // console.log(key);
  document.getElementById("bookTable").deleteRow(key+1);
  myLibrary.splice(key, 1);
  localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));

}

function restore() {
  if (!localStorage.myLibrary) {
    render();
  } else {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
    render();
  }
}
restore();

function render() {
  const bookTable = document.querySelector("tbody");
  for (var i = 0; i < myLibrary.length; i++) {
    bookTable.innerHTML += `<tr>
                    <td>${myLibrary[i].title}</td>
                    <td>${myLibrary[i].author}</td>
                    <td>${myLibrary[i].pages}</td>
                    <td><button id="status_${i}" style="background-color: ${myLibrary[i].read == 'yes' ? "green" : "red"}" onclick="changeStatus(${i})">${myLibrary[i].read == "yes" ? "Read" : "Not-read"}</button></td>
                    <td><button class="deletebtn" onclick="onDeleteRow(${i})">Delete</button></td>
                </tr>
                `;
  }
}



