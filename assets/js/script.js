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




// Alteração dos valores da empresa de acordo com os cliques no bts de navegação

const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
let text = 1

let innoTitle = document.querySelector('#inno-title');
let innoDesc = document.querySelector('#inno-desc');
let innoValores = document.querySelector('.inno-valores');


// Btn Prev
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
    

// Btn next
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





// Card's de comentário

const swiper = new Swiper('.mySwiper', {
  slidesPerView: 1.2,
  spaceBetween: 20,
  grabCursor: true,
  centeredSlides: true,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});



// Modal

function verificaNome(nome){
  const mostrar = document.querySelector('#textNome');
  
  if(nome.length >= 6){
    mostrar.classList.add('d-none');
  } else{
    mostrar.classList.remove('d-none');
  }
}

function verificaMsg(msg){
  const mostrar = document.querySelector('#textMensagem');

  if(msg.length >= 20){
    mostrar.classList.add('d-none');
  } else{
    mostrar.classList.remove('d-none');
  }
}


const btnEnviar = document.querySelector('#enviar');

btnEnviar.addEventListener('click', (e)=>{
  e.preventDefault()

  let nome = document.querySelector('#nome').value;
  let mensagem = document.querySelector('#mensagem').value;

  verificaNome(nome);
  verificaMsg(mensagem);

  if(nome.length >= 6 && mensagem.length >= 20){
    let boasVindas = `Olá, meu nome é `

    location.assign(`https://api.whatsapp.com/send?phone=5198063381&text=${boasVindas} ${nome}%0A${mensagem}`);

  } 
})

// Compensar pixels da navbar quando fazer scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop - 80;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});