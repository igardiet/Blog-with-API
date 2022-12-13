/*Variables*/
const posts = "http://localhost:3000/posts";
const users = "http://localhost:3000/users";
const comments = "http://localhost:3000/comments";

const cardTitle = document.querySelectorAll('.card-title');
const container = document.querySelector(".row");

fetch(posts)
    .then(res => res.json())
    .then(json => json.forEach(post=>createCard(post)))


  

function createCard (post) {
    const divCard = document.createElement("div");
    divCard.classList = "card my-5";
    divCard.style.width = "26rem";

    container.append(divCard);

    const imgCard = document.createElement("img")
    imgCard.classList = "card-img-top";
    imgCard.setAttribute("src", "assets/fondo-img.jpeg");
    imgCard.setAttribute("alt", "Card image cap");

    divCard.append(imgCard);

    const cardBody = document.createElement("div")
    cardBody.classList = "card-body";

    imgCard.append(cardBody);

    const cardH5 = document.createElement("h5")
    cardH5.textContent = post.title;


    cardBody.append(cardH5);

    const cardText = document.createElement("p")
    cardText.classList = "card-text";

    cardH5.append(cardText);

    const cardButton = document.createElement("button")
    cardButton.classList = "btn btn-primary";
    cardButton.setAttribute("type", "button");
    cardButton.setAttribute("data-bs-toggle", "modal");
    cardButton.setAttribute("data-bs-target", "#exampleModal");

    cardText.append(cardButton);
    
}
        









/*for (let i = 0; i < cardTitle.length; i++) {
    fetch(posts)
    .then(res => res.json())
    .then(data => {
        cardTitle[i].innerText = data.posts[i].title
    }) 
}*/

