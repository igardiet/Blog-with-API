/*Variables*/
const posts = "http://localhost:3000/posts";
const users = "http://localhost:3000/users";
const comments = "http://localhost:3000/comments";
const images = "http://localhost:3000/images";
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
    const imgCard = document.createElement("img");
    imgCard.classList = "card-img-top";
    
    fetch(images + `/${528+post.id}`)
    .then(res => res.json())
    .then(json =>  {
        console.log(json.download_url);
        imgCard.setAttribute("src", json.download_url);
        imgCard.setAttribute("alt", "Card image cap");
    })
    


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
divModal.setAttribute("tabindex", "-1");
divModal.setAttribute("data-bs-toggle", "modal");
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

const buttonModalRed = document.createElement("button");
buttonModalRed.classList = "btn btn-danger";
buttonModalRed.setAttribute("type","button");
buttonModalRed.innerHTML = "Delete";

modalFooter.appendChild(buttonModalRed);

const buttonModalYellow = document.createElement("button");
buttonModalYellow.classList = "btn btn-warning";
buttonModalYellow.setAttribute("type","button");
buttonModalYellow.innerHTML = "Edit";

modalFooter.appendChild(buttonModalYellow);

const buttonModalBlue = document.createElement("button");
buttonModalBlue.classList = "btn btn-primary";
buttonModalBlue.setAttribute("type","button");
buttonModalBlue.innerHTML = "Comments";

modalFooter.appendChild(buttonModalBlue);

const divTotal = document.createElement("div");
    divTotal.classList.add("div-total"); 

    modalFooter.appendChild(divTotal);


/*Comments*/

        fetch("http://localhost:3000/post/" + post.id + "/comments")
    .then(res => res.json())
    .then(json => json.forEach(function (value) {

        const divComments = document.createElement("div");
        divComments.classList.add('div-comments');

        const titleComments = document.createElement("p");
        titleComments.classList.add('title-comments');

        const bodyComments = document.createElement("p");
        bodyComments.classList.add('body-comments');

        const emailComments = document.createElement("p");
        emailComments.classList.add('email-comments');

            divTotal.appendChild(divComments);
            divComments.appendChild(emailComments);
            divComments.appendChild(titleComments);
            divComments.appendChild(bodyComments);

        emailComments.innerHTML = value.email;
        titleComments.innerHTML =`<b>${value.name}</b>`;
        bodyComments.innerText = value.body;

        const blueButton = document.querySelectorAll(".btn-primary");
        for(let i = 0; i < blueButton.length; i++){
            blueButton[i].addEventListener("click", function_comments);
        }
        
        buttonModalBlue.addEventListener("click",function_comments);



        function function_comments(){ 
            if(divTotal.classList.contains('div-total_show')) {
                divTotal.classList.replace('div-total_show', 'div-total');
                return
            }
            if(divTotal.classList.contains('div-total')){
                divTotal.classList.replace('div-total', 'div-total_show');  
                return
            }
                      
        }
        imgCard.addEventListener("click", function_card);

        function function_card() {
            if(divTotal.classList.contains('div-total_show')) {
                divTotal.classList.replace('div-total_show', 'div-total');
                return
            }
        }
        

      }))

buttonModalRed.addEventListener("click",function_delete);

function function_delete(){
    fetch(posts + `/${post.id}`,{
        method: 'DELETE',
    }).then(()=>location.reload())
    
    }

    
}
