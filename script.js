var getid = document.getElementsByTagName("input");
async function getjson() {
  try {
    var a = await fetch(`https://api.github.com/users/${getid[0].value}/repos`);
    var b = await a.json();
    console.log(b);
    var containera = document.createElement("div");
    containera.setAttribute("class", "conatinera");
    var clearscr = document.getElementById("clear");
    clearscr.innerText = "";
    //
    b.forEach((eachname) => {
      var creatediv = document.createElement("div");
      creatediv.setAttribute("class", "card");
      creatediv.style.borderRadius = "3px";
      creatediv.style.outline = "3px solid #24292f";
      creatediv.style.width = "18rem";
      creatediv.style.margin = "15px 0 15px 0";
      creatediv.innerHTML = `
      <img src="${eachname.owner.avatar_url}" class="card-img-top" alt="${eachname.owner.login}">
      <div class="card-body">
      <h5 class="card-title">User : ${eachname.owner.login}</h5>
        <p class="card-text">Repo_name : ${eachname.name}</p>
        <p class="card-text">Forks_count : ${eachname.forks_count}</p>
        <p class="card-text">Star_count : ${eachname.stargazers_count}</p>
        <a href="${eachname.clone_url}" class="btn btn-primary">repository link</a>
      </div>
    `;
      containera.appendChild(creatediv);
    });
    document.body.appendChild(containera);
  } catch (error) {
    console.log("error");
  }
}
