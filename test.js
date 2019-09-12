var Curso = /** @class */ (function () {
    function Curso(titulo, description, horas) {
        this.titulo = titulo;
        this.description = description;
        this.horas = horas;
        this.inscritos = 0;
    }
    Curso.prototype.getInscritos = function () {
        return this.inscritos;
    };
    Curso.prototype.setInscritos = function (inscritos) {
        this.inscritos = inscritos;
    };
    Curso.prototype.addInscrito = function () {
        this.inscritos++;
    };
    Curso.prototype.remInscrito = function () {
        this.inscritos--;
    };
    return Curso;
}());
var cursoAngular = new Curso("cursoAngular", "Lorem ipsum", 100);
// cursoAngular.setInscritos(9);
// cursoAngular.addInscrito();
console.log(cursoAngular);
