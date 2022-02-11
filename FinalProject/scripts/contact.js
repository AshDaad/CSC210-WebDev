var isSmallNumber = true;
var isSmallAddress = true;
var isSmallMail = true;
$(document).ready(function () {
    $("#contact_tabs").tabs({show: 'fade',hide: 'fade'});
});

function informCustomer(userInput){
    var name = userInput.nameBox.value;
    userInput.nameBox.value = '';
    userInput.emailBox.value = '';
    userInput.phoneBox.value = '';
    $('#formarea').val('');
    alert('Thanks for your submission, ' + name + '. We\'ll get in touch with you as soon as we can!');
}

function dostuffNumber(){
    if(isSmallNumber){
    $('#number').css("fontSize", "1.25em");
        isSmallNumber = false;
}   else{
    $('#number').css("fontSize", "1em");
    isSmallNumber = true;
}
}

function dostuffAddress(){
    if(isSmallAddress){
    $('#address').css("fontSize", "1.25em");
        isSmallAddress = false;
}   else{
    $('#address').css("fontSize", "1em");
    isSmallAddress = true;
}
}

function dostuffMail(){
    if(isSmallMail){
    $('#mailAddress').css("fontSize", "1.25em");
        isSmallMail = false;
}   else{
    $('#mailAddress').css("fontSize", "1em");
    isSmallMail = true;
}
}