function sendMail(contactForm) {
    emailjs.send("service_m9cpkcs", "rosie", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);            
        },

        function(error) {
            console.log("FAILED", error);            
        });

    return false;
}

