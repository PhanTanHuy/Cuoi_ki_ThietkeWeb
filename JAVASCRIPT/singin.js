function layThongTin (){
    var user = document.getElementById('username').value;
    var password1 = document.getElementById('password').value;
    if (user == ''){
        var myDiv = document.getElementById('username');
        myDiv.classList.add('is-invalid');
        
    }
    else {
        var myDiv = document.getElementById('username');
        myDiv.classList.remove('is-invalid');
    }
    if (password1 == ''){
        var myDiv = document.getElementById('password');
        myDiv.classList.add('is-invalid');
    }
    else {
        var myDiv = document.getElementById('password');
        myDiv.classList.remove('is-invalid');
    }
    if (user  != '' && password1 != ''){
        setTimeout(function() {
            window.location.href = "../HTML/trangchu.html";
        }, 1000);
    }
}
