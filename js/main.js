//function activates upon clicking a button with the onclick="openPage()" attribute
function openPage(evt, pageName) {
	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tabcontent");
	//for loop changes all tabs to hidden
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	//makes the other buttons not active, so they no longer look like they're selected
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	//displays the tab that was passed in by changing style display to block, and its class to active
	document.getElementById(pageName).style.display = "block";
	evt.currentTarget.className += " active";
}
//toggles night mode on click
function nightMode() {
	var element = document.body;
    element.classList.toggle("night-mode");
}
