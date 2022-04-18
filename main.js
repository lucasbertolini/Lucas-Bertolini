

let sobre = document.querySelector('#sobre');
let contato = document.querySelector('#contato');
let projetos = document.querySelector('#projetos');
let topBtn = document.querySelector('#top-btn');
let data_info;
getApi();

window.onscroll = () =>{
    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topBtn.style.display = 'block';
    }else{
        topBtn.style.display = 'none'
    }
}

topBtn.addEventListener('click', () => {

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0

})
function getApi(){

    const API_TOKEN = '4be5b394c384ad9199396a5bc40dfb42aa43b5aeff3e911474dd59f9374362ed';
    fetch(`https://cursos.alura.com.br/api/dashboard/${API_TOKEN}`)
    .then(res => res.json())
    .then(data => data_info = data)
    .then(data =>  rodar() )
    .catch(err => console.error(err));

}


function rodar(){
    console.log(data_info.courseProgresses)
    let cursos = document.querySelector('#cursos-container');
    data_info.courseProgresses.forEach((item, index) => {

        let elemento = document.createElement('p');
        elemento.textContent = data_info.courseProgresses[index].name;
        cursos.appendChild(elemento);

    })


}

sobre.addEventListener('click', () => {
    document.querySelector('.sobre').scrollIntoView();
})
projetos.addEventListener('click', () => {
    document.querySelector('.projetos').scrollIntoView();
});
contato.addEventListener('click', () => {
    document.querySelector('footer').scrollIntoView();
})
