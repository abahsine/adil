import emailjs from "@emailjs/browser";

const sendEmail = (data) => {  // <-- plus de {data}
  emailjs.send(
    "service_jpni1et",
    "template_68uq80s",
    data,  // <-- passe directement l'objet JSON
    "D1rSO1XNtilJuXbjv"
  )
  .then((result) => {
    return true
    
  }, (error) => {
    return false
  });
};
export default sendEmail;
