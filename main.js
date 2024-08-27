        const textArea = document.querySelector(".texto");
        const mensagem = document.querySelector(".mensagem");
        


        function btnEncriptar() {
            const textoEncriptado = encriptar(textArea.value);
            mensagem.value = textoEncriptado;
            textArea.value = "";

            const instrucoes = document.querySelector(".instrucoes");
            instrucoes.style.display = "none";

        }
        
        

        function encriptar(stringEncriptada) {
            let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
            stringEncriptada = stringEncriptada.toLowerCase();

            for(let i = 0; i < matrizCodigo.length; i++) {
                if(stringEncriptada.includes(matrizCodigo[i][0])) {
                    stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
                }
            }

            

            return stringEncriptada;
        }

        function btnDesencriptar() {
            const textoDesencriptado = desencriptar(textArea.value);
            mensagem.value = textoDesencriptado;
            textArea.value = "";
        }

        function desencriptar(stringDesencriptada) {
            let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
            stringDesencriptada = stringDesencriptada.toLowerCase();

            for(let i = 0; i < matrizCodigo.length; i++) {
                if(stringDesencriptada.includes(matrizCodigo[i][1])) {
                    stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
                }
            }

            return stringDesencriptada;
        }

        function btnCopiar() {
            const mensagem = document.querySelector(".mensagem");
        
            // Armazena a posição do cursor antes de fazer a seleção
            const startPos = mensagem.selectionStart;
            const endPos = mensagem.selectionEnd;
        
            // Seleciona o conteúdo da textarea e copia
            mensagem.select();
            mensagem.setSelectionRange(0, 99999);
            document.execCommand("copy");
        
            // Remove a seleção visual e restaura a posição do cursor
            mensagem.setSelectionRange(startPos, endPos);
            mensagem.blur(); // Remove o foco da textarea para garantir que a seleção visual desapareça
        }