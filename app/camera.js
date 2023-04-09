import { conectaAPI } from "./conectaAPI.js"

const botaoCamera = document.querySelector("[data-video-botao]")
const campoCamera = document.querySelector("[data-camera]")
const video = document.querySelector("[data-video]")
const botaoFoto = document.querySelector("[data-tirar-foto]")
const canvas = document.querySelector("[data-video-canvas]")
const mensagem = document.querySelector("[data-mensagem]")
const botaoEnviar = document.querySelector("[data-enviar]")
let imagemURL = ''

botaoCamera.addEventListener('click', async function () {
    const iniciarVideo = await navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })

    botaoCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = iniciarVideo;
})

botaoFoto.addEventListener('click', () => {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);

    imagemURL = canvas.toDataURL("image/jpeg")
    campoCamera.style.display = "none"
    mensagem.style.display = "block"   

})

botaoEnviar.addEventListener("click", () => {
    const cadastro = sessionStorage.getItem('cadastro');
    const converteCadastro = JSON.parse(cadastro);
    converteCadastro.imagem = imagemURL;

    sessionStorage.setItem('cadastro', JSON.stringify(converteCadastro));
    const statusEnvio = novoCadastro(converteCadastro.nome, converteCadastro.imagem, converteCadastro.email, converteCadastro.rg, converteCadastro.cpf, converteCadastro.aniversario)
    
    if(!statusEnvio){
        console.log("Tente novamente.")
    }
    else {
        window.location.href = './abrir-conta-form-3.html';
    }
})

async function novoCadastro (nome, imagem, email, rg, cpf, aniversario){
    try {
        await conectaAPI.criaCadastro(nome, imagem,  email, rg, cpf, aniversario);
                
    } catch (e) {
        console.log(e);
        return 0
    } finally {
        return 1
    }
}