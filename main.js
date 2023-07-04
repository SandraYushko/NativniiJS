const todoListId_1="1"
const todoListId_2="2"


const todoList = [
    {
        id: todoListId_1,
        title: 'What to learn?',
        filter: 'all',
    }
    ,
    {
        id: todoListId_2,
        title: 'What to bay?',
        filter: 'all',
    }
]


const tasks = {
    [todoListId_1]: [
        {id: '10', title: 'HTML', isDone: false},
        {id: '20', title: 'CSS', isDone: false},
        {id: '30', title: 'JS', isDone: false}
    ],
    [todoListId_2]: [
        {id: '11', title: 'meat', isDone: false},
        {id: '21', title: 'cheese', isDone: false},
        {id: '31', title: 'water', isDone: false}
    ]
}

const addTodoList = (todoListTitle) => {
    const newTodoID = "3"
    const newTodo = {
        id: newTodoID,
        title: todoListTitle,
        filter: 'all',
    }

    const updatedTodos = [...todoList, newTodo]
console.log(updatedTodos)
    const updatedTasks = {...tasks,  [newTodoID]:[]}
    console.log(updatedTasks)
}
addTodoList("What to read?")
console.log(tasks)

const changeTodoListFilter = (todoListId, newFilterValue) => {
    const updatedTodos = todoList.map(tl => tl.id === todoListId ? {...tl, filter: newFilterValue} : tl)
    console.log(updatedTodos)
}

changeTodoListFilter(todoListId_1, 'active')


const removeTodoList = (todoListId) => {
    const updatedTodos = todoList.filter(tl => tl.id !== todoListId)
    console.log(updatedTodos)
    delete tasks[todoListId]
    console.log(tasks)
}

removeTodoList(todoListId_1)
