const priceArr=[199,249,399];
const initialPriceArr=[19.99,24.99,39.99]
const allNumbs = document.querySelectorAll('.number')


const toggler =document.querySelector('.switcher');
toggler.addEventListener('click',(e)=>{
  toggler.classList.toggle('change');
  if(e.target.className=='switcher change'){
    allNumbs.forEach((num,i)=>{
      num.textContent=priceArr[i]
    })
  }else{
    allNumbs.forEach((num,i)=>{
      num.textContent=initialPriceArr[i];
    })
  }
})