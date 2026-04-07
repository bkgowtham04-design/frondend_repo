
function togglePassword() {
    const pass = document.getElementById("password");
    const btn = document.getElementById("main");

    if (pass.type === "password") {
        pass.type = "text";
        btn.innerText = "Hide";
    } else {
        pass.type = "password";
        btn.innerText = "Show";
    }
}
        