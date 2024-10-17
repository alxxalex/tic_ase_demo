import { registerUser } from "./userManagement.js";
import { loginUser } from "./userManagement.js";

console.log('aaa');

const tasks = [
    {
        'id' : 1,
        'responsible' : 'Mihai',
        'description' : 'Do the dishes',
        'status' : 'pending'
    },
    {
        'id' : 2,
        'responsible' : 'Elena',
        'description' : 'Do the homework',
        'status' : 'done'
    },
    {
        'id' : 3,
        'responsible' : 'Cosmin',
        'description' : 'buy Electric Castel tickets',
        'status' : 'in progress'
    }
]

function printTasks(tasks){
    tasks.forEach(element => {
        console.log(`Responisble: ${element.responsible} 
Decription: ${element.description}
----------------------------------`);
    });
}

function displayTasks(tasks){
    let container = document.getElementById('task-Container');

    let name = JSON.parse(localStorage.getItem('isLogged'));

    if(tasks.length === 0){
        let noTasksWanring = document.createElement('p');
        noTasksWanring.textContent = 'No task available';
        container.appendChild(noTasksWanring);
    }else{
        const tasksList = document.createElement('ul');
        tasks.forEach(element => {
            const taskItem = document.createElement('li');
            
            const taskId = document.createElement('div');
            taskId.textContent = element.id;
            taskItem.appendChild(taskId);

            const taskResponsible = document.createElement('div');
            taskResponsible.textContent = element.responsible;
            taskItem.appendChild(taskResponsible);

            const taskDescription = document.createElement('div');
            taskDescription.textContent = element.description;
            taskItem.appendChild(taskDescription);

            const taskStatus = document.createElement('div');
            taskStatus.textContent = element.status;
            taskItem.appendChild(taskStatus);

            if(name == element.responsible){
                const edit = document.createElement('div');
                edit.textContent = "You can edit this one";
                taskItem.appendChild(edit);
            }

            tasksList.appendChild(taskItem);
        });

        container.appendChild(tasksList);
    }
}

printTasks(tasks);
displayTasks(tasks);
1
const registerForm = document.getElementById('register');

registerForm.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    let user = {}

    user.name = document.getElementById('register-name').value.trim();
    user.email = document.getElementById('register-email').value.trim();
    user.password = document.getElementById('register-password').value.trim();

    registerUser(user);
})

const loginForm = document.getElementById('login');

loginForm.addEventListener("submit",(event) => {
    event.preventDefault();

    let user = {}

    user.name = document.getElementById('login-name').value.trim();
    user.email = document.getElementById('login-email').value.trim();
    user.password = document.getElementById('login-password').value.trim();

    loginUser(user);
})

//autentificare
//bcrypt
//editare/stergere pt taskurile unde sunt responsabil
//modul task management
//fara acelasi emial