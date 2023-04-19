const db = firebase.firestore();

function createTextbox(id, rating) {
    const container = document.createElement("div");
    container.id = `textbox-${id}`;
    container.classList.add("textbox");
  
    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("textbox__rating");
    for (let i = 1; i <= 5; i++) {
      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `${id}-rating`;
      radio.value = i;
      if (i === rating) {
        radio.checked = true;
      }
  
      const label = document.createElement("label");
      label.htmlFor = `${id}-rating-${i}`;
  
      ratingContainer.appendChild(radio);
      ratingContainer.appendChild(label);
    }
  
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("textbox__delete-btn");
    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      deleteTextbox(id);
    });
  
    container.appendChild(ratingContainer);
    container.appendChild(deleteBtn);
  
    return container;
  }
  
  // Function to add a new textbox to the page and Firebase
  function addTextbox() {
    const id = Date.now().toString();
    const rating = 0;
  
    const textbox = createTextbox(id, rating);
  
    const container = document.getElementById("textbox-container");
    container.appendChild(textbox);
  
    db.collection("textboxes").doc(id).set({
      rating: rating,
    });
  }
  
  // Function to delete a textbox from the page and Firebase
  function deleteTextbox(id) {
    const textbox = document.getElementById(`textbox-${id}`);
    textbox.remove();
  
    db.collection("textboxes").doc(id).delete();
  }
  
  // Listen for clicks on the Add button
  const addBtn = document.getElementById("add-btn");
  addBtn.addEventListener("click", () => {
    addTextbox();
  });
  
  // Listen for changes to textboxes in Firebase and update the page
  db.collection("textboxes").onSnapshot((snapshot) => {
    snapshot.docChanges().forEach((change) => {
      const data = change.doc.data();
  
      if (change.type === "added") {
        const id = change.doc.id;
        const textbox = createTextbox(id, data.rating);
        const container = document.getElementById("textbox-container");
        container.appendChild(textbox);
      } else if (change.type === "modified") {
        const id = change.doc.id;
        const rating = data.rating;
        const textbox = document.getElementById(`textbox-${id}`);
        const ratingRadios = textbox.querySelectorAll(`input[name="${id}-rating"]`);
        ratingRadios[rating - 1].checked = true;
      } else if (change.type === "removed") {
        const id = change.doc.id;
        const textbox = document.getElementById(`textbox-${id}`);
        textbox.remove();
      }
    });
  });
  
  // Listen for changes to rating radios and update Firebase
  document.addEventListener("change", (event) => {
    const target = event.target;
    if (target.tagName === "INPUT" && target.type === "radio" && target.name.includes("-rating")) {
      const [id, name] = target.name.split("-");
      const rating = parseInt(target.value);
  
      db.collection("textboxes").doc(id).update({
        rating: rating,
      });
    }
  });