var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest(); //O XMLHttpRequest é um objeto do JS responsável por fazer requisições HTTP. O trecho XML do nome indica que ele era utilizado anteriormente para realizar o transporte de dados do tipo XML
                                    //
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");//O primeiro será open(), com o qual especificaremos o tipo de requisição a ser feita, no caso, GET. Também indicaremos para onde queremos fazê-la:

    xhr.addEventListener("load", function() {  
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200) {
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});

//OBS:
//O objeto XMLHttpRequest é quem é responsável por fazer requisições HTTP assíncronas com Javascript. 
//Apesar de ter o XML no nome hoje em dia este objeto pode trafegar diversos outros tipos de dados além do XML, 
//este nome só se manteve devido a um legado histórico.
//E para instanciar um novo Objeto XMLHttpRequest devemos utilizar a sintaxe com a palavrinha new :


