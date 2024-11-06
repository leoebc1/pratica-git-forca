import { palavras } from "./Palavras"
const ask = require("readline-sync")

export class Forca{
    private palavra: string[]
    private palavraMascarada: string
    private tentativas: number
    private letrasTentadas: string[] = []

    public jogo(): void{
        this.tentativas = 6
        this.letrasTentadas = []
        this.palavra = palavras[this.gerarNumeroAleatorio() -1]

        this.esconderPalavra(this.palavra[1])

        let sustentaJogo = true
        while(sustentaJogo){
            console.clear()
            this.enforcado()
            this.letrasQueJaForam()
            if(!this.verificaPalavra() && this.tentativas){
                console.log('\n\n', this.palavraMascarada.split("").join(" "))
                console.log(`\n\nDica: ${this.palavra[0]}`)
                let opcaoLetra: string = ask.question("\n\nDigite uma letra: ")
                this.verificarLetra(opcaoLetra)
            } else if (this.verificaPalavra() && this.tentativas){
                this.telaDeVitoria()
                sustentaJogo = false
            } else if (!this.tentativas && !this.verificaPalavra()){
                this.telaDeDerrota()
                sustentaJogo = false
            }
        }
        
    }

    private gerarNumeroAleatorio(): number {
        return Math.floor(Math.random() * palavras.length)
    }    

    private esconderPalavra(palavra: string): void {
        this.palavraMascarada = palavra.replace(/[a-zA-Z]/g, '_')
    }

    private verificaPalavra(){
        return this.palavraMascarada === this.palavra[1]
    }

    private enforcado(): void{
        switch(this.tentativas){
            case 6:
                console.log(`\x1b[38;5;180m
 ___________.._______
| .__________))______|
| | / /      ||      
| |/ /       ||      
| | /        || 
| |/         ||   
| |          || 
| |          (\\_  
| |          - --   
| |       
| |        
| |         
| |            
| |            
| |           
| |             
| |         
| |   \x1b[0m`)
                break
            case 5:
                console.log(`\x1b[38;5;180m
 ___________.._______
| .__________))______|
| | / /      ||      
| |/ /       ||      
| | /        || .-..
| |/         ||  _  
| |          ||  ,/,|
| |          (\\_.,  
| |          - --   
| |       
| |        
| |         
| |            
| |            
| |           
| |             
| |         
| |   \x1b[0m`)
                break
            case 4:
                console.log(`\x1b[38;5;180m
 ___________.._______
| .__________))______|
| | / /      ||      
| |/ /       ||      
| | /        || .-..
| |/         ||  _  
| |          ||  ,/,|
| |          (\\_.,  
| |         .- -- .  
| |        /Y . . Y/ 
| |          |   | 
| |          | . |  
| |          |   |  
| |            
| |           
| |             
| |         
| |   \x1b[0m`)
                break
            case 3:
                console.log(`\x1b[38;5;180m
 ___________.._______
| .__________))______|
| | / /      ||      
| |/ /       ||      
| | /        || .-..
| |/         ||  _  
| |          ||  ,/,|
| |          (\\_.,  
| |         .- -- .  
| |        /Y . . Y/ 
| |       // |   |
| |      //  | . | 
| |     (    |   |  
| |            
| |             
| |           
| |           
| |       \x1b[0m`)
                break
            case 2:
                console.log(`\x1b[38;5;180m
 ___________.._______
| .__________))______|
| | / /      ||      
| |/ /       ||      
| | /        || .-..
| |/         ||  _  
| |          ||  ,/,|
| |          (\\_.,  
| |         .- -- .  
| |        /Y . . Y/ 
| |       // |   | // 
| |      //  | . |  // 
| |     (    |   |    ) 
| |            
| |           
| |             
| |            
| |        \x1b[0m`)
                break
            case 1:
                console.log(`\x1b[38;5;180m
 ___________.._______
| .__________))______|
| | / /      ||      
| |/ /       ||      
| | /        || .-..
| |/         ||  _  
| |          ||  ,/,|
| |          (\\_.,  
| |         .- -- .  
| |        /Y . . Y/ 
| |       // |   | // 
| |      //  | . |  // 
| |     (    |   |    ) 
| |          ||     
| |          ||     
| |          ||      
| |          ||      
| |         / |  \x1b[0m`)
                break
            case 0:
                console.log(`\x1b[38;5;180m
 ___________.._______
| .__________))______|
| | / /      ||      
| |/ /       ||      
| | /        || .-..
| |/         ||  _  
| |          ||  ,/,|
| |          (\\_.,  
| |         .- -- .  
| |        /Y . . Y/ 
| |       // |   | // 
| |      //  | . |  // 
| |     (    |   |    ) 
| |          || ||     
| |          || ||     
| |          || ||     
| |          || ||     
| |         / | | / \x1b[0m`)
                break
        }
    }

