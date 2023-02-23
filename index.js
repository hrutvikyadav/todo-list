let toDoItems = []

function createTodo(title, description, dueDate, priority, notes, completed=false) {
    //public
    function done() {
        if(!this.completed) {
            this.completed = true;
            completedOn(title, Date.now())
        }
        console.log("Done: ", this.completed)
        return 
    }
    //private
    function completedOn(title, date){
        console.log("Completed " + title + " on", date)
        return
    }

    return { title, description, dueDate, priority, notes, completed, done }
}

let todo1 = {
    title: 'Get vaccinated',
    description: 'been 3 months since last dose, new booster has come out',
    dueDate: new Date(2023, 3, 18),
    priority: 'medium',
    notes: 'carry pan card, visit hospital near Swargate',
    completed: false
}

let todo2 = createTodo("Created with factory", "Checking if it's working", new Date(2023, 5, 2), 'low', 'Notes form odin', false)

toDoItems.push(todo1)
toDoItems.push(todo2)

console.log("Hello todoist, what tasks to do today?")

//todo2.done()

console.log('your pending tasks:\n')
toDoItems.forEach(todo => {
    todo.completed ? console.log("This is done") : console.log("Pending task!, priority", todo.priority)
    console.log(todo.title, "\n", todo.description)
    todo.completed ? console.log('^^^^^^^'): console.log("Complete before", todo.dueDate.getDate()+` of ${todo.dueDate.getMonth()} Month`)
    console.log(`Remember: ${todo.notes}`)
    console.log("++++++++++++++++++++++++++++++++")
});

function createProject() {
    const { 0: name, ...todos } = arguments
    let currTodos = todos
    //const { 0: n, 1: f, 2: s } = arguments
    console.log("\nNew project created\n"+name)
    console.log("In this project: \n",)


    const listTodos = () => {
        for (const key in currTodos) {
            if (Object.hasOwnProperty.call(currTodos, key)) {
                const element = currTodos[key];
                console.log(">", element.title, element.completed)
            }
        }
    }

    const removeFromProject = (todoname) => {
        //console.log(todoname)
        for (const key in currTodos) {
            if (Object.hasOwnProperty.call(currTodos, key)) {
                const element = currTodos[key];
                if(element.title === todoname) delete currTodos[key]
                else console.log('not found when removing', 'looked for', todoname, 'in', element)
            }
        }
        listTodos()
        //console.log(todos)
    }

    const doneFromProject = (todoname) => {
        //console.log(todoname)
        for (const key in currTodos) {
            if (Object.hasOwnProperty.call(currTodos, key)) {
                const element = currTodos[key];
                if(element.title === todoname) currTodos[key].done()
                else console.log('not found', 'looked for', todoname, 'in', element)
            }
        }
        listTodos()
    }
    return { name, listTodos, removeFromProject, doneFromProject, currTodos }
}

const p1 = createProject('Test project', todo1, todo2)
p1.listTodos()
p1.doneFromProject('Created with factory')
p1.removeFromProject('Created with factory')
p1.listTodos()