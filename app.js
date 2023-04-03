
const callback = (entries, observer) => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.style.backgroundColor = entry.target.dataset.color;
    }
  });
};

const issues = document.querySelectorAll('.issue');
const issuesRefs = document.querySelectorAll('#issue-ref');
const observer = new IntersectionObserver(callback, { threshold: 0.25 });

issues.forEach(issue => {
  observer.observe(issue);
});

