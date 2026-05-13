const tools = [

  {
    name: "ChatGPT",
    category: "Writing",
    link: "https://chat.openai.com"
  },

  {
    name: "Claude",
    category: "Writing",
    link: "https://claude.ai"
  },

  {
    name: "Canva AI",
    category: "Design",
    link: "https://www.canva.com"
  },

  {
    name: "Midjourney",
    category: "Design",
    link: "https://www.midjourney.com"
  },

  {
    name: "GitHub Copilot",
    category: "Coding",
    link: "https://github.com/features/copilot"
  },

  {
    name: "Cursor",
    category: "Coding",
    link: "https://cursor.com"
  },

  {
    name: "Notion AI",
    category: "Productivity",
    link: "https://www.notion.so/product/ai"
  },

  {
    name: "Perplexity",
    category: "Research",
    link: "https://www.perplexity.ai"
  }

];
const toolsContainer = document.getElementById("tools");

function displayTools(list) {
  toolsContainer.innerHTML = "";

  list.forEach(tool => {
    toolsContainer.innerHTML += `
  <div class="card">
    <h3>${tool.name}</h3>
    <p>${tool.category}</p>

    <a href="${tool.link}" target="_blank">
      <button>Visit Tool</button>
    </a>

  </div>
`;
  });
}

displayTools(tools);

document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = tools.filter(tool =>
    tool.name.toLowerCase().includes(value) ||
    tool.category.toLowerCase().includes(value)
  );

  displayTools(filtered);
});
function filterCategory(category) {

  if (category === "All") {
    displayTools(tools);
    return;
  }

  const filtered = tools.filter(tool =>
    tool.category === category
  );

  displayTools(filtered);
}