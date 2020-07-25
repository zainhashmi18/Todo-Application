var list = document.getElementById('list');
// Function to Add list
function addLi() {
    var todoAdd = document.getElementById('todoadd');
    if(todoAdd.value=='' || todoAdd.value==' '){
        alert("Please input something")
    }
    else{
        var li = document.createElement('li');
        li.setAttribute("class","liclass animate__animated animate__flipInX");
        li.setAttribute("id","liid");
        var newele=document.createElement('p');
        newele.setAttribute("class","pera animate__animated animate__rubberBand");
        var textLi = document.createTextNode(todoAdd.value);
        newele.appendChild(textLi);
        li.appendChild(newele)
        list.appendChild(li);
        todoadd.value = "";
    
    // To edit Items
    var editcreate=document.createElement('i');
        editcreate.setAttribute("class","addli far fa-edit ");
        editcreate.setAttribute("onClick","editfunc(this)");
        li.appendChild(editcreate);

    //  To delete Item
        var delcreate=document.createElement('i');
        delcreate.setAttribute("class","trashli far fa-trash-alt");
        delcreate.setAttribute("onClick","del1by1(this)");
        li.appendChild(delcreate);
        
    }
}
// Function to Delete 
function del1by1(e) {
    setTimeout(function(){e.parentNode.remove();}, 300);
        document.getElementById("liid").style.animation="slideOutLeft";
        document.getElementById("liid").style.animationDuration="0.5s";
}
// Function to Delete All
function delAll() {
    setTimeout(function(){list.innerHTML="";}, 300);
        document.getElementById('list').style.animation="slideOutRight";
        document.getElementById('list').style.animationDuration="0.5s";
}
// Function to Edit
function editfunc(e) {
    var editval=prompt("Enter New Value: ");
    e.parentNode.firstChild.firstChild.nodeValue=editval;
}