/* Kevin from tutor assistance advised me to use this new EmailJS method rather than the old method I using originally */
window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('gmail', 'contact_form', this);
        this.reset()
    });
};

 /* $('#email-submit').click(function () {
    document.getElementById("contact-form").reset();
});  */