export function createAddTaskModal() {
  const modal = document.createElement("section");
  modal.className =
    "flex flex-col  items-stretch justify-center w-96 gap-5 p-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50  drop-shadow rounded z-50";

  const header = document.createElement("header");
  header.className = "flex justify-between items-center";
  
  const taskProject = document.createElement("h5");
  taskProject.textContent = "Home";
  taskProject.className = "text-sm text-gray-500 tracking-wide"
  header.appendChild(taskProject);

  const closeButton = document.createElement("button");
  closeButton.textContent = "x";
  closeButton.className = "text-xl font-medium text-gray-500";
  header.appendChild(closeButton);

  modal.appendChild(header);

  const form = document.createElement("form");
  form.className = "flex flex-col gap-5";

  const taskTitleInput = document.createElement("input");
  taskTitleInput.type = "text";
  taskTitleInput.placeholder = "Title";
  taskTitleInput.className = "p-3";
  form.appendChild(taskTitleInput);

  const notesTextArea = document.createElement("textarea");
  notesTextArea.placeholder = "notes...";
  notesTextArea.id = "notes";
  notesTextArea.className = "resize-none col-span-2 p-5";
  form.appendChild(notesTextArea);

  const dateTimePicker = document.createElement("input");
  dateTimePicker.type = "datetime-local"
  dateTimePicker.className = "p-3 placeholder-gray-50"
  form.appendChild(dateTimePicker)

  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.textContent = "";

  modal.appendChild(form);

  return modal;
}

export function createOverlay() {
    const overlay = document.createElement("div");
    overlay.className = "fixed inset-0 w-full h-full backdrop-blur-sm z-49";

    return overlay;
}

