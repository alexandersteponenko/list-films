const TEXT_LIST_FILMS = 'Список фильмов пуст...';

const inputElement = document.getElementById('movieInput');
const movieBtn = document.getElementById('addMovieBtn');
const listElement = document.getElementById('movieList');
 
let films = [];

movieBtn.addEventListener('click', function() {
    if (inputElement.value.length === 0) {
         return
    }
const newNote = {
    title: inputElement.value.trim(),
    completed: false,
   
}
films.push(newNote)
render()
   inputElement.value = '';
});

function render() {
    listElement.innerHTML = '';
    if (films.length === 0) {
        listElement.innerHTML = TEXT_LIST_FILMS
    }
    for (let i = 0; i < films.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getTemplate(films[i], i)) 
    }
}
render()

listElement.addEventListener('click', function(event) {
if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index)
    const type = event.target.dataset.type

    if (type === 'toggle') {
        films[index].completed = !films[index].completed 
    } else if (type === 'remove') {
        films.splice(index, 1)
    }
    render()
}
})

function getTemplate(films, index) {
    return  `
    <li id="movieItem" class="movieItem ${films.completed ? 'movieItem__list' : ''}">
    <div id="btnSelected" class="btn-selected ${films.completed ? 'btn-selected-warning' : ''}" data-index="${index}" data-type='toggle'></div>
    <div class="movieName  ${films.completed ? 'movieName__line-through' : ''}">${films.title}</div> 
    <div id="btnDelete" class="btn-delete" data-type='remove' data-index="${index}"></div>
    </li>`
}