function newElement(){
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("myUl").appendChild(li);
    document.getElementById("myInput").value=""; 
}
    // adding script for pressing the enter key inside the input field
    var input = document.getElementById("myInput");
    input.addEventListener('keyup', function onEvent(e){
        if(e.keyCode === 13){
            event.preventDefault();
            document.getElementById("myBtn").click();
        }
    });