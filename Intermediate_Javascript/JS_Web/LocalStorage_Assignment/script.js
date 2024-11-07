document.addEventListener("DOMContentLoaded", function () {
  const noteContainer = document.getElementById("note-container");
  const newNoteButton = document.getElementById("new-note-button");
  const colorForm = document.getElementById("color-form");
  const colorInput = document.getElementById("color-input");

  // TODO: Load the note color from the local storage.
  let noteColor = localStorage.getItem("noteColor") || "#ffffff"; // Default to white if not set
  colorInput.value = noteColor; // Set the input to the stored color

  // TODO: Load the note ID counter from the local storage.
  let noteIdCounter = parseInt(localStorage.getItem("noteIdCounter")) || 0; // Counter for assigning unique IDs to new notes.

  // TODO: Load the notes from the local storage.
  let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
  savedNotes.forEach((noteData) => {
    const note = createNoteElement(
      noteData.id,
      noteData.content,
      noteData.color
    );
    noteContainer.appendChild(note);
  });

  function addNewNote() {
    const id = noteIdCounter;
    const content = `Note ${id}`;

    const note = document.createElement("textarea");
    note.setAttribute("data-note-id", id.toString()); // Stores the note ID to its data attribute.
    note.value = content; // Sets the note ID as value.
    note.className = "note"; // Sets a CSS class.
    note.style.backgroundColor = noteColor; // Sets the note's background color using the last selected note color.
    noteContainer.appendChild(note); // Appends it to the note container element as its child.

    noteIdCounter++; // Increments the counter since the ID is used for this note.
    localStorage.setItem("noteIdCounter", noteIdCounter.toString()); // TODO: Save updated noteIdCounter to localStorage.

    // TODO: Add new note to the saved notes in the local storage.
    savedNotes.push({ id, content, color: noteColor });
    localStorage.setItem("notes", JSON.stringify(savedNotes));
  }

  colorForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the default event.

    const newColor = colorInput.value.trim(); // Removes whitespaces.

    // Updates the color of existing notes.
    const notes = document.querySelectorAll(".note");
    notes.forEach((note) => {
      note.style.backgroundColor = newColor;
    });

    noteColor = newColor; // Updates the stored note color with the new selection.
    localStorage.setItem("noteColor", newColor); // TODO: Save the updated color in localStorage.

    // TODO: Update the color of saved notes in local storage.
    savedNotes = savedNotes.map((note) => ({ ...note, color: newColor }));
    localStorage.setItem("notes", JSON.stringify(savedNotes));

    colorInput.value = ""; // Clears the color input field after form submission.
  });

  newNoteButton.addEventListener("click", function () {
    addNewNote();
  });

  document.addEventListener("dblclick", function (event) {
    if (event.target.classList.contains("note")) {
      event.target.remove(); // Removes the clicked note.

      // TODO: Delete the note from the saved notes in the local storage.
      const noteId = event.target.getAttribute("data-note-id");
      savedNotes = savedNotes.filter((note) => note.id !== parseInt(noteId));
      localStorage.setItem("notes", JSON.stringify(savedNotes));
    }
  });

  noteContainer.addEventListener(
    "blur",
    function (event) {
      if (event.target.classList.contains("note")) {
        // TODO: Update the note content in the saved notes in local storage.
        const noteId = event.target.getAttribute("data-note-id");
        const noteContent = event.target.value;
        savedNotes.forEach((note) => {
          if (note.id === parseInt(noteId)) {
            note.content = noteContent;
          }
        });
        localStorage.setItem("notes", JSON.stringify(savedNotes)); // Save updated notes to localStorage.
      }
    },
    true
  );

  window.addEventListener("keydown", function (event) {
    /* Ignores key presses made for color and note content inputs. */
    if (event.target.id === "color-input" || event.target.type === "textarea") {
      return;
    }

    /* Adds a new note when the "n" key is pressed. */
    if (event.key === "n" || event.key === "N") {
      addNewNote(); // Adds a new note.
    }
  });

  // Function to create a note element based on the given id, content, and color.
  function createNoteElement(id, content, color) {
    const note = document.createElement("textarea");
    note.setAttribute("data-note-id", id.toString()); // Assigns note ID to a data attribute.
    note.value = content; // Sets the note content.
    note.className = "note"; // Assigns a CSS class for styling.
    note.style.backgroundColor = color; // Sets the note's background color.
    return note;
  }
});
