class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const codigoElemento = document.querySelector("#codigo");
        const nomeElemento = document.querySelector("#nome");

        const listaDisciplinas = document.querySelector("#listaDisciplina");


        const disciplinaInserida = this.servico.inserir(codigoElemento.value, nomeElemento.value);



        if (disciplinaInserida) {
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinas);
        }
    }

    remover(){
        const codigoElemento = document.querySelector("#codigo");
        const listaDisciplinas = document.querySelector("#listaDisciplina");

        this.servico.remover(codigoElemento.value);

    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Nome: ${disciplina.nome} - codigo: ${disciplina.codigo}`;
        elementoDestino.appendChild(disciplinaElemento);
    }


    pesquisarPorCodigo() {
        const codigoElemento = document.querySelector("#codigo");

        const disciplina = this.servico.pesquisarPorCodigo(codigoElemento.value);

        if (disciplina.length > 0){
            alert('disciplina encontrada');
        }
        else {
            alert('disciplina nao encontrada');
        }
    }

    inserirAlunoNaDisciplina() {
        const codigoElemento = document.querySelector("#codigo");
        const matriculaElemento = document.querySelector("#aluno");
        const listaDisciplinas = document.querySelector("#listaAlunosDisciplinaRelacionamento");
        const alunoInserido = this.servico.inserirAlunoNaDisciplina(codigoElemento.value, matriculaElemento.value);

        const disciplina = this.servico.pesquisarDisciplina(codigoElemento.value);
        console.log(disciplina);
            this.inserirAlunoNoHtml(disciplina, listaDisciplinas);
        
    }

    removerAlunoDaDisciplina() {
        const codigoElemento = document.querySelector("#codigo");
        const matriculaElemento = document.querySelector("#aluno");

        this.servico.removerAlunoDaDisciplina(codigoElemento.value, matriculaElemento.value);
    }


    inserirAlunoNoHtml(disciplina, elementoDestino) {

        const DisciplinaAlunoRelacionamento = document.createElement("li");
        if (disciplina.alunos.length > 0) {
            DisciplinaAlunoRelacionamento.innerHTML = '';
        }
        
        DisciplinaAlunoRelacionamento.textContent = `Nome: ${disciplina.nome} - codigo: ${disciplina.codigo} - Alunos: ${disciplina.alunos}`;

        elementoDestino.appendChild(DisciplinaAlunoRelacionamento);
    }
}

