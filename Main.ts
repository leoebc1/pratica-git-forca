
const ask = require('readline-sync')

import { Forca } from "./Forca"



let sustentaMenu: boolean = true
let forca = new Forca()

while(sustentaMenu){
    console.clear()
    console.log(`\x1b[31m
▄▄▄█████▓ ██░ ██ ▓█████     ██░ ██  ▄▄▄       ███▄    █   ▄████  ███▄ ▄███▓ ▄▄▄       ███▄    █ 
▓  ██▒ ▓▒▓██░ ██▒▓█   ▀    ▓██░ ██▒▒████▄     ██ ▀█   █  ██▒ ▀█▒▓██▒▀█▀ ██▒▒████▄     ██ ▀█   █ 
▒ ▓██░ ▒░▒██▀▀██░▒███      ▒██▀▀██░▒██  ▀█▄  ▓██  ▀█ ██▒▒██░▄▄▄░▓██    ▓██░▒██  ▀█▄  ▓██  ▀█ ██▒
░ ▓██▓ ░ ░▓█ ░██ ▒▓█  ▄    ░▓█ ░██ ░██▄▄▄▄██ ▓██▒  ▐▌██▒░▓█  ██▓▒██    ▒██ ░██▄▄▄▄██ ▓██▒  ▐▌██▒
  ▒██▒ ░ ░▓█▒░██▓░▒████▒   ░▓█▒░██▓ ▓█   ▓██▒▒██░   ▓██░░▒▓███▀▒▒██▒   ░██▒ ▓█   ▓██▒▒██░   ▓██░
  ▒ ░░    ▒ ░░▒░▒░░ ▒░ ░    ▒ ░░▒░▒ ▒▒   ▓▒█░░ ▒░   ▒ ▒  ░▒   ▒ ░ ▒░   ░  ░ ▒▒   ▓▒█░░ ▒░   ▒ ▒ 
    ░     ▒ ░▒░ ░ ░ ░  ░    ▒ ░▒░ ░  ▒   ▒▒ ░░ ░░   ░ ▒░  ░   ░ ░  ░      ░  ▒   ▒▒ ░░ ░░   ░ ▒░
  ░       ░  ░░ ░   ░       ░  ░░ ░  ░   ▒      ░   ░ ░ ░ ░   ░ ░      ░     ░   ▒      ░   ░ ░ 
          ░  ░  ░   ░  ░    ░  ░  ░      ░  ░         ░       ░        ░         ░  ░         ░    
    \x1b[0m`)
    console.log(`
        [1] - Nova palavra
        [0] - Sair
    `)
    let opcaoUsuario = ask.questionInt("Digite uma opcao: ")
    switch(opcaoUsuario){
        case 1:
            forca.jogo()
            break
        case 2:
            console.clear()
            break
        case 0:
            console.clear()    
            console.log("Volte sempre!")
            sustentaMenu = false
            break
        default:
            console.log("Opcao invalida.")
            break
    }
}