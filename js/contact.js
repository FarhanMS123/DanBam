$(document).ready(function() {
    $("#form").submit(function (event) {
        // console.log({this:this, event});

        var name = this["name"].value;
        var email = this["email"].value;
        var gender = this["gender"].value;
        var location = this["location"].value;
        var message = this["message"].value;
        var check = this["check"].checked;

        // console.log({name, email, gender, location, message, check});

        if(name.length == 0){
            alert("Please input your name");
            event.preventDefault();
            return;
        }

        if(email.length == 0){
            alert("Please input your email");
            event.preventDefault();
            return;
        }else{
            var split = email.split("@");
            // var split2 = split[1].split(".");

            if(split.length != 2 || split[0].length == 0 || split[1].length == 0
                || split[1].split(".").length < 2){
                    alert("Please input a correct public email address");
                    event.preventDefault();
                    return;
                }
        }

        if(gender != "male" && gender != "female"){
            alert("Gender must be checked either male or female.");
            event.preventDefault();
            return;
        }

        if(location.length == 0){
            alert("Please input the DanBam Location.");
            event.preventDefault();
            return;
        }

        if(message.length == 0){
            alert("Please input your message to let us know what had happend.");
            event.preventDefault();
            return;
        }

        alert("Everything must be alright and here are the resume:\n"
            + `Name: ${name}\n`
            + `Email: ${email}\n`
            + `Gender: ${gender[0].toUpperCase()}${gender.slice(1)}\n`
            + `Location: ${location}\n`
            + `Message:\n${message}\n`
            + `Send the latest information? ${check ? "Yes" : "No"}`
        );

        // event.preventDefault();

    });
});