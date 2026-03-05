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

function generateQR() {
  const inputField = document.getElementById("qr-input");
  if (!inputField) return;

  let input = inputField.value.trim();

  if (!input) {
    alert("Introduce un enlace válido.");
    return;
  }

  if (!input.includes(".")) {
    alert("El enlace no es válido.");
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

function generateInstagramQR() {
  const inputField = document.getElementById("insta-input");
  if (!inputField) return;

  let username = inputField.value.trim();

  if (!username) {
    alert("Introduce un usuario válido.");
    return;
  }

  username = username.replace("@", "");

  if (!/^[a-zA-Z0-9._]+$/.test(username)) {
    alert("El usuario contiene caracteres no válidos.");
    return;
  }

  const instaLink = "https://instagram.com/" + username;

  createQR(instaLink, `qr-instagram-${username}`);
}

function generateWiFiQR() {
  const ssidField = document.getElementById("wifi-ssid");
  if (!ssidField) return;

  const ssid = ssidField.value.trim();
  const password = document.getElementById("wifi-password").value.trim();

  if (!ssid || !password) {
    alert("Introduce los datos WiFi.");
    return;
  }

  const wifiString = `WIFI:T:WPA;S:${ssid};P:${password};;`;

  createQR(wifiString, `qr-wifi-${ssid}`);
}

function generateRestaurantQR() {
  let input = document.getElementById("restaurant-link").value.trim();
  const qrContainer = document.getElementById("qr-result");

  qrContainer.innerHTML = "";

  if (!input) {
    alert("Introduce el enlace de tu carta digital.");
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

  new QRCode(qrContainer, {
    text: input,
    width: 200,
    height: 200
  });
}

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
    document.querySelectorAll(".dropdown.open").forEach((d) => d.classList.remove("open"));
  });
});


function generarQRMaps() {

    const enlace = document.getElementById("maps-link").value.trim();
    const contenedor = document.getElementById("qr-result");

    contenedor.innerHTML = "";

    if (!enlace) {
        alert("Introduce un enlace de Google Maps");
        return;
    }

    new QRCode(contenedor, {
        text: enlace,
        width: 220,
        height: 220,
        correctLevel: QRCode.CorrectLevel.H
    });

}
