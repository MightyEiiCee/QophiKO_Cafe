var icon = document.getElementById("sun");
    var logo = document.getElementById("mylogo");
    // var bg = document.getElementById("ellipse-light");
    icon.onclick = function(){
        document.body.classList.toggle("light-theme");
        if (document.body.classList.contains("light-theme")){
            icon.src = "images/mode/sun.png";
            logo.src="images/FINAL - LOGO/LogoDark.png";
           
        }
        else{
            icon.src = "images/mode/moon.png";
            logo.src="images/FINAL - LOGO/LogoLight.png";
            // bg.src = "images/bg/Ellipse-coffee.png";
        }
    }   