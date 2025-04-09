const mensajes = [
    { texto: "holaa", tipo: "sent" },
    { texto: "Cómo estas?", tipo: "received" },
    { texto: "Bien, estaba cocinando, vos?", tipo: "sent" },
    {
      texto:
        "Mm qué cocinas?",
      tipo: "received",
    },
    {
      texto: "Yo también merendando, me hice un sándwich de carne y huevos con pan casero y fruta",
      tipo: "received",
    },
    {
      texto: "Había ido al gym en la siesta y no comí",
      tipo: "received",
    },
    { texto: "estaba haciendo unos chipas", tipo: "sent" },
    { texto: "bien fit", tipo: "sent" },
    { texto: "yo fui en la mañana, estuvo re feo el dia", tipo: "sent" },
    {
      texto:
        "Uf que ricoo, yo nunca hice eso",
      tipo: "received",
    },
    {
      texto:
        "El intento está jajaja",
      tipo: "received",
    },
    {
      texto:
        "Sii encima hacía calor, el mejor horario es la mañana",
      tipo: "received",
    },
    {
      texto:
        "Ayer fui a la tarde y habían como 70 personas literal, jamás vi tanta gente",
      tipo: "received",
    },
    {
      texto:
        "pfff",
      tipo: "sent",
    },
    {
      texto: "por eso casi siempre voy a la mañana, pero esta bueno a veces ir a la tarde pq entrenar con mas ganas",
      tipo: "sent",
    },
    {
      texto: "aunque esas ganas se te van cuando ves a tanta gente",
      tipo: "sent",
    },
    {
      texto: "dame chochoooo",
      tipo: "sent",
    },
    { texto: "¡Recuerdos completados! (por ahora)(eso último nunca lo dije en realidad)(te amo mari felices 19)", tipo: "received" },
  ];
  
  let indiceMensaje = 0;
  
  const chatBox = document.getElementById("chat-box");
  const nextButton = document.getElementById("next-button");
  
  nextButton.addEventListener("click", () => {
    if (indiceMensaje < mensajes.length) {
      const mensaje = mensajes[indiceMensaje];
      agregarMensaje(mensaje.texto, mensaje.tipo, mensaje.imagen);
      indiceMensaje++;
    } else {
      nextButton.disabled = true;
    }
  });
  
  function agregarMensaje(texto, tipo, imagen = null) {
    let mensaje = document.createElement("div");
    mensaje.classList.add("message", tipo);
    mensaje.textContent = texto;
  
    if (imagen) {
      let img = document.createElement("img");
      img.src = imagen;
      img.alt = "Recuerdo especial";
      img.style.maxWidth = "100%";
      mensaje.appendChild(img);
    }
  
    chatBox.appendChild(mensaje);
    chatBox.scrollTop = chatBox.scrollHeight;
  }