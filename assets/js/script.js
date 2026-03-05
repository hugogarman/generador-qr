/* =====================================================
   FUNCIÓN BASE — CREAR Y DESCARGAR CÓDIGO QR
   Esta función genera el QR y añade el botón de descarga
===================================================== */

function createQR(text, filenameBase = "codigo-qr") {

  const qrContainer = document.getElementById("qr-result");
  qrContainer.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.classList.add("qr-wrapper");

  const qrDiv = document.createElement("div");
  qrDiv.classList.add("qr-box");

  wrapper.appendChild(qrDiv);
  qrContainer.appendChild(wrapper);

  new QRCode(qrDiv, {
    text: text,
    width: 200,
    height: 200
  });

  setTimeout(() => {

    const canvas = qrDiv.querySelector("canvas");
    if (!canvas) return;

    const downloadBtn = document.createElement("button");
    downloadBtn.textContent = "Descargar QR";
    downloadBtn.classList.add("primary-btn");

    downloadBtn.onclick = () => {

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");

      const cleanName = filenameBase
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9\-]/g, "");

      link.download = `${cleanName}.png`;
      link.click();

    };

    wrapper.appendChild(downloadBtn);

  }, 100);

}


/* =====================================================
   GENERADOR GENERAL DE QR
   Usado para:
   - enlaces
   - Google Maps
   - Instagram
   - YouTube
   - PDF
   - cualquier URL
===================================================== */

function generateQR() {

  const inputField = document.getElementById("qr-input");
  if (!inputField) return;

  let input = inputField.value.trim();

  if (!input) {
    alert("Introduce un enlace válido.");
    return;
  }

  if (!input.startsWith("http://") && !input.startsWith("https://")) {
    input = "https://" + input;
  }

  try {
    new URL(input);
  } catch {
    alert("El enlace no es válido.");
    return;
  }

  createQR(input, "qr-enlace");

}


/* =====================================================
   GENERADOR QR WHATSAPP
   Convierte un número en enlace wa.me
===================================================== */

function generateWhatsAppQR() {

  const inputField = document.getElementById("phone-input");
  if (!inputField) return;

  let phone = inputField.value.trim();

  if (!phone) {
    alert("Introduce un número válido.");
    return;
  }

  phone = phone.replace(/\s+/g, "").replace("+", "");

  if (!/^\d+$/.test(phone)) {
    alert("El número solo debe contener dígitos.");
    return;
  }

  if (phone.length < 10) {
    alert("Introduce el número con prefijo internacional (ej: 34600111222).");
    return;
  }

  const whatsappLink = "https://wa.me/" + phone;

  createQR(whatsappLink, `qr-whatsapp-${phone}`);

}


/* =====================================================
   MENÚ DESPLEGABLE DEL HEADER
   Controla apertura y cierre de dropdowns
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const dropdownButtons = document.querySelectorAll(".dropbtn");

  dropdownButtons.forEach((btn) => {

    btn.addEventListener("click", (e) => {

      e.stopPropagation();

      const dropdown = btn.closest(".dropdown");

      document.querySelectorAll(".dropdown.open").forEach((d) => {
        if (d !== dropdown) d.classList.remove("open");
      });

      dropdown.classList.toggle("open");

    });

  });

  document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown.open")
      .forEach((d) => d.classList.remove("open"));
  });

});
