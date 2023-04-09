export default function ehUmCPF(campo){
    const cpf = campo.value.replace(/\.|-/g, "");
    if( validaCamposRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
        campo.setCustomValidity("CPF inválido.")
        console.log(campo.validity);
    }      
}

function validaCamposRepetidos(cpf){
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ];

    return numerosRepetidos.includes(cpf)
}

function validaPrimeiroDigito (cpf){
    let multiplicador = 10;
    let soma = 0;

    for(let i = 0; i<9; i++){
        soma = soma + multiplicador*cpf[i];
        multiplicador--;
    }

    soma *= 10;
    soma = soma % 11;

    if (soma == 10 || soma == 11){
        soma = 0;
    }

    return soma != cpf[9];
}

function validaSegundoDigito (cpf){
    let multiplicador = 11;
    let soma = 0;

    for(let i = 0; i<10; i++){
        soma = soma + multiplicador*cpf[i];
        multiplicador--;
    }

    soma *= 10;
    soma = soma % 11;

    if (soma == 10 || soma == 11){
        soma = 0;
    }

    return soma != cpf[10];
}