function validate() {
    var username = document.getElementById("username");
    var mailid = document.getElementById("mailid");
    var phonenumber = document.getElementById("phonenumber");

    if (username.value.trim() == "" || mailid.value == "" || phonenumber.value == "") {
        //trim() used to if we enter space bar as value trim well clear it
        alert("No blank value allowed");
        return false;
    } else if(phonenumber.value.trim().length<9){

        alert("Enter a valid number");
        phonenumber.style.border="solid 3px red";
        return false;
    } else if(mailid.value.trim().length<9){

        alert("Enter a valid mail-id");
        phonenumber.style.border="solid 3px red";
        return false;
    }
    else{
        return true;
    }
}
function validate() {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.textContent = "Submitted";
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "black";
    return true;
}
