console.log("Starting")

const page1Div = document.querySelector(".page1-div");
const page2Div = document.querySelector(".page2-div");
const page3Div = document.querySelector(".page3-div");
const n1 = document.querySelector(".n1");
const n2 = document.querySelector(".n2");
const n3 = document.querySelector(".n3");
const nav = document.querySelector(".nav")
 const nav2 = document.querySelector("#nav2");
const section1Div = document.querySelector(".section1-div");
const logo2 = document.querySelector("#logo2");
const page = document.querySelector(".page")
const btnA = document.querySelector(".btn-div2a")
const btnC = document.querySelector("#btnContainer")
const ThirdBtn = document.querySelector("#btnContainer2")
const FouthBtn = document.querySelector("#btnContainer3")
const NavBtn = document.querySelector("#btn-div")
const BookNowBtn = document.querySelector("#btn-bookNow2")

// function test () {
//     var scrollValue = window.scrollY;

// console.log(scrollValue)
    
// }

//  window.addEventListener("scroll",test);

BookNowBtn.addEventListener("mouseover",function(e) {
    BookNowBtn.classList.remove("btn-bookNow") 
    BookNowBtn.classList.add("btn-bookNow2")
    

    
})

BookNowBtn.addEventListener("mouseout",function(e) {
    BookNowBtn.classList.remove("btn-bookNow2")
    BookNowBtn.classList.add("btn-bookNow")

    
})
NavBtn.addEventListener("mouseover",function(e) {
    NavBtn.classList.remove("btn-div") 
    NavBtn.classList.add("btn-divA")
    

    
})

NavBtn.addEventListener("mouseout",function(e) {
    NavBtn.classList.remove("btn-divA")
    NavBtn.classList.add("btn-div")

    
})

btnC.addEventListener("mouseover",function(e) {
    btnC.classList.remove("btn-div2")
    btnC.classList.add("btn-div2a")

    
})

btnC.addEventListener("mouseout",function(e) {
    btnC.classList.remove("btn-div2a")
    btnC.classList.add("btn-div2")

    
})

// ThirdBtn.addEventListener("mouseover",function(e) {
//     ThirdBtn.classList.remove("btn-div3")
//     ThirdBtn.classList.add("btn-div3a")

    
//  })

// FouthBtn.addEventListener("mouseover",function(e) {
//     FouthBtn.classList.remove("btn-div4")
//     FouthBtn.classList.add("btn-div4a")

    
// })

    setTimeout(function() {
        page1Div.style.display = "none"
         page2Div.style.display = "block"
          n1.style.backgroundColor = "#fff"
         n2.style.backgroundColor = "#EB3007"
         
    },6000)

 
    setTimeout(function() {
        page2Div.style.display = "none"
         page3Div.style.display = "block"
         n2.style.backgroundColor = "#fff"
         n3.style.backgroundColor = "#EB3007"
    },12000)


    setTimeout(function() {
        page3Div.style.display = "none"
         page1Div.style.display = "block"
         n3.style.backgroundColor = "#fff"
         n1.style.backgroundColor = "#EB3007"
    },18000)







window.addEventListener("scroll",function(e) {
    scrollValue = window.scrollY
    if (scrollValue < 0.000031){
        nav2.classList.remove("bgchange")
        logo2.classList.remove("chbglogo")
        // section1Div.classList.remove("page1-div")
        //page1Div.style.display = "block"

    }else {
    nav2.classList.add("bgchange")
    logo2.classList.add("chbglogo")
    }
     
});

