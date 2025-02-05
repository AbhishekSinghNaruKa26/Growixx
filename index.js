const navDialog=document.getElementById('nav-dialog');
function handleMenu(){
    navDialog.classList.toggle('hidden');
}
const scroll=ScrollReveal(
    {
        reset:true,
        duration:2600,
        distance:'60px'
    })
    scroll.reveal('.text-transfer',{
        delay:600,
        origin:'bottom'
    })

    scroll.reveal('.text2',{
        delay:900,
        origin:'bottom'
    })


    let section= document.querySelectorAll('section')
    let navlink= document.querySelectorAll('a header nav ')
    window.onscroll=()=>{
        section.forEach(sec=>{
            let top=window.scrollY;
            let offset=sec.offsetTop-150;
            let height=sec.offsetHeight;
            let id=sec.getAttribute('id');
            if(top>offset && top<offset + height){
                navlink.forEach(links=>{
                    links.classList.remove('active')
                    document.querySelector('a[href*='+id+'] header nav ').classList.add('active')
                })
            }
        })
    }


    let valueDisplays= document.querySelectorAll(".num");
    let interval= 1000;

    valueDisplays.forEach((valueDisplays)=>{
        let startValue= 0;
        let endValue= parseInt(valueDisplays.getAttribute("data-val"));
        let duration=Math.floor(interval / endValue);
        let counter = setInterval(function (){
            startValue += 1;
            reset:true,
            valueDisplays.textContent = startValue;
            if(startValue == endValue){
                clearInterval(counter);
            }
        },duration);
    });