document.addEventListener("DOMContentLoaded",function() {
    var menu = document.querySelectorAll('div.nav_sticky');
    var menu = menu[0];
        //Truy xuất div menu
        var trangthai="duoi145";
    window.addEventListener("scroll",function(){
        var x = pageYOffset;
        if(x > 145){
            if(trangthai == "duoi145")
            {
                trangthai="tren145";
                menu.classList.add('nav_sticky-showbar');
            }
        }
        else{
            if(trangthai=="tren145"){
            menu.classList.remove('nav_sticky-showbar');
            trangthai="duoi145";}
        }
    
    })
})


