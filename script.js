    var submit = document.getElementById("submit")
    submit.addEventListener("click",function(){
        event.preventDefault()
        var nameRegex=/^[a-zA-Z]+$/
        var emailRegex=/^[a-zA-Z0-9]+@gmail.com/
        var phoneRegex=/^\d{10}$/

        var  name = document.getElementById("name")
        var email = document.getElementById("email")
        var phone = document.getElementById("phone")

        var validate= true
        if (nameRegex.test(name.value)==false)
        {
            document.querySelector(".nameError").style.display="inline"
            validate= false
        }
        else{
             document.querySelector(".nameError").style.display="none"
            
        }
          if (emailRegex.test(email.value)==false)
        {
            document.querySelector(".emailError").style.display="inline"
            validate= false
        }
        else{
             document.querySelector(".emailError").style.display="none"
              
        }
          if (phoneRegex.test(phone.value)==false)
        {
            document.querySelector(".phoneError").style.display="inline"
            validate= false
        }
        else{
             document.querySelector(".phoneError").style.display="none"
              
        }
        if (validate == true){
            alert("Form submitted Successfully")

        }
    })