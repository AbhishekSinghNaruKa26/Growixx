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
        delay:400,
        origin:'bottom'
    })

    scroll.reveal('.text2',{
        delay:400,
        origin:''
    })