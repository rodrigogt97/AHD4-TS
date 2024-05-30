// definir la clase task

export function Tarea(descripcionTarea){
  this.descripcion = descripcionTarea;
  this.completado = false;
}

// metodo para marcar la tarea como completada

Tarea.prototype.tareaCompletada = function (){
  this.completado = !this.completado;
}
