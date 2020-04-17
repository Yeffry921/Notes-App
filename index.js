class Note {
    constructor(noteForm, notesContainer) {
        this.data = ['Testing note', 'Testing Note'];
        this.noteForm = noteForm;
        this.notesContainer = notesContainer

        noteForm.addEventListener('submit', this.onSubmit);
        window.addEventListener('DOMContentLoaded', this.onStart);
    };
    onStart = () => {
        //run local storage and grab data
        //this.renderData();
        const notesJSON = localStorage.getItem('notes');
        console.log(notesJSON)
        const notes = JSON.parse(notesJSON);
        if(notes !== null){
            this.data = notes
            this.renderData();
        }
        
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.data.push(event.target.note.value);
        localStorage.setItem('notes', JSON.stringify(this.data));
        this.renderData();
        event.target.reset();
    };
    onEdit(editElement, editBtn, finishedEdit) {
        //simply allow us to edit the note
        editElement.classList.add('isEditable');
        editElement.contentEditable = true;
        
        finishedEdit.addEventListener('click', () => {
            editElement.classList.remove('isEditable');
            editElement.contentEditable = false;
            editBtn.disabled = false;

            const noteIndex = parseInt(editElement.getAttribute('data-id'));
            this.data[noteIndex] = editElement.textContent;
            localStorage.setItem('notes', JSON.stringify(this.data));
            this.renderData()
            
        })

    };
    onDelete(deleteElement){
        //remove note from the project
        const noteIndex = parseInt(deleteElement.getAttribute('data-id'));
        this.data.splice(noteIndex, 1);
        localStorage.setItem('notes', JSON.stringify(this.data));
        this.renderData();
    };
    renderData(){
        //display the notes to the user

        this.notesContainer.textContent = '';
        this.data.forEach((note, index) => {
            const noteDiv = document.createElement('div');
            const btnDiv = document.createElement('div');
            const noteParagraph = document.createElement('p');
            const deleteBtn = document.createElement('button');
            const editBtn = document.createElement('button');
            const finishedEdit = document.createElement('button');

            noteParagraph.textContent = note;
            noteParagraph.setAttribute('data-id', index);
            deleteBtn.textContent = 'X';
            deleteBtn.setAttribute('data-id', index)
            editBtn.textContent = 'Edit';
            finishedEdit.textContent = 'OK'

            noteDiv.classList.add('note-items');
            btnDiv.classList.add('btn-items')

            btnDiv.appendChild(editBtn);
            btnDiv.appendChild(finishedEdit);
            btnDiv.appendChild(deleteBtn);
            noteDiv.appendChild(noteParagraph);
            noteDiv.appendChild(btnDiv);
            this.notesContainer.appendChild(noteDiv);

            editBtn.addEventListener('click' , (event) => {
                this.onEdit(noteParagraph, editBtn, finishedEdit);
                editBtn.disabled = true;

            });

            deleteBtn.addEventListener('click', (event) => {
                this.onDelete(deleteBtn);
            })

        });
        

    };
};

const notesContainer = document.querySelector('.notes-container');
const noteForm = document.querySelector('.note-form');

const note = new Note(noteForm, notesContainer);
