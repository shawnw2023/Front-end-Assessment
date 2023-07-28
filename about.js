console.log("hello world");

const ducky = document.getElementById("rubber-ducky")

function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted!");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


addEventListener("mouseover", () => {

})