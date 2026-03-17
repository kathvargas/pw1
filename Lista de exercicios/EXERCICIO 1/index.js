const nameInput=document.querySelector('#name')
const ageInput=document.querySelector('#age')
const send=document.querySelector('#send')
const result=document.querySelector('#result')

send.addEventListener("click" , ()=>{
    const name=nameInput.value
    const age=ageInput.value
     if(name==='' || age==='')
     {
        alert("por favor, preencha os campos corretamente")
     }
     else{
        result.textContent=(`Ola ${name}! Voce tem ${age} anos.`)
     nameInput.value='';
    ageInput.value='';

    nameInput.focus();
    }

    

})

