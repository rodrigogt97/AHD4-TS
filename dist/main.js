//Importar la clase Tarea desde task.js
import {Tarea} from "./task.js";

//obtener referencia a los elementos del DOM
const tareaForm =document.getElementById('task-form');
const tareaInput=document.getElementById('task-input');
const tareaList = document.getElementById('task-list');

//crear array para almacenar las tareas
let tareas = [];

//funcion para agregar una nueva tarea
function addTask(descripcion){
    //crear una nueva instancia de la clase tarea
    const nuevaTarea = new Tarea(descripcion);

    //agregar la tarea al array de tareas
    tareas.push(nuevaTarea);

    //actualizar la lista de tareas en el DOM
    renderTareas();
}

//funcion para renderizar la lista de tareas en el dom
function renderTareas(){
    //Limpiar la lista de tareas en el DOM
    tareaList.innerHTML ='';
    
    //Iterar sobre todas las tareas
    tareas.forEach(tarea => {
        const li =document.createElement('li');
        li.textContent=tarea.descripcion;

        //Bonton para eliminar una tarea
        const eliminarBtn =document.createElement('button');
        eliminarBtn.textContent='Eliminar';
        eliminarBtn.classList.add('eliminar-btn');
        eliminarBtn.addEventListener('click', ()=> {
            eliminarTarea(tarea);
        });

        //Agregar clase completado si la tarea esta completa
        if (tarea.completado){
            li.classList.add('Completada');
        }
        
        // agregar un evento click para marcar una tarea completada
        
        li.addEventListener('click', ()=> {
            tarea.tareaCompletada ();
            renderTareas();
        });

        li.appendChild(eliminarBtn);
        tareaList.appendChild(li);
    });
}

// Agregar un evento de envio al formulario para agregar nuevas tareas 
tareaForm.addEventListener('submit', event => {
    event.preventDefault();
    const descripcion = tareaInput.value.trim();
    if (descripcion !== ""){
        addTask(descripcion);
        tareaInput.value="";
    }
});

//Funcion para eliminar una tarea

function eliminarTarea (tareaEliminar){
    tareas =tareas.filter(tarea => tarea !== tareaEliminar);
    renderTareas();
}

// Renderizar la lista de tareas al cargar la pagina
renderTareas();