// let items=document.getElementsByClassName("item"),
//     sections=document.getElementsByClassName('hidden');

// for(let i=0;i<items.length;i++){
//     items[i].addEventListener('click',function(e){
//             test(sections);
//             sections[i].classList.toggle("passive");
            
//     })
// }

// function test(arr){
//     for(let i=0;i<arr.length;i++){
//         if(!arr[i].classList.contains("passive")){
//             arr[i].classList.add('passive');
//         }
//     }
// }

let content=document.getElementsByClassName('content')[0],
    information={
        main:"We are the best company",
        product:"Want you to buy our product",
        ourteam:"RihoVardini is the best"
    };
   
function updateData(){
    let informationElement=information[location.hash.slice(1)];
    if(informationElement){
    content.innerHTML=informationElement;
}
}

window.addEventListener('hashchange',updateData);
window.addEventListener('load',updateData);