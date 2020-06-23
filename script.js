const inputEmail = document.getElementById('input-email');
inputEmail.addEventListener('change', (e) => {
    console.log(inputEmail.value);
    const emailError = document.getElementById('emailError');
    console.log(inputEmail.dataset.status);
    if (inputEmail.dataset.status === "unset") {
        const errorText1 = document.createElement('p');
        errorText1.innerHTML = "This is text 1";
        emailError.appendChild(errorText1);
        const errorText2 = document.createElement('p');
        errorText2.innerHTML = "This is text 2";
        emailError.appendChild(errorText2);
        const errorText3 = document.createElement('p');
        errorText3.innerHTML = "This is text 3";
        emailError.appendChild(errorText3);
        const errorText4 = document.createElement('p');
        errorText4.innerHTML = "This is text 4";
        emailError.appendChild(errorText4);
        emailError.style.height = "auto";
        
        emailError.style.visibility = "visible";
    }
    //console.log(e);
});