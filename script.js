"use strict" ;

//   --->PAGE ONE HOME QUIRIES <---

//navbar
const navhome = document.querySelector('.navhome')
const navdest = document.querySelector('.navdest')
const navcrew = document.querySelector('.navcrew')
const navtech = document.querySelector('.navtech')

const navarr = [navhome , navdest , navcrew , navtech]

//home Main - page 1
const homeMain = document.querySelector('.homeMain')

const hoverforExp = document.querySelector('.hoverforExp')

const logoIcon = document.querySelector('.logoIcon')

//   ---> PAGE TWO QUIREIS <---

//page Two - distenetion
const pageTwo = document.querySelector('.pageTwo')
//PLANETS
const moon = document.querySelector('.moon')
const mars = document.querySelector('.mars')
const europa = document.querySelector('.europa')
const titan = document.querySelector('.titan')

//PLANTES TXTs
const moontxt = document.querySelector('.moontxt')
const marstxt = document.querySelector('.marstxt')
const europatxt = document.querySelector('.europatxt')
const titantxt = document.querySelector('.titantxt')

//   ---> PAGE THREE QUIREIS <---
//PAGE THREE CREW
const pageThree = document.querySelector('.pageThree')
//PERSONS
const firstPerson = document.querySelector('.firstPerson')
const secondPerson = document.querySelector('.secondPerson')
const thirdPerson = document.querySelector('.thirdPerson')
const forthPerson = document.querySelector('.forthPerson')

//CIRCLES
const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')
const c3 = document.querySelector('.c3')
const c4 = document.querySelector('.c4')

//   ---> PAGE FOUR QUIREIS <---
const finalPage = document.querySelector('.finalPage')

const circleFor41 = document.querySelector('.circleFor41')
const circleFor42 = document.querySelector('.circleFor42')
const circleFor43 = document.querySelector('.circleFor43')

const firstTech = document.querySelector('.firstTech')
const secondTech = document.querySelector('.secondTech')
const thirdTech = document.querySelector('.thirdTech')

const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')


//Fun for circles in final page
const funForCfinal = function(txt1,txt2,txt3) {
    txt1.classList.add('bg-white')
    txt1.classList.remove('bg-transparent')
    txt1.classList.add('text-black')
    txt1.classList.remove('text-white')

    txt2.classList.remove('bg-white')
    txt2.classList.add('bg-transparent')
    txt2.classList.remove('text-black')
    txt2.classList.add('text-white')

    txt3.classList.remove('bg-white')
    txt3.classList.add('bg-transparent')
    txt3.classList.remove('text-black')
    txt3.classList.add('text-white')
}

const hideAndShowFinal = function(txt1,txt2,txt3,txt4,txt5,txt6) {
    txt1.classList.remove('hidden')
    txt2.classList.add('hidden')
    txt3.classList.add('hidden')
    txt4.classList.remove('hidden')
    txt5.classList.add('hidden')
    txt6.classList.add('hidden')
}



const arrFun = function(txt) {
    txt.classList.add ('hover:before:bg-gray-500' , 'before:bg-transparent');
    txt.classList.remove('before:bg-white');
}

const planetTxt = function(txt) {
    txt.classList.add('hover:before:bg-gray-500' , 'before:bg-transparent')
    txt.classList.remove('before:bg-white' ,'text-white' )
}

const addHidden = function(txt1,txt2,txt3) {
    txt1.classList.add('hidden');
    txt2.classList.add('hidden');
    txt3.classList.add('hidden');
}

const circlesFun = function(txt1,txt2,txt3) {
    txt1.classList.remove('bg-white')
    txt2.classList.remove('bg-white')
    txt3.classList.remove('bg-white')
    txt1.classList.add('bg-gray-500')
    txt2.classList.add('bg-gray-500')
    txt3.classList.add('bg-gray-500')
}

const hoverCircles = function(txt1,txt2,txt3) {
    txt1.addEventListener('mouseover' , function() {
        txt1.classList.replace('bg-gray-500' , 'bg-gray-400' )
    })
    txt1.addEventListener('mouseout' , function(){
        txt1.classList.replace('bg-gray-400' , 'bg-gray-500' )
    })
    txt2.addEventListener('mouseover' , function() {
        txt2.classList.replace('bg-gray-500' , 'bg-gray-400' )
    })
    txt2.addEventListener('mouseout' , function(){
        txt2.classList.replace('bg-gray-400' , 'bg-gray-500' )
    })
    txt3.addEventListener('mouseover' , function() {
        txt3.classList.replace('bg-gray-500' , 'bg-gray-400' )
    })
    txt3.addEventListener('mouseout' , function(){
        txt3.classList.replace('bg-gray-400' , 'bg-gray-500' )
    })
}

//fun FOR going to PAGE 2
const exploring = function(){
    navdest.classList.add ('before:bg-white');
    navdest.classList.remove('hover:before:bg-gray-500' , 'before:bg-transparent');
    arrFun(navhome)
    arrFun(navcrew)
    arrFun(navtech)
    homeMain.classList.add('hidden')
    pageTwo.classList.remove('hidden')
    pageThree.classList.add('hidden')
    finalPage.classList.add('hidden')
}

//fun FOR going to PAGE 1
const homeBack = function() {
    navhome.classList.add ('before:bg-white');
    navhome.classList.remove('hover:before:bg-gray-500' , 'before:bg-transparent');
    arrFun(navdest)
    arrFun(navcrew)
    arrFun(navtech)
    homeMain.classList.remove('hidden')
    pageTwo.classList.add('hidden')
    pageThree.classList.add('hidden')
    finalPage.classList.add('hidden')
}

