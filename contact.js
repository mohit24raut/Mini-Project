function Check()
{
    
    let fnameRef = document.querySelector("#fname");
    let fname = fnameRef.value;
    if(fname == "")
    {
        fnameRef.classList.add("border-danger");
        return;
    }else{
        fnameRef.classList.add("border-warning");
    }

    let lnameRef = document.querySelector("#lname");
    let lname = lnameRef.value;
    if(lname == "")
    {
        lnameRef.classList.add("border-danger");
        return;
    }else{
        lnameRef.classList.add("border-warning");
    }

    let mobileRef = document.querySelector("#mobile");
    let mobile = mobileRef.value;
    if(mobile == "")
    {
        mobileRef.classList.add("border-danger");
        return;
    }else{
        mobileRef.classList.add("border-warning");
    }

    let emailRef = document.querySelector("#email");
    let email = emailRef.value;
    if(email == "")
    {
        emailRef.classList.add("border-danger");
        return;
    }else{
        emailRef.classList.add("border-warning");
    }
    
    let textRef = document.querySelector("#query");
    let text = textRef.value;
    if(text == "")
    {
        textRef.classList.add("border-danger");
        return;
    }else{
        textRef.classList.add("border-warning");
    }

    alert("Submitted Successfully");

    fnameRef.value="";
    lnameRef.value="";
    mobileRef.value="";
    emailRef.value="";
    textRef.value="";
}