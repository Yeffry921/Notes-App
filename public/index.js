const taskInput = document.querySelector('.form-control')
const saveTask = document.querySelector('.task__save')
const taskForm = document.querySelector('.task__form')
const taskData = document.querySelector('.task__data')
let notes = [];

// Got from github
const uid = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
       + Math.random().toString(16).slice(2)
       + Date.now().toString(16).slice(4);
};
// Listen for Note creation 
taskForm.addEventListener('submit', (e) => {
  e.preventDefault()

  createNote(taskInput.value)

  displayNotes(notes)
})

// Create Note
const createNote = (noteData) => {

  const note = {
    content: noteData,
    status: 'In progress', 
    id: uid()
  }

  notes.push(note)
}

const getNotes = () => {
  return notes
}

const deleteNotes = () => {

}

const displayNotes = (notes) => {
  const render = notes.map((note) => {
    return (
      `<tr data-id=${note.id}>
        <td>${note.content}</td>
        <td>${note.status}</td>
        <td>
          <button>Delete</button>
          <button>Finished</button>
        </td>
      </tr>
      `
    )
  }).join('')
  taskData.innerHTML = render

}

const init = () => {
  displayNotes(notes)
}

init()