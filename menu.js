function oppened() {
    let menu = document.getElementsByClassName("menu");


    if (menu.classList.contains("menu-opened")) {
        
        
        menu.classList.add("menu-opened");
    } else {
       
       
        menu.classList.remove("menu-opened")
    }
}
