function toogleMode() {
    //Mudar para Light Mode
    const html = document.documentElement
    if (html.classList.contains('light')) {
       html.classList.remove('light')
    } else {
        html.classList.add('light')
    }
    
    //Selecionar a imagem atual
    const img = document.querySelector('#profile img')

    if (html.classList.contains('light')) {
        //Se estiver no Light Mode, adicionar a imagem Light
        img.setAttribute('src', './assets/perfil-light.png')    
    } else {
        //Se estiver no Dark Mode, manter a imagem normal
        img.setAttribute('src', './assets/perfil.png')
    }
}