var resetBtn = document.getElementById("reset")
var fName = document.getElementById("f-name2")
var lName = document.getElementById("l-name2")
var email = document.getElementById("email")
var tArea = document.getElementById("project")
var input = document.getElementsByTagName("input")

//reset clear begin
resetBtn.addEventListener("click", function(){
        email.textContent="";
        fName.textContent="";
        lName.textContent="";
        tArea.textContent="";
})
//reset clear end

// Get the modal
var modal = document.getElementById('custom-modal');

// Get the button that opens the modal
var btn = document.getElementById("commission");

// Get the button that opens the modal
var btn2 = document.getElementById("btn-modal");

// Get the button that opens the modal
var btn3 = document.getElementById("commission2")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var modalContent = document.getElementsByClassName("modal-content")
//opening animation
var morph = function morph() {
	modal.style.display = "block";
    modal.classList.add="btn-morph";
}

//close modal
var reverse = function reverse(){
	modal.style.display = "none";
}

// When the user clicks on the button, open the modal 
btn.onclick = morph

// When the user clicks on the button, open the modal 
btn2.onclick = morph

// When the user clicks on the button, open the modal 
btn3.onclick = morph

// When the user clicks on <span> (x), close the modal
span.onclick = reverse

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//fade modal input begin
var focus = function focus() {
	this.classList.add("d");
}

var blur = function blur() {
	this.classList.remove("d");
}

tArea.onfocus = focus

tArea.onblur = blur

fName.onfocus = focus

fName.onblur = blur

lName.onfocus = focus

lName.onblur = blur

email.onfocus = focus

email.onblur = blur
//fade modal input end