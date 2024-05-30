// Importar la clase Tarea desde task.ts
import { Tarea } from "./task.ts";

//Obtener referencias a los elementos del DOM
const tareaForm: HTMLFormElement = document.getElementById('task-form') as HTMLFormElement;
const tareaInput: HTMLInputElement =document.getElementById('task-input') as HTMLInputElement;
const tareaList:HTMLUListElement =document.getElementById('task-list') as HTMLUListElement;

//crear array para almacenar las tareas
let tareas: Tarea[]=[];

//funcion para agregar una nueva tarea
function addTask(descripcion:string): void{
  //crear una nueva instancia de la clase tarea
  const nuevaTarea: Tarea = new Tarea (descripcion);

  //agregar la tarea al array de tareas
  tareas.push(nuevaTarea);

  //actualizar la lista de tareas en el DOM
  renderTareas();
}

//funcion para renderizar la lista de tareas en el DOM
function renderTareas(): void {
  //limpiar la lista de Tareas en el DOM
  tareaList.innerHTML='';

  //Iterar sobre todas las tareas
  tareas.forEach(tarea=> {
    const li: HTMLLIElement = document.createElement('li');
    li.textContent=tarea.descripcion;

    // boton para eliminar una tarea
    const eliminarBtn:HTMLButtonElement = document.createElement('button');
    eliminarBtn.textContent='Eliminar'
    eliminarBtn.classList.add('eliminar-btn');
    eliminarBtn.addEventListener('click',()=> {
      eliminarTarea(tarea);
    });

    // agregar la clase completado si la tarea esta completa

    if(tarea.completado){
      li.classList.add('Completada');
    }

    // agregar un evento click para marcar una tarea completada

    li.addEventListener('click', () => {
      tarea.tareaCompletada();
      renderTareas();
    });

    li.appendChild(eliminarBtn);
    tareaList.appendChild(li);
  });
}

// funcion para eliminar una tarea
function eliminarTarea(tareaEliminar:Tarea) {
  tareas = tareas.filter(tarea => tarea !== tareaEliminar);
  renderTareas();
}
// agregar un evento de envio al formulario para agregar nuevas tareas

tareaForm.addEventListener ('submit', event=> {
  event.preventDefault();
  const descripcion: string = tareaInput.value.trim();
  if(descripcion !== ''){
    addTask(descripcion);
    tareaInput.value="";
  }
});

//Renderizar la lista de tareas al cargar la pagina
renderTareas();