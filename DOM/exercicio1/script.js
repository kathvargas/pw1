const formStudentes=document.querySelector('#form-students');
const aprovado=document.querySelector('#approved');
const reprovado=document.querySelector('#failed');

formStudentes.addEventListener('submit',(event)=>{
    event.preventDefault();
    
    const data=new FormData(formStudentes);
    let name=data.get('name');
    let nota=data.get('grade');
    let falta=data.get('absences');

    const liStudent=document.createElement("li")
    liStudent.classList.add('student');

    const spanName=document.createElement("span")
     spanName.textContent=name;
     const spanNotaFalta=document.createElement("span")
     spanNotaFalta.textContent=nota+"|"+falta;
     
     liStudent.appendChild(spanName);
     liStudent.appendChild(spanNotaFalta);

     if(nota>=6 && falta<=5){
        aprovado.appendChild(liStudent)
     }
     else{
        reprovado.appendChild(liStudent)
     }
     formStudentes.reset();

})