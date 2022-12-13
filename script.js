/*Variables*/
const posts = "http://localhost:3000/posts";
const users = "http://localhost:3000/users";
const comments = "http://localhost:3000/comments";

const cardTitle = document.querySelectorAll('.card-title');
const container = document.querySelector('.container');
const card = document.querySelector(".card")

fetch("posts")
    .then(res => res.json())
    .then(json => json.forEach(post=>createCard(post)))

function createCard (post) {
    const divSection = document.createElement("div")
    divSection.classList = "div";
    card.appendChild(divSection);

    
}
        









for (let i = 0; i < cardTitle.length; i++) {
    fetch("db.json")
    .then(res => res.json())
    .then(data => {
        cardTitle[i].innerText = data.posts[i].title
    }) 
}

/*`<div class="row ">
    <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
        <div class="card my-5" style="width: 26rem;">
            <img class="card-img-top" src="assets/fondo-img.jpeg" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${data.posts[i].title}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">...</div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>

</div>`

*/