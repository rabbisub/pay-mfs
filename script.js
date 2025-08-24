// login button functionality
document.getElementById('loginButton').addEventListener('click', function(e){
    e.preventDefault();
    const mobileNumber = 17731664060;
    const pin = 1234;
    const mobileInputField = document.getElementById('mobile-number').value;
    const pinInputField = document.getElementById('pin-number').value;
    const mobileInput = parseInt(mobileInputField);
    const pinInput = parseInt(pinInputField);

    if(mobileInput === mobileNumber && pinInput === pin){
        window.location.href = 'dashboard.html';
    }else{
        alert('Invalid user');
    }

});


