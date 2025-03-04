// accordion
const accordion = document.querySelectorAll(".accordion-corpo");

accordion.forEach((cabecalho)=>{
  cabecalho.addEventListener('click', ()=>{
    const conteudo = cabecalho.querySelector(".accordion-conteudo");
    const arrow = cabecalho.querySelector(".arrow");

    conteudo.classList.toggle('ativo');
    arrow.classList.toggle('ativo');
  })
})

// 

const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
let text = 1

let innoTitle = document.querySelector('#inno-title');
let innoDesc = document.querySelector('#inno-desc');
let innoValores = document.querySelector('.inno-valores');

btnPrev.addEventListener('click', ()=>{
  text += 1
  if(text >= 5){
    text = 1
  }
  
  innoValores.style.marginLeft = '-100px'
  innoValores.style.opacity = '0%'
  
  
  setTimeout(() => {
  switch (text) {
    case 1:
      innoTitle.innerText = "Excelência"
      innoDesc.innerText = "Buscamos o aprimoramento contínuo, evoluindo para o mais alto padrão de qualidade em tudo o que fazemos."
      innoValores.style.marginLeft = '0px'
      innoValores.style.opacity = '100%'
      break;
      
    case 2:
      innoTitle.innerText = "Sinceridade"
      innoDesc.innerText = "Mantemos o diálogo aberto, honesto e transparente, tornando a comunicação clara e eficaz."
      innoValores.style.marginLeft = '0px'
      innoValores.style.opacity = '100%'
      break;
      
    case 3:
      innoTitle.innerText = "Comprometimento"
      innoDesc.innerText = "Trabalhamos com determinação e disciplina, assumindo a responsabilidade pelos resultados"
      innoValores.style.marginLeft = '0px'
      innoValores.style.opacity = '100%'
      break;
      
    case 4:
      innoTitle.innerText = "Lealdade"
      innoDesc.innerText = "Honramos compromissos e cultivamos a confiança em cada relação."
      innoValores.style.marginLeft = '0px'
      innoValores.style.opacity = '100%'
    break;
      }

   
      }, "200");
    })
    


btnNext.addEventListener('click', ()=>{
  text -= 1
  if(text <= 0){
    text = 4
  }

  innoValores.style.margin = '0 100px'
  innoValores.style.opacity = '0%'

  setTimeout(() => {
  switch (text) {
    case 1:
      innoTitle.innerText = "Excelência"
      innoDesc.innerText = "Buscamos o aprimoramento contínuo, evoluindo para o mais alto padrão de qualidade em tudo o que fazemos."
      innoValores.style.margin = '0px'
      innoValores.style.opacity = '100%'
      break;
      
      case 2:
        innoTitle.innerText = "Sinceridade"
        innoDesc.innerText = "Mantemos o diálogo aberto, honesto e transparente, tornando a comunicação clara e eficaz."
        innoValores.style.margin = '0px'
        innoValores.style.opacity = '100%'
        break;
  
        case 3:
          innoTitle.innerText = "Comprometimento"
          innoDesc.innerText = "Trabalhamos com determinação e disciplina, assumindo a responsabilidade pelos resultados"
          innoValores.style.margin = '0px'
          innoValores.style.opacity = '100%'
          break;
          
          case 4:
            innoTitle.innerText = "Lealdade"
            innoDesc.innerText = "Honramos compromissos e cultivamos a confiança em cada relação."
            innoValores.style.margin = '0px'
            innoValores.style.opacity = '100%'
      break;
  }
     }, "200");
})
