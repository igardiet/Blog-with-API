/*Variables*/
const cardTitle = document.querySelectorAll('.card-title');




for (let i = 0; i < cardTitle.length; i++) {
    fetch("db.json")
    .then(res => res.json())
    .then(data => {
        cardTitle[i].innerText = data.posts[i].title
    }) 
}
