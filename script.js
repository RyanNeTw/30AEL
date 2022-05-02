window.addEventListener("DOMContentLoaded", () => {
    let j = document.querySelector(".j")
    let buttonJ = document.querySelector(".buttonJ")
    let Ej = document.querySelector(".Ej")
    let buttonEj = document.querySelector(".buttonEj")
    let JspaceM = document.querySelector(".JspaceM")
    let m = document.querySelector(".m")
    let Em = document.querySelector(".Em")
    let body = document.querySelector(".body")
    let r = document.querySelector(".r")
    let i = document.querySelector(".i")
    let t = document.querySelector(".t")
    let Et = document.querySelector(".Et")
    let EspaceU = document.querySelector(".EspaceU")
    let u = document.querySelector(".u")






    buttonJ.addEventListener("click",function(){
        j.style.display = "flex"
    })
    buttonEj.addEventListener("keydown",function(){
        Ej.style.display = "flex"
        buttonEj.style.backgroundColor = "red";
    })
    buttonEj.addEventListener("mouseenter",function(){
        JspaceM.style.display = "flex"    
    })
    buttonJ.addEventListener("mouseout",function(){
        m.style.display = "flex"
    })
    body.addEventListener("mousemove",function(){
        Em.style.display = "flex"
    })
    body.addEventListener("wheel",function(){
        r.style.display = "flex"
    })
    buttonEj.addEventListener("select",function(){
        i.style.display = "flex"
    })
    window.addEventListener("resize",function(){
        t.style.display = "flex"
    })
    buttonEj.addEventListener("mouseover",function(){
        Et.style.display = "flex"
    })
    body.addEventListener("dblclick",function(){
        EspaceU.style.display = "flex"
    })
    body.addEventListener("copy",function(){
        u.style.display = "flex"
    })










  });