function layThongTin() {
    var user = document.getElementById('username').value;
    var password1 = document.getElementById('password').value;
    if (user == '') {
        var myDiv = document.getElementById('username');
        myDiv.classList.add('is-invalid');

    }
    else {
        var myDiv = document.getElementById('username');
        myDiv.classList.remove('is-invalid');
    }
    if (password1 == '') {
        var myDiv = document.getElementById('password');
        myDiv.classList.add('is-invalid');
    }
    else {
        var myDiv = document.getElementById('password');
        myDiv.classList.remove('is-invalid');
    }
    if (user != '' && password1 != '') {
        setTimeout(function () {
            window.location.href = "index.html";
        }, 1000);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    // Lấy đối tượng carousel
    var myCarousel = document.getElementById('carouselExampleCaptions');

    // Tự chuyển slide mỗi 7 giây
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 7000
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#backtop').fadeIn();
        } else {
            $('#backtop').fadeOut();
        }
    });
    $("#backtop").click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
    });
});