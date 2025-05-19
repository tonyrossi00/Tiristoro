// Toggle sezione
function toggleContent(card) {
  const content = card.querySelector(".content");
  const isVisible = content.classList.contains("show");
  document
    .querySelectorAll(".card .content")
    .forEach((c) => c.classList.remove("show"));
  if (!isVisible) content.classList.add("show");
}

// Modal
function showModal(event) {
  event.stopPropagation();
  const item = event.currentTarget;
  document.getElementById("modal-title").innerText = item.dataset.name;
  document.getElementById("modal-desc").innerText = item.dataset.desc;
  document.getElementById("modal-price").innerText = item.dataset.price;
  document.getElementById("modal-img").src = item.dataset.img;
  document.getElementById("modal").classList.add("show");
}
function handleImageClick(imgSrc) {
    if (window.innerWidth <= 768) {
        // Mobile: apri in nuova scheda (pinch-to-zoom nativo)
        window.open(imgSrc, '_blank');
    } else {
        // Desktop: mostra overlay con pulsante "Chiudi"
        showLargeImage(imgSrc);
    }
}

function showLargeImage(imgSrc) {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = 2000;

    const largeImg = document.createElement('img');
    largeImg.src = imgSrc;
    largeImg.style.maxWidth = '90%';
    largeImg.style.maxHeight = '80%';
    largeImg.style.marginBottom = '20px';
    largeImg.style.boxShadow = '0 0 15px white';
    largeImg.style.borderRadius = '10px';

    const backBtn = document.createElement('button');
    backBtn.innerText = 'Torna al Modale';
    backBtn.style.padding = '10px 20px';
    backBtn.style.fontSize = '18px';
    backBtn.style.backgroundColor = '#fff';
    backBtn.style.border = 'none';
    backBtn.style.borderRadius = '5px';
    backBtn.style.cursor = 'pointer';
    backBtn.onclick = () => document.body.removeChild(overlay);

    overlay.appendChild(largeImg);
    overlay.appendChild(backBtn);
    document.body.appendChild(overlay);
}
function toggleAllergens(event) {
    event.stopPropagation(); // Evita che venga attivato showModal
    const btn = event.currentTarget;
    const allergensDiv = btn.nextElementSibling;
    const isVisible = allergensDiv.style.display === 'block';
    allergensDiv.style.display = isVisible ? 'none' : 'block';
    btn.textContent = isVisible ? 'Mostra allergeni' : 'Nascondi allergeni';
}


function closeModal() {
  document.getElementById("modal").classList.remove("show");
}
