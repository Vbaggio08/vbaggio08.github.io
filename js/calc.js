function calcular() {
    const num1Input = document.getElementById("num1");
    const num2Input = document.getElementById("num2");
    const resultadoP = document.getElementById("resultado");
    const operacaoSelecionadaInput = document.querySelector('input[name="operacao"]:checked');

    if (num1Input.value === "") {
        alert("Por favor, informe o primeiro número.");
        num1Input.focus();
        return;
    } else if (num2Input.value === "") {
        alert("Por favor, informe o segundo número.");
        num2Input.focus();
        return;
    }

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if (!operacaoSelecionadaInput) {
        alert("Por favor, escolha uma operação.");
        return;
    }

    const operacao = operacaoSelecionadaInput.value;
    let resultadoFinal;

    switch (operacao) {
        case 'somar':
            resultadoFinal = num1 + num2;
            break;
        case 'subtrair':
            resultadoFinal = num1 - num2;
            break;
        case 'multiplicar':
            resultadoFinal = num1 * num2;
            break;
        case 'dividir':
            if (num2 === 0) {
                alert("Nao é possível dividir por zero.");
                return;
            }
            resultadoFinal = num1 / num2;
            break;
        default:
            alert("Operação invalida.");
            return;
    }

    let parOuImpar = "";
    if (Number.isInteger(resultadoFinal)) {
        parOuImpar = resultadoFinal % 2 === 0 ? " (Par)" : " (Ímpar)";
        /* nao entendi o porque mas se da um numero quebrado ele nao imprime o impar ou par e me esqueci de perguntar para o professor kkk*/
    }

    resultadoP.innerHTML = "Resultado: " + resultadoFinal + parOuImpar;
}