//Referencia Inicial
let submitButton = document.getElementById("submit-button");
let userInput = document.getElementById("user-input");
let canvas = document.getElementById("canvas");
let reloadButton = document.getElementById("reload-button");
let text = "";

//Gerando Letras
const textGenerator = () => {
    let generatedText = "";
    /* String.fromCharCode gives ASCII value from a given Number */
    //Total de 9 letras
    for(let i = 0; i<3;i++){
        //65-90 cria letras grandes
        generatedText += String.fromCharCode(randomNumber(65, 90));
        //97-122 cria letras pequenas
        generatedText += String.fromCharCode(randomNumber(97, 122));
        //48-57 gera números de 0-9
        generatedText += String.fromCharCode(randomNumber(48, 57));
    }
    return generatedText;
}

//Gerando número aleatóriamente
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

//Parte da tela
function drawStringOnCanvas(string){
    //A função getContext() permite que a função volte como propriedade que é preciso pra ficar na tela
    let ctx = canvas.getContext("2d");
    //Linpando a tela
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.heigth);
    //Cor do array do texto
    const textColors = ["rgb(0,0,0)", "rgb(130,130,130)"];
    //Espaço entre os caracteres
    const letterSpace = 150 / string.length;
    //Loop entre as strings
    for (let i = 0; i < string.length; i++){
        //Define a inicial e espaço no X axis
        const xInitial = 25;
        //Selecionar a fonte para a tela
        ctx.font = "20px Roboto Mono";
        //Selecionar a cor do texto
        ctx.fillStyle = textColors[randomNumber(0, 1)];
        ctx.fillText(string[i], xInitialSpace + i * letterSpace, randomNumber(25, 40), 100);
    }
}

//Função Inicial
const triggerFunction = () => {
    //Limpar Input
    userInput.value = "";
    text = textGenerator();
    //Letras e números randomicos
    text = [...text].sort(() => Math.random() - 0.5).join("");
    drawStringOnCanvas(text);
};

//Função na hora que o botão for precionado
reloadButton.addEventListener("click", triggerFunction);

//Função triggerFunction quando a página carregar
window.onload = () => triggerFunction();

//Quando o usuário clicar no botão entrar
submitButton.addEventListener("click", () => {
    //Verificar o input do usuário == generated text
    if (userInput.value === text){
        alert("Sucesso");
    } else {
        alert("Incorreto");
        triggerFunction();
    }
});