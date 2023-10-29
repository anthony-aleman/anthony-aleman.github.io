//next thing to do is add in a function for clicking on the hamburger icon to pop the navbar up


let mainNavBar = document.getElementById('js-main-menu')
let navBarToggle = document.getElementById('js-nav-toggle')
let mainSection = document.querySelector("section") // Selecting the section
let isNavbarOpen = false

navBarToggle.addEventListener('click', function(){
        

        if(mainNavBar.className === 'active'){
                mainNavBar.className = 'main-nav'
                isNavbarOpen = true
        } else {
                mainNavBar.className = 'active'
                isNavbarOpen = false
        }
        console.log(mainNavBar.className)

        if(isNavbarOpen){
                mainSection.style.marginTop = '0px'
                
        } else {
                mainSection.style.marginTop = '100px'
               
        }
});

