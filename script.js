let inputbox = document.querySelector(".input")
let submit = document.querySelector(".btn");
let todobox = document.querySelector(".todo-div");
let reset = document.querySelector(".reset")
let counttodo=document.querySelector(".total-count");


window.onload = () => {
    let existingTodos = JSON.parse(localStorage.getItem('todos')) || [];

    existingTodos.forEach(todo => {
        let newdiv = document.createElement("div");
        let deletebtn = document.createElement("button");

        deletebtn.innerText = "Delete";
        newdiv.innerText = todo;

        deletebtn.addEventListener("click", () => {
            newdiv.remove();
            deletebtn.remove();

            let updatedTodos = existingTodos.filter(t => t !== todo);
            localStorage.setItem('todos', JSON.stringify(updatedTodos));
        });

        todobox.appendChild(newdiv);
        todobox.appendChild(deletebtn);
        count();
    });
};

inputbox.addEventListener("input", () => {
    inputbox.style.color = 'blue';
    inputbox.style.fontSize = '30px';
})

submit.addEventListener("click", () => {
    let newTodo = inputbox.value;
    if (newTodo) {
        let newdiv = document.createElement("div");
        let deletebtn = document.createElement("button");

        deletebtn.innerText = "delete";
        deletebtn.style.backgroundColor="red";
        deletebtn.style.borderRadius="1rem"
        deletebtn.style.height="20px"
        deletebtn.style.width="60px"
        newdiv.innerText = newTodo

        deletebtn.addEventListener("click", () => {
            newdiv.remove();
            deletebtn.remove();

            let existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
            existingTodos = existingTodos.filter(t => t !== newTodo);
            localStorage.setItem('todos', JSON.stringify(existingTodos));
            count();
        })


        todobox.appendChild(newdiv)
        todobox.appendChild(deletebtn)

        let existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
        existingTodos.push(newTodo);
        localStorage.setItem('todos', JSON.stringify(existingTodos));

        console.log("Data stored in localStorage:", existingTodos);
    }
    count();
})

reset.addEventListener("click", () => {
       inputbox.value = "";
    localStorage.removeItem('todos');
    todobox.innerHTML = "";
    count();
})

function count() {
    const totallencount = JSON.parse(localStorage.getItem('todos')) || [];
    counttodo.innerText = `Total List is ${totallencount.length}`;
}
