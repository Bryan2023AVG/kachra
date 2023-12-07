
function change(){
    document.getElementById("headline").innerText ="Bryan";
    document.getElementById("headline").style.color = "red";
    //document.write =("<h1> Bryan Page <h1/>");
}


function calculate(){
   if(confirm("Would you like to confirm")){
    let x = parseInt(prompt("Enter an number"));
    let val=  parseInt(document.getElementById("numone").value) + parseInt(document.getElementById("numtwo").value ) + x;
    alert(val);
   }
   else{
    alert("Thank you for using our website");
   }
   
}

function colourChange(){
    let item = document.getElementsByClassName("myhtwo");

    for(let i=0;i< item.length;i++){
        item[i].style.color="red";
    }
}

function changeBG(){
    document.getElementsByTagName("h1")[0].style.backgroundColor = "red";
    document.getElementsByTagName("h1")[0].style.color = "white";
    document.getElementsByTagName("h1")[0].innerHTML= "<h1> Hello Earth</h1>";
    document.getElementsByTagName("h1")[0].setAttribute("style","width:50%;background-color:red");
}


function createH(){
    let parent = document.getElementById("parent");

    let h1 = document.createElement("h1");

    let text = document.createTextNode("New H1 Element");
    h1.appendChild(text);

    parent.appendChild(h1);



    let body = document.getElementById("myBody");
    body.removeChild(document.getElementById("myFirstTwo"));
}