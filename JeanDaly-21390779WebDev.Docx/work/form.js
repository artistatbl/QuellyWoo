
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');


// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


window.addEventListener("DOMContentLoaded", function () {
    
    //get the form eletments defined in your HTML above

var form = document.getElementById("form");
var stats = document.getElementById("stats");

// success and error function ofter submission
function success() {
    form.reset();
    stats.classList.add('success')
    stats.innerHTML = "Thank you for contacting us!"

}

function error() {
    stats.classList.add('error')
    stats.innerHTML = "Oops! There was a problem submitting your form!";

}

// handle the form submission success

form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
 });
});

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

const firstname = document.getElementById('firstname')
const email = document.getElementById('email')
const message = document.getElementById('message')
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    let messages = []
  if(firstname.value === '' || firstname.value === null){
    messages.push('name is required')
  }
  if(email.value.length <= 10){

    messages.push('Oops! There was a problem submitting your form!')
  }
  if(email.value.length >= 20){
    messages.push('Oops! There was a problem submitting your form!')
  }
  if(message.value.length <= 1) {
    e.preventDefault()
    messages.push('Oops! There was a problem submitting your form!')

  }
})


