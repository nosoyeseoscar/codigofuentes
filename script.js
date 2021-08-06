const d = document,
w = window;
const navBar = d.querySelector(".navbar")
const spanlogo = d.getElementById("spanLogo")
const link=d.querySelectorAll("a")
const linkMenu=d.querySelectorAll(".a")
const panelBtn = d.getElementById("panel-btn")
const navBarContainer = d.querySelector(".navbar__container")
const menu = d.querySelector(".menu")
const $scrollBtn = d.querySelector(".scroll-top-btn")
/* const icon = d.querySelector(".fas") */
const inputs = document.querySelectorAll(".main [required]")
const form = document.querySelector(".main__form")
const mensaje =document.getElementById("mensaje")
const button = document.querySelector(".form__button")
const label = document.getElementById("label")
const textarea = document.getElementById("textarea")

const content = d.querySelector(".content")
const close = d.querySelector(".close-btn")

const pModal=d.querySelector(".pattern")

/* menu hamburguesa

export default function hambMenu(panelBtn, panel,menu){
    const d = document;
   //  const panelId = d.getElementById("panel-btn") 
    //hambMenu(".panel-btn",".panel",".link")

   d.addEventListener("click",e=>{
    if(e.target.matches(panelBtn)||e.target.matches(`${panelBtn} *`)){
        d.querySelector(panel).classList.toggle("is-active")
        d.querySelector(panelBtn).classList.toggle("is-active")
    }
    if(e.target.matches(menu)){
        d.querySelector(panel).classList.remove("is-active")
        d.querySelector(panelBtn).classList.remove("is-active")
    }
})

}
*/



panelBtn.addEventListener("click",()=>{
    menu.classList.toggle("menu--active")
/*     icon.classList.toggle("active") */
})

linkMenu.forEach(x=>{
    menu.addEventListener("click",e=>{
       if(e.target.offsetParent.classList.contains("menu--active"))e.target.offsetParent.classList.remove("menu--active")
    })
})

w.addEventListener("scroll",()=>{
    if(this.scrollY > 30){
        navBar.classList.add("sticky")
        spanlogo.classList.replace("navbar__logo--span","navbar__logo--spanW")
        link.forEach(x=>x.classList.replace("navbar__link--a","navbar__link--white"))
       
    }else{
        navBar.classList.remove("sticky")
        spanlogo.classList.replace("navbar__logo--spanW","navbar__logo--span")
        link.forEach(x=>x.classList.replace("navbar__link--white","navbar__link--a"))
    }

    if(this.scrollY>500) $scrollBtn.classList.remove("hidden")
    else $scrollBtn.classList.add("hidden")

})


$scrollBtn.addEventListener("click",()=>{
    w.scrollTo({
                behavior:"smooth",
                top:0
              })
     })
    
mensaje.addEventListener("keyup",()=>{

 if(mensaje.nextElementSibling.classList.contains("mensaje")){
    mensaje.nextElementSibling.classList.replace("mensaje","mensaje-js")}
 
 if(mensaje.value.length<1){
    mensaje.nextElementSibling.classList.replace("mensaje-js","mensaje")}
 })


for (let i = 0; i < inputs.length; i++)
     inputs[i].addEventListener("keyup",()=>{
    if(inputs[i].nextElementSibling.classList.contains("form-label"))
        inputs[i].nextElementSibling.classList.replace("form-label","form-js")
    if (inputs[i].value.length<1) 
        inputs[i].nextElementSibling.classList.replace("form-js","form-label")
    
    })

d.addEventListener("submit",e=>{


    e.preventDefault();

  for (let i = 0; i < inputs.length; i++)
  if (inputs[i].value.length<1) {
    inputs[i].nextElementSibling.classList.replace("form-js","form-label") 
}

  textarea.classList.replace("mensaje-js","mensaje")

  fetch("https://formsubmit.co/ajax/gerardojao@gmail.com",{
      method:"POST",
      body: new FormData(e.target)
  })
    .then(res=>res.ok ? res.json() : Promise.reject(res))
    .then(json=>{
        console.log(json)
        content.classList.remove("content__hide")
        pModal.innerHTML =` ${inputs[0].value}`
        //console.log("hola")
    })
    .catch(err=>{
        console.log(err)
    })
   
})

close.addEventListener("click",()=>{
    content.classList.add("content__hide")
    form.reset()
})


