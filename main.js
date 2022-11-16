let url = "https://randomuser.me/api";
let user;
let userInfo = document.querySelector(".userInfo");
let btn = document.querySelector(".button");
let successContainer = document.querySelector(".success");

function getUserInfo() {
  userInfo.innerHTML = ``;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      user = data.results[0];
      showUserInfo(user);
    });
}

function showUserInfo(obj) {
  let userDiv = document.createElement("section");
  userDiv.innerHTML = `
              <section class='user' style='display-flex; 
              margin-right: 15px; font-family: Helvetica;'>
                <img src="${obj["picture"]["large"]}" alt="user photo">
                <h2 style='color: rgb(140, 255, 0)'>${obj["name"]["first"]} ${obj["name"]["last"]} </h2>
                <p>City: ${obj["location"]["city"]}</p>
                <p>Phone: ${obj["phone"]}</p>
                <p>Postcode: ${obj["location"]["postcode"]}</p>
              </section>
                `;
  userInfo.append(userDiv);
}

btn.addEventListener("click", () => {
  successContainer.innerHTML = `
        <p>SUCCESS!</p>
    `;
  for (let i = 0; i < 4; i++) {
    getUserInfo();
  }
});
