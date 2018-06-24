function checkForm() {
document.getElementById("frm1").onsubmit = function() {
	var allowsubmit = true;
	if(document.getElementById("lastname").value === ""){
		alert("Last Name Field Cannot Be Blank");
		allowsubmit = false;
		}
		if (allowsubmit) {
		alert("Data OK. Submitting Form");
		}
		return allowsubmit;
	}
}
window.onload=checkForm;