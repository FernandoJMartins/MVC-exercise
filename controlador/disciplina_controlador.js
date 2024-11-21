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

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Nome: ${disciplina.nome} - codigo: ${disciplina.codigo} - Alunos: ${disciplina.alunos}`;
        elementoDestino.appendChild(disciplinaElemento);
    }


    pesquisarPorCodigo() {
        const codigoElemento = document.querySelector("#codigo");
        const listaDisciplinas = document.querySelector("#listaDisciplina");

        const disciplinas = this.servico.pesquisarPorCodigo(codigoElemento.value);

        listaDisciplinas.innerHTML = '';

        disciplinas.forEach(disciplina => this.inserirDisciplinaNoHtml(disciplina, listaDisciplinas));
    }

    inserirAlunoNaDisciplina() {
        const codigoElemento = document.querySelector("#codigo");
        const matriculaElemento = document.querySelector("#aluno");

        this.servico.inserirAlunoNaDisciplina(codigoElemento.value, matriculaElemento.value);
    }

    removerAlunoDaDisciplina() {
        const codigoElemento = document.querySelector("#codigo");
        const matriculaElemento = document.querySelector("#aluno");

        this.servico.removerAlunoDaDisciplina(codigoElemento.value, matriculaElemento.value);
    }
}

