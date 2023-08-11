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
    setTimeout(delete_fields, 4000);

    function delete_fields() {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
      }
    

}