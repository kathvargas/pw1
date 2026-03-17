const ul=document.querySelector('#pizzas');

    ul.style.list-style: none;
    ul.style.line-height: 30px;
    ul.style.font-size: 20px;
    ul.style.cursor: pointer;
    ul.style.user-select: none;

ul.addEventListener('dblclick',(event)=>{
    if(event.target.tagName==='LI'){
        const sabor=event.target.textContent;

        if(event.target.style.color==='green'){
            event.target.style.color='';

            alert('voce removeu o sabor${sabor}')
        }else{
            event.target.style.color='green'
            alert('voce selecionou o sabor ${sabor}')
        }
    }

});