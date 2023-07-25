function animation() {
    const animationBtn = document.querySelector(".btn") as HTMLButtonElement;
    const animationNavMenu = document.querySelector(".nav_menu") as HTMLUListElement; 

    animationBtn.classList.toggle("active")
    animationNavMenu.classList.toggle("active")
}
