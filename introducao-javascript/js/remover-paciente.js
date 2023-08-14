var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event) {
    event.target.parentNode.classList.add("fadeOut"); 

    setTimeout(function() {             //Quando queremos aguardar um tempo, devemos usar a função setTimeout. Será passada como parâmetro uma função anônima com quanto tempo deve ser aguardado:
                                        //Com a função acima iremos assegurar a execução da função passada por parâmetro para ela, com o tempo de 500 milissegundos, equivalente a meio segundo.


        event.target.parentNode.remove();//irá nos dizer quem foi clicado, quem foi o alvo, pela propriedade target,||Enquanto o this se refere ao dono do evento, o event.target será quem sofreu propriamente o evento
    }, 500);

});
