// your JS looks good overall, I just have a few tips to make
//      it better.

// 1- It's better to divied you code into multible js files.
//      to do this you need to add type="module" to the script
//      tag in the html file.

// 2- If you're going to get an element by class, then you can
//    `use querySelector. It's less code to write and would make
//    `your job much easier.

// 3- don't repeat your code. Here is a repetition in the
//      changeCarouselNext() and changeCarouselPrevious().
//      Here is what you should do. Put all the similar lines
//      in a seperate function and then reuse it

// 4- BONUS: you can add some code to unlike an image. Also, you
//      could change the like button color. I made some changes, you
//      can check them out

// here i moved the posts variable to a new js file and
//    then import it here
import posts from "./posts.js";

// changed the getElementsByClassName to querySelector.
// NOTE: when using querySelector "." in front of the
//    class ".main-img" or "#" in front of an id like
//    "#like-btn"
const likeBtn = document.getElementById("like-btn");
// const mainImg = document.getElementsByClassName("main-img")[0];
// const arrowLeft = document.getElementsByClassName("fa-arrow-left")[0];
// const arrowRight = document.getElementsByClassName("fa-arrow-right")[0];
const mainImg = document.querySelector(".main-img");
const arrowLeft = document.querySelector(".fa-arrow-left");
const arrowRight = document.querySelector(".fa-arrow-right");

const carouselAvatar = document.getElementById("avatar");
const carouselName = document.getElementById("name");
const carouselLocation = document.getElementById("location");
const carouselUsername = document.getElementById("username");
const carouselComment = document.getElementById("comment");
const likes = document.getElementById("likes");

let slidePosition = 0;
let likeCounter = 0;

eventlisteners();
// just to make is easier  for me I changes the click
//    to a single click
function eventlisteners() {
  // I don't think you need the click on the images to add
  //    a like so I'm gonna disable it
  // mainImg.addEventListener("click", liked);
  likeBtn.addEventListener("click", liked);
  arrowLeft.addEventListener("click", changeCarouselPrevious);
  arrowRight.addEventListener("click", changeCarouselNext);
}

// here you repeated your code.

// 1- create a function for the similar lines
function getHtml() {
  carouselAvatar.src = posts[slidePosition].avatar;
  carouselName.textContent = posts[slidePosition].name;
  carouselLocation.textContent = posts[slidePosition].location;
  carouselUsername.textContent = posts[slidePosition].username;
  carouselComment.textContent = posts[slidePosition].comment;
  mainImg.src = posts[slidePosition].post;
  likes.textContent = posts[slidePosition].likes;
}

function changeCarouselNext() {
  if (slidePosition !== 2) {
    slidePosition++;
  } else {
    slidePosition = 0;
  }

  // 2- move these lines to the new function

  // carouselAvatar.src = posts[slidePosition].avatar;
  // carouselName.textContent = posts[slidePosition].name;
  // carouselLocation.textContent = posts[slidePosition].location;
  // carouselUsername.textContent = posts[slidePosition].username;
  // carouselComment.textContent = posts[slidePosition].comment;
  // mainImg.src = posts[slidePosition].post;
  // likes.textContent = posts[slidePosition].likes;

  // 3- run the new the getHtml() here
  getHtml();
}

function changeCarouselPrevious() {
  if (slidePosition === 0) {
    slidePosition = 2;
  } else {
    slidePosition--;
  }

  // 4- do the same thing here
  getHtml();
}

function liked() {
  if (likeCounter === 0) {
    likes.textContent = Number(likes.textContent) + 1;
    likeCounter++;

    // I used this codepen to generate the filter: https://codepen.io/sosuke/pen/Pjoqqp
    likeBtn.style.filter =
      "invert(16%) sepia(62%) saturate(6499%) hue-rotate(348deg) brightness(86%) contrast(95%)";
  } else if (likeCounter > 0) {
    likes.textContent = Number(likes.textContent) - 1;
    likeCounter--;

    likeBtn.style.filter = "";
  }
}
