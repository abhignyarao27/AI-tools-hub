const tools = [

  /* WRITING */

  { name: "ChatGPT", category: "Writing", link: "https://chat.openai.com" },
  { name: "Claude", category: "Writing", link: "https://claude.ai" },
  { name: "Gemini", category: "Writing", link: "https://gemini.google.com" },
  { name: "Grammarly", category: "Writing", link: "https://www.grammarly.com" },
  { name: "QuillBot", category: "Writing", link: "https://quillbot.com" },
  { name: "Writesonic", category: "Writing", link: "https://writesonic.com" },

  /* DESIGN */

  { name: "Canva", category: "Design", link: "https://www.canva.com" },
  { name: "Figma", category: "Design", link: "https://www.figma.com" },
  { name: "Midjourney", category: "Design", link: "https://www.midjourney.com" },
  { name: "Leonardo AI", category: "Design", link: "https://leonardo.ai" },

  /* CODING */

  { name: "GitHub Copilot", category: "Coding", link: "https://github.com/features/copilot" },
  { name: "Cursor", category: "Coding", link: "https://cursor.com" },
  { name: "Replit", category: "Coding", link: "https://replit.com" },
  { name: "Roblox GUI Maker", category: "Coding", link: "https://robloxguimaker.dev/" },

  /* PRODUCTIVITY */

  { name: "Notion AI", category: "Productivity", link: "https://www.notion.so/product/ai" },
  { name: "Todoist", category: "Productivity", link: "https://todoist.com" },
  { name: "ClickUp", category: "Productivity", link: "https://clickup.com" },
  { name: "Otter.ai", category: "Productivity", link: "https://otter.ai" },
  { name: "Fireflies.ai", category: "Productivity", link: "https://fireflies.ai" },

  /* RESEARCH */

  { name: "Perplexity AI", category: "Research", link: "https://www.perplexity.ai" },

  /* VIDEO */

  { name: "Runway", category: "Video", link: "https://runwayml.com" },
  { name: "Synthesia", category: "Video", link: "https://www.synthesia.io" },
  { name: "Pika Labs", category: "Video", link: "https://pika.art" },
  { name: "HeyGen", category: "Video", link: "https://www.heygen.com" },

  /* AUDIO */

  { name: "ElevenLabs", category: "Audio", link: "https://elevenlabs.io" },
  { name: "Descript", category: "Audio", link: "https://www.descript.com" },

  /* TRANSLATION */

  { name: "DeepL", category: "Translation", link: "https://www.deepl.com" },

  /* MARKETING */

  { name: "Jasper", category: "Marketing", link: "https://www.jasper.ai" },
  { name: "Copy.ai", category: "Marketing", link: "https://www.copy.ai" },

  /* PRESENTATION */

  { name: "Tome", category: "Presentation", link: "https://tome.app" },
  { name: "Gamma", category: "Presentation", link: "https://gamma.app" },
  { name: "Beautiful.ai", category: "Presentation", link: "https://www.beautiful.ai" },

  /* IMAGE EDITING */

  { name: "Remove.bg", category: "Image Editing", link: "https://www.remove.bg" },

  /* EDUCATION */

  { name: "Khan Academy", category: "Education", link: "https://www.khanacademy.org" },

  /* SOCIAL MEDIA */

  { name: "Buffer", category: "Social Media", link: "https://buffer.com" },

  /* SEO */

  { name: "Ahrefs", category: "SEO", link: "https://ahrefs.com" },

  /* AUTOMATION */

  { name: "Zapier", category: "Automation", link: "https://zapier.com" },

  /* CHATBOTS */

  { name: "Character AI", category: "Chatbots", link: "https://character.ai" },

  /* RESUME */

  { name: "Resume.io", category: "Resume", link: "https://resume.io" },

  /* CAREER */

  { name: "LinkedIn", category: "Career", link: "https://linkedin.com" },

  /* FINANCE */

  { name: "QuickBooks", category: "Finance", link: "https://quickbooks.intuit.com" },

  /* DATA ANALYSIS */

  { name: "Tableau", category: "Data Analysis", link: "https://www.tableau.com" },

  /* MUSIC */

  { name: "Soundraw", category: "Music", link: "https://soundraw.io" },

  /* VOICE AI */

  { name: "Murf AI", category: "Voice AI", link: "https://murf.ai" },

  /* 3D */

  { name: "Spline", category: "3D", link: "https://spline.design" },

  /* WEBSITE BUILDER */

  { name: "Framer", category: "Website Builder", link: "https://www.framer.com" },

  /* NO CODE */

  { name: "Bubble", category: "No Code", link: "https://bubble.io" },

  /* DEVELOPER TOOLS */

  { name: "Postman", category: "Developer Tools", link: "https://www.postman.com" },

  /* AI AGENTS */

  { name: "AutoGPT", category: "AI Agents", link: "https://github.com/Significant-Gravitas/AutoGPT" },

  /* GAMING */

  { name: "Inworld AI", category: "Gaming", link: "https://inworld.ai" },

  /* HEALTH */

  { name: "Ada Health", category: "Health", link: "https://ada.com" },

  /* LEGAL */

  { name: "DoNotPay", category: "Legal", link: "https://donotpay.com" },

  /* STARTUP */

  { name: "Crunchbase", category: "Startup", link: "https://www.crunchbase.com" },

  /* E-COMMERCE */

  { name: "Shopify", category: "E-commerce", link: "https://www.shopify.com" }

];

const toolsContainer = document.getElementById("tools");

/* OPEN TOOL */
function displayTools(list) {
  toolsContainer.innerHTML = "";

  list.forEach((tool, index) => {
    const card = document.createElement("div");
    card.className = "card";

    // smooth stagger animation
    card.style.animationDelay = `${index * 50}ms`;

    card.innerHTML = `
      <h3>${tool.name}</h3>
      <p>${tool.category}</p>
      <button onclick="openTool('${tool.link}')">Visit Tool</button>
    `;

    toolsContainer.appendChild(card);
  });
}

/* LOAD */
displayTools(tools);

/* SEARCH */
document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  const filtered = tools.filter(tool =>
    tool.name.toLowerCase().includes(value) ||
    tool.category.toLowerCase().includes(value)
  );

  displayTools(filtered);
});

/* CATEGORY */
function filterCategory(category) {
  const filtered = category === "All"
    ? tools
    : tools.filter(tool =>
        tool.category.toLowerCase() === category.toLowerCase()
      );

  displayTools(filtered);
}

/* TITLE TYPE ANIMATION */
window.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("liveTitle");
  const text = "Discover The Best AI Tools 🚀";

  title.innerHTML = "";
  let i = 0;

  function type() {
    if (i < text.length) {
      title.innerHTML += text[i];
      i++;
      setTimeout(type, 80);
    }
  }

  type();
});
