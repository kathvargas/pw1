document.addEventListener('contextmenu',(event)=>{
    event.preventDefault();
    alert('O clique com o botão direito do mouse foi desativado.')
})
document.addEventListener('copy',(event)=>{
    event.preventDefault();
    const message='Este conteúdo não pode ser copiado.';
    event.clipboardData.setData("text/plain", message);
})