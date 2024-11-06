"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Forca = void 0;
var Palavras_1 = require("./Palavras");
var ask = require("readline-sync");
var Forca = /** @class */ (function () {
    function Forca() {
        this.letrasTentadas = [];
    }
    Forca.prototype.jogo = function () {
        this.tentativas = 6;
        this.letrasTentadas = [];
        this.palavra = Palavras_1.palavras[this.gerarNumeroAleatorio() - 1];
        this.esconderPalavra(this.palavra[1]);
        var sustentaJogo = true;
        while (sustentaJogo) {
            console.clear();
            this.enforcado();
            this.letrasQueJaForam();
            if (!this.verificaPalavra() && this.tentativas) {
                console.log('\n\n', this.palavraMascarada.split("").join(" "));
                console.log("\n\nDica: ".concat(this.palavra[0]));
                var opcaoLetra = ask.question("\n\nDigite uma letra: ");
                this.verificarLetra(opcaoLetra);
            }
            else if (this.verificaPalavra() && this.tentativas) {
                this.telaDeVitoria();
                sustentaJogo = false;
            }
            else if (!this.tentativas && !this.verificaPalavra()) {
                this.telaDeDerrota();
                sustentaJogo = false;
            }
        }
    };
    Forca.prototype.gerarNumeroAleatorio = function () {
        return Math.floor(Math.random() * Palavras_1.palavras.length);
    };
    Forca.prototype.esconderPalavra = function (palavra) {
        this.palavraMascarada = palavra.replace(/[a-zA-Z]/g, '_');
    };
    Forca.prototype.verificaPalavra = function () {
        return this.palavraMascarada === this.palavra[1];
    };
    Forca.prototype.enforcado = function () {
        switch (this.tentativas) {
            case 6:
                console.log("\u001B[38;5;180m\n ___________.._______\n| .__________))______|\n| | / /      ||      \n| |/ /       ||      \n| | /        || \n| |/         ||   \n| |          || \n| |          (\\_  \n| |          - --   \n| |       \n| |        \n| |         \n| |            \n| |            \n| |           \n| |             \n| |         \n| |   \u001B[0m");
                break;
            case 5:
                console.log("\u001B[38;5;180m\n ___________.._______\n| .__________))______|\n| | / /      ||      \n| |/ /       ||      \n| | /        || .-..\n| |/         ||  _  \n| |          ||  ,/,|\n| |          (\\_.,  \n| |          - --   \n| |       \n| |        \n| |         \n| |            \n| |            \n| |           \n| |             \n| |         \n| |   \u001B[0m");
                break;
            case 4:
                console.log("\u001B[38;5;180m\n ___________.._______\n| .__________))______|\n| | / /      ||      \n| |/ /       ||      \n| | /        || .-..\n| |/         ||  _  \n| |          ||  ,/,|\n| |          (\\_.,  \n| |         .- -- .  \n| |        /Y . . Y/ \n| |          |   | \n| |          | . |  \n| |          |   |  \n| |            \n| |           \n| |             \n| |         \n| |   \u001B[0m");
                break;
            case 3:
                console.log("\u001B[38;5;180m\n ___________.._______\n| .__________))______|\n| | / /      ||      \n| |/ /       ||      \n| | /        || .-..\n| |/         ||  _  \n| |          ||  ,/,|\n| |          (\\_.,  \n| |         .- -- .  \n| |        /Y . . Y/ \n| |       // |   |\n| |      //  | . | \n| |     (    |   |  \n| |            \n| |             \n| |           \n| |           \n| |       \u001B[0m");
                break;
            case 2:
                console.log("\u001B[38;5;180m\n ___________.._______\n| .__________))______|\n| | / /      ||      \n| |/ /       ||      \n| | /        || .-..\n| |/         ||  _  \n| |          ||  ,/,|\n| |          (\\_.,  \n| |         .- -- .  \n| |        /Y . . Y/ \n| |       // |   | // \n| |      //  | . |  // \n| |     (    |   |    ) \n| |            \n| |           \n| |             \n| |            \n| |        \u001B[0m");
                break;
            case 1:
                console.log("\u001B[38;5;180m\n ___________.._______\n| .__________))______|\n| | / /      ||      \n| |/ /       ||      \n| | /        || .-..\n| |/         ||  _  \n| |          ||  ,/,|\n| |          (\\_.,  \n| |         .- -- .  \n| |        /Y . . Y/ \n| |       // |   | // \n| |      //  | . |  // \n| |     (    |   |    ) \n| |          ||     \n| |          ||     \n| |          ||      \n| |          ||      \n| |         / |  \u001B[0m");
                break;
            case 0:
                console.log("\u001B[38;5;180m\n ___________.._______\n| .__________))______|\n| | / /      ||      \n| |/ /       ||      \n| | /        || .-..\n| |/         ||  _  \n| |          ||  ,/,|\n| |          (\\_.,  \n| |         .- -- .  \n| |        /Y . . Y/ \n| |       // |   | // \n| |      //  | . |  // \n| |     (    |   |    ) \n| |          || ||     \n| |          || ||     \n| |          || ||     \n| |          || ||     \n| |         / | | / \u001B[0m");
                break;
        }
    };
    Forca.prototype.verificarLetra = function (letra) {
        letra = letra.toUpperCase();
        if (this.letrasTentadas.includes(letra)) {
            console.clear();
            console.log("Letra repetida, tecle ENTER para continuar...");
            ask.question("");
            return;
        }
        this.letrasTentadas.push(letra);
        var palavraArray = this.palavra[1].split("");
        var palavraMascaradaArray = this.palavraMascarada.split("");
        var letraEncontrada = false;
        for (var i = 0; i < palavraArray.length; i++) {
            if (letra === palavraArray[i]) {
                palavraMascaradaArray[i] = letra;
                letraEncontrada = true;
            }
        }
        this.palavraMascarada = palavraMascaradaArray.join("");
        if (!letraEncontrada) {
            this.tentativas--;
        }
    };
    Forca.prototype.letrasQueJaForam = function () {
        if (this.letrasTentadas.length > 0)
            console.log(this.letrasTentadas.join("-"));
    };
    Forca.prototype.telaDeVitoria = function () {
        console.clear();
        console.log(this.palavra[1]);
        console.log("\u001B[33m\n\n\n            \u258C \u2590\u00B7       \u2584\u2584\u00B7 \u2584\u2584\u2584 .     \u258C \u2590\u00B7\u2584\u2584\u2584 . \u2590 \u2584  \u2584\u2584\u00B7 \u2584\u2584\u2584 .\u2584\u2022 \u2584\u258C\u2584\u2584 \u2584\u2584 \u2584\u2584 \n           \u25AA\u2588\u00B7\u2588\u258C\u25AA     \u2590\u2588 \u258C\u25AA\u2580\u2584.\u2580\u00B7    \u25AA\u2588\u00B7\u2588\u258C\u2580\u2584.\u2580\u00B7\u2022\u2588\u258C\u2590\u2588\u2590\u2588 \u258C\u25AA\u2580\u2584.\u2580\u00B7\u2588\u25AA\u2588\u2588\u258C\u2588\u2588\u258C\u2588\u2588\u258C\u2588\u2588\u258C\n           \u2590\u2588\u2590\u2588\u2022 \u2584\u2588\u2580\u2584 \u2588\u2588 \u2584\u2584\u2590\u2580\u2580\u25AA\u2584    \u2590\u2588\u2590\u2588\u2022\u2590\u2580\u2580\u25AA\u2584\u2590\u2588\u2590\u2590\u258C\u2588\u2588 \u2584\u2584\u2590\u2580\u2580\u25AA\u2584\u2588\u258C\u2590\u2588\u258C\u2590\u2588\u00B7\u2590\u2588\u00B7\u2590\u2588\u00B7\n            \u2588\u2588\u2588 \u2590\u2588\u258C.\u2590\u258C\u2590\u2588\u2588\u2588\u258C\u2590\u2588\u2584\u2584\u258C     \u2588\u2588\u2588 \u2590\u2588\u2584\u2584\u258C\u2588\u2588\u2590\u2588\u258C\u2590\u2588\u2588\u2588\u258C\u2590\u2588\u2584\u2584\u258C\u2590\u2588\u2584\u2588\u258C.\u2580 .\u2580 .\u2580 \n           . \u2580   \u2580\u2588\u2584\u2580\u25AA\u00B7\u2580\u2580\u2580  \u2580\u2580\u2580     . \u2580   \u2580\u2580\u2580 \u2580\u2580 \u2588\u25AA\u00B7\u2580\u2580\u2580  \u2580\u2580\u2580  \u2580\u2580\u2580  \u2580  \u2580  \u2580 \n                       \u001B[0m");
        ask.question("\nTecle ENTER para continuar...");
    };
    Forca.prototype.telaDeDerrota = function () {
        console.log("\u001B[31m\n \u2588\u2588\u2592   \u2588\u2593 \u2592\u2588\u2588\u2588\u2588\u2588   \u2584\u2588\u2588\u2588\u2588\u2584  \u2593\u2588\u2588\u2588\u2588\u2588     \u2588\u2588\u2593\u2588\u2588\u2588  \u2593\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2580\u2588\u2588\u2588  \u2593\u2588\u2588\u2588\u2588\u2588\u2584 \u2593\u2588\u2588\u2588\u2588\u2588  \u2588    \u2588\u2588  \u2590\u2588\u2588\u258C \n\u2593\u2588\u2588\u2591   \u2588\u2592\u2592\u2588\u2588\u2592  \u2588\u2588\u2592\u2592\u2588\u2588\u2580 \u2580\u2588  \u2593\u2588   \u2580    \u2593\u2588\u2588\u2591  \u2588\u2588\u2592\u2593\u2588   \u2580 \u2593\u2588\u2588 \u2592 \u2588\u2588\u2592\u2592\u2588\u2588\u2580 \u2588\u2588\u258C\u2593\u2588   \u2580  \u2588\u2588  \u2593\u2588\u2588\u2592 \u2590\u2588\u2588\u258C \n \u2593\u2588\u2588  \u2588\u2592\u2591\u2592\u2588\u2588\u2591  \u2588\u2588\u2592\u2592\u2593\u2588    \u2584 \u2592\u2588\u2588\u2588      \u2593\u2588\u2588\u2591 \u2588\u2588\u2593\u2592\u2592\u2588\u2588\u2588   \u2593\u2588\u2588 \u2591\u2584\u2588 \u2592\u2591\u2588\u2588   \u2588\u258C\u2592\u2588\u2588\u2588   \u2593\u2588\u2588  \u2592\u2588\u2588\u2591 \u2590\u2588\u2588\u258C \n  \u2592\u2588\u2588 \u2588\u2591\u2591\u2592\u2588\u2588   \u2588\u2588\u2591\u2592\u2593\u2593\u2584 \u2584\u2588\u2588\u2592\u2592\u2593\u2588  \u2584    \u2592\u2588\u2588\u2584\u2588\u2593\u2592 \u2592\u2592\u2593\u2588  \u2584 \u2592\u2588\u2588\u2580\u2580\u2588\u2584  \u2591\u2593\u2588\u2584   \u258C\u2592\u2593\u2588  \u2584 \u2593\u2593\u2588  \u2591\u2588\u2588\u2591 \u2593\u2588\u2588\u2592 \n   \u2592\u2580\u2588\u2591  \u2591 \u2588\u2588\u2588\u2588\u2593\u2592\u2591\u2592 \u2593\u2588\u2588\u2588\u2580 \u2591\u2591\u2592\u2588\u2588\u2588\u2588\u2592   \u2592\u2588\u2588\u2592 \u2591  \u2591\u2591\u2592\u2588\u2588\u2588\u2588\u2592\u2591\u2588\u2588\u2593 \u2592\u2588\u2588\u2592\u2591\u2592\u2588\u2588\u2588\u2588\u2593 \u2591\u2592\u2588\u2588\u2588\u2588\u2592\u2592\u2592\u2588\u2588\u2588\u2588\u2588\u2593  \u2592\u2584\u2584  \n   \u2591 \u2590\u2591  \u2591 \u2592\u2591\u2592\u2591\u2592\u2591 \u2591 \u2591\u2592 \u2592  \u2591\u2591\u2591 \u2592\u2591 \u2591   \u2592\u2593\u2592\u2591 \u2591  \u2591\u2591\u2591 \u2592\u2591 \u2591\u2591 \u2592\u2593 \u2591\u2592\u2593\u2591 \u2592\u2592\u2593  \u2592 \u2591\u2591 \u2592\u2591 \u2591\u2591\u2592\u2593\u2592 \u2592 \u2592  \u2591\u2580\u2580\u2592 \n   \u2591 \u2591\u2591    \u2591 \u2592 \u2592\u2591   \u2591  \u2592    \u2591 \u2591  \u2591   \u2591\u2592 \u2591      \u2591 \u2591  \u2591  \u2591\u2592 \u2591 \u2592\u2591 \u2591 \u2592  \u2592  \u2591 \u2591  \u2591\u2591\u2591\u2592\u2591 \u2591 \u2591  \u2591  \u2591 \n     \u2591\u2591  \u2591 \u2591 \u2591 \u2592  \u2591           \u2591      \u2591\u2591          \u2591     \u2591\u2591   \u2591  \u2591 \u2591  \u2591    \u2591    \u2591\u2591\u2591 \u2591 \u2591     \u2591 \n      \u2591      \u2591 \u2591  \u2591 \u2591         \u2591  \u2591               \u2591  \u2591   \u2591        \u2591       \u2591  \u2591   \u2591      \u2591    \n     \u2591            \u2591                                            \u2591           \n            \u001B[0m");
        ask.question("\nTecle ENTER para continuar...");
    };
    return Forca;
}());
exports.Forca = Forca;
