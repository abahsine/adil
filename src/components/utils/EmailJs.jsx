import emailjs from "@emailjs/browser";

const sendEmail = (data) => {
  return emailjs.send(
    "service_jpni1et",
    "template_68uq80s",
    data,
    "D1rSO1XNtilJuXbjv"
  );
};
export default sendEmail;
