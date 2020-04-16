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
        this.renderData();
    };
    onSubmit = (event) => {
        event.preventDefault();
        this.data.push(event.target.note.value);
        this.renderData();
        event.target.reset();
    };
    onEdit(editElement, editBtn, btnDiv) {
        //simply allow us to edit the note
        editElement.classList.add('isEditable');
        editElement.contentEditable = true;
        
        finishedEdit.textContent = 'OK'
        btnDiv.appendChild(finishedEdit);

        finishedEdit.addEventListener('click', () => {
            editElement.classList.remove('isEditable');
            editElement.contentEditable = false;
            editBtn.disabled = false;
        })

    };
    onDelete(){
        //remove note from the project
    };
    renderData(){
        //display the notes to the user

        this.notesContainer.textContent = '';
        this.data.forEach((note) => {
            const noteDiv = document.createElement('div');
            const btnDiv = document.createElement('div');
            const noteParagraph = document.createElement('p');
            const deleteBtn = document.createElement('button');
            const editBtn = document.createElement('button');

            noteParagraph.textContent = note;
            deleteBtn.textContent = 'X';
            editBtn.textContent = 'Edit';

            noteDiv.classList.add('note-items');
            btnDiv.classList.add('btn-items')

            btnDiv.appendChild(editBtn);
            btnDiv.appendChild(deleteBtn);
            noteDiv.appendChild(noteParagraph);
            noteDiv.appendChild(btnDiv);
            this.notesContainer.appendChild(noteDiv);

            editBtn.addEventListener('click' , (event) => {
                this.onEdit(noteParagraph, editBtn, btnDiv);
                editBtn.disabled = true;

            })


        });
        

    };
};

const notesContainer = document.querySelector('.notes-container');
const noteForm = document.querySelector('.note-form');

const note = new Note(noteForm, notesContainer);
