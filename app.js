const challenges = [
  {
    id: 1,
    title: "JS Drum Kit",
    desc: "When a user presses a certain key, an audio will be played accordingly.",
    image: "./Images/1.png",
    demo: "",
  },
  {
    id: 2,
    title: "CSS + JS Clock",
    desc: "Pointers should rotate according to the current time, yeah, just like a real clock.",
    image: "./Images/2.png",
    demo: "",
  },
  {
    id: 3,
    title: "CSS Variables",
    desc: "When a user drags or picks an option, the CSS variables should update accordingly.",
    image: "./assets/image_3.jpg",
    demo: "",
  },
  {
    id: 4,
    title: "Array Cardio 1",
    desc: "Strengthen your JavaScript skills by using those array methods!",
    image: "./assets/image_4.jpg",
    demo: "",
  },
  {
    id: 5,
    title: "Flex Panel Gallery",
    desc: "When a user clicks on an image, the image will expand and some text will appear.",
    image: "./assets/image_5.jpg",
    demo: "",
  },
  {
    id: 6,
    title: "Ajax Type Ahead",
    desc: "When a user type in a certain word, a list of cities or states that contain the word wil be displayed. Plus, the key word will be highlighted with yellow background.",
    image: "./assets/image_6.jpg",
    demo: "",
  },
  {
    id: 7,
    title: "Array Cardio 2",
    desc: "Strengthen your JavaScript skills by using those array methods!",
    image: "./assets/image_7.jpg",
    demo: "",
  },
  {
    id: 8,
    title: "HTML5 Canvas",
    desc: "Pointers should rotate according to the current time, yeah, just like a real clock.",
    image: "./assets/image_8.jpg",
    demo: "",
  },
  {
    id: 9,
    title: "Dev Tools Domination",
    desc: "Master Dev Tools to make your developer life a bit easier!",
    image: "./assets/image_9.jpg",
    demo: "",
  },
  {
    id: 10,
    title: "Multiple Checkboxes",
    desc: "When a user clicks a checkbox, holds Shift, and then clicks another checkbox a few rows down, all the checkboxes inbetween those two checkboxes should be checked.",
    image: "./assets/image_10.jpg",
    demo: "",
  },
  {
    id: 11,
    title: "HTML5 Video Player",
    desc: "Customized HTML5 video player, with sliders for volume and speed, as well as fast forward and rewind buttons.",
    image: "./assets/image_11.jpg",
    demo: "",
  },
  {
    id: 12,
    title: "Key Detection",
    desc: "When a user enters the secret code, there will be a surprise!",
    image: "./assets/image_12.jpg",
    demo: "",
  },
  {
    id: 13,
    title: "Slide in on Scroll",
    desc: "The images will only appear when the user scrolls down/up the page. (Simple lazing loading!)",
    image: "./assets/image_13.jpg",
    demo: "",
  },
  {
    id: 14,
    title: "Reference VS Copy",
    desc: "Learning different ways to copy an array or an object, as well as the difference between shallow copy and deep copy.",
    image: "./assets/image_14.jpg",
    demo: "",
  },
  {
    id: 15,
    title: "LocalStorage",
    desc: "The user can add items to the list and check it when its done. When the user refreshes the page, the checked status wont disappear.",
    image: "./assets/image_15.jpg",
    demo: "",
  },
  {
    id: 16,
    title: "Mouse Move Shadow",
    desc: "The text shadows move as the user moves his mouse.",
    image: "./assets/image_16.jpg",
    demo: "",
  },
  {
    id: 17,
    title: "Sort Without Articles",
    desc: "Sort the bands names while neglecting articles like a, an or the",
    image: "./assets/image_17.jpg",
    demo: "",
  },
  {
    id: 18,
    title: "Adding with Reduce",
    desc: "Count the total run time of a list of videos by using the reduce() method",
    image: "./assets/image_18.jpg",
    demo: "",
  },
  {
    id: 19,
    title: "Unreal Webcam Fun",
    desc: "Put super cool filters on your streaming video using webcam and canvas.",
    image: "./assets/image_19.jpg",
    demo: "",
  },
  {
    id: 20,
    title: "Speech Recognition",
    desc: "No need for external libraries or tools for speech recognition! (However this native api is currently only supported in Chrome and it doesnt work offline)",
    image: "./assets/image_20.jpg",
    demo: "",
  },
  {
    id: 21,
    title: "Geolocation Compass",
    desc: "Understand the basic usage of the Geolocation API",
    image: "./assets/image_21.jpg",
    demo: "",
  },
  {
    id: 22,
    title: "Follow Along Links",
    desc: "When the user hovers over a link, the link will be highlighted by a div which changes its size and position accordingly.",
    image: "./assets/image_22.jpg",
    demo: "",
  },
  {
    id: 23,
    title: "Speech Synthesis",
    desc: "Let the computer read your text in different voices.",
    image: "./assets/image_23.jpg",
    demo: "",
  },
  {
    id: 24,
    title: "Sticky Nav",
    desc: "As the user scrolls down, the navbar will stick on the top of the page.",
    image: "./assets/image_24.jpg",
    demo: "",
  },
  {
    id: 25,
    title: "Event Propagation",
    desc: "Understand basic ideas of JavaScript event propagation, capturing and bubbling.",
    image: "./assets/image_25.jpg",
    demo: "",
  },
  {
    id: 26,
    title: "Follow Along Dropdown",
    desc: "When the user hovers over the links on the navbar, dropdown menus will appear. And the dropdowns will seem to be resizing themselves as the pointer moves to another link.",
    image: "./assets/image_26.jpg",
    demo: "",
  },
  {
    id: 27,
    title: "Click and Drag",
    desc: "Create horizontal slide effect when the mouse is hold and dragged.",
    image: "./assets/image_27.jpg",
    demo: "",
  },
  {
    id: 28,
    title: "Speed Controller",
    desc: "When a user presses a certain key, an audio will be played accordingly.",
    image: "./assets/image_28.jpg",
    demo: "",
  },
  {
    id: 29,
    title: "Countdown Timer",
    desc: "A very simple countdown timer with various options. The user can customize the time too.",
    image: "./assets/image_29.jpg",
    demo: "",
  },
  {
    id: 30,
    title: "Whack a Mole",
    desc: "A simple whack a mole game. Click the moles to get as many points as you can before the time runs out!",
    image: "./assets/image_30.jpg",
    demo: "",
  },
];

let index = document.querySelector(".index");

// function frame(Element) {
//   return `<div class="challange-frame">
//     <div class="head"></div>
//     <div class="pic"></div>
//     <div class="click"></div>
//   </div>`;
// }
// index.innerHTML += frame(challenges[0]);

challenges.forEach((Element) => {
  let div = document.createElement("div");
  div.classList.add("challange-frame");

  let head = document.createElement("div");
  head.classList.add("head");
  head.innerText = Element.title;

  let image = document.createElement("div");
  image.classList.add("pic");
  image.style.backgroundImage = `url(${Element.image})`;

  let buttons = document.createElement("button");
  buttons.classList.add("click");
  buttons.innerText = "Demo";
  buttons.onclick = Element.demo;

  div.append(head);
  div.append(image);
  div.append(buttons);
  index.append(div);
});