let dropzone;

function setup() {

  dropzone = select("#dropzone");
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(gotFile, unhighlight);


}

function highlight() {
  dropzone.style("background-color", "#ccc")
}


function unhighlight() {
  dropzone.style("background-color", "#FFF")
}

function gotFile(file) {
  let img = createImg(file.data);
  img.size(100, 100);
}
