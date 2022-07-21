const main     = document.querySelector("section");
const carrinho = document.querySelector(".carrinho");
const compra   = document.querySelector(".compra");

const input        = document.querySelector("#campoBusca input");
const buttonInput  = document.querySelector("#campoBusca button")
const title        = document.querySelector("h2")
const buttonTodos  = document.querySelector("#todos");
const buttonAction = document.querySelector("#action");
const buttonManga  = document.querySelector("#mangas");
const buttonRoupa  = document.querySelector("#roupas");

let preco      = 0;
let quantidade = 0;

function criarCard () {
    main.innerHTML = "";

    let arr = produtos;

    for (let i = 0; i < produtos.length; i++) {
        let tagDiv1   = document.createElement("div");
        let tagDiv2   = document.createElement("div");
        let tagImg    = document.createElement("img");
        let tagH3     = document.createElement("h3");
        let tagSpan   = document.createElement("span");
        let tagP      = document.createElement("p");
        let tagStrong = document.createElement("strong");
        let tagButton = document.createElement("button");

        tagDiv1.setAttribute("id", "card");
        tagDiv2.setAttribute("id", "img");
        tagButton.setAttribute("id", `${arr[i].id}`);

        tagImg.src          = arr[i].img;
        tagH3.innerText     = arr[i].nameItem;
        tagSpan.innerText   = arr[i].tag;
        tagP.innerText      = arr[i].description
        tagStrong.innerText = `R$ ${arr[i].value}`;
        tagButton.innerText = "Adicionar ao carrinho";

        tagDiv1.appendChild(tagDiv2);
        tagDiv2.appendChild(tagImg);
        tagDiv1.appendChild(tagH3);
        tagDiv1.appendChild(tagSpan);
        tagDiv1.appendChild(tagP);
        tagDiv1.appendChild(tagStrong);
        tagDiv1.appendChild(tagButton);

        main.appendChild(tagDiv1);
    }
}
criarCard(produtos);
buttonTodos.addEventListener("click", criarCard);

function filtrarAction () {
    main.innerHTML = "";

    let arr = produtos;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].tag == "Action figure") {
            let tagDiv1   = document.createElement("div");
            let tagDiv2   = document.createElement("div");
            let tagImg    = document.createElement("img");
            let tagH3     = document.createElement("h3");
            let tagSpan   = document.createElement("span");
            let tagP      = document.createElement("p");
            let tagStrong = document.createElement("strong");
            let tagButton = document.createElement("button");

            tagDiv1.setAttribute("id", "card");
            tagDiv2.setAttribute("id", "img");
            tagButton.setAttribute("id", `${arr[i].id}`);

            tagImg.src          = arr[i].img;
            tagH3.innerText     = arr[i].nameItem;
            tagSpan.innerText   = arr[i].tag;
            tagP.innerText      = arr[i].description
            tagStrong.innerText = `R$ ${arr[i].value}`;
            tagButton.innerText = "Adicionar ao carrinho";

            tagDiv1.appendChild(tagDiv2);
            tagDiv2.appendChild(tagImg);
            tagDiv1.appendChild(tagH3);
            tagDiv1.appendChild(tagSpan);
            tagDiv1.appendChild(tagP);
            tagDiv1.appendChild(tagStrong);
            tagDiv1.appendChild(tagButton);

            main.appendChild(tagDiv1);
        }
    }
}
buttonAction.addEventListener("click", filtrarAction);

