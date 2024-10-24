
const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('submit', function (event) {
    event.preventDefault();


    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();


    if (!firstName || !lastName || !email || !phone || !password) {
        alert('Please fill in all the fields.');
        return;
    }


    const formData = {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phone,
        password: password,
    };


    console.log(formData);

});
