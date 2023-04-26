document.title = " SHOW PASSCODE"

const passcodeInput = document.getElementById("password")

const togglePasscode = () => {
    if (passcodeInput.type === "password") {
        passcodeInput.type = "text"
        label.textContent = "SHOW PASSCODE"
    } else {
        passcodeInput.type = "password" 
        label.textContent = "HIDE PASSCODE"
    }
}