class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        if (disciplinaPesquisada.length > 0) {
            alert('Disciplina já cadastrada!');
            throw new Error('Disciplina já cadastrada!');
        }

        const disciplinaNova = new Disciplina(codigo, nome);
        this.repositorio.inserir(disciplinaNova);
        return disciplinaNova;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.pesquisarPorCodigo(codigo);
    }

    pesquisarDisciplina(codigo) {
        return this.repositorio.pesquisarDisciplina(codigo);
    }

    remover(codigo) {
        this.repositorio.remover(codigo);
    }

    listarDisciplinas() {
        return this.repositorio.listar();
    }

    inserirAlunoNaDisciplina(codigo, matriculaAluno) {
        this.repositorio.inserirAlunoNaDisciplina(codigo, matriculaAluno);
    }

    removerAlunoDaDisciplina(codigo, matriculaAluno) {
        this.repositorio.removerAlunoDaDisciplina(codigo, matriculaAluno);
    }
}

