function enterpressed(){
    var newinput = document.getElementById("newelement").value;
    var list = document.getElementById("list");
    var newlistmember = document.createTextNode(newinput);
    var newLi = document.createElement("li");
    newLi.appendChild(newlistmember);
    list.appendChild(newLi);
}


function deletecalled(e){
    var tag = e.target;
    var li = tag.parentNode;
    li.parentNode.removeChild(li);

}