//Functions for NAVBAR
//HOME NAV
navhome.addEventListener('click' , function() {
    homeBack()
})

hoverforExp.addEventListener('click' , function() {
    exploring()
})

logoIcon.addEventListener('click' , function() {
    homeBack()
})

//DESTINETION NAV
navdest.addEventListener('click' ,function() {
    exploring()
})
//CREW NAV
navcrew.addEventListener('click' ,function() {
    navcrew.classList.add ('before:bg-white');
    navcrew.classList.remove('hover:before:bg-gray-500' , 'before:bg-transparent');
    arrFun(navhome)
    arrFun(navdest)
    arrFun(navtech)
    homeMain.classList.add('hidden')
    pageTwo.classList.add('hidden')
    pageThree.classList.remove('hidden')
    finalPage.classList.add('hidden')
})
//TECHNOLOGY NAV
navtech.addEventListener('click' ,function() {
    navtech.classList.add ('before:bg-white');
    navtech.classList.remove('hover:before:bg-gray-500' , 'before:bg-transparent');
    arrFun(navhome)
    arrFun(navcrew)
    arrFun(navdest)
    homeMain.classList.add('hidden')
    pageTwo.classList.add('hidden')
    pageThree.classList.add('hidden')
    finalPage.classList.remove('hidden')
})


//FUNCTIONS FOR PAGE TWO _ PLANETS
moontxt.addEventListener('click' , function() {
    moontxt.classList.add('before:bg-white' , 'text-white')
    moontxt.classList.remove('before:bg-transparent' , 'hover:before:bg-gray-500')
    planetTxt(marstxt);
    planetTxt(europatxt);
    planetTxt(titantxt);
    moon.classList.remove('hidden')
    addHidden(mars,europa,titan)

})

marstxt.addEventListener('click' , function() {
    marstxt.classList.add('before:bg-white' , 'text-white')
    marstxt.classList.remove('before:bg-transparent' , 'hover:before:bg-gray-500')
    planetTxt(moontxt);
    planetTxt(europatxt);
    planetTxt(titantxt)
    mars.classList.remove('hidden')
    addHidden(moon,europa,titan)
})

europatxt.addEventListener('click' , function() {
    europatxt.classList.add('before:bg-white' , 'text-white')
    europatxt.classList.remove('before:bg-transparent' , 'hover:before:bg-gray-500')
    planetTxt(moontxt);
    planetTxt(marstxt);
    planetTxt(titantxt)
    europa.classList.remove('hidden')
    addHidden(mars,moon,titan)
})

titantxt.addEventListener('click' , function() {
    titantxt.classList.add('before:bg-white' , 'text-white')
    titantxt.classList.remove('before:bg-transparent' , 'hover:before:bg-gray-500')
    planetTxt(moontxt);
    planetTxt(marstxt);
    planetTxt(europatxt)
    titan.classList.remove('hidden')
    addHidden(mars,europa,moon)
})

//FUNS PAGE 3 * PERSONS

c1.addEventListener('click' , function() {
    c1.classList.add('bg-white')
    c1.classList.remove('bg-gray-500')
    c2.classList.remove('bg-gray-400')
    circlesFun(c2,c3,c4)
    firstPerson.classList.remove('hidden')
    addHidden(secondPerson,thirdPerson,forthPerson)

})

c1.classList.contains('bg-white') ? hoverCircles(c2,c3,c4) : ''

c2.addEventListener('click' , function() {
    c2.classList.add('bg-white')
    c2.classList.remove('bg-gray-500')
    c2.classList.remove('bg-gray-400')
    circlesFun(c1,c3,c4)
    secondPerson.classList.remove('hidden')
    addHidden(firstPerson,thirdPerson,forthPerson)
    hoverCircles(c1,c3,c4)
})

c3.addEventListener('click' , function() {
    c3.classList.add('bg-white')
    c3.classList.remove('bg-gray-500')
    c2.classList.remove('bg-gray-400')
    circlesFun(c2,c1,c4)
    thirdPerson.classList.remove('hidden')
    addHidden(secondPerson,firstPerson,forthPerson)
    hoverCircles(c1,c2,c4)
})

c4.addEventListener('click' , function() {
    c4.classList.add('bg-white')
    c4.classList.remove('bg-gray-500')
    c2.classList.remove('bg-gray-400')
    circlesFun(c2,c3,c1)
    forthPerson.classList.remove('hidden')
    addHidden(secondPerson,thirdPerson,firstPerson)
    hoverCircles(c1,c3,c2)
})

//FUNS for FINAL PAGE *TECH*
circleFor41.addEventListener('click' , function() {
    funForCfinal(circleFor41,circleFor42,circleFor43)
    hideAndShowFinal(firstTech,secondTech,thirdTech,img1,img2,img3)
})

circleFor42.addEventListener('click' , function() {
    funForCfinal(circleFor42,circleFor41,circleFor43)
    hideAndShowFinal(secondTech,firstTech,thirdTech,img2,img1,img3)
})

circleFor43.addEventListener('click' , function() {
    funForCfinal(circleFor43,circleFor42,circleFor41)
    hideAndShowFinal(thirdTech,firstTech,secondTech,img3,img2,img1)
})