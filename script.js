const scrol = document.querySelector(".scrol")


// scrol.addEventListener("click", () => {
//     window.scrollTo(0, 0)
// })


// window.addEventListener("scroll", () => {
//     if (window.scrollY >= 150 ) {
//         scrol.classList.add("active")
//     } else {
//         scrol.classList.remove("active")
//     }
// })


// scrol.addEventListener("click", () => {
//     window.scrollTo(0, 0)
// })


// window.addEventListener("scroll", () => {
//     if(window.scrollY >= 150) {
//         scrol.classList.add("active")
//     }else {
//         scrol.classList.remove("active")
//     }
// })



scrol.addEventListener("click", () => {
    window.scrollTo(0, 0)
})

window.addEventListener("scroll", () => {
    if(window.scrollY >= 150) {
        scrol.classList.add("active")
    } else {
        scrol.classList.remove("active")
    }
})



const menu = document.querySelector(".menu")
const bar = document.querySelector(".fa-bars")


bar.addEventListener("click", () => {
    menu.classList.toggle("active")
    bar.classList.toggle("active")
})


// const buttoms = document.querySelectorAll('.buttoms')
// const monthbotom = document.querySelectorAll('.monthbotom')


// for(let i = 0; i < buttoms.length; i++) {
//     const singlebutton = buttoms[i]
//     const singlemonth = monthbotom[i]
//     singlebutton.addEventListener("click", () => {
//         buttoms.forEach(val => {
//             val.classList.remove("active")
//         })
//         monthbotom.forEach(val => {
//             val.classList.remove("active")
//         })
//         singlebutton.classList.add("active")
//         singlemonth.classList.add("active")
//     })
// }


// const buttoms = document.querySelectorAll('.buttoms')
// const monthbotom = document.querySelectorAll('.monthbotom')



// for (let i = 0; i < buttoms.length; i++) {
//     const singlbottoms = buttoms[i]
//     const singlmonthbotom = monthbotom[i]

//     singlbottoms.addEventListener("click", () => {
//         buttoms.forEach(val => {
//             val.classList.remove("active")
//         })
//         monthbotom.forEach(val => {
//             val.classList.remove("active")
//         })
//         singlbottoms.classList.add("active")
//         singlmonthbotom.classList.add("active")
//     })
// }



// const buttoms = document.querySelectorAll('.buttoms')
// const monthbotom = document.querySelectorAll('.monthbotom')


// for(let i = 0; i < buttoms.length; i++) {
//     const singlbotom = buttoms[i]
//     const singlmonth = monthbotom[i]

//     singlbotom.addEventListener("click", () => {
//         buttoms.forEach(val => {
//             val.classList.remove("active")
//         })
//         monthbotom.forEach(val => {
//             val.classList.remove("active")
//         })
//         singlbotom.classList.add("active")
//         singlmonth.classList.add("active")
//     })
// }







// const buttoms = document.querySelectorAll('.buttoms')
// const monthbotom = document.querySelectorAll('.monthbotom')



// for(let i = 0; i < buttoms.length; i++) {
//     const singlb = buttoms[i]
//     const singlm = monthbotom[i]


//     singlb.addEventListener("click", () => {
//         buttoms.forEach(val => {
//             val.classList.remove("active")
//         })
//         monthbotom.forEach(val => {
//             val.classList.remove("active")
//         })
//         singlb.classList.add("active")
//         singlm.classList.add("active")
//     })
// }






// const buttoms = document.querySelectorAll('.buttoms')
// const monthbotom = document.querySelectorAll('.monthbotom')



// for(let i = 0; i < buttoms.length; i++) {
//     const bbbb = buttoms[i]
//     const mmmm = monthbotom[i]

//     bbbb.addEventListener("click", () => {
//         buttoms.forEach(val => {
//             val.classList.remove("active")
//         })
//         monthbotom.forEach(val => {
//             val.classList.remove("active")
//         })
//         bbbb.classList.add("active")
//         mmmm.classList.add("active")
//     })
// }





// const buttoms = document.querySelectorAll('.buttoms')
// const monthbotom = document.querySelectorAll('.monthbotom')



// for(let i = 0; i < buttoms.length; i++) {
//     const btm = buttoms[i]
//     const mon = monthbotom[i]

//     btm.addEventListener("click", () => {
//         buttoms.forEach(val => {
//             val.classList.remove("active")
//         })
//         monthbotom.forEach(val => {
//             val.classList.remove("active")
//         })

//         btm.classList.add("active")
//         mon.classList.add("active")
//     })
// }




// const buttoms = document.querySelectorAll('.buttoms')
// const monthbotom = document.querySelectorAll('.monthbotom')



// for(let i = 0; i < buttoms.length; i++) {
//     const singb = buttoms[i]
//     const singlm = monthbotom[i]

//     singb.addEventListener("click", () => {
//         buttoms.forEach(val => {
//             val.classList.remove("active")
//         })
//         monthbotom.forEach(val => {
//             val.classList.remove("active")
//         })
//         singb.classList.add("active")
//         singlm.classList.add("active")
//     })
// }





// const buttoms = document.querySelectorAll('.buttoms')
// const monthbotom = document.querySelectorAll('.monthbotom')



// for(let i = 0; i < buttoms.length; i++) {
//     const bbb = buttoms[i]
//     const mmm = monthbotom[i]

//     bbb.addEventListener("click", () => {
//         buttoms.forEach(val => {
//             val.classList.remove("active")
//         })
//         monthbotom.forEach(val => {
//             val.classList.remove("active")
//         })
//         bbb.classList.add("active")
//         mmm.classList.add("active")
//     })
// }





const buttoms = document.querySelectorAll('.buttoms')
const monthbotom = document.querySelectorAll('.monthbotom')



for(let i = 0; i < buttoms.length; i++) {
    const sinb = buttoms[i]
    const sinm = monthbotom[i]

    sinb.addEventListener("click", () => {
        buttoms.forEach(val => {
            val.classList.remove("active")
        })
        monthbotom.forEach(val => {
            val.classList.remove("active")
        })
        sinb.classList.add("active")
        sinm.classList.add("active")
    })
}




// const texts = document.querySelectorAll(".text")
// const slideImgs = document.querySelectorAll(".slideImg")



// for (let i = 0; i < slideImgs.length; i++) {
//     const singleimg = slideImgs[i];
//     singleimg.addEventListener("click", () => {
//         slideImgs.forEach(val => {
//             val.classList.remove("active")
//         })
//         texts.forEach(val => {
//             val.classList.remove("active")
//         })
//         singleimg.classList.add("active")
//         texts[i].classList.add("active")
//     })
    
// }



const texts = document.querySelectorAll(".text")
const slideImgs = document.querySelectorAll(".slideImg")



for(let i = 0; i < slideImgs.length; i++) {
    const singlim = slideImgs[i];


    singlim.addEventListener("click", () => {
        slideImgs.forEach(val => {
            val.classList.remove("active")
        })

        texts.forEach(val => {
            val.classList.remove("active")
        })
        singlim.classList.add("active")
        texts[i].classList.add("active")
    })

}



