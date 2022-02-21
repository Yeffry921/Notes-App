const taskInput = document.querySelector('.form-control')
const saveTask = document.querySelector('.task__save')
const taskForm = document.querySelector('.task__form')
const taskData = document.querySelector('.task__data')
const taskDelete = document.querySelector('.task__delete')

let notes = [];

// Create Note
const createNote = (noteData) => {
  const note = {
    content: noteData,
    completed: false, 
    id: uid()
  }

  notes = notes.concat(note)
}

const getNotes = () => {
  return notes
}

const deleteNotes = (id) => {
  notes = notes.filter((note) => note.id !== id)
}

const displayNotes = (notes) => {
  const render = notes.map((note) => {
    const status = note.completed === false ? 'In Progress' : 'Completed'
    return (
      `<tr data-id=${note.id}>
        <td>${note.content}</td>
        <td>${status}</td>
        <td>
          <button class="task__delete">Delete</button>
          <button class="task__status">Finished</button>
        </td>
      </tr>
      `
    )
  }).join('')

  taskData.innerHTML = render
}

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

// Listen for Button actions
taskData.addEventListener('click', (e) => {
  // DELETE TASK
  if(e.target.classList.contains('task__delete')) {
    const id = e.target.closest('tr').getAttribute('data-id')
    deleteNotes(id)
    displayNotes(notes)
  }

  // CHANGE TASK STATUS
  if(e.target.classList.contains('task__status')) {
    const id = e.target.closest('tr').getAttribute('data-id')

    const newNotes = notes.map((note) => {
      if(note.id === id) {
        return {
          ...note, 
          completed: !note.completed
        }
      }
      return note
    })

    notes = newNotes
    displayNotes(notes)
  }
  
})

const init = () => {
  displayNotes(notes)
}

init()