
/*/function printmovi() {
     let table = document.getElementsById ("table")
     for (i=0; i< movies.length; i ++) {
         tr = document.createElement("tr")
         table.appendChilde(tr)

         td = document.createElement("td")
         tr.appendChilde(td)
         td.innerHTML = movies[i].name

     }
 
}

printmovi()

movies.push({name:'qwqew'})

function add(){
    let name = document.forms[0].name_film.value
    movies.push(
        {name: qwerwrer}
    )
}

add()*/



document.getElementById("myBtn").onclick = addButton;

function addButton() {
    let newTr = document.createElement("tr");
  
    let tdNume = document.createElement("td");
    let val1 = document.getElementById("fname").value;
    tdNume.innerHTML = val1;
  
    let tdNumber = document.createElement("td");
    let val2 = document.getElementById("fyear").value;
    tdNumber.innerHTML = val2;
    
    let tdGenre = document.createElement("td");
    let val3 = document.getElementById("fgenre").value;
    tdGenre.innerHTML = val3;
  
    let tdCountry = document.createElement("td");
    let val4 = document.getElementById("fcountry").value;
    tdCountry.innerHTML = val4;

    /*let tdButton = document.createElement("td");
    document.getElementById("del").appendChild(tdButton);
    tdButton.innerHTML=tdButton;*/
    let btn = document.createElement("td");
    let myBatton = document.getElementById("buttons");
    var newBatton = myBatton.cloneNode(true);
    btn.appendChild(newBatton);

    /*let btnEdit = document.createElement("td");
    let myBattonEdit = document.getElementById("edit");
    var newBattonEdit = myBattonEdit.cloneNode(true);
    btn.appendChild(newBattonEdit);*/



    newTr.appendChild(tdNume);
    newTr.appendChild(tdNumber);
    newTr.appendChild(tdGenre);
    newTr.appendChild(tdCountry);
    //newTr.appendChild(btn, btnEdit);
    newTr.appendChild(btn);
    let dodac = document.getElementById("tbd");
    
    dodac.appendChild(newTr);
  
  };
   

//удаляем строку по клике на кнопку 



/*function dell () {
  let dell  = document.getElementById("tbd");
  for (let i = tbd.rows.lenght-1; i>0; i--) {
    tbd.deleteRow(i);
  }
}*/


function delButton(r) {
    let dell  = document.getElementById("tbd");
  for (let i = dell.rows.lenght-1; i>0; i--) {
    tbd.deleteRow(i);
  }
    let i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tbd").deleteRow(i);
    
}

/*function delButton(dell) {
    var row = dell.parentNode.parentNode;
    
    row.parentNode.removeChild(row);
  

  /*function delButton(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tbd").deleteRow(i);
}*/