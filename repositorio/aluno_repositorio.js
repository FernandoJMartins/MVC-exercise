class AlunoRepositorio {

    constructor() {
 
        this.alunos = [];
        // this.carregarAlunos();
    }

    inserir(aluno) {
        this.alunos.push(aluno);
        // this.salvarNoLocalStorage();
    }

    remover(matricula) {
        const indxAlunoARemover = this.alunos.findIndex(aluno => aluno.matricula === matricula);
        if (indxAlunoARemover > -1) {
            this.alunos.splice(indxAlunoARemover, 1);
            // this.salvarNoLocalStorage();
        }
    }

    listar() {
        return this.alunos;
    }



    // salvarNoLocalStorage() {
    //     localStorage.setItem('alunos', JSON.stringify(this.alunos)); // Salva os alunos no localStorage
    // }

    // // Carrega os alunos do JSON ou localStorage
    // carregarAlunos() {
    //     const alunos = localStorage.getItem('alunos');
    //     if (alunos) {
    //         try {
    //             const alunosArray = JSON.parse(alunos);  // Parse the JSON string to an array
    //             for (let obj of alunosArray) {  // Loop through the array
    //                 const aluno = new Aluno(obj.nome, obj.idade, obj.matricula);
    //                 this.alunos.push(aluno);
                    
    //             }
    //         } catch (e) {
    //             console.error("Erro ao carregar alunos:", e);
    //         }
    //     } else {
    //         console.log("Nenhum aluno encontrado no localStorage.");
    //     }
    // }
    
}
