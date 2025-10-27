 
        let abo = document.querySelector("#box a ,#overlay a")
abo.addEventListener("click",function(){
  alert("Home")
})
let icon = document.querySelector("#icon i")
let over = document.querySelector("#overlay")

let flag=0;
icon.addEventListener("click",function(){
  if(flag==0){
    overlay.style.top="0%"
    document.querySelector("#overlay").style.hight = "top 100%"
  document.querySelector("#page1 h2").style.opacity="0"
    
    flag=1
  }
  else{
    overlay.style.top="-100%"
    document.querySelector("#overlay").style.hight = "top -100%"
document.querySelector("#page1 h2").style.opacity="1"
    flag=0
  }
   
})



function lubimoto() {
  let tl =gsap.timeline()
tl.from("#box img",{
  y:100,
  opacity:0,
  stagger:1,
scrollTrigger:{
    trigger:"#box img",
    scrub:1,
start:"top 35%",
end:"botton 20%",

}
})
.to("#text h1,p",{
  opacity:1,
  rotateX:0,
  scrollTrigger:{
    trigger:"#text h1,p",
    scrub:2,
start:"top 50%",
end:"botton 20%",
  }
  
},"a")
.to("#page2 img",{
  scale:1.4,
  scrollTrigger:{
    trigger:"#page2 img",
    scrub:1,
start:"top 50%",
opacity:0,
end:"botton 20%",
  }
  
},"a")

.to(" #img1 img",{
  scale:0,
 opacity:0,
  scrollTrigger:{
    trigger:" #img1 img ",
    scrub:1,
    start:"top 10%",
    end:"bottom 40%",
    stagger:-1,

   
  }
})
.from(" #img2 img",{
  scale:0.8,
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:" #img2 img ",
    scrub:1,
    start:"top 40%",
    end:"bottom 50%",
    stagger:-1,
    
   
  }
})
gsap.to(".pic img",{
y:10,
opacity:1,

  scrollTrigger:{
    trigger:".pic img",
    scrub:1,
    start:"top 90%",
    end:"bottom -30%",
    stagger:-1,
   
  }
})
}
lubimoto()

    