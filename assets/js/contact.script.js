$(document).ready((e)=>{
    e.preventDefault

    let checkbox = $("#confirm-detail").change(() =>{

        if ($("#confirm-detail").prop('checked')) {
            $("#contact-submit").prop("disabled", false)
          } else {
            $("#contact-submit").prop("disabled", true)
          }
    })

    //Checking the first name and last name only contains letters

    $("#firstname").focusout(()=>{
        let firstname = $("#firstname").val()

        let nameRegex = /^[A-Za-z]+$/;

        if (!nameRegex.test(firstname)) {
            // If the input contains characters other than letters or white spaces, show an error message.
            $("#firstname-feedback").text("Invalid name input")
            console.log ("invalid")
        }
    })

    
})