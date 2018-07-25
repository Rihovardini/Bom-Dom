function getAttributes(){
    
    let elementA=document.getElementById('w3r'),
        attributesArray=[
            elementA.textContent,
            elementA.getAttribute('type'),
            elementA.getAttribute('hreflang'),
            elementA.getAttribute('rel'),
            elementA.getAttribute('target'),
            elementA.href
        ]
      for(let i=0;i<attributesArray.length;i++){
              let p=document.createElement('P'),
                  div=document.getElementsByTagName("DIV")[0];
                  p.textContent=`${attributesArray[i]}:`
                  div.appendChild(p);
    }
}
let paragraph=document.getElementById('boldParagraph'),
    spanElems=paragraph.getElementsByTagName('span');
    

  
    for(let i=0;i<spanElems.length;i++){
            spanElems[i].addEventListener('mouseover',()=>{
                // will work the same with toogle
                spanElems[i].classList.add('bold')
        });
        spanElems[i].addEventListener('mouseout',()=>{
            spanElems[i].classList.remove('bold');
        });
    }