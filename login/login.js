const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});
loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
});
function redirectToHome(event) {
  event.preventDefault(); // Prevent the form from submitting in the default way
  window.location.href = 'index.html'; // Replace 'home.html' with the URL of your home page
  return false;}
  document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded');
    const progressBars = document.querySelectorAll('.progress-bar');
    console.log(progressBars); // Check if progress bars are selected
    progressBars.forEach(bar => {
        const goal = bar.getAttribute('data-transitiongoal');
        setTimeout(() => {
            bar.style.width = goal + '%';
            bar.textContent = goal + '%';
        }, 2000); // Adding a slight delay to ensure it animates after loading
    });
  });
  
  var tablinks = document.getElementsByClassName("tab-links")
  var tabcontents = document.getElementsByClassName("tab-contents")
  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
  
  }
.  