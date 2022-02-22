const taskInput = document.querySelector('.form-control')
const saveTask = document.querySelector('.task__save')
const taskForm = document.querySelector('.task__form')
const taskData = document.querySelector('.task__data')
const taskDelete = document.querySelector('.task__delete')

let notes = [];

// Create Note
const createNote = async (noteData) => {
  const note = {
    content: noteData,
    completed: false, 
    id: uid()
  }

  const setNote = await fetch('http://localhost:3001/api/notes', {
    method: 'POST',
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify(note)
  })
  .then((response) => response.json())
  .then((data) => {
    return notes = notes.concat(data)
  })

  return setNote
}

const getNotes = () => {
  return notes
}

const deleteNotes = async (id) => {
  console.log(id)

  const newNotes = await fetch(`http://localhost:3001/api/notes/${id}`, {
    method: 'DELETE'
  })
  .then((response) => response.json())
  .then((data) => {
    return notes = notes.filter((note) => note._id !== id)
  })

  return newNotes
}

const displayNotes = (notes) => {
  const render = notes.map((note) => {
    const status = note.completed === false ? 'In Progress' : 'Completed'
    return (
      `<tr data-id=${note._id}>
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
taskForm.addEventListener('submit', async (e) => {
  e.preventDefault()

  const newNotes = await createNote(taskInput.value)

  displayNotes(newNotes)
})

// Listen for Button actions
taskData.addEventListener('click', async (e) => {
  // DELETE TASK
  if(e.target.classList.contains('task__delete')) {
    const id = e.target.closest('tr').getAttribute('data-id')
    const newNotes = await deleteNotes(id)
    displayNotes(newNotes)
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