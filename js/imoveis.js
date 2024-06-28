const imoveisDB = [
    {
        "id": 1,
        "url_foto": "img/1.jpg",
        "nome": "Sobrado lindo",
        "cidade": "Saltinho",
        "estado": "Minas Gerais",
        "favorito": false,
        "tipo" : "casa",
        "adicionais": [
            {
                "chave": "Quartos disponíveis",
                "valor": 6
            },
            {
                "chave": "Piscina",
                "valor": "Sim"
            }
        ]
    },
    {
        "id": 2,
        "url_foto": "img/2.jpg",
        "nome": "Kitnet econômica",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "favorito": false,
        "tipo" : "apt",
        "adicionais": [
            {
                "chave": "Banheiro",
                "valor": 1
            }
        ]
    },
    {
        "id": 3,
        "url_foto": "img/3.jpg",
        "nome": "Casarão na floresta",
        "cidade": "Americana",
        "estado": "São Paulo",
        "favorito": false,
        "tipo" : "casa",
        "adicionais": [
            {
                "chave": "Quartos",
                "valor": 10
            },
            {
                "chave": "Quintal",
                "valor": "Muito grande"
            },
            {
                "chave": "Árvores",
                "valor": "Bastante"
            }
        ]
    },
    {
        "id": 4,
        "url_foto": "img/4.jpg",
        "nome": "Casa muito aconchegante",
        "cidade": "Nova Odessa",
        "estado": "São Paulo",
        "favorito": false,
        "tipo" : "casa",
        "adicionais": [
            {
                "chave": "Local",
                "valor": "Condomínio Fechado"
            },
            {
                "chave": "Segurança",
                "valor": "Incluso no condomínio"
            },
            {
                "chave": "Diversão",
                "valor": "Quadra, campo, playground"
            }
        ]
    },
    {
        "id": 5,
        "url_foto": "img/5.jpg",
        "nome": "Casa 05",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "favorito": false,
        "tipo" : "apt",
        "adicionais": [
            {
                "chave": "Local",
                "valor": "Condomínio Fechado"
            },
            {
                "chave": "Wifi",
                "valor": "sim"
            }
        ]
    },
    {
        "id": 6,
        "url_foto": "img/6.jpg",
        "nome": "Casa 06",
        "cidade": "Cabreúva",
        "estado": "São Paulo",
        "favorito": false,
        "tipo" : "apt",
        "adicionais": [
            {
                "chave": "Container",
                "valor": "Casa feita com containers"
            },
            {
                "chave": "Energia",
                "valor": "está incluso"
            }
        ]
    },
    {
        "id": 7,
        "url_foto": "img/7.jpg",
        "nome": "Casa 07",
        "cidade": "Sumaré",
        "estado": "São Paulo",
        "favorito": false,
        "tipo" : "casa",
        "adicionais": [
            {
                "chave": "Quartos",
                "valor": 10
            },
            {
                "chave": "Quintal",
                "valor": "Muito grande"
            },
            {
                "chave": "Árvores",
                "valor": "Bastante"
            }
        ]
    },
    {
        "id": 8,
        "url_foto": "img/8.jpg",
        "nome": "Casa 08",
        "cidade": "Piracicaba",
        "estado": "São Paulo",
        "favorito": false,
        "tipo" : "casa",
        "adicionais": []
    },
    {
        "id": 9,
        "url_foto": "img/9.jpg",
        "nome": "Casa 09",
        "cidade": "Sumaré",
        "estado": "São Paulo",
        "favorito": false,
        "tipo" : "apt",
        "adicionais": []
    },
    {
        "id": 10,
        "url_foto": "img/10.jpg",
        "nome": "Casa 10",
        "cidade": "Charqueada",
        "estado": "São Paulo",
        "favorito": false,
        "tipo" : "casa",
        "adicionais": []
    }
]

function buscarTodosImoveis() {
    return imoveisDB
}

function buscarImovelPeloId(id) {
    for (let i=0; i < imoveisDB.length; i++) {
        const imv = imoveisDB[i];

        if (imv.id == id) {
            return imv
        }
    }
}