    private verificarLetra(letra: string): void {
        letra = letra.toUpperCase()
        if (this.letrasTentadas.includes(letra)) {
            console.clear()
            console.log("Letra repetida, tecle ENTER para continuar...")
            ask.question("")
            return
        }
        this.letrasTentadas.push(letra)
    
        const palavraArray = this.palavra[1].split("")
        const palavraMascaradaArray = this.palavraMascarada.split("")
    
        let letraEncontrada = false
        for (let i = 0; i < palavraArray.length; i++) {
            if (letra === palavraArray[i]) {
                palavraMascaradaArray[i] = letra
                letraEncontrada = true
            }
        }
    
        this.palavraMascarada = palavraMascaradaArray.join("");
    
        if (!letraEncontrada) {
            this.tentativas--
        }
    }
    

    private letrasQueJaForam(): void{
        if(this.letrasTentadas.length > 0)
        console.log(this.letrasTentadas.join("-"))
    }

    private telaDeVitoria(){
        console.clear()
        console.log(this.palavra[1])
        console.log(`\x1b[33m\n\n
            ▌ ▐·       ▄▄· ▄▄▄ .     ▌ ▐·▄▄▄ . ▐ ▄  ▄▄· ▄▄▄ .▄• ▄▌▄▄ ▄▄ ▄▄ 
           ▪█·█▌▪     ▐█ ▌▪▀▄.▀·    ▪█·█▌▀▄.▀·•█▌▐█▐█ ▌▪▀▄.▀·█▪██▌██▌██▌██▌
           ▐█▐█• ▄█▀▄ ██ ▄▄▐▀▀▪▄    ▐█▐█•▐▀▀▪▄▐█▐▐▌██ ▄▄▐▀▀▪▄█▌▐█▌▐█·▐█·▐█·
            ███ ▐█▌.▐▌▐███▌▐█▄▄▌     ███ ▐█▄▄▌██▐█▌▐███▌▐█▄▄▌▐█▄█▌.▀ .▀ .▀ 
           . ▀   ▀█▄▀▪·▀▀▀  ▀▀▀     . ▀   ▀▀▀ ▀▀ █▪·▀▀▀  ▀▀▀  ▀▀▀  ▀  ▀  ▀ 
                       \x1b[0m`)
        ask.question("\nTecle ENTER para continuar...")
    }

    private telaDeDerrota(){
        console.log(`\x1b[31m
 ██▒   █▓ ▒█████   ▄████▄  ▓█████     ██▓███  ▓█████  ██▀███  ▓█████▄ ▓█████  █    ██  ▐██▌ 
▓██░   █▒▒██▒  ██▒▒██▀ ▀█  ▓█   ▀    ▓██░  ██▒▓█   ▀ ▓██ ▒ ██▒▒██▀ ██▌▓█   ▀  ██  ▓██▒ ▐██▌ 
 ▓██  █▒░▒██░  ██▒▒▓█    ▄ ▒███      ▓██░ ██▓▒▒███   ▓██ ░▄█ ▒░██   █▌▒███   ▓██  ▒██░ ▐██▌ 
  ▒██ █░░▒██   ██░▒▓▓▄ ▄██▒▒▓█  ▄    ▒██▄█▓▒ ▒▒▓█  ▄ ▒██▀▀█▄  ░▓█▄   ▌▒▓█  ▄ ▓▓█  ░██░ ▓██▒ 
   ▒▀█░  ░ ████▓▒░▒ ▓███▀ ░░▒████▒   ▒██▒ ░  ░░▒████▒░██▓ ▒██▒░▒████▓ ░▒████▒▒▒█████▓  ▒▄▄  
   ░ ▐░  ░ ▒░▒░▒░ ░ ░▒ ▒  ░░░ ▒░ ░   ▒▓▒░ ░  ░░░ ▒░ ░░ ▒▓ ░▒▓░ ▒▒▓  ▒ ░░ ▒░ ░░▒▓▒ ▒ ▒  ░▀▀▒ 
   ░ ░░    ░ ▒ ▒░   ░  ▒    ░ ░  ░   ░▒ ░      ░ ░  ░  ░▒ ░ ▒░ ░ ▒  ▒  ░ ░  ░░░▒░ ░ ░  ░  ░ 
     ░░  ░ ░ ░ ▒  ░           ░      ░░          ░     ░░   ░  ░ ░  ░    ░    ░░░ ░ ░     ░ 
      ░      ░ ░  ░ ░         ░  ░               ░  ░   ░        ░       ░  ░   ░      ░    
     ░            ░                                            ░           
            \x1b[0m`)
        ask.question("\nTecle ENTER para continuar...")
    }
}