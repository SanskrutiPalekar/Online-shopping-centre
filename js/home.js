const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;

nxtBtn[i].addEventListener('click', () =>{
   item.scrollLeft += containerWidth;
})

preBtn[i].addEventListener('click', () =>{
    item.scrollLeft -= containerWidth;
})

})
// alert("my msg");
// prompt("name");
//  document.write("time to learn js");
// document.getElementByClass('product-category').innerHTML = "Hello world"; not worked