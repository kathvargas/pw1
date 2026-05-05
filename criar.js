const form=document.querySelector('#hero-form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();//cancela o comportamento padrao
    const data= new FormData(form);
    const name=data.get('name');
    const type=data.get('type');
    const level=parseInt(data.get('level'));

    const spanName=document.querySelector('#span-name');
    spanName.textContent=name;

    const spanLevel=document.querySelector('#span-level');
    spanLevel.textContent=level;
    
    const heroImg=document.querySelector('#hero-image')
    heroImg.src="assets/images/"+type+".jpg";

    form.reset();

})
const buttonLimpar=document.querySelector('#button-clear')
buttonLimpar.addEventListener('click',(event)=>{
    form.reset();

    const spanName=document.querySelector('#span-name');
    spanName.textContent='heroi';

    const spanLevel=document.querySelector('#span-level');
    spanLevel.textContent='0';
    
    const heroImg=document.querySelector('#hero-image')
    heroImg.src="assets/images/blank.jpg";
})