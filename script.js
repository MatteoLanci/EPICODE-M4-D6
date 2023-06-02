const endpoint = "https://jsonplaceholder.typicode.com/users";

const HTMLbody = document.querySelector("#main");
const tableBody = document.querySelector("#tableBody");
const tableDropBtn = document.querySelector("#tableDropBtn");
const tableInput = document.querySelector("#tableInput");

const originalJson = [];
let filteredUsers = [];

async function getUserInfo() {
  try {
    const response = await fetch(endpoint);
    let data = await response.json();
    showUsers(data);
  } catch (error) {
    console.log("HTTP error: ", error);
    alert("HTTP error: ", error);
  }
}

function showUsers(data) {
  // console.log(data); //!STAMPA DEL FILE JSON PRESO DALL'API
  data.forEach((user) => {
    // console.log(user); //! STAMPA DI OGNI SINGOLO UTENTE

    originalJson.push(user);

    const userName = user.name;
    const userEmail = user.email;
    const userId = user.id;
    const userWebsite = user.website;
    const userNickname = user.username;
    const userPhone = user.phone;

    let tBodyRow = document.createElement("tr");

    let tBodyId = document.createElement("th");
    tBodyId.setAttribute("scope", "row");
    tBodyId.innerHTML = userId;

    let tBodyName = document.createElement("td");
    tBodyName.classList.add("tBodyName");
    tBodyName.innerHTML = userName;

    let tBodyEmail = document.createElement("td");
    tBodyEmail.classList.add("tBodyEmail");
    tBodyEmail.innerHTML = `<a href="mailto:${userEmail}">${userEmail}</a>`;

    let tBodyNickname = document.createElement("td");
    tBodyNickname.classList.add("tBodyNickname");
    tBodyNickname.innerHTML = userNickname;

    let tBodyPhone = document.createElement("td");
    tBodyPhone.classList.add("tBodyPhone");
    tBodyPhone.innerHTML = userPhone;

    let tBodyWebsite = document.createElement("td");
    tBodyWebsite.classList.add("tBodyWebsite");
    tBodyWebsite.innerHTML = `<a href="#">${userWebsite}</a>`;

    tBodyRow.append(
      tBodyId,
      tBodyName,
      tBodyEmail,
      tBodyNickname,
      tBodyPhone,
      tBodyWebsite
    );

    tableBody.append(tBodyRow);
  });
}
getUserInfo();

function updateDropBtn(text) {
  tableDropBtn.textContent = text;
}

const resetBtn = document.createElement("button");
resetBtn.classList.add("btn", "btn-outline-primary");
resetBtn.id = "resetBtn";
resetBtn.type = "button";
resetBtn.setAttribute("onclick", "resetPage()");
resetBtn.innerText = "Show Me All Users";
resetBtn.classList.add("d-none");
HTMLbody.append(resetBtn);

function filterResults() {
  const tableDropBtnValue = tableDropBtn.textContent;
  tableBody.innerHTML = "";

  if (tableInput.value.trim() === "") {
    tableInput.value = "";
    tableBody.innerHTML = "No input provided. Please enter a search term.";

    resetBtn.classList.remove("d-none");
    return;
  }

  originalJson.forEach((user) => {
    let isMatch = false;

    switch (tableDropBtnValue) {
      case "Email":
        isMatch = user.email
          .toLowerCase()
          .includes(tableInput.value.toLowerCase());
        break;
      case "Username":
        isMatch = user.username
          .toLowerCase()
          .includes(tableInput.value.toLowerCase());
        break;
      case "Name":
        isMatch = user.name
          .toLowerCase()
          .includes(tableInput.value.toLowerCase());
        break;
    }

    if (
      isMatch &&
      !filteredUsers.some((filteredUser) => filteredUser.id === user.id)
    ) {
      filteredUsers.push(user);

      let tBodyRow = document.createElement("tr");

      let tBodyId = document.createElement("th");
      tBodyId.setAttribute("scope", "row");
      tBodyId.innerHTML = user.id;

      let tBodyName = document.createElement("td");
      tBodyName.classList.add("tBodyName");
      tBodyName.innerHTML = user.name;

      let tBodyEmail = document.createElement("td");
      tBodyEmail.classList.add("tBodyEmail");
      tBodyEmail.innerHTML = `<a href="mailto:${user.email}">${user.email}</a>`;

      let tBodyNickname = document.createElement("td");
      tBodyNickname.classList.add("tBodyNickname");
      tBodyNickname.innerHTML = user.username;

      let tBodyPhone = document.createElement("td");
      tBodyPhone.classList.add("tBodyPhone");
      tBodyPhone.innerHTML = user.phone;

      let tBodyWebsite = document.createElement("td");
      tBodyWebsite.classList.add("tBodyWebsite");
      tBodyWebsite.innerHTML = `<a href="#">${user.website}</a>`;

      tBodyRow.append(
        tBodyId,
        tBodyName,
        tBodyEmail,
        tBodyNickname,
        tBodyPhone,
        tBodyWebsite
      );

      tableBody.append(tBodyRow);
      // console.log(filteredUsers);
    }
  });

  if (filteredUsers.length === 0) {
    tableBody.innerHTML = "No results found.";
  }

  tableInput.value = "";

  resetBtn.classList.remove("d-none");
}

function resetPage() {
  filteredUsers = [];
  tableBody.innerHTML = "";
  getUserInfo();
  tableDropBtn.textContent = "Choose One";
  resetBtn.classList.add("d-none");
}
