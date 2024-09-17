let inputval=document.getElementById('input');
let buttons=document.querySelectorAll('button');

let string="";
let arr=Array.from(buttons);
arr.forEach(button=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            inputval.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string=" ";
            inputval.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            inputval.value=string;        
        }
        else{
            string+=e.target.innerHTML;
            inputval.value=string;
        }
    })
})