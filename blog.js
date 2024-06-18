// const url = "http://10.92.198.38:8080/feed/posts";
// const urlImage = "http://10.92.198.38:8080/"
// const main = document.getElementById("image");
 
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => cards(data));
 
// function cards(data) {
//   const dataArray = data.posts;
 
//   dataArray.forEach((element) => {
//     const card = document.createElement("div");
//     card.className = "container";
//     card.innerHTML = `
// <div class="blog-card" > 
// <h3 class="h4">
// <a href="#" class="card-title hover:underline">
//     ${element.title}
// </a>
// </h3>
// <p class="card-text">
//   ${element.content}
// </p>
// <figure class="card-banner img-holder" style="--width: 550; --height: 550;">
// <img src="${urlImage + element.imageUrl}" width="250" height="300" loading="lazy"
//     alt="" class="img-cover">
// </figure>
// </div>
//   `;
//     main.appendChild(card);
//   });
// }


// const initialImage = "../Assets/img/curtida-vazia.png";
// const alternateImage = "../Assets/img/curtida-vermelha.png";
// const urlImg = "http://10.92.198.38:8080/";
// const limitPost = 3;
// var currentPage = 1;
// async function getPersons(currentPage) {
//     const response = await fetch(
//         `http://10.92.198.38:8080/feed/posts?page=${currentPage}&&perPage=10`
//     );
//     const posts = await response.json();
//     console.log(posts);
//     return posts;
// }

// fetch(`http://10.92.198.38:8080/feed/posts?page=${currentPage}`)
//     .then((response) => response.json())
//     .then((data) => cards(data));

// function cards(data) {
//     console.log(data);
//     const arrayDatas = data.posts;
//     const feed = document.querySelector(".feed");
//     arrayDatas.forEach((element) => {
//         const post = document.createElement("div");
//         post.className = "post";
//         post.innerHTML = `
//         <div class="header-post">
//           <ul>
//             <div id="avatar-align">
//               <img src="../Assets/img/user.png" id="avatar" alt="" />
//               <h1 id="name">${element.title}</h1>
//             </div>
//             <img src="../Assets/img/3-points.png" id="tres-pontos" alt="" />
//           </ul>
//         </div>
//         <section>
//           <h1 id="text-content">${element.content}</h1>
//           <div class="img-content">
//             <img src="${urlImg + element.imageUrl}" alt="Post image" />
//           </div>
//           <div class="actions">
//             <button class="button like">
//               <img src="${initialImage}" alt="like" class="img like-img" />
//             </button>
//           </div>
//         </section>
//     `;
//         feed.appendChild(post);    
//         async function loadPage(page) {
//             const data = await getPersons(page);
//             cards(data);
//         }
//         document.getElementById("btn-next").addEventListener("click", () => {
//             currentPage++;
//             loadPage(currentPage);
//         });
//         document.getElementById("btn-prev").addEventListener("click", () => {
//             if (currentPage > 1) {
//                 currentPage--;
//                 loadPage(currentPage);
//             }
//         });
//         const likeButton = post.querySelector(".like");
//         likeButton.addEventListener("click", () => {
//             const likeImg = likeButton.querySelector(".like-img");
//             if (likeImg.src.includes(initialImage)) {
//                 likeImg.src = alternateImage;
//             } else {
//                 likeImg.src = initialImage;
//             }
//         });
//     });
// }


const urlImg = "http://10.92.198.38:8080/";
const limitPost = 10;
var currentPage = 1;
async function getPersons(currentPage) {
    const response = await fetch(
        `http://10.92.198.38:8080/feed/posts?page=${currentPage}&&perPage=10`
    );
    const posts = await response.json();
    console.log(posts);
    return posts;
}

fetch(`http://10.92.198.38:8080/feed/posts?page=${currentPage}`)
    .then((response) => response.json())
    .then((data) => cards(data));

function cards(data) {
    console.log(data);
    const arrayDatas = data.posts;
    const feed = document.querySelector(".feed");
    arrayDatas.forEach((element) => {
        const post = document.createElement("div");
        post.className = "post";
        post.innerHTML = `
        
    `;
        feed.appendChild(post);    
        async function loadPage(page) {
            const data = await getPersons(page);
            cards(data);
        }
        document.getElementById("btn-next").addEventListener("click", () => {
            currentPage++;
            loadPage(currentPage);
        });
        document.getElementById("btn-prev").addEventListener("click", () => {
            if (currentPage > 1) {
                currentPage--;
                loadPage(currentPage);
            }
        });
    });
}


