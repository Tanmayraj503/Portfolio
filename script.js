setTimeout(() => {
    document.querySelector(".landing-page").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".main-content").classList.add("visible");
        document.querySelector(".container").classList.add("visible");
        document.querySelector(".landing-page").style.display= "none";
    }, 950);
    
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

