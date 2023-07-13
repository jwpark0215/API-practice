const postListEl = document.querySelector('.post-list')
const id = localStorage.getItem("id")

async function onSearchChange(event){
    const id = event.target.value
    renderPosts(id)
}

async function renderPosts(userId){
    const userValue = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`)
    const userInformation = await userValue.json()
    postListEl.innerHTML = userInformation.map(element => postsHTML(element))
}

function postsHTML(post){
    return `
    <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
      ${post.body}
      </p>
    </div>
    `
}

renderPosts(id)