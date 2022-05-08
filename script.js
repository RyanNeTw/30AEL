window.addEventListener("DOMContentLoaded", () => {


    function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
    }
    function changeColor(newColor) {
    document.body.style.backgroundColor = newColor;
    }

    function run() {
    setTimeout(stop(), 100);

    setInterval(() => {
        let colour = getRandomColor();
        changeColor(colour);
    }, 2000);
    }




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
    let n = document.querySelector(".n")
    let hello = document.querySelector(".hello")
    let Nspace2 = document.querySelector(".Nspace2")
    let two = document.querySelector(".two")
    let zero = document.querySelector(".zero")
    let video = document.querySelector(".video")
    let img = document.querySelector(".img")
    let spaceAfter = document.querySelector(".spaceAfter")
    let dotOne = document.querySelector(".dotOne")
    let dotTwo = document.querySelector(".dotTwo")
    let dotThree = document.querySelector(".dotThree")
    let spaceAfterDots = document.querySelector(".spaceAfterDots")
    let S = document.querySelector(".S")
    let spoil = document.querySelector(".spoil")
    let dotS = document.querySelector(".dotS")
    let V = document.querySelector(".V")
    let dotV = document.querySelector(".dotV")
    let P = document.querySelector(".P")
    let spaceP = document.querySelector(".spaceP")
    let pe1 = document.querySelector(".pe1")
    let pe2 = document.querySelector(".pe2")
    
    





    //1 - 17
    buttonJ.addEventListener("click",function(){
        j.style.display = "flex"
        iziToast.show({
            title: "Hello",
            message: "World"
        }); 
    })
    //2
    buttonEj.addEventListener("keydown",function(){
        Ej.style.display = "flex"
        buttonEj.style.backgroundColor = "red";
    })
    //3 - 20
    buttonEj.addEventListener("mouseenter",function(){
        JspaceM.style.display = "flex"    
    })
    //4 - 21
    buttonJ.addEventListener("mouseout",function(){
        m.style.display = "flex"
    })
    //5 - 22
    hello.addEventListener("mousemove",function(){
        Em.style.display = "flex"
    })
    //6 - 23
    body.addEventListener("wheel",function(){
        r.style.display = "flex"
    })
    //7 -19
    buttonEj.addEventListener("select",function(){
        i.style.display = "flex"
    })
    //8 - 26
    window.addEventListener("resize",function(){
        t.style.display = "flex"
    })
    //9 - 25
    buttonEj.addEventListener("mouseover",function(){
        Et.style.display = "flex"
    })
    //10 - 16
    body.addEventListener("dblclick",function(){
        EspaceU.style.display = "flex"
    })
    //11 -24
    body.addEventListener("copy",function(){
        u.style.display = "flex"
    })
    //12 - 18
    hello.addEventListener("contextmenu",function(){
        n.style.display = "flex"
    })
    //13    
    video.addEventListener("playing",function(){
        Nspace2.style.display = "flex"
    })
    //14
    video.addEventListener("play",function(){
        zero.style.display = "flex"
        run()
    })
    //15
    video.addEventListener("pause",function(){
        two.style.display = "flex" 
        Swal.fire('Hello')
    })
    //16
    hello.addEventListener("dblclick",function(){
        n.style.display = "flex"
    })
    //17
    img.addEventListener("click",function(){
        spaceAfter.style.display = "flex"
        setTimeout(() => {
            img.src = "https://www.laboutique-onepiece.com/_i/136023/p%7B1000%7D-64816/2915/19/10-choses-savoir-gear-5-luffy-one-piece-blog-7.jpeg"
        }, 2000);
    })
    //18
    img.addEventListener("contextmenu",function(){
        dotOne.style.display = "flex"
    })
    //19
    spoil.addEventListener("select",function(){
        dotOne.style.display = "flex"
    })
    //20
    img.addEventListener("mouseenter",function(){
        dotTwo.style.display = "flex"    
    })
    //21
    img.addEventListener("mouseout",function(){
        dotThree.style.display = "flex"    
    })  
    //22
    img.addEventListener("mousemove",function(){
        spaceAfterDots.style.display = "flex"    
    })    
    //23
    img.addEventListener("wheel",function(){
        S.style.display = "flex"    
    })  
    //24
    spoil.addEventListener("copy",function(){
        dotS.style.display = "flex"    
    })  
    //25
    spoil.addEventListener("mouseover",function(){
        V.style.display = "flex"    
    }) 
    //26
    window.addEventListener("resize",function(){
        dotV.style.display = "flex"
    })
    //27
    window.addEventListener("mousedown",function(){
        P.style.display = "flex"
    })
     //28
     buttonJ.addEventListener("mousedown",function(){
        spaceP.style.display = "flex"
    })
     //29
    buttonEj.addEventListener("mouseleave",function(){
        pe1.style.display = "flex"
    })
    //30
    video.addEventListener("mouseleave",function(){
        pe2.style.display = "flex"
    })





  })