// Definindo as variaveis.

const form = document.querySelector("form");
const toast = document.querySelector(".toast");
const closeToastBtn = document.querySelector(".close-toast");
const input = document.getElementById("addItem");
const lists = document.getElementById("lists");

let toastTimeout;


// Definindo a função para o formulário.

form.addEventListener("submit", (event) => {

    // Tirando o comportamento padrão do formulário.

    event.preventDefault();    

    // Definindo uma variável com o valor do input.

    const itemName = input.value.trim();

    // Evitando string vazia.

    if (!itemName) return;

    // Criando o elemento de lista.

    const li = document.createElement("li");
    
    // Adicionando a classe para o elemento.

    li.classList.add("item");


    // Mexendo no conteúdo do HTML.

    li.innerHTML = `<label>
      <input type="checkbox">
      <span>${itemName}</span>
    </label>
    <img src="assets/icons/trashbag.svg" alt="Remover" class="btn-remover">
    `;

    // Adicionando animação da classe no elemento.

    li.classList.add("enter");

    requestAnimationFrame(() => {
        li.classList.remove("enter");
    });

    // Adicionando a lista criada dentro da ul.

    lists.append(li)

    // Limpando o input.

    input.value = "";

})

// Adicionando um evento para remover lista.

lists.addEventListener("click", (event) => {
    if(event.target.classList.contains("btn-remover")){
        const li = event.target.closest("li");

        li.classList.add("exit");

        setTimeout(() => {
            li.remove();
            showToast();
        }, 300);
    }
})

// Adicionando uma função para o alerta e animando.

function showToast(){

    clearTimeout(toastTimeout);

    toast.classList.remove("hidden");

    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    toastTimeout = setTimeout(() => {
        hideToast();
    }, 5000);
    }

function hideToast() {
    toast.classList.remove("show");

    setTimeout(() => {
        toast.classList.add("hidden");
    }, 300);
}

// Adicionando um evento para clicar no "X" do alerta.

closeToastBtn.addEventListener("click", hideToast);
