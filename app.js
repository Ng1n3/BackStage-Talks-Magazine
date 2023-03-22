const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.body.style.backgroundColor = entry.target.dataset.color;
        };
    });
};

const issues = document.querySelectorAll('.issue');
const observer = new IntersectionObserver(callback, {threshold: .25});

issues.forEach(issue => {
    observer.observe(issue);
});

// for(let i = 0; i < issues.length; i++) {
//     issues[i].style.fontWeight = 700;
// }