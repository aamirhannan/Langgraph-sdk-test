const chat = document.getElementById("chat");

// 👋 Welcome message
window.onload = () => {
  addAIMessage(`
👋 Welcome!

You can ask:
• Latest geopolitical news  
• Financial insights  
• Gold price  
• Math calculations  

Try clicking suggestions below 👇
`);
};

// Send function
async function send(text = null) {

  const inputBox = document.getElementById("input");
  const message = text || inputBox.value;

  if (!message) return;

  addUserMessage(message);
  inputBox.value = "";

  // Loading message
  const loadingId = addAIMessage("⏳ Thinking...");

  const res = await fetch("/chat", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ message })
  });

  const data = await res.json();

  updateAIMessage(loadingId, data.response);
}

// UI helpers

function addUserMessage(msg) {
  chat.innerHTML += `<p class="user"><b>You:</b> ${msg}</p>`;
  chat.scrollTop = chat.scrollHeight;
}

function addAIMessage(msg) {
  const id = Date.now();
  chat.innerHTML += `<p id="${id}" class="ai"><b>AI:</b> ${msg}</p>`;
  chat.scrollTop = chat.scrollHeight;
  return id;
}

function updateAIMessage(id, msg) {
  document.getElementById(id).innerHTML = `<b>AI:</b> ${msg}`;
}