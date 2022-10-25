const form = document.querySelector("#formulario"); // capturou o formulario

form.addEventListener('submit', function (enviar) { // adicionou evento no formulario que é o evento de submit
    enviar.preventDefault();  // previniu que o form seja enviado
    let inputPeso = enviar.target.querySelector("#peso"); // capturou os dados dos inputs
    let inputAltura = enviar.target.querySelector("#altura"); // capturou os dados dos inputs

    const peso = Number(inputPeso.value); // converteu os dados obtidos dos inputs
    const altura = Number(inputAltura.value); // converteu os dados obtidos dos inputs

    // testa se retorna com NaN e apresenta o resultado peso invalido

    if (!peso) {
        setResultado('Peso inválido!', false);
        return;
    }

    // testa se retorna com NaN e apresenta o resultado altura invalida

    if (!altura) {
        setResultado('Altura inválida!', false);
        return;
    }

    const imc = getImc(peso, altura); // execução de função para calcular IMC;
    const nivelImc = getNivelImc(imc); // captura o nivel do IMC;

    const msg = `Seu IMC é ${imc} (${nivelImc}).`; // mensagem com o resultado do IMC caso peso e altura seja TRUE;

    setResultado(msg, true); // setou o resultado com a flag true para adicionar class no P e apresentar texto com background verde representando aprovado;
});

function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; // criou uma array para obter os valores com os resultados baseados no IMC dessa função;

    if (imc >= 40) { return nivel[5] };
    if (imc >= 35) { return nivel[4] };
    if (imc >= 30) { return nivel[3] };
    if (imc >= 25) { return nivel[2] };
    if (imc >= 18.5) { return nivel[1] };
    if (imc < 18.5) { return nivel[0] };
}

function getImc(peso, altura) { // função criada para obter o calcula do IMC;
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function criaP() { // função criada para adionar um paragrafo para apresentar fundo verde ou vermelho caso dê erro no codigo;
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) { // função criada para dizer o resultado, informando o resultado, e apresentando se o resultado é valido ou não; 
    const resultado = document.querySelector("#resultado"); // seleciona a DIV com a seção resultado;
    resultado.innerHTML = ''; // zera o html de resultado;

    const p = criaP(); // cria P com nossa função P
    if (isValid) { // verifica se nossa função é verdadeira;
        p.classList.add('paragrafo-resultado'); // caso seja verdadeira adiciona o 'p' e adiciona background verde;
    } else {
        p.classList.add('bad'); // caso seja falso adiciona o .bad ao 'p' e adiciona background vermelho;
    }
    p.innerHTML = msg // insere a mensagem que estamos recebendo do paragrafo com o innerHTML;
    resultado.appendChild(p); // adiciona um "filho" ao resultado final;

}