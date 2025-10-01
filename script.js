let string ="";
let buttons = document.querySelectorAll('.button');
let buttons4 = document.querySelectorAll('.button4');
Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '(-)'){ 
            string= eval(-string);
            document.querySelector('input').value = string;
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})
Array.from(buttons4).forEach((button) =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string =eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string =""
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == '(-)'){
            string =eval(-string);
            document.querySelector('input').value = string;
            }
        else{
        console.log(e.target)
        string= string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
    })
})
