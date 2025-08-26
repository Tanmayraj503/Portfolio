setTimeout(() => {
    document.querySelector(".landing-page").classList.add("slide-out");
    setTimeout(() => {
        document.querySelector(".main-content").classList.add("visible");
        document.querySelector(".container").classList.add("visible");
        document.querySelector(".landing-page").style.display= "none";
    }, 900);
    
}, 1000);

// floating-icon

function openAI(platform) {
  const query = encodeURIComponent("top achievement of isro");
  let url = "";

  switch (platform) {
    case 'chatgpt':
      url = `https://chat.openai.com/?q=${query}`;
      break;
    case 'google':
      url = `https://gemini.google.com/app?q=${query}`;
      break;
    case 'perplexity':
      url = `https://www.perplexity.ai/search?q=${query}`;
      break;
    case 'you':
      url = `https://you.com/search?q=${query}`;
      break;
    case 'claude':
      url = `https://claude.ai/new?q=${query}`;  // Claude doesn't support preload yet
      break;
    case 'grok':
      url = `https://grok.com/?q=${query}`; // Grok doesn't support preload yet
      break;
    default:
      return;
  }

  window.open(url, '_blank');
}

const actionbtn=document.querySelector(".action-btn");
const actionbtnicon=document.querySelector(".action-btn i");
const dropdownmenu=document.querySelector(".drop-downmenu");

actionbtn.addEventListener("click", ()=>{
    dropdownmenu.classList.toggle("open");
    const isopen = dropdownmenu.classList.contains("open");

    if(isopen){
        actionbtnicon.classList.remove("fa-bars");
        actionbtnicon.classList.add("fa-xmark");
    }
    else{
        actionbtnicon.classList.remove("fa-xmark");
        actionbtnicon.classList.add("fa-bars");
    }
});

const texts = [
    "I am a frontend developer",
    "मैं एक फ्रंट-एंड डेवलपर हूँ",
    "अहं एकः अग्रभागविकासकः अस्मि",
    "Я фронтенд-разработчик",
    "私はフロントエンド開発者です",
    "Je suis un développeur frontend",
    "Ich bin ein Frontend-Entwickler"
]

let currentIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type(){
    const current = texts[currentIndex];
    const element = document.querySelector(".texts");

    if(!isDeleting){
        element.innerHTML = current.substring(0, charIndex);
        charIndex++;
        if(charIndex>current.length){
            isDeleting=true;
            setTimeout(type, 1000);
            return;
        }
    }
    else{
        element.innerHTML=current.substring(0, charIndex);
        charIndex--;
        if(charIndex<0){
            isDeleting=false;
            currentIndex=(currentIndex+ 1) % texts.length;
            charIndex=0;
        }
    }
    const speed = isDeleting ? 50 : 100;
    setTimeout(type, speed);
}
type();

