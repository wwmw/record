const imgArr = ["img0.jpg", "img1.jpg", "img2.jpg"]

const chosenImg = imgArr[Math.floor(Math.random() * imgArr.length)]

const imgTag = document.createElement("img");
imgTag.src = `js/img/${chosenImg}`;

document.body.appendChild(imgTag);