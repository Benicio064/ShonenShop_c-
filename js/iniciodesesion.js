
function login() {

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    console.log(email);
    console.log(password);

    if(email == "zapallito123@gmail.com" && password == "1234"){
    alert("Te vas a loguear");

    /* location.href = "perfil.html"; */
    }else{
        alert("Email o Password incorrectos");
        /* location.href = "error.html" */
    }

}