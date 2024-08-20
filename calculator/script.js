const outputDisplay=document.getElementById('outputDisplay')
const inputDisplay=document.getElementById('inputDisplay')

const btns=document.querySelectorAll('button')


let string='';
btns.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        const alphabet='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let value=e.target.innerText;

        if(value == 'D'){
            console.log("hello")
            string=string.slice(0,-1)
            inputDisplay.value=string
            return;
        }
        if(alphabet.includes(value)){
            return;
        }
        if(value == '='){
            if(isNaN(string.charAt(string.length-1))){
                return
            }
            console.log(eval(string))
            outputDisplay.innerText=eval(string)
            return;
        }
        
        if(value == 'AC'){
            string='';
            inputDisplay.value=''
            outputDisplay.innerText=0
            return;
        }

        if(isNaN(string.charAt(string.length-1)) && isNaN(value)){
            return;
        }
       
        string +=value;
        inputDisplay.value=string
    })
})

