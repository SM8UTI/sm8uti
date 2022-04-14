var typed = new Typed(".auto-input",{
    strings:["Ethical Hacker.","Cyber Security Researcher.","Web Developer.","Photographer."],
    typeSpeed:100,
    backSpeed:100,
    loop:true
})

function toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
}
