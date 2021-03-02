function detector(){
    const x = navigator.onLine;


    if(x == true){
        document.getElementById("online").style.display = "block";
        document.getElementById("demo").innerHTML = "Connected";
    }else if(x == false){
        document.getElementById("offline").style.display = "block";
        document.getElementById("demo").innerHTML = "notConnected";
    }
}