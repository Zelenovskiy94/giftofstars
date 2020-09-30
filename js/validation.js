 let emailForm = document.querySelector('#email-form')
 emailForm.onblur = function() {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!reg.test(emailForm.value)) {
        emailForm.parentElement.className = 'email-not-valid'
    } else {
        emailForm.parentElement.className = ''
        return true
    }  
 }