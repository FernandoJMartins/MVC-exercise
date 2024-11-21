class DisciplinaRepositorio {

    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    remover(codigo) {
        const indxDisciplinaRemover = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indxDisciplinaRemover > -1) {
            this.disciplinas.splice(indxDisciplinaRemover, 1);
        }
    }

    listar() {
        return this.disciplinas;
    }

    pesquisarPorCodigo(codigo) {
        return this.disciplinas.filter(disciplina => disciplina.codigo === codigo);
    }

    pesquisarDisciplina(codigo) {
        return this.disciplinas.find(disciplina => disciplina.codigo === codigo);
    }


    inserirAlunoNaDisciplina(disciplina, matriculaAluno) {
        for (let i = 0; i < this.disciplinas.length; i++) {
            if (this.disciplinas[i].codigo === disciplina) {
                this.disciplinas[i].addAlunos(matriculaAluno);
            }
        }
    }

    removerAlunoDaDisciplina(disciplina, matriculaAluno) {
        for (let i = 0; i < this.disciplinas.length; i++) {
            if (this.disciplinas[i].codigo === disciplina) {
                this.disciplinas[i].removeAlunos(matriculaAluno);
            }
        }
    }
}

