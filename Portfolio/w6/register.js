window.onload = pageLoad;
function pageLoad()
{

    let clickButton = document.getElementById("myForm");
    clickButton.onsubmit = validateForm;

}

function validateForm() {
    let password1 = document.forms["myForm"]["password1"].value;
    let password2 = document.forms["myForm"]["password2"].value;

    if(password1 != password2)
    {
        alert("Password และ Retype Password ไม่ตรงกัน");

        document.getElementById("errormsg").innerText = "Password และ Retype Password ไม่ตรงกัน";

        return false;
        
    }

}

    