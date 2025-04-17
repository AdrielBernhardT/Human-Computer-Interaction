let form = document.getElementById('container');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById("Username");
    let password = document.getElementById("Pass");

    if(username.value == "" || password.value == ""){
        alert("Please fill in all fields");
        return;
    }

    if(password.value.length < 8){
        alert("Password must be at least 8 characters long");
        return;
    }

    alert('Login successful');
    form.reset();
    window.location.href = "DescReport.html";
});
    
