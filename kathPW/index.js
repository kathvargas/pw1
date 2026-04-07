const form=document.querySelector('#form');
const pMessage=document.querySelector('#message')
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    const data=new FormData(form);
    let name=data.get('name');

    let age=parseInt(data.get('age'));

    if(isNaN(age)|| age<0){
        pMessage.textContent='idade invalida';
        return;
    }
    pMessage.textContent=name+"-"+age;

    form.reset();

})