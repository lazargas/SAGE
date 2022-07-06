function disp(){
    window.open("checkup.html",'_blank');
    }

function clrchngr(){

    
    
    document.getElementById("changee").classList.remove("bg-primary");
    document.getElementById("changee").classList.add("bg-dark");
    


}
function adder(){
    document.getElementById("changee").classList.remove("bg-dark");
    document.getElementById("changee").classList.add("bg-primary");
    
}
document.getElementById("strtbtn").onclick=disp;


var i = 0;
if(i===0){
document.getElementById("changer").onclick=clrchngr;
i=1;
}
else{
document.getElementById("changer").onclick=adder;
i=0;
}