const wrapper = document.querySelector('.wrapper');
const registerlink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');

registerlink.onclick = () => {
    wrapper.classList.add('active');
}

loginLink.onclick = () => {
    wrapper.classList.remove('active');
}