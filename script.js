/*************************************************
 * SCRIPT.JS — macOS WINDOW SYSTEM (STACKED)
 *************************************************/

document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener("click", (e) => {
  const item = e.target.closest(".settings-sidebar li");
  if (!item) return;

  const sectionId = item.dataset.section;

  // Désactiver TOUS les items
  document.querySelectorAll(".settings-sidebar li")
    .forEach(li => li.classList.remove("active"));

  // Désactiver TOUTES les sections
  document.querySelectorAll(".settings-section")
    .forEach(section => section.classList.remove("active"));

  // Activer UNIQUEMENT ce qui est cliqué
  item.classList.add("active");
  document.getElementById(sectionId).classList.add("active");

  
});
// Feature cards on Home -> open main window with custom content
document.addEventListener("click", (e) => {
  const card = e.target.closest(".mini-card");
  if (!card) return;

  const id = card.dataset.project;
  const title = card.querySelector(".mini-title")?.textContent?.trim() || "Project";
  const label = card.querySelector(".mini-label")?.textContent?.trim() || "";

  const contentMap = {
  "Fruits": `
  <main class="project-page">
    <p class="project-kicker">PYTHON · MACHINE LEARNING</p>

    <h2 class="project-title">Avocado and mango classification</h2>

    <p class="project-lead">
      This project focuses on binary image classification using supervised deep learning techniques in Python. </p><br>
<p class="project-lead">For this implementation, my teammate and I collected a dataset of avocado and mango images from online sources. The goal was to train a neural network capable of distinguishing between these two visually similar fruit categories, despite variations in lighting conditions, angles, background noise, and color similarities (as both fruits can appear green or yellow depending on ripeness).</p><br>
<p class="project-lead">The dataset was manually organized into structured training and testing folders. We applied preprocessing steps such as image resizing and normalization before feeding the data into a convolutional neural network (CNN). The model was trained to learn hierarchical visual features, including texture patterns, shape contours, and color distributions.</p><br>
<p class="project-lead">Throughout the process, we explored key machine learning concepts such as supervised learning, train/test splitting, model evaluation, and overfitting. The project provided hands-on experience in building and training image classification systems while understanding how neural networks extract meaningful representations from raw pixel data.</p><br>

   <p class="project-foot">
      <strong>Gitlab repository:</strong> coming soon.
    </p>
  </main>
`,



  "Ocular": `
  <main class="project-page">
    <p class="project-kicker">PYTHON · MACHINE LEARNING</p>

    <h2 class="project-title">Ocular Disease Detection</h2>

    <p class="project-lead">
      This project explores multi-class classification of ocular diseases using the ODIR5K medical dataset. The objective was to predict eye conditions based on structured clinical and demographic features rather than raw images.</p><br>
<p class="project-lead">After downloading and preparing the dataset, we conducted exploratory data analysis to understand feature distributions and class imbalance. The data was cleaned, encoded, and split into training and testing sets before applying supervised machine learning models, including Support Vector Machines (SVM).
</p><br>
<p class="project-lead">Model performance was evaluated using accuracy and classification metrics, allowing us to compare approaches and assess their effectiveness in handling multi-class medical prediction tasks.</p><br>

    <p class="project-foot">
      <strong>Gitlab repository:</strong> coming soon.
    </p>
  </main>
`,




  "IHM": `
  <main class="project-page">
    <p class="project-kicker">UI/UX DESIGN · INTERACTION DESIGN</p>

    <h2 class="project-title">Bloomz: Mobile Interface Prototype</h2>

    <p class="project-lead">
    My teamates and I developped a user interface design project created as part of an HCI (Human Computer Interaction) course. The objective was not to develop a fully functional mobile application, but to design and prototype an intuitive mobile interface responding to real user needs.</p><br>
<p class="project-lead">The project began with ideation sessions where we identified common challenges faced by gardeners, such as forgetting daily tasks, losing track of plant locations, or lacking guidance. Based on these insights, we designed a mobile-first interface concept.</p><br>
<p class="project-lead">The prototype includes:</p><br>
<p class="project-lead">• A daily task dashboard with checkable actions and notifications</p>
<p class="project-lead">• A monthly calendar view to visualize scheduled tasks</p>
<p class="project-lead">• A plant database system where users can add plant details and photos</p>
<p class="project-lead">• A virtual garden layout tool allowing users to define terrain dimensions and place plants interactively</p>
<p class="project-lead">• A community forum concept for knowledge sharing</p>
<p class="project-lead">• A search function to quickly access stored plants</p>
<p class="project-lead">• A FAQ section for usability support</p><br>
<p class="project-lead">Special attention was given to navigation structure, accessibility, and interaction efficiency. We also applied the GOMS model to analyze task performance and evaluate interaction time for key actions (e.g., adding a plant or accessing plant information).</p><br>
<p class="project-lead">This project demonstrates the design process behind a mobile gardening assistant, emphasizing usability, task optimization, and user-centered thinking rather than software implementation. </p><br>


    <div class="project-links">
       <a class="project-link"
     href="pdf/Rapport IHM jardinage.pdf"
     target="_blank"
     rel="noopener">
    ↗ View project report (PDF)
  </a>
    </div>
  </main>
`,

"focus": `
  <main class="project-page">
    <p class="project-kicker">UI/UX DESIGN · INTERACTION DESIGN</p>

    <h2 class="project-title">FocusBoard</h2>

    <p class="project-lead">
    FocusBoard is a personal UX research initiative exploring cognitive overload in university lectures. Through questionnaires distributed to students, I investigated how fatigue, fast pacing, and information density affect attention and disengagement during class. The early findings highlight recurring patterns of silent panic, loss of structure, and difficulty recovering once distracted. Based on this research, I am currently developing a minimal, content-independent interface concept designed to help students regain clarity in real time through guided micro-interactions. The project is still in progress, and I am continuing to refine the design based on user insights and iterative testing.</p><br>
    
    <p class="project-lead">This project reflects my interest in human-centered design, attention management, and designing simple systems that meaningfully improve academic experiences. </p><br>

    <p class="project-lead">The project is still in progress, and I am continuing to refine the design based on user insights and iterative testing.</p><br>


    <div class="project-video">
  <iframe src="pdf/summary.pdf"></iframe>
</div>
  </main>
`,



  "hop": `
  <main class="project-page">
    <p class="project-kicker">JAVA · GAME PROJECT</p>

    <h2 class="project-title">HOP!</h2>

    <p class="project-lead">
      The Hop project is an interactive game developed in Java where the main character, Axel, must
jump from block to block, avoid obstacles such as lava rocks, and collect coins
to accumulate points.
    </p>

    <div class="project-video">
      <video controls playsinline preload="metadata">
        <source src="videos/hop-demo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="project-links">
      <a class="project-link" href=https://gitlab.com/aidasadul/hop/-/tree/8c95dc09c2ce6d7d589a4f3ab9f6a8b4d0919d87/ target="_blank" rel="noopener">
        ↗ GitLab repository
      </a>
    </div>

    <p class="project-foot">
      <strong>Web version:</strong> coming Summer 2026.
    </p>
  </main>
`,




  "ile": `
  <main class="project-page">
    <p class="project-kicker">JAVA · BOARD GAME</p>

    <h2 class="project-title">Mission: Quatre Reliques et Héliport</h2>

    <p class="project-lead">
      This project is a fully playable, graphical Java (Swing) version of Forbidden Island, renamed “Mission: Four Relics & Helipad” to highlight the goal: collect all four treasures and escape by helicopter before the island sinks.
It follows the core official rules: character movement and special abilities, rising floods, drying tiles, treasure capture, and classic win/lose conditions.
    </p>

    <div class="project-video">
      <video controls playsinline preload="metadata">
        <source src="videos/hop-demo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>

    <div class="project-links">
      <a class="project-link" href=https://gitlab.com/aidasadul/mission_quatre-reliques-et-heliport/-/tree/e35ed8c6ca296360ec85de3033bc86f19fa28083/ target="_blank" rel="noopener">
        ↗ GitLab repository
      </a>
    </div>

    <p class="project-foot">
      <strong>Web version:</strong> coming Summer 2026.
    </p>
  </main>
`,




  "Fourmie": `
  <main class="project-page">
    <p class="project-kicker">C++ · OOP</p>

    <h2 class="project-title">Ant Colony Simulation on Grid</h2>

    <p class="project-lead">
     This project consists of building the core engine of a grid-based ant colony simulation in C++.</p><br>
    <p class="project-lead">The system models a square grid where different entities coexist:</p><br>
    <p class="project-lead">• Ants (agents)</p>
    <p class="project-lead">• Nests</p>
    <p class="project-lead">• Sugar sources</p>
    <p class="project-lead">• Pheromones</p><br>
    <p class="project-lead">To support the simulation, we first implemented a robust coordinate system through a Coord class that guarantees all positions remain within grid boundaries. Coordinates are immutable and validated at construction to prevent invalid states.</p><br>
    <p class="project-lead">We then developed a dynamic coordinate collection class (EnsCoord) to manage sets of positions such as neighboring cells, accessible moves, or pheromone zones.</p><br>
    <p class="project-lead">A key function of the project is computing valid neighboring positions for any given cell while correctly handling edge and corner cases. This neighbor computation is essential for ant movement logic.</p><br>
    <p class="project-lead">The simulation logic allows ants to:</p><br>
    <p class="project-lead">• Move between adjacent cells</p>
    <p class="project-lead">• Detect nearby sugar</p>
    <p class="project-lead">• Return to their nest</p>
    <p class="project-lead">• Leave pheromone trails</p>
    <p class="project-lead">• Make movement decisions based on local information</p><br>
    <p class="project-lead">Random selection mechanisms were implemented to simulate non-deterministic ant behavior. The project emphasizes defensive programming, operator overloading, exception handling, and extensive edge-case testing.</p><br>
    <p class="project-lead">All components were compiled using a Makefile and tested using doctest to ensure correctness, as this coordinate system and neighbor logic are critical to the behavior of the entire simulation.</p><br>

    <p class="project-foot">
      <strong>Gitlab repository:</strong> coming soon.
    </p>
  </main>
`,


  "AC": `
  <main class="project-page">
    <p class="project-kicker">AR · BLENDER</p>

    <h2 class="project-title">Take a sweet break with Adia</h2>

    <p class="project-lead">
      Adia is a wearable AR application designed to help users momentarily disconnect from stress and sensory overload while remaining in their real environment. Through AR glasses, a gentle Animal Crossing style character is spatially anchored to the physical world and interacts with the user through minimal, contextual dialogue.

We explore how soft character design and low cognitive load interactions can create calming human computer experiences without isolating users from reality.

This project explores how AR characters can coexist with the real world to support emotional comfort and human connection rather than replacing reality.
    </p>

    <div class="project-video">
      <video controls playsinline preload="metadata">
        <source src="videos/Aida_ProposalVideo.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>

    <p class="project-foot">
      <strong>Complete version:</strong> coming May 2026.
    </p>
  </main>
`,



  "Momie": `
  <main class="project-page">
    <p class="project-kicker">PROCESSING</p>

    <h2 class="project-title">Pyramid and Mummy</h2>

     <p class="project-lead">
    This project was developed using Processing as part of a computer graphics course. The objective was to design and implement an interactive 3D environment from scratch.</p><br>
    <p class="project-lead">We created a pyramid-shaped structure composed of multiple levels. Each level contains a procedurally structured labyrinth that the user can explore in first-person view. As the player ascends through stairs to higher levels, the structure gradually decreases in size, reflecting the geometry of a real pyramid.</p><br>
    <p class="project-lead">Key features include:</p><br>
    <p class="project-lead">• A fully modeled 3D pyramid structure</p>
    <p class="project-lead">• Multi-level labyrinth design</p>
    <p class="project-lead">• Stair-based vertical navigation between levels</p>
    <p class="project-lead">• Dynamic scaling of upper levels</p>
    <p class="project-lead">• First-person camera controls</p>
    <p class="project-lead">• Animated mummy characters that move through the labyrinth</p>
    <p class="project-lead">• Custom 3D modeling of the mummy directly in Processing</p><br>
    <p class="project-lead">The mummy characters were modeled using primitive shapes and transformations (translations, rotations, scaling). Movement logic was implemented to make them navigate within the maze environment, creating a dynamic and immersive atmosphere.</p><br>


    <p class="project-foot">
      <strong>Gitlab repository:</strong> coming soon.
    </p>
  </main>
`,




"TCP": `
  <main class="project-page">
    <p class="project-kicker">TCP/IP · C</p>

    <h2 class="project-title">TCP and UDP Client–Server Communication</h2>

    <section class="project-section">
      <h3 class="project-subtitle">Project Description</h3>
      <p class="project-lead">
        In this project, I implemented a client–server application in C that enables
        network communication using both TCP and UDP protocols.
      </p>
    </section><br>

    <section class="project-section">
      <h3 class="project-subtitle">TCP Communication</h3>
      <p>
        I developed a TCP client that creates a connection-oriented socket, resolves
        the server’s hostname or IP address, and establishes a connection using the
        <code>connect</code> system call.
      </p>
      <p>
        The client allows the user to input a message from standard input, sends it to
        the server, waits for a response, displays it, and then closes the connection
        properly.
      </p><br>
      <p>
        In parallel, I implemented a TCP server that creates a socket, binds it to a
        specific port, and listens for incoming connections. The server accepts a client
        connection, receives the message, displays it, and sends back a confirmation
        message before closing the connection.
      </p><br>
    </section>

    <section class="project-section">
      <h3 class="project-subtitle">UDP Communication</h3>
      <p>
        I also implemented a UDP client using a connectionless socket. The client sends
        a message to the server using <code>sendto</code>, without establishing a prior
        connection, and then waits for a response using <code>recvfrom</code>.
      </p>
      <p>
        On the server side, I developed a UDP server that continuously listens on a
        given port. For each received message, the server displays it and sends a
        response back to the client, illustrating the behavior of connectionless
        communication.
      </p><br>
    </section>

    <section class="project-section">
      <h3 class="project-subtitle">Project Objectives</h3>
      <p>
        Through this project, I gained a solid understanding of the key differences
        between TCP and UDP, particularly in terms of connection management,
        reliability, and communication overhead.
      </p><br>
      <p>
        I also strengthened my skills in Unix/Linux network programming, using system
        calls such as <code>socket</code>, <code>bind</code>, <code>listen</code>,
        <code>accept</code>, <code>send</code>, <code>recv</code>,
        <code>sendto</code>, and <code>recvfrom</code>.
      </p>
    </section>

    <div class="project-links">
      <a class="project-link"
        href="https://gitlab.com/aidasadul/reseau/-/tree/dee30044df3532579f27b9ca37e8c4e95e67c091/"
         target="_blank" rel="noopener">
        ↗ GitLab repository
      </a>
    </div>
  </main>
`,

  };

  // ✅ Never show "Project not found" again (fallback uses the card title)
  windowTitle.textContent = title;

  windowContent.innerHTML = contentMap[id] || `
    <main class="settings-layout">
      <section class="settings-content">
        <div class="settings-section active" style="display:block;">
          <p style="letter-spacing:.12em;opacity:.6;text-transform:uppercase;font-size:.75rem;">${label}</p>
          <h2 style="margin-top:8px;">${title}</h2>
          <p style="margin-top:12px;opacity:.8;">
            Coming soon — add this project to <code>contentMap</code> with id: <b>${id || "(missing data-project)"}</b>
          </p>
        </div>
      </section>
    </main>
  `;

  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
});


  /*************************************************
   * CUSTOM CURSOR
   *************************************************/
  const cursor = document.querySelector(".cursor");

  document.addEventListener("mousemove", (e) => {
    if (!cursor) return;
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  /*************************************************
   * GREETING LOOP
   *************************************************/
  const hello = document.getElementById("hello");
  const greetings = [
    "hallo.", "hello.", "ciao.", "こんにちは。",
    "안녕하세요.", "hej.", "مرحبًا.", "ola.",
    "aloha.", "สวัสดี.", "hola.", "你好;",
    "bonzour.", "नमस्ते.", "bonjour."
  ];
  let gIndex = 0;

  if (hello) {
    setInterval(() => {
      hello.style.opacity = 0;
      setTimeout(() => {
        gIndex = (gIndex + 1) % greetings.length;
        hello.textContent = greetings[gIndex];
        hello.style.opacity = 1;
      }, 300);
    }, 2500);
  }

  /*************************************************
   * HOME SLIDER
   *************************************************/
  const slider = document.querySelector(".slider");
  const sayHiBtn = document.getElementById("sayHiBtn");
  const goBackBtn = document.getElementById("goBackBtn");

  if (sayHiBtn && slider) {
    sayHiBtn.addEventListener("click", () => {
      slider.style.transform = "translateX(-100vw)";
    });
  }

  if (goBackBtn && slider) {
    goBackBtn.addEventListener("click", () => {
      slider.style.transform = "translateX(0)";
    });
  }

  /*************************************************
   * PRIMARY WINDOW (ABOUT / PASSION)
   *************************************************/
  const overlay = document.getElementById("windowOverlay");
  const windowContent = document.getElementById("windowContent");
  const windowTitle = document.getElementById("windowTitle");
  const closeMainBtn = document.querySelector(".btn.close");

  let passionScrollY = 0; // remembers scroll position

  async function loadPage(page) {
  const response = await fetch(`${page}.html`);
  const html = await response.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const main = doc.querySelector("main");

  // ✅ IMPORTANT : garder le <main> complet pour conserver le grid
  windowContent.innerHTML = main ? main.outerHTML : "<p>Not found</p>";

  if (page === "projects") {
    windowContent.scrollTop = passionScrollY;
  }
}


  document.querySelectorAll("[data-window]").forEach(link => {
    link.addEventListener("click", async (e) => {
      e.preventDefault();

      const page = link.dataset.window;
      windowTitle.textContent =
        page.charAt(0).toUpperCase() + page.slice(1);

      await loadPage(page);

      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  function closeMainWindow() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    windowContent.innerHTML = "";
  }

  if (closeMainBtn) {
    closeMainBtn.addEventListener("click", closeMainWindow);
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closeMainWindow();
  });

  /*************************************************
   * SECONDARY WINDOW (STORY WINDOW)
   *************************************************/
  const storyOverlay = document.createElement("div");
  storyOverlay.className = "window-overlay active";
  storyOverlay.style.zIndex = "4000";
  storyOverlay.style.display = "none";

  storyOverlay.innerHTML = `
    <div class="mac-window">
      <div class="window-bar">
        <div class="window-controls">
          <span class="btn close story-close"></span>
          <span class="btn minimize"></span>
          <span class="btn maximize"></span>
        </div>
        <span class="window-title">Story</span>
      </div>
      <div class="window-content" id="storyContent"></div>
    </div>
  `;

  document.body.appendChild(storyOverlay);

  const storyContent = storyOverlay.querySelector("#storyContent");
  const storyCloseBtn = storyOverlay.querySelector(".story-close");

  /*************************************************
   * STORY OPEN (DELEGATION)
   *************************************************/
  document.addEventListener("click", async (e) => {
    const card = e.target.closest(".story-card");
    if (!card) return;

    passionScrollY = windowContent.scrollTop;

    const response = await fetch("Passion.html");
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const article = doc.querySelector(".story-article");

    storyContent.innerHTML = article
      ? article.outerHTML
      : "<p>Story not found</p>";

    storyOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
  });

  /*************************************************
   * STORY CLOSE
   *************************************************/
  storyCloseBtn.addEventListener("click", () => {
    storyOverlay.style.display = "none";
    storyContent.innerHTML = "";
    windowContent.scrollTop = passionScrollY;
  });

  storyOverlay.addEventListener("click", (e) => {
    if (e.target === storyOverlay) {
      storyOverlay.style.display = "none";
      storyContent.innerHTML = "";
      windowContent.scrollTop = passionScrollY;
    }
  });
  
});