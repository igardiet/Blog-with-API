/*Variables*/
const posts = "http://localhost:3000/posts";
const users = "http://localhost:3000/users";
const comments = "http://localhost:3000/comments";
const container = document.querySelector(".row");

fetch(posts)
    .then(res => res.json())
    .then(json => json.forEach(post=>createCard(post)))


function createCard(post) {
    const divCard = document.createElement("div");
    divCard.classList = "card my-5";
    divCard.style.width = "26rem";
    divCard.setAttribute("data-bs-toggle", "modal");
    divCard.setAttribute("data-bs-target", "#exampleModal" + post.id);

    const imgCard = document.createElement("img")
    imgCard.classList = "card-img-top";
    imgCard.setAttribute("src", "assets/fondo-img.jpeg");
    imgCard.setAttribute("alt", "Card image cap");


    const cardBody = document.createElement("div")
    cardBody.classList = "card-body";
 

    const cardH5 = document.createElement("h5")
    cardH5.classList = "card-title";
    cardH5.textContent = post.title;
    
    container.appendChild(divCard);
    divCard.appendChild(imgCard);
    divCard.appendChild(cardBody);
    cardBody.appendChild(cardH5);





    
/**************************************************************************/                      

const divModal = document.createElement("div");
divModal.classList = "modal fade";
divModal.setAttribute("id", "exampleModal" + post.id);
divModal.setAttribute("tabindex", "1");
divModal.setAttribute("aria-labelledby", "exampleModalLabel");
divModal.setAttribute("aria-hidden", "true");

divCard.appendChild(divModal);

const modalDialog = document.createElement("div");
modalDialog.classList = "modal-dialog";

divModal.appendChild(modalDialog);

const modalContent = document.createElement("div");
modalContent.classList = "modal-content";


modalDialog.appendChild(modalContent);

const modalHeader = document.createElement("div");
modalHeader.classList = "modal-header";

modalContent.appendChild(modalHeader);

const h1Modal = document.createElement("h1");
h1Modal.classList = "modal-title fs-5";
h1Modal.setAttribute("id","exampleModalLabel");
h1Modal.textContent = post.title;

modalHeader.appendChild(h1Modal);

const buttonModalX = document.createElement("button");
buttonModalX.classList = "btn-close";
buttonModalX.setAttribute("type","button");
buttonModalX.setAttribute("data-bs-dismiss","modal");
buttonModalX.setAttribute("aria-label","Close");


modalHeader.appendChild(buttonModalX);

const modalBody = document.createElement("div");
modalBody.classList = "modal-body";

modalContent.appendChild(modalBody);

const pBody = document.createElement("p");
pBody.classList = "body";
pBody.textContent = post.body;

modalBody.appendChild(pBody);

fetch(users + `/${post.userId}`)
    .then(res => res.json())
    .then(json => {
        const pUsers = document.createElement("p");
        pUsers.classList = "users";
        pUsers.innerHTML = `<b>Username:</b> </br> ${json.username}`;
        modalBody.appendChild(pUsers);

        const pGmail = document.createElement("p");
        pGmail.classList = "gmail";
        pGmail.innerHTML = `<b>Email:</b> </br> ${json.email}`;
        modalBody.appendChild(pGmail);

    })
    








const modalFooter = document.createElement("div");
modalFooter.classList = "modal-footer";

modalContent.appendChild(modalFooter);

const buttonModalGrey = document.createElement("button");
buttonModalGrey.classList = "btn btn-secondary";
buttonModalGrey.setAttribute("type","button");
buttonModalGrey.setAttribute("data-bs-dismiss","modal");
buttonModalGrey.innerHTML = "Close";

modalFooter.appendChild(buttonModalGrey);

const buttonModalBlue = document.createElement("button");
buttonModalBlue.classList = "btn btn-primary";
buttonModalBlue.setAttribute("type","button");
buttonModalBlue.innerHTML = "saves changes";

modalFooter.appendChild(buttonModalBlue);



}
