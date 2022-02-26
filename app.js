console.log("welcome to project")
shownotes();
const menuBtn = document.querySelector(".menu-icon span");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const form = document.querySelector("form");
menuBtn.onclick = () => {
  items.classList.add("active");
  menuBtn.classList.add("hide");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
cancelBtn.onclick = () => {
  items.classList.remove("active");
  menuBtn.classList.remove("hide");
  searchBtn.classList.remove("hide");
  cancelBtn.classList.remove("show");
  form.classList.remove("active");
  cancelBtn.style.color = "#ff3d00";
}
searchBtn.onclick = () => {
  form.classList.add("active");
  searchBtn.classList.add("hide");
  cancelBtn.classList.add("show");
}
// IF USER ADDS A NOTE, ADD IT TO THE LOCALSTORAGE 
let addbtn = document.getElementById('addbtn')
addbtn.addEventListener("click",function(e){

  let addtxt = document.getElementById("addtxt");
  let notes = localStorage.getItem("notes");
  if(notes == null){
    notesobj=[];
  }  
  else{
    notesobj = JSON.parse(notes);
  }
  notesobj.push(addtxt.value);
  localStorage.setItem("notes",JSON.stringify(notesobj));
  addtxt.value="";   
// blank isliye kita taki oh ek var likhn to bd gayab ho jay 
  console.log(notesobj)
  shownotes();
})
function shownotes() {
  let notes = localStorage.getItem("notes"); 
  if(notes==null){
    notesobj = [];
  }
  else{
    notesobj=JSON.parse(notes);
  }
  let x=""
  notesobj.forEach(function (element,index) {
  x+=`
  <div class="notecard my-2 mx-2 card nt" >
    <div class="card-body">
        <h5 class="card-title hl"> Note ${index+1}</h5>
        <p class="card-text">${element}</p>
        <button id="${index}" onclick="deletenote(this.id)" class="btn btn bn ">Delete Note</button>
    </div>
</div>
  `;
    
  });
  // this.id means us element ki id chle jaygi jis element pe click kiya hai this lgan nl id assign ho jaygi 

  let noteselm=document.getElementById("notes");
  if(notesobj.length!=0){
    noteselm.innerHTML=x;
  }
  else{
    noteselm.innerHTML=` <h1 style="color:white ">Nothing To Show Click "Add a Note" Section above to add a note </h1>`
  }
}


// function to delete a note
function deletenote(index) {
  console.log('I am deleting');

  let notes=localStorage.getItem("notes");
  if(notes==null){
    notesobj=[];
  }
  else{
    notesobj=JSON.parse(notes);
  }
  
  notesobj.splice(index,1);
  localStorage.setItem("notes",JSON.stringify(notesobj));
  shownotes();
// element,getElementsByTagname
}

let search = document.getElementById('searchtxt');
search.addEventListener("input", function(){

    let inputval = search.value;
    // console.log('Input event fired!', inputVal);
    let notecards = document.getElementsByClassName('notecard');

  Array.from(notecards).forEach(function(element){
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if(cardTxt.includes(inputval)){
        element.style.display = "block";
    }
    else{
        element.style.display = "none";
    }
  })
})









