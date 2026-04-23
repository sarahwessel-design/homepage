const images = [
  "DSC_8136.png",
  "DSC_8138.png",
  "DSC_8152.png",
  "DSC_8299.png",
  "DSC_8334.png",
  "DSC_8144.png",
  "DSC_8147.png",
];
let index = 0;

function updateViewer() {
  document.getElementById("viewer").src = images[index];
  document.getElementById("status-text").textContent = `Image ${index + 1} of ${
    images.length
  }`;
}

function nextImage() {
  index = (index + 1) % images.length;
  updateViewer();
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  updateViewer();
}

function closeWindow() {
  document.getElementById("appWindow").style.display = "none";
}

function openTab(tabName) {
  // Hide all content
  document.querySelectorAll(".tab-content").forEach((el) => {
    el.classList.remove("active");
  });

  // Remove active from tabs
  document.querySelectorAll(".tab").forEach((el) => {
    el.classList.remove("active");
  });

  // Show selected tab
  document.getElementById(tabName).classList.add("active");

  // Highlight clicked tab
  event.target.classList.add("active");

  // 🔥 SHOW/HIDE STATUS BAR
  const statusBar = document.getElementById("statusBar");

  if (tabName === "images") {
    statusBar.style.display = "flex";
  } else {
    statusBar.style.display = "none";
  }
  function loadInstagram() {
    const container = document.getElementById("instagram-widget");

    // prevent re-loading multiple times
    if (container.dataset.loaded) return;

    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;

    container.appendChild(script);

    const widget = document.createElement("div");
    widget.className = "elfsight-app-1ef98065-2c50-4ef7-8d3a-3c15ae172d18";
    widget.setAttribute("data-elfsight-app-lazy", "");

    container.appendChild(widget);

    container.dataset.loaded = "true";
  }
  if (tabName === "instagram") {
    loadInstagram();
  }
}
// ===== ERROR WINDOW SYSTEM =====

const popupContainer = document.getElementById("popup-container");

let idleTime = 0;
let popupInterval = 12000;
let lastPopupTime = 0;
let zIndexCounter = 1000;

const messages = [
  "Mass Casualty Risk Detected",
  "Preventative measures not found.",
  "Safety protocols missing",
  "Democracy.exe has stopped responding",
  "System desensitization in progress.",
  "Responsibility not assigned\nRetrying...\nRetrying...",
  "School Shootings incidents increasing",
  "User safety cannot be guaranteed.",
];

// reset idle on interaction
["mousemove", "keydown", "click", "scroll"].forEach((evt) => {
  document.addEventListener(evt, () => {
    idleTime = 0;
  });
});

// idle loop
setInterval(() => {
  idleTime += 1000;

  if (idleTime - lastPopupTime >= popupInterval) {
    createErrorWindow();
    lastPopupTime = idleTime;

    // speed up over time
    popupInterval = Math.max(1500, popupInterval * 0.85);
  }
}, 1000);

function createErrorWindow() {
  const win = document.createElement("div");
  win.className = "win95-error";
  win.style.zIndex = zIndexCounter++;

  const rectWidth = win.offsetWidth || 300;
  const rectHeight = win.offsetHeight || 150;

  const padding = 20;

  win.style.left =
    Math.random() * (window.innerWidth - rectWidth - padding * 2) +
    padding +
    "px";

  win.style.top =
    Math.random() * (window.innerHeight - rectHeight - padding * 2) +
    padding +
    "px";

  const message =
    messages[Math.min(messages.length - 1, Math.floor(idleTime / 15000))];

  win.innerHTML = `
  <div class="window-title">
    <span>Error</span>
    <button class="buttonx"><svg
    class="close-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="12px"
    viewBox="0 0 138.2 133.62"
  >
    <rect
      x="55.42"
      y="-10.39"
      width="32.13"
      height="154.57"
      transform="translate(-26.37 70.14) rotate(-45)"
    />
    <rect
      x="50.65"
      y="-10.57"
      width="32.13"
      height="154.57"
      transform="translate(66.72 -27.64) rotate(45)"
    />
  </svg></button>
  </div>

  <div class="window-content">
   <img src="erroricon.png" class="error-icon" />
      <div class="error-text">
        ${message.replace(/\n/g, "<br>")}
     </div>
  </div>

  <div class="window-buttons">
    <button class="ok-btn">OK</button>
  </div>
`;

  win.querySelector(".ok-btn").onclick = () => win.remove();
  win.querySelector(".buttonx").onclick = () => win.remove();

  makeDraggable(win);

  popupContainer.appendChild(win);
}

// draggable windows
function makeDraggable(win) {
  const bar = win.querySelector(".window-title");
  let offsetX = 0,
    offsetY = 0,
    isDown = false;

  bar.addEventListener("mousedown", (e) => {
    isDown = true;
    offsetX = e.clientX - win.offsetLeft;
    offsetY = e.clientY - win.offsetTop;
  });

  document.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    win.style.left = e.clientX - offsetX + "px";
    win.style.top = e.clientY - offsetY + "px";
  });

  document.addEventListener("mouseup", () => {
    isDown = false;
  });
}
// remove all error windows on mouse movement
document.addEventListener("mousemove", () => {
  const popups = document.querySelectorAll(".win95-error");
  popups.forEach((popup) => popup.remove());
});
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");

  function handleMobileSidebar() {
    if (window.innerWidth <= 768) {
      sidebar.style.display = "none"; // hide on mobile
    } else {
      sidebar.style.display = "block"; // show on desktop
    }
  }

  // run on load
  handleMobileSidebar();

  // run on resize
  window.addEventListener("resize", handleMobileSidebar);

  window.toggleCoupons = function () {
    sidebar.classList.toggle("show");
  };
});
