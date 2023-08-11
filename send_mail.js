function SendMail() {
    var params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_uuyafhx","template_bxukjqt", params).then(function (res) {
        alert('Email Sent!');
    })
}