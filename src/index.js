import { TodoList, Todo } from './classes/index';
import { crearTodoHtml } from './js/componentes';
import './styles.css';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));

console.log(todoList.todos);