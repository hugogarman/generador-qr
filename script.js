function generateQR() {
  const inputField = document.getElementById("qr-input");
  let input = inputField.value.trim();
  const qrContainer = document.getElementById("qr-result");

  qrContainer.innerHTML = "";

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

  new QRCode(qrContainer, {
    text: input,
    width: 200,
    height: 200
  });
}
