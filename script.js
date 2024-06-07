function menu_bar(){
    const toggle_button=document.querySelector(".toggle-btn");
    const button_icon=document.querySelector(".toggle-btn i");
    const menu_list=document.querySelector(".nav-links");
    
    toggle_button.onclick=function() {
        menu_list.classList.toggle("open");
        const is_open=menu_list.classList.contains("open");
        button_icon.classList=is_open? "ri-close-line" : "ri-menu-line";
}
}
menu_bar();