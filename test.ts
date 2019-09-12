class Curso implements DatosMaestros{
    public titulo:string;
    public description:string;
    public horas:number;
    public inscritos:number;

    constructor(description,horas){
        this.description=description;
        this.horas=horas;
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

interface DatosMaestros{
    titulo:String;
    addInscrito();
}
    var cursoAngular= new Curso("cursoAngular","Lorem ipsum",100);

    // cursoAngular.setInscritos(9);
    // cursoAngular.addInscrito();

    console.log(cursoAngular);
