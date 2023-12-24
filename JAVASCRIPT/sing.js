function layThongTin (){
    var user = document.getElementById('username').value;
    var password1 = document.getElementById('password1').value;
    var password2 = document.getElementById('password2').value;
    var checkpass = document.getElementById('checkpassword');
    if (password1.length < 8){
        checkpass.innerHTML = "Mật khẩu tổi thiểu phải chứa 8 ký tự!";
        checkpass.style.display = "block";
        console.log('false');
    }
    if (password1 != password2){
        checkpass.innerHTML = "Vui lòng kiểm tra lại mật khẩu!";             
        checkpass.style.display = "block";
       
    }
    else {
        checkpass.style.display = "";
    }
    if (user == ''){
        var myDiv = document.getElementById('username');
        myDiv.classList.add('is-invalid');
        
    }
    else {
        var myDiv = document.getElementById('username');
        myDiv.classList.remove('is-invalid');
    }
    if (password1 == ''){
        var myDiv = document.getElementById('password1');
        myDiv.classList.add('is-invalid');
    }
    else {
        var myDiv = document.getElementById('password1');
        myDiv.classList.remove('is-invalid');
    }
    if (password2 == ''){
        var myDiv = document.getElementById('password2');
        myDiv.classList.add('is-invalid');  
    }
    else {
        var myDiv = document.getElementById('password2');
        myDiv.classList.remove('is-invalid');
    }
    if (user != '' && password1 != '' && password2 != '' && password1 == password2 && password1.length > 7 && password2.length > 7){
        setTimeout(function() {
            window.location.href = "../HTML/successlogin.html";
        }, 500);
    }
}
