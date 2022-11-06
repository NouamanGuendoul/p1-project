function multiply(){
    num1 = document.getElementById("1").value;
    num2 = document.getElementById("2").value;
    if(num1 ==0||num2 ==0){
        document.getElementById("H").innerHTML = "fout";  
    }
    else{
        document.getElementById("H").innerHTML = num1 * num2;  
    }
}
function devide(){
    num1 = document.getElementById("1").value;
    num2 = document.getElementById("2").value;
    if(num1 !=0 ||num2 !=0){
        document.getElementById("H").innerHTML = "fout";
    }
    else{
    document.getElementById("H").innerHTML = num1 / num2;
    }
} 
function add(){
    num1 = parseInt (document.getElementById("1").value);
    num2 = parseInt (document.getElementById("2").value);
    if(num1 !=0||num2 !=0){
        document.getElementById("H").innerHTML = "fout";
    }
    else{
    document.getElementById("H").innerHTML = num1 + num2;
    }
}
function minus(){
    num1 = document.getElementById("1").value;
    num2 = document.getElementById("2").value;
    if(num1 !=0||num2 !=0){
        document.getElementById("H").innerHTML = "fout";
    }
    else{
    document.getElementById("H").innerHTML = num1 - num2;
    }
}