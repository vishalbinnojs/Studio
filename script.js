      const menu = document.getElementById("menu-toggle");
      const navLinks = document.getElementsByClassName("links");
      const authentication = document.getElementsByClassName("auth");
      const nav = document.getElementsByTagName("nav");
    
      menu.addEventListener("click", () => {
          navLinks[0].classList.toggle("show");
          authentication[0].classList.toggle("show");
          
          
        });
        
        document.addEventListener("click",(e)=>{
            if(!navLinks[0].contains(e.target) &&
             !authentication[0].contains(e.target) &&
             !menu.contains(e.target)){
              navLinks[0].classList.remove("show");
        authentication[0].classList.remove("show");
        
            }
        });