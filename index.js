// API 1: "https://jsonplaceholder.typicode.com/users"
// API 2: "https://jsonplaceholder.typicode.com/posts?userId=:id"


const userListEl = document.querySelector('.user-list');

async function main(){
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
    const usersData = await users.json()

    userListEl.innerHTML = usersData.map(element => userHTML(element)
)
}

function showUserPosts(id){
    localStorage.setItem("id", id)
    window.location.href = `${window.location.origin}/user.html`
    console.log(id)
}

function userHTML(element){
    return `<div class="user-card" onclick="showUserPosts(${element.id})">
    <div class="user-card__container">
      <h3>${element.name}</h4>
        <p><b>Email:</b> ${element.email}</p>
        <p><b>Phone:</b> ${element.phone}</p>
        <p><b>Website:</b> <a href="https://${element.name}" target="_blank">${element.website}</a></p>
    </div>
  </div>`
}

main()
