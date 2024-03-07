const addList = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input')

const newTodo = (text) => {
const html = `
<li class="list-group-item d-flex justify-content-between align-items-center">
<span>${text}</span>
<i class="far fa-trash-alt delete"></i>
</li>
`

list.innerHTML += html
}

addList.addEventListener('submit' , e => {
    e.preventDefault();

    const text = addList.add.value.trim();
   

    if(text.length){
        newTodo(text)
        addList.reset();
    }
})

list.addEventListener('click', e => {


    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
})


const filterTodos = (term) => {
(Array.from(list.children))
.filter( (todo) => !todo.textContent.toLowerCase().includes(term))
.forEach((todo) => todo.classList.add('filtered'));


(Array.from(list.children))
.filter( (todo) => todo.textContent.toLowerCase().includes(term))
.forEach((todo) => todo.classList.add.remove('filtered'))};


search.addEventListener('keyup', ()=> {
    const term = search.value.trim().toLowerCase();
    filterTodos(term)
  

})