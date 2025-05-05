//Script

let burgerMenu = document.querySelector(".burger-menu"),
  navMenu = document.querySelector("header nav");

burgerMenu.addEventListener("click", function () {
  navMenu.classList.toggle("show");
});

let socialMedia = document.querySelectorAll(".social-media a");

socialMedia.forEach(function (item) {
  item.addEventListener("mouseover", function () {
    socialMedia.forEach(function (item) {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// reviews
const container = document.querySelector(".reviews .container");
const reviews = document.querySelector(".reviews-container");
const reviewBox = document.querySelectorAll(".reviews .review-box");
const reviewBullet = document.querySelector(".reviews .bullet ");

changeEleSize(reviewBox);
moveToElement(reviewList);
createDots(reviewBox, reviewBullet);

const reviewList = document.querySelectorAll(".reviews .bullet li");
reviewList[0].classList = "active";

// blog

const boxContainer = document.querySelector(".box-container");
const blogs = document.querySelectorAll(".blog .box");
const blogBullet = document.querySelector(".blog .bullet");

moveToElement(blogList);
changeEleSize(blogs);
createDots(blogs, blogBullet);

const blogList = document.querySelectorAll(".blog .bullet li");
blogList[0].classList = "active";

// Functions

function changeEleSize(elements) {
  elements.forEach((ele) => {
    let parentWidth = container.clientWidth - 30;

    container.clientWidth > 770
      ? (parentWidth /= 3)
      : container.clientWidth > 540
      ? (parentWidth /= 2)
      : parentWidth;

    ele.style.width = `${parentWidth}px`;
  });
}

function createDots(boxes, bullet) {
  for (let i of boxes) {
    let li = document.createElement("li");
    bullet.appendChild(li);
  }
}

function moveToElement(list) {
  list.forEach((li, ind) => {
    li.addEventListener("click", () => {
      list.forEach((li) => (li.classList = ""));

      const sibling = li.parentElement.previousElementSibling;

      sibling.scrollTo({
        left: sibling.children[0].clientWidth * ind,
        behavior: "smooth",
      });

      li.classList = "active";
    });
  });
}
