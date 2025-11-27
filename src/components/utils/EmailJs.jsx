import emailjs from "@emailjs/browser";

const sendEmail = (data) => {  // <-- plus de {data}
  emailjs.send(
    "service_jpni1et",
    "template_68uq80s",
    data,  // <-- passe directement l'objet JSON
    "D1rSO1XNtilJuXbjv"
  )
  .then((result) => {
    console.log(result.text);
    alert("Email envoyé avec succès !");
  }, (error) => {
    console.log(error.text);
    alert("Erreur lors de l'envoi de l'email.");
  });
};

export default sendEmail;
