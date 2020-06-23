const inputEmail = document.getElementById('input-email');
inputEmail.addEventListener('change', (e) => {
    console.log(inputEmail.value);
    const emailError = document.getElementById('emailError');
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
});

inputEmail.addEventListener('focus', (e) => {
    console.log("You have focus");
    //inputEmail.style.background = 'pink'    ;
    inputEmail.style.background.image = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAkCAYAAADo6zjiAAAAAXNSR0IArs4c6QAAAbNJREFUWAntV8FqwkAQnaymUkpChB7tKSfxWCie/Yb+gbdeCqGf0YsQ+hU95QNyDoWCF/HkqdeiIaEUqyZ1ArvodrOHxanQOiCzO28y781skKwFW3scPV1/febP69XqarNeNTB2KGs07U3Ttt/Ozp3bh/u7V7muheQf6ftLUWyYDB5yz1ijuPAub2QRDDunJsdGkAO55KYYjl0OUu1VXOzQZ64Tr+IiPXedGI79bQHdbheCIAD0dUY6gV6vB67rAvo6IxVgWVbFy71KBKkAFaEc2xPQarXA931ot9tyHphiPwpJgSbfe54Hw+EQHMfZ/msVEEURjMfjCjbFeG2dFxPo9/sVOSYzxmAwGIjnTDFRQLMQAjQ5pJAQkCQJ5HlekeERxHEsiE0xUUCzEO9AmqYQhiF0Oh2Yz+ewWCzEY6aYKKBZCAGYs1wuYTabKdNNMWWxnaA4gp3Yry5JBZRlWTXDvaozUgGTyQSyLAP0dbb3DtQlmcan0yngT2ekE9ARc+z4AvC7nauh9iouhpcGamJeX8XF8MaClwaeROWRA7nk+tUnyzGvZrKg0/40gdME/t8EvgG0/NOS6v9NHQAAAABJRU5ErkJggg==')";
    inputEmail.style.background.repeat = "no-repeat"; 
    inputEmail.style.background.attachment = "scroll"; 
    inputEmail.style.background.size = "16px 18px";
    inputEmail.style.background.position = "98% 50%"; 
    inputEmail.style.cursor = "auto";
});
