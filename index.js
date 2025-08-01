
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list");

function addTask(){
    if(inputBox.value === ""){
        alert("Please write something!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        saveData();
    }
    inputBox.value = "";
    saveData();   
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        let listData = document.createElement('li');
        listData.innerHTML = e.target.innerHTML;
        e.target.remove();
        listContainer.appendChild(listData);
        listData.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();