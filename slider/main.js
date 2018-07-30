let slides=[],
    dataCount=null,
    img=document.getElementsByTagName("IMG")[0];
    
    for(let i=0;i<4;i++){
        slides[i]=`images/img${i+1}.jpg`;
    }

if(localStorage.getItem("slideInf")!==null){
    let slideInf=localStorage.getItem("slideInf");
    slideInf=JSON.parse(slideInf)
    img.setAttribute("src",slideInf.slide);
    img.setAttribute('data-count',slideInf.count);

}else{
    img.setAttribute('src',slides[0]);
    img.setAttribute('data-count',1);
    location.hash=slides[0];
}

function nextSlide(){ 
    let count=+(img.getAttribute("data-count"));
        if(count==slides.length){
            count=0;
        }
        img.setAttribute('src',slides[count]);
        img.setAttribute('data-count',count+1);
        location.hash=slides[count];
        let slideInf={
            slide:slides[count],
            count:count+1
        };
        localStorage.setItem("slideInf",JSON.stringify(slideInf));
}
function prevSlide(){
    let count=img.getAttribute("data-count");
        if(count==1){
            count=slides.length+1;
        };
        --count;
        img.setAttribute('src',slides[count-1]);
        img.setAttribute('data-count',count);
        location.hash=slides[count-1];
        let slideInf={
            slide:slides[count-1],
            count:count
        };
        localStorage.setItem("slideInf",JSON.stringify(slideInf));
        
}
function changeElementByHash(){
    let hash=location.hash.slice(1),
        count=slides.indexOf(hash);
        if(!hash){
            img.setAttribute('src',slides[0]);
            img.setAttribute('data-count',1);
            location.hash=slides[0];
        }
    img.setAttribute('src',slides[count]);
    img.setAttribute('data-count',count+1);
}
//setInterval(nextSlide,6000);

let next=document.getElementById("next"),
    prev=document.getElementById("prev");
    next.addEventListener('click',nextSlide);
    prev.addEventListener('click',prevSlide);

window.addEventListener('hashchange',changeElementByHash);
window.addEventListener('load',changeElementByHash);