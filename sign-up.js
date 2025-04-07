const userPSWD = document.getElementById('user-pswd');

const confirmPSWD = document.getElementById('pswd-confirm');

function togglePassword() {
    let x = userPSWD
    if (x.type === 'password') {
        x.type = 'text';
    }
    else {
        x.type = 'password';
    }

    let y = confirmPSWD
    if (y.type === 'password') {
        y.type = 'text';
    }
    else {
        y.type = 'password';
    }
}