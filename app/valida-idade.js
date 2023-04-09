export default function ehMaior(campo) {
    const aniversario = new Date(campo.value);
    if(!validaIdade(aniversario)){
        campo.setCustomValidity("O usuário não é maior de idade.");
    }
}

function validaIdade(aniversario) {
    const dataAtual = new Date();
    const dataMais18 = new Date(aniversario.getUTCFullYear() + 18, aniversario.getUTCMonth(), aniversario.getUTCDate());
    return dataAtual >= dataMais18
}