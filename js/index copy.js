let imoveis = buscarTodosImoveis()

// TODO
if (window.localStorage.getItem("lista") == null) {
    // Salva a lista original no local storage
    window.localStorage.setItem("lista", JSON.stringify(imoveis))
} else {
    // Recupera a lista com os itens que foram marcados como favoritos
    imoveis = JSON.parse(window.localStorage.getItem("lista"))
}

function criarImovelHTML(imovel) {
    const section = document.createElement("section")
    section.setAttribute("class", "listing")

    const img = document.createElement("img")
    img.setAttribute("class", "listing-photo")
    img.setAttribute("src", imovel.url_foto)

    section.appendChild(img)

    const h2 = document.createElement("h2")
    h2.setAttribute("class", "listing-heading")
    h2.textContent = imovel.nome

    section.appendChild(h2)

    const p = document.createElement("p")
    p.setAttribute("class", "listing-location")
    p.textContent = `${imovel.cidade}, ${imovel.estado}`

    section.appendChild(p)

    const a = document.createElement("a")
    a.textContent = "Veja mais"

    const url = `detalhes.html?imovelId=${imovel.id}`
    a.setAttribute("href", url)

    section.appendChild(a)

    const favId = `fav-${imovel.id}`
    const favorito = document.createElement("img")
    favorito.setAttribute("id", favId)

    // TODO
    if (imovel.favorito == true) {
        favorito.setAttribute("src", "img/favorito.png")
    } else if (imovel.favorito == false) {
        favorito.setAttribute("src", "img/desfavorito.png")
    }


    favorito.setAttribute("class", "favorito")
    favorito.setAttribute("onclick", `favoritar(${JSON.stringify(imovel)})`)

    section.appendChild(favorito)


    // Section pai
    const sectionResults = document.getElementById("lista-imoveis")
    sectionResults.appendChild(section)
}

function filtrar() {
    const pesquisa = document.getElementById("pesquisa").value
    listarImoveisComFiltro(pesquisa)
}

function favoritar(imovel) {
    // TODO
    const favId = `fav-${imovel.id}`
    const fav = document.getElementById(favId)
    const posicaoLista = imovel.id - 1

    if (fav.getAttribute("src") == "img/favorito.png") {
        fav.setAttribute("src", "img/desfavorito.png")
        imoveis[posicaoLista].favorito = false
    } else {
        fav.setAttribute("src", "img/favorito.png")
        imoveis[posicaoLista].favorito = true
    }
    
    window.localStorage.setItem("lista", JSON.stringify(imoveis))
}

function mostrarFavoritos() {
    limparListaImoveis()

    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i]
        
        // TODO
        if (imovel.favorito == true) {
            criarImovelHTML(imovel)
        }
    }
}

function filtrarComEnter(tecla) {
    if (tecla.keyCode == 13) {
        tecla.preventDefault()
        filtrar()
    }
}

function listarImoveisComFiltro(texto) {

    limparListaImoveis()

    if (texto == "") {
        mostrarTodosOsImoveis()
    } else {
        for (let i = 0; i < imoveis.length; i++) {
            const imovel = imoveis[i]

            const textoM = removerAcentos(texto.toUpperCase())
            const cidadeImovelM = removerAcentos(imovel.cidade.toUpperCase())
            const estadoImovelM = removerAcentos(imovel.estado.toUpperCase())

            if (cidadeImovelM.search(textoM) == 0 ||
                estadoImovelM.search(textoM) == 0) {
                criarImovelHTML(imovel, false)
            }
        }
    }
}

function removerAcentos(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function mostrarTodosOsImoveis() {
    limparListaImoveis()
    
    for (let i = 0; i < imoveis.length; i++) {
        const imovel = imoveis[i]
        criarImovelHTML(imovel)
    }
}

function limparListaImoveis() {
    const sectionResults = document.getElementById("lista-imoveis")

    while (sectionResults.lastElementChild) {
        sectionResults.removeChild(sectionResults.lastElementChild)
    }
}

function filtrarTipoApartamento() {
    limparListaImoveis()

    const aptHtml = document.getElementById("apartamento").checked

    if (aptHtml == true) {
        for (let i = 0; i < imoveis.length; i++) {
            const imovel = imoveis[i]
            if (imovel.tipo == "apt") {
                criarImovelHTML(imovel)
            }
        }
    } else {
        for (let i = 0; i < imoveis.length; i++) {
            const imovel = imoveis[i]
            criarImovelHTML(imovel)
        }
    }    
}

function filtrarTipoCasa() {
    limparListaImoveis()

    const casaHtml = document.getElementById("casa").checked

    if (casaHtml == true) {
        for (let i = 0; i < imoveis.length; i++) {
            const imovel = imoveis[i]
            if (imovel.tipo == "casa") {
                criarImovelHTML(imovel)
            }
        }
    } else {
        for (let i = 0; i < imoveis.length; i++) {
            const imovel = imoveis[i]
            criarImovelHTML(imovel)
        }
    }
}

mostrarTodosOsImoveis()
