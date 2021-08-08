function copy(copyId){
    let inputElement = document.createElement("input");
    inputElement.type = "textfield";
    let copyText = document.getElementById(copyId).innerHTML;
    inputElement.value = copyText;
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    document.body.removeChild(inputElement);
    
    document.getElementById("alert_box").style.display = "block";
    setTimeout(function(){
        document.getElementById("alert_box").style.display = "none";
    }, 1000);
} 