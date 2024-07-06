var flag=0;
var menu=document.querySelector("#menucontroller");
function opener(){
    menu.addEventListener("click",function(){
        if(flag===0)
        {
            gsap.to("#opener",{
                left:0,
                duration:1.5,
                ease: Expo.easeInOut,
                onanimationstart:function(){
                    menu.innerHTML=`<i class="ri-close-fill"></i>`;
                }
            })
            flag=1;
        }
        else
        {
            gsap.to("#opener",{
                left:"-75%",
                duration:1.5,
                ease: Expo.easeInOut,
                onanimationstart:function(){
                    menu.innerHTML=`<i class="ri-menu-line"></i>`;
                }
            })
            flag=0;
        }
    })
}
opener();

document.querySelectorAll(".section").forEach(function(section){
    section.addEventListener("click",function(){
        flag=1;
        menu.click();
    })
})

var clut = "";
document.querySelector("#section2 #s2right p").textContent.split("")
.forEach(function(tex){
    if(tex ==="*")
    {
        clut += `<span><br><br></span>`
    }
    else
    {
        clut += `<span>${tex}</span>`        
    }
})
document.querySelector("#section2 #s2right p").innerHTML = clut
gsap.from("#section2 #s2right p>span",{
    scrollTrigger:{
        trigger:"#section2 #s2right p",
        start:"top 95%",
       scrub:2,
        end:"bottom 90%",
        // markers:true
        
    },
    opacity:0,
    stagger:.02,
    y:50
    
})


function loader1(){
    var a = 0.00;
    setInterval(function(){
        if(a<90.00)
        {
            document.querySelector("#matric>h1").innerHTML=a;
            a=a+0.5;
        }
        else
        {
            document.querySelector("#matric>h1").innerHTML="90.00";
        }
    },15)
}
function loader2(){
    var a = 0.00;
    setInterval(function(){
        if(a<79.00)
        {
            document.querySelector("#inter>h1").innerHTML=a;
            a=a+0.5;
        }
        else
        {
            document.querySelector("#inter>h1").innerHTML="79.00";
        }
    },15)
}
function loader3(){
    var a = 0.00;
    setInterval(function(){
        if(a<8.85)
        {
            document.querySelector("#grad>h1").innerHTML=a;
            a= Math.ceil((a+0.02)*100)/100;
        }
        else
        {
            a =8.85;
            document.querySelector("#grad>h1").innerHTML=a;
        }
    },5)
}

gsap.to("#matric",{
    scrollTrigger:{
        trigger: "#matric",
        start: "top 80%",
        // markers: true,
    },
    onComplete: function(){
        loader1();
    }
})

gsap.to("#inter",{
    scrollTrigger:{
        trigger: "#inter",
        start: "top 80%",
        // markers: true,
    },
    onComplete: function(){
        loader2();
    }
})

gsap.to("#grad",{
    scrollTrigger:{
        trigger: "#grad",
        start: "top 80%",
        // markers: true,
    },
    onComplete: function(){
        loader3();
    }
})




