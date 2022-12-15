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

   

    const cargarImagen = (entradas, observador) => {

        entradas.forEach((entrada) => {
            if(entrada.isIntersecting){
                entrada.target.classList.add('visible');
            } 
        })
    }
    const observador = new IntersectionObserver(cargarImagen,  {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.2
    });

    observador.observe(imgCard);

    fetch(images + `/${528+post.id}`)
    .then(res => res.json())
    .then(json =>  {
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

const divTotalDelete = document.createElement("div")
divTotalDelete.classList.add("div-total-delete");

modalFooter.appendChild(divTotalDelete);

const divInput = document.createElement("div");
divInput.classList.add("div-input");

modalFooter.appendChild(divInput);

const pTitleInput = document.createElement("p");
pTitleInput.classList.add("p-title-input")
const titleInput = document.createElement("input");
titleInput.setAttribute("type", "text");
titleInput.classList.add("title-input");
titleInput.setAttribute("value", post.title);
titleInput.style.width = "20vw";
const titleLabel = document.createElement("label");
titleLabel.innerHTML= `<b>Title:</b><br>`;


divInput.appendChild(pTitleInput);
pTitleInput.appendChild(titleLabel);
titleLabel.appendChild(titleInput);



const pBodyInput = document.createElement("p");
pBodyInput.classList.add("p-body-input")
const bodyInput = document.createElement("textarea");
bodyInput.classList.add("body-input");
bodyInput.setAttribute("cols", "50");
bodyInput.setAttribute("rows", "8");
bodyInput.textContent = post.body
const bodyLabel = document.createElement("label");
bodyLabel.innerHTML= `<b>Body:</b>`;


divInput.appendChild(pBodyInput);
pBodyInput.appendChild(bodyLabel);
bodyLabel.appendChild(bodyInput);

const buttonInput = document.createElement("boton");
buttonInput.classList.add("button-input");
buttonInput.classList = "btn btn-light btn-input";
buttonInput.textContent = "Update";

divInput.appendChild(buttonInput);

buttonInput.addEventListener("click", function_update);


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


        

        buttonModalBlue.addEventListener("click",function_comments);

        function function_comments(){ 

            if(divInput.classList.contains('div-input_show')) {
                divInput.classList.replace('div-input_show', 'div-input');
            }

            if(divTotalDelete.classList.contains('div-total-delete_show')) {
                divTotalDelete.classList.replace('div-total-delete_show', 'div-total-delete');
            }

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
                
            }
            if(divTotalDelete.classList.contains('div-total-delete_show')) {
                divTotalDelete.classList.replace('div-total-delete_show', 'div-total-delete');
               
            } 
            if(divInput.classList.contains('div-input_show')) {
                divInput.classList.replace('div-input_show', 'div-input');
            }
            
        }
        

      }))

      const divDeletebuttons = document.createElement("p");
      divDeletebuttons.classList.add("div-delete-buttons");
      divDeletebuttons.innerHTML = "Are you sure that you want to delete it?"

      const buttonDeleteYes = document.createElement("button");
      buttonDeleteYes.classList = "btn btn-secundary delete-yn";
      buttonDeleteYes.setAttribute("type","button");
      buttonDeleteYes.innerHTML = "Yes";

      const buttonDeleteNo = document.createElement("button");
      buttonDeleteNo.classList = "btn btn-secundary delete-yn";
      buttonDeleteNo.setAttribute("type","button");
      buttonDeleteNo.innerHTML = "No";

      
      divTotalDelete.appendChild(divDeletebuttons);
      divDeletebuttons.appendChild(buttonDeleteYes);
      divDeletebuttons.appendChild(buttonDeleteNo);

      buttonModalRed.addEventListener("click", function_delete_buttons);

        function function_delete_buttons() {

            if(divTotal.classList.contains('div-total_show')) {
                divTotal.classList.replace('div-total_show', 'div-total');
            }

            if(divInput.classList.contains('div-input_show')) {
                divInput.classList.replace('div-input_show', 'div-input');
            }
            if(divTotalDelete.classList.contains('div-total-delete')) {
                divTotalDelete.classList.replace('div-total-delete', 'div-total-delete_show');
                
            }else {
                divTotalDelete.classList.replace('div-total-delete_show', 'div-total-delete');
            }
        }


        buttonDeleteYes.addEventListener("click", function_delete);

function function_delete(){
    fetch(posts + `/${post.id}`,{
        method: 'DELETE',
    }).then(()=>location.reload())
    
    }

        buttonDeleteNo.addEventListener("click", function_button_deleteNo);

function function_button_deleteNo () {
    if(divTotalDelete.classList.contains('div-total-delete_show')) {
        divTotalDelete.classList.replace('div-total-delete_show', 'div-total-delete');
    }
}







    buttonModalYellow.addEventListener("click",function_input);
    

function function_input(){

    if(divTotal.classList.contains('div-total_show')) {
        divTotal.classList.replace('div-total_show', 'div-total');
    }

    if(divTotalDelete.classList.contains('div-total-delete_show')) {
        divTotalDelete.classList.replace('div-total-delete_show', 'div-total-delete');
    }

    if(divInput.classList.contains('div-input')) {
        divInput.classList.replace('div-input', 'div-input_show');
        
    }else {
        divInput.classList.replace('div-input_show', 'div-input');
    }

    
    
}

function function_update(){
    fetch(posts + "/" + post.id,{
        method: 'PUT',
        body: JSON.stringify({
            id: post.id,
            title: titleInput.value,
            body: bodyInput.value,
            userId: post.userId
        }),
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(res => res.json())
    .then(json => location.reload())
}




    
}