// definir la clase task

export class Tarea{
  descripcion : string;
  completado : boolean;

  //Constructor de clase Tarea

  constructor (descripcion: string){
    this.descripcion = descripcion;
    this.completado = false;
  }

  //Method para marcar la tarea como completada 

  tareaCompletada (){
    this.completado = !this.completado;
  }
}


// tsc --w
