function sendMail(e) {

  let parms ={
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    message:document.getElementById("message").value
  }

  emailjs.send("service_lzclb5z", "template_4qeku5d", parms)
  .then(() => {
    alert("Email Sent!!");
  })
  .catch((err) => {
    console.error(err);
    alert("Failed to send email.");
  });
}

export default sendMail