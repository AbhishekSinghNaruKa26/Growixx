const navLinks = document.querySelector('.nav-links')
function onToggleMenu(e){
    e.name = e.name == 'menu' ? 'close': 'menu'
    navLinks.classList.toggle('top-[9%]')
}
const scroll=ScrollReveal(
    {
        reset:true,
        duration:2600,
        distance:'60px'
    })
    scroll.reveal('.text-transfer',{
        delay:600,
        origin:'bottom'
    })

    scroll.reveal('.text2',{
        delay:900,
        origin:'bottom'
    })


    let section= document.querySelectorAll('section')
    let navlink= document.querySelectorAll('a header nav ')
    window.onscroll=()=>{
        section.forEach(sec=>{
            let top=window.scrollY;
            let offset=sec.offsetTop-150;
            let height=sec.offsetHeight;
            let id=sec.getAttribute('id');
            if(top>offset && top<offset + height){
                navlink.forEach(links=>{
                    links.classList.remove('active')
                    document.querySelector('a[href*='+id+'] header nav ').classList.add('active')
                })
            }
        })
    }


    let valueDisplays= document.querySelectorAll(".num");
    let interval= 1000;

    valueDisplays.forEach((valueDisplays)=>{
        let startValue= 0;
        let endValue= parseInt(valueDisplays.getAttribute("data-val"));
        let duration=Math.floor(interval / endValue);
        let counter = setInterval(function (){
            startValue += 1;
            valueDisplays.textContent = startValue;
            if(startValue == endValue){
                clearInterval(counter);
            }
            
        },duration);
    });


    /* login & registration form */
    // Modal Close Button
    const closeModal = document.getElementById('close-btn');
    const modal = document.getElementById('form-modal');
    
    // Toggle between login and register forms
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const toggleToRegister = document.getElementById('toggle-to-register');
    const toggleToLogin = document.getElementById('toggle-to-login');
    
    // Show login form and hide register form
    loginTab.addEventListener('click', () => {
      loginTab.classList.add('text-blue-600');
      registerTab.classList.remove('text-blue-600');
      loginForm.classList.remove('hidden');
      registerForm.classList.add('hidden');
      toggleToLogin.classList.add('hidden');
      toggleToRegister.classList.remove('hidden');
    });

    // Show register form and hide login form
    registerTab.addEventListener('click', () => {
      registerTab.classList.add('text-blue-600');
      loginTab.classList.remove('text-blue-600');
      registerForm.classList.remove('hidden');
      loginForm.classList.add('hidden');
      toggleToRegister.classList.add('hidden');
      toggleToLogin.classList.remove('hidden');
    });

    // Show registration form when "Register" link is clicked
    toggleToRegister.addEventListener('click', () => {
      registerTab.click();
    });

    // Show login form when "Login" link is clicked
    toggleToLogin.addEventListener('click', () => {
      loginTab.click();
    });

    // Close the modal when the close button is clicked
    closeModal.addEventListener('click', () => {
      modal.style.display = 'none' ;
    });

    // Password match validation for register form
    document.getElementById('register-form').addEventListener('submit', function(e) {
      const password = document.getElementById('register-password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      
      if (password !== confirmPassword) {
        e.preventDefault();
        alert('Passwords do not match!');
      }
    });

    // Login form validation (empty field check)
    document.getElementById('login-form').addEventListener('submit', function(e) {
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      
      if (!email || !password) {
        e.preventDefault();
        alert('Both fields are required!');
      }
    });
    
    function showForms() {
        const modal = document.getElementById('form-modal');
        modal.classList.remove('hidden');
        document.getElementById('login-form').classList.remove('hidden');
        document.getElementById('register-form').classList.remove('hidden');
        document.getElementById('login-form').classList.add('block');
        document.getElementById('register-form').classList.add('block');
      }