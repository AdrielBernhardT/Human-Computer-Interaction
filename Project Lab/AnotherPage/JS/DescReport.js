let form = document,getElementById('container')

form.addEventListener('submit', function(event) {
    event.preventDefault();

    let server = document.getElementById("server");
    let desc = document.getElementById("Desc");

    if(server.value == "" || desc.value == ""){
        alert("Please fill in all fields");
        return;
    }

    alert('Login successful');
    form.reset();
    window.location.href = "DescReport.html";
});