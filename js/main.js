//function activates upon clicking a button with the onclick="openPage()" attribute
function openPage(evt, pageName) {
	var i, tabcontent;

	tabcontent = document.getElementsByClassName("tabcontent");
	//for loop changes all tabs to hidden
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}
	//displays the tab that was passed in by changing style display to block, and its class to active
	document.getElementById(pageName).style.display = "block";
	evt.currentTarget.className += " active";
}
//below 2 functions activate upon clicking the toggle button, changing the body's class to night-mode
function toggle_night_mode() {
	set_night_mode(!config['night_mode']);
}

function set_night_mode(state) {
  if (state) {
    document.body.classList.add('night-mode');
  } else {
    document.body.classList.remove('night-mode');
  }
  config['night_mode'] = state;
  localStorage.thebutton_config = JSON.stringify(config);
}
