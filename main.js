let data_info;
getApi();


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