function filtrarManga () {
    main.innerHTML = "";

    let arr = produtos;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].tag == "Mangá") {
            let tagDiv1   = document.createElement("div");
            let tagDiv2   = document.createElement("div");
            let tagImg    = document.createElement("img");
            let tagH3     = document.createElement("h3");
            let tagSpan   = document.createElement("span");
            let tagP      = document.createElement("p");
            let tagStrong = document.createElement("strong");
            let tagButton = document.createElement("button");

            tagDiv1.setAttribute("id", "card");
            tagDiv2.setAttribute("id", "img");
            tagButton.setAttribute("id", `${arr[i].id}`);

            tagImg.src          = arr[i].img;
            tagH3.innerText     = arr[i].nameItem;
            tagSpan.innerText   = arr[i].tag;
            tagP.innerText      = arr[i].description
            tagStrong.innerText = `R$ ${arr[i].value}`;
            tagButton.innerText = "Adicionar ao carrinho";

            tagDiv1.appendChild(tagDiv2);
            tagDiv2.appendChild(tagImg);
            tagDiv1.appendChild(tagH3);
            tagDiv1.appendChild(tagSpan);
            tagDiv1.appendChild(tagP);
            tagDiv1.appendChild(tagStrong);
            tagDiv1.appendChild(tagButton);

            main.appendChild(tagDiv1);
        }
    }
}
buttonManga.addEventListener("click", filtrarManga);

function filtrarRoupa () {
    main.innerHTML = "";

    let arr = produtos;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].tag == "Roupa") {
            let tagDiv1   = document.createElement("div");
            let tagDiv2   = document.createElement("div");
            let tagImg    = document.createElement("img");
            let tagH3     = document.createElement("h3");
            let tagSpan   = document.createElement("span");
            let tagP      = document.createElement("p");
            let tagStrong = document.createElement("strong");
            let tagButton = document.createElement("button");

            tagDiv1.setAttribute("id", "card");
            tagDiv2.setAttribute("id", "img");
            tagButton.setAttribute("id", `${arr[i].id}`);

            tagImg.src          = arr[i].img;
            tagH3.innerText     = arr[i].nameItem;
            tagSpan.innerText   = arr[i].tag;
            tagP.innerText      = arr[i].description
            tagStrong.innerText = `R$ ${arr[i].value}`;
            tagButton.innerText = "Adicionar ao carrinho";

            tagDiv1.appendChild(tagDiv2);
            tagDiv2.appendChild(tagImg);
            tagDiv1.appendChild(tagH3);
            tagDiv1.appendChild(tagSpan);
            tagDiv1.appendChild(tagP);
            tagDiv1.appendChild(tagStrong);
            tagDiv1.appendChild(tagButton);

            main.appendChild(tagDiv1);
        }
    }
}
buttonRoupa.addEventListener("click", filtrarRoupa);

function pesquisa (event) {
    let arr = produtos;
    
    main.innerHTML = ""
    let valorPesquisa = input.value;

    for (let i = 0; i < arr.length; i++) {
        let valor1 = valorPesquisa.toLowerCase();
        let valor2 = arr[i].nameItem.toLowerCase();
        let valor3 = arr[i].tag.toLowerCase();

        if (valor2.includes(valor1) || valor3.includes(valor1)) {
            let tagDiv1   = document.createElement("div");
            let tagDiv2   = document.createElement("div");
            let tagImg    = document.createElement("img");
            let tagH3     = document.createElement("h3");
            let tagSpan   = document.createElement("span");
            let tagP      = document.createElement("p");
            let tagStrong = document.createElement("strong");
            let tagButton = document.createElement("button");

            tagDiv1.setAttribute("id", "card");
            tagDiv2.setAttribute("id", "img");
            tagButton.setAttribute("id", `${arr[i].id}`);

            tagImg.src          = arr[i].img;
            tagH3.innerText     = arr[i].nameItem;
            tagSpan.innerText   = arr[i].tag;
            tagP.innerText      = arr[i].description
            tagStrong.innerText = `R$ ${arr[i].value}`;
            tagButton.innerText = "Adicionar ao carrinho";

            tagDiv1.appendChild(tagDiv2);
            tagDiv2.appendChild(tagImg);
            tagDiv1.appendChild(tagH3);
            tagDiv1.appendChild(tagSpan);
            tagDiv1.appendChild(tagP);
            tagDiv1.appendChild(tagStrong);
            tagDiv1.appendChild(tagButton);

            main.appendChild(tagDiv1);
        }
    }
}
input.addEventListener("keyup", pesquisa);

