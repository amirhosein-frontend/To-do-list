let enterNote = document.querySelector(".enterNote");
let enterBtn = document.querySelector(".enterBtn");
let outputNote = document.querySelector(".output-Section");
//To make a note
function noteMaker(Entery, Index) {
  //Creating the required tags
  let div = document.createElement("div");
  let span = document.createElement("span");
  let note = document.createElement("input");
  let removeBtn = document.createElement("button");
  //Adding classes to created tags for better visual presentation
  removeBtn.classList.add("removeBtn");
  div.classList.add("notes");
  note.classList.add("note");
  note.spellcheck = false;
  //Adding tags to parent tags
  div.appendChild(span);
  div.appendChild(note);
  div.appendChild(removeBtn);
  //Entering variables for each note
  span.textContent = Index;
  note.value = Entery;
  removeBtn.textContent = '-';
  
  //Add to parent tag and complete function
  outputNote.appendChild(div);
}
//To update the index span
function updateIndex() {
  let listSpan = document.querySelectorAll("span");
  listSpan.forEach(function (e, index) {
    listSpan[index].textContent = index + 1;
  });
}
//Using event delegation to optimize and reduce lines of code
document.addEventListener("click", function (e) {
    //Click section to create a new note
  if (e.target.classList.contains("enterBtn")) {
    if (enterNote.value == "") return;
    noteMaker(
        enterNote.value,
        Array.from(document.querySelectorAll("span")).length + 1
    );
    enterNote.value = "";
  }
  //Click to delete note section
  if (e.target.classList.contains("removeBtn")) {
    e.stopPropagation();
    e.target.parentElement.remove();
    updateIndex();
  }
});
//Using the Enter key to create notes for a better user experience
enterNote.addEventListener("keydown", function (e) {
  if (e.key == "Enter") {
    enterBtn.click();
  }
});

outputNote.addEventListener("blur", function (e) {
  if (e.target.classList.contains("note")) {
    if (e.target.value == "") {
      e.target.parentElement.remove();
      updateIndex();
    }
  }
},true);

