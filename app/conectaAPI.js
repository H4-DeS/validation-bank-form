async function criaCadastro(nome, imagem, email, rg, cpf, aniversario){
    const conexao = await fetch("http://localhost:3000/cadastro", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            imagem: imagem,
            email: email,
            rg: rg,
            cpf: cpf,
            aniversario: aniversario
        })
    });
        if(!conexao.ok){
        throw new Error("Não foi possível conectar com o servidor.")
    }
    
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conectaAPI = {
    criaCadastro
}