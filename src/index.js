let addToy = false;

const formData = {
  name: "",
  image: "",
  likes: "",
};

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", (event) => {
    event.preventDefault;
    const nameEntry = document.getElementsByName("name")[0];
    // const nameImage = document.getElementsByName("image")[0].image;
    formData.name = nameEntry.value;

    console.log(nameEntry);
    // formData.image = nameImage;
    let configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch("http://localhost:3000/toys", configurationObject);
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

const toyCollection = document.querySelector("#toy-collection");

fetch("http://localhost:3000/toys")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((toy) => {
      const newDiv = document.createElement("div");
      const newH2 = document.createElement("h2");
      const newImg = document.createElement("img");
      const newP = document.createElement("p");
      const newBtn = document.createElement("button");

      newDiv.setAttribute("class", "card");
      newImg.setAttribute("class", "toy-avatar");
      newBtn.setAttribute("id", toy.id);
      newBtn.setAttribute("class", "like-btn");

      newP.textContent = toy.likes;
      newH2.textContent = toy.name;
      newImg.src = toy.image;

      newDiv.appendChild(newH2);
      newDiv.appendChild(newImg);
      newDiv.appendChild(newP);
      newDiv.appendChild(newBtn);

      toyCollection.appendChild(newDiv);
    })
  );
