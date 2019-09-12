class Curso{
    public titulo:string;
    public description:string;
    public horas:number;
    public inscritos:number;

    constructor(){
        this.titulo="Nombre del curso";
        this.description="Lorem ipsum";
        this.horas=20;
        this.inscritos=0
    }

    public getInscritos(){
        return this.inscritos;
    }

    public setInscritos(inscritos:number){
        this.inscritos=inscritos;
    }
    public addInscrito(){
        this.inscritos++;
    }
    public remInscrito(){
        this.inscritos--;
    }
}    
    var cursoAngular= new Curso();

    // cursoAngular.setInscritos(9);
    // cursoAngular.addInscrito();

    console.log(cursoAngular);
