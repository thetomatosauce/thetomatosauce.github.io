
console.log("hello kartik here");

var typed = $(".typed");

$(function () {
  typed.typed({
    strings: [
      "We are The Tomato Sauce: A one-stop digital agency connecting brands to people. This Sauce will add TASTE to your digital journey!.We have a team like water. You pour them in a glass, they will take a shape of a glass or you pour them in a bottle they will look like a bottle. We are just an extension of your marketing team who chase the same goals as you.",
    ],
    typeSpeed: 5,
    loop: false,
  });
});