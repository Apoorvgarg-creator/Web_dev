let inpCode = document.getElementById('inpCode')
let btnEncode = document.getElementById('btnEncode')
let btnEncrypt = document.getElementById('btnEncrypt')
let code = document.getElementById('code')

btnEncode.onclick = () => {
    let data = inpCode.value
    data = btoa(data)
    code.value = data
}

btnEncrypt.onclick = () => {
    let data = code.value
    data
}

function encryptdata (rawData){
    // Todo: convert lowercase letters to upeercase and vice-versa
    
}