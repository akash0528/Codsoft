//for display button

function display(val){
document.getElementById('calc').value+=val
return val
}

//for solve button
function solve(){
    let x=document.getElementById('calc').value
    let y=eval(x);
    document.getElementById('calc').value=y
return y
}

//for clear button
function AC(){
    document.getElementById('calc').value=''
}

//for back button
function DEL(){
    if(value.length>0)
        document.getElementById('calc').value=value.toString.slice(0,-1 );
}
function container(){
    try{
document.getElementById('calc').value
    }catch{
     document.getElementById('calc').value="error";   
    }

}