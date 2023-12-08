const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        // } else {
        //     entry.target.classList.remove('show');
        }
    });
});
hiddenElements.forEach((el) => observer.observe(el));




const slide = document.querySelectorAll('.hidden-showslideR');

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('showslideR');
        // } else {
        //     entry.target.classList.remove('showslideR');
        }
    });
});
slide.forEach((el) => observer2.observe(el));