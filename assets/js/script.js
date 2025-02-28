const accordion = document.querySelectorAll(".accordion-corpo");

accordion.forEach((cabecalho)=>{
  cabecalho.addEventListener('click', ()=>{
    const conteudo = cabecalho.querySelector(".accordion-conteudo");
    const arrow = cabecalho.querySelector(".arrow");

    conteudo.classList.toggle('ativo');
    arrow.classList.toggle('ativo');
  })
})