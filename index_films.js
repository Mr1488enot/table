


let books = [{
  name: 'collete kelly',
  phone: '0112',
},
{
  name: 'ruby-rose lennon',
  phone: 23123,
},
{
  name: 'leanne gibbons',
  phone: 123,
},
{
  name: 'harry potter',
  phone: 155783,
},
{
  name: 'aaaaaa',
  phone: 155783,
},
];

const table = document.getElementById('tbd');

for (let i = 0; i < books.length; i++) {
let row = document.createElement('tr');
row.innerHTML = `<td>${i+1}</td><td>${books[i].name}</td><td>${books[i].phone}</td><td>
<div id="buttons">
    <button id="del" onclick="delButton(this)">удалить</button> 
    <button id="edit" onclick="func(this)">Edit</button>
</div>
</td>`;
table.appendChild(row);
}

//сортировка


//
document.getElementById("myBtn").onclick = addButton;

function addButton() {
    let newTr = document.createElement("tr");
  
    let tdid = document.createElement("td");
    let val1 = document.getElementById("id").value;
    tdid.innerHTML = val1;
  
    let tdname = document.createElement("td");
    let val2 = document.getElementById("name").value;
    tdname.innerHTML = val2;
    
    let tdphone = document.createElement("td");
    let val3 = document.getElementById("phone").value;
    tdphone.innerHTML = val3;
  
    let tdedit = document.createElement("td");
    let val4 = document.getElementById("edit").value;
    tdedit.innerHTML = val4;

  
    let btn = document.createElement("td");
    let myBatton = document.getElementById("buttons");
    var newBatton = myBatton.cloneNode(true);
    btn.appendChild(newBatton);



    newTr.appendChild(tdid);
    newTr.appendChild(tdname);
    newTr.appendChild(tdphone);
    newTr.appendChild(tdedit);
    newTr.appendChild(btn);
    let dodac = document.getElementById("tbd");
    
    dodac.appendChild(newTr);
  
  };
   

//удаляем строку по клике на кнопку 



function delButton(r) {
    let i = r.parentNode.parentNode.parentNode.rowIndex;
    document.getElementById("tbd").deleteRow(i-1);
    
}









