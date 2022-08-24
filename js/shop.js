const btn = document.getElementById('button');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const size = document.getElementById('size');
const product = document.getElementById('product');


document.getElementById('form')
 .addEventListener('submit', function(event) {
  console.log('here');
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_ad3yp3b';




   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });


    userName.value = "";
    email.value = "";
    phone.value ="";
    size.value="";
  product.value="";
});