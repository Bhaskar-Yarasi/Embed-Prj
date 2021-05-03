var count = [
    { id: "1", src: "light.jpg" },
    { id: "2", src: "veg.jpeg" },
    { id: "3", src: "and.jpeg" },
    { id: "4", src: "1.jpeg" },
    { id: "5", src: "2.jpeg" },
    { id: "6", src: "3.jpeg" }


];
var x = document.getElementById("displaypdf");

for (i = 0; i <= count.length; i++) {
    // var x = document.getElementById("displaypdf");
    var image = document.createElement("img");
    image.src = count[i].src;
    document.getElementById('displaypdf').appendChild(image);
    // x[0].style.width = "200px";
    // x.children[i] = image;
}
// function bigImg(x) {

//     var i = document.getElementById("bh")
//     i.style.display = "block";
// }
// function normalImg(x) {
//     var i = document.getElementById("bh")
//     i.style.display = "none";
// }
