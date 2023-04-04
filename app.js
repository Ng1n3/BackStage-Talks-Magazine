const selectedStores = document.getElementById('selected-stores')
const callback = (entries, observer) => {

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.body.style.backgroundColor = entry.target.dataset.color;
      // selectedStores.style.color = '#fff';
      if(document.body.style.backgroundColor !== '#fff') {
        selectedStores.style.color= '#fff';
      } else {
        selectedStores.style.color = '#e568ac';
      }
    }
  });
};

const issues = document.querySelectorAll('.issue');
const issuesRefs = document.querySelectorAll('#issue-ref');
const observer = new IntersectionObserver(callback, { threshold: 0.25 });

issues.forEach(issue => {
  observer.observe(issue);
});

