const hamburger = document.querySelectorAll('.Btn');
const navlink = document.querySelector('.navlink');
const main = document.getElementById('main');
hamburger.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        navlink.classList.toggle('show__navlinks');
        main.classList.toggle('light-box');
    });
});
window.addEventListener('scroll', () => { 
    if (pageYOffset > 35) {
         navlink.classList.remove('show__navlinks');
        main.classList.remove('light-box');
    }
  
    // const image = document.querySelectorAll('.img__col');
    // // console.log(image);
    // image.forEach((img)=>{
    //     const imageHeight = img.getBoundingClientRect().top
    // if (pageYOffset > imageHeight  ){
    //     img.classList.add('show__phone')
        
    // }
    // else {
    //     img.classList.remove('show__phone')
        
    //     };
    // })
    // const text = document.querySelectorAll('.text__col');
    //  text.forEach((txt)=>{
    //     const textHeight = txt.getBoundingClientRect().top
    // if (pageYOffset > textHeight ){
    //     txt.classList.add('showtext')
        
    // }
    // else {
    //     txt.classList.remove('showtext')
        
    //     };
    // })
   
    // console.log(pageYOffset);
});