const buttonAdd = document.querySelectorAll("section button");

function addCarrinho (event) {
    let arr = produtos;
    let id  = event.target.id;

    if (event.target.nodeName == "BUTTON") {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id == id) {
                carrinho.setAttribute("id", "carrinhoOn");

                let tagDiv1   = document.createElement("div");
                let tagDiv2   = document.createElement("div");
                let tagImg    = document.createElement("img");
                let tagH3     = document.createElement("h3")
                let tagStrong = document.createElement("strong");
                let tagButton = document.createElement("button");
    
                tagDiv1.setAttribute("id", "cardCarrinho");
                tagDiv2.setAttribute("id", "descCarrinho");
                tagImg.setAttribute("id", "imgCarrinho");
    
                tagImg.src          = `${arr[i].img}`;
                tagH3.innerText     = `${arr[i].nameItem}`;
                tagStrong.innerText = `R$ ${arr[i].value}` ;
                tagButton.innerText = "Remover";
    
                tagDiv1.appendChild(tagImg);
                tagDiv1.appendChild(tagDiv2);
                tagDiv2.appendChild(tagH3);
                tagDiv2.appendChild(tagStrong);
                tagDiv2.appendChild(tagButton);
    
                carrinho.appendChild(tagDiv1);

                /* Contador */

                preco      += arr[i].value;
                quantidade += 1;
                console.log(preco)

                if (quantidade > 0) {
                    compra.innerHTML = "";

                    title.innerHTML  = "";
                    title.innerText  = "Carrinho de compras";
    
                    compra.setAttribute("id", "compra");
    
                    let tagQuantidade1       = document.createElement("p");
                    tagQuantidade1.innerText = "Quantidade: "
                    let tagPreco1       = document.createElement("p");
                    tagPreco1.innerText = "Total: ";
    
                    let tagQuantidade2       = document.createElement("span");
                    tagQuantidade2.innerText = quantidade;
    
                    let tagPreco2       = document.createElement("span");
                    tagPreco2.innerText = `R$ ${preco}`;      
                    
                    compra.appendChild(tagQuantidade1);
                    compra.appendChild(tagPreco1);
                    compra.appendChild(tagQuantidade2);
                    compra.appendChild(tagPreco2);
                }
            }
        }
    }
}
main.addEventListener("click", addCarrinho);

function removerCarrinho (event) {
    if (event.target.nodeName == "BUTTON") {
        event.target.parentElement.parentElement.remove()

        /* Contador */

        compra.innerHTML = "";

        let precoCarrinho = event.target.parentElement.children[1].innerText.slice(-3).trim();
        preco -= (+precoCarrinho);
        quantidade -= 1;


        if (quantidade > 0) {
            compra.setAttribute("id", "compra");
    
            let tagQuantidade1       = document.createElement("p");
            tagQuantidade1.innerText = "Quantidade: "
            let tagPreco1       = document.createElement("p");
            tagPreco1.innerText = "Total: ";
    
            let tagQuantidade2       = document.createElement("span");
            tagQuantidade2.innerText = quantidade;
    
            let tagPreco2       = document.createElement("span");
            tagPreco2.innerText = `R$ ${preco}`;      
                    
            compra.appendChild(tagQuantidade1);
            compra.appendChild(tagPreco1);
            compra.appendChild(tagQuantidade2);
            compra.appendChild(tagPreco2);
        }
        else {
            carrinho.removeAttribute("id", "carrinhoOn")
            compra.removeAttribute("id", "compra")

            title.innerHTML = "";
            title.innerText = "Carrinho vazio"
        }
    }
}
carrinho.addEventListener("click", removerCarrinho);