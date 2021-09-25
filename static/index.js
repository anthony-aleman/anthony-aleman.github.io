//next thing to do is add in a function for clicking on the hamburger icon to pop the navbar up


let mainNavBar = document.getElementById('js-main-menu')
let navBarToggle = document.getElementById('js-nav-toggle')


navBarToggle.addEventListener('click', function(){
        if(mainNavBar.className === 'active'){
                mainNavBar.className = 'main-nav'
        } else {
                mainNavBar.className = 'active'
        }
        console.log(mainNavBar.className)
});

