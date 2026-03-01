function generateQR() {
  const input = document.getElementById("qr-input").value;
  const qrContainer = document.getElementById("qr-result");

  qrContainer.innerHTML = "";

  if (input.trim() === "") {
    alert("Por favor, introduce un enlace válido.");
    return;
  }

  new QRCode(qrContainer, {
    text: input,
    width: 200,
    height: 200
  });
}
