let name = document.getElementById("name");
let mail = document.getElementById("mail");
let title = document.getElementById("title");

let otherTitle = document.getElementById("other-title");
otherTitle.style.visibility = "hidden";
otherTitle.style.width = "100%";

//////////FIRST INPUT ON FOCUS
function firstInputOnFocus() {
	 name.setAttribute("autofocus",true);
}
/////////////// ADD JOB ROLE
function addJobRole() {
            let otherRole = title[title.selectedIndex].value;
            if(otherRole === 'other') {
				otherTitle.style.visibility = "visible";
			}	else
				otherTitle.style.visibility = "hidden";
}

let design = document.getElementById("design");
let color = document.getElementById("color");

	let pleaseChoose = document.createElement("OPTION");
	pleaseChoose.setAttribute("selected", "selected");
	//pleaseChoose.setAttribute("hidden", "hidden");
	pleaseChoose.textContent = " "; 
	color.insertBefore(pleaseChoose, color[0]);

///////////////////
function puns() {
	color[0].style.visibility = "hidden";
	for (let i=4; i<7; i+=1) {
		color[i].style.display = "none";
	}
	for (i=1; i<4; i+=1) {
	color[i].style.display = "block";
}
}
////////////
function hearts() {
	color[0].style.visibility = "hidden";
for (let i=1; i<4; i+=1) {
	color[i].style.display = "none";
}
	for (i=4; i<7; i+=1) {
		color[i].style.display = "block";
}
}
	
if (design[design.selectedIndex].value === "Select Theme") {
		document.getElementById("colors-js-puns").style.display = "none";
	} 

///////////CHOOSE T-SHIRT COLOR
function choseTShirtColor() {
    if(design[design.selectedIndex].value ==="js puns") {
		document.getElementById("colors-js-puns").style.display = "block";	
		puns();
		selectTShirt();
	}

    if(design[design.selectedIndex].value === "heart js") {
		document.getElementById("colors-js-puns").style.display = "block";
		hearts();
		selectTShirt();
	}
	}
function selectTShirt() {
		console.log(color.selectedIndex);	
}
let activity = document.getElementsByClassName("activities")[0];
let checks = activity.querySelectorAll("input[type=checkbox]");

let total = document.createElement("h4");
	activity.appendChild(total);

//////ChECK who's CHECKED And SUMM
let sum;
function checkAndSumm() {
	sum = 0;
	
	if (checks[0].checked) {		
			sum = sum + 200;
			total.innerHTML="Total: " + sum + "$";
			} else {
			sum = sum;
			total.innerHTML="Total: " + sum + "$";
	}
	if (checks[1].checked) {
			checks[3].disabled  = true;
			sum = sum + 100;
			total.innerHTML="Total: " + sum + "$";
			} else {
			checks[3].disabled = false;
			sum = sum;
			total.innerHTML="Total: " + sum + "$";
	}
	if (checks[2].checked) {
			checks[4].disabled  = true;
			sum = sum + 100;
			total.innerHTML="Total: " + sum + "$";
			} else {
			checks[4].disabled = false;
			sum = sum;
			total.innerHTML="Total: " + sum + "$";
	}
	if (checks[3].checked) {
			checks[1].disabled  = true;
			sum = sum + 100;
			total.innerHTML="Total: " + sum + "$";
			} else {
			checks[1].disabled = false;
			sum = sum;
			total.innerHTML="Total: " + sum + "$";
	}
	if (checks[4].checked) {
			checks[2].disabled  = true;
			sum = sum + 100;
			total.innerHTML="Total: " + sum + "$";
			} else {
			checks[2].disabled = false;
			sum = sum;
			total.innerHTML="Total: " + sum + "$";
	}
	if (checks[5].checked) {
			sum = sum + 100;
			total.innerHTML="Total: " + sum + "$";
			} else {
			sum = sum;
			total.innerHTML="Total: " + sum + "$";
	}
	if (checks[6].checked) {
			sum = sum + 100;
			total.innerHTML="Total: " + sum + "$";
			} else {
			sum = sum;
			total.innerHTML="Total: " + sum + "$";
	}
	if (sum == 0) {
			total.style.visibility = "hidden";
		} else {
			total.style.visibility = "visible";
		}
}

let payment = document.getElementById('payment');
let creditCard = document.getElementById("credit-card");
creditCard.style.display = "none";
let payPal = document.getElementsByTagName('p')[0];
payPal.style.display = "none";
let bitCoin = document.getElementsByTagName('p')[1];
bitCoin.style.display = "none";


////PAY BILLs
function payBills() {
	if (payment[payment.selectedIndex].value === "credit card") {
			creditCard.style.display = "block";
	} else {
			creditCard.style.display = "none";
	}
	if (payment[payment.selectedIndex].value === "paypal") {
			payPal.style.display = "block";
	} else {
		payPal.style.display = "none";
	}	
	if (payment[payment.selectedIndex].value === "bitcoin") {
			bitCoin.style.display = "block";
	} else {
			bitCoin.style.display = "none";
	}
}


/////VALIDATION	signs	

let yName = document.createElement('span');
		yName.innerHTML = " (Please, provide your name)";
		yName.style.color = "red";
		yName.style.visibility = "hidden";
		document.querySelectorAll('label')[0].appendChild(yName);
		//let nameError = false;

let yMail = document.createElement('span');
		yMail.innerHTML = " (Please, provide a valid email address)";
		yMail.style.color = "red";
		yMail.style.visibility = "hidden";
		document.querySelectorAll('label')[1].appendChild(yMail);
		//let mailError = false;

let shirt = document.getElementsByClassName("shirt")[0];
		let shirts = document.createElement('p');
		shirts.innerHTML = "Don't forget to pick a T-Shirt";
		shirts.style.color = "red";
		shirts.style.fontWeight = "normal";
		shirts.style.fontSize = "0.825em";
		shirt.querySelector('legend').appendChild(shirts);
		shirts.style.visibility = "hidden";

let action = document.createElement('p');
		action.innerHTML = "Please select an Activity";
		action.style.color = "red";
		action.style.fontWeight = "normal";
		action.style.fontSize = "0.825em";
		activity.querySelector('legend').appendChild(action);
		action.style.visibility = "hidden";
let summ = checkAndSumm();


let warn1 = document.createElement("span");
		warn1.innerHTML = " 16 digits, please";
		warn1.style.color = "red";
		creditCard.querySelectorAll("label")[0].appendChild(warn1);
		warn1.style.display = "none";

let warn2 = document.createElement("span");
		warn2.innerHTML = " 12345-6789";
		warn2.style.color = "red";
		warn2.style.fontSize = "0.75em";
		creditCard.querySelectorAll("label")[1].appendChild(warn2);
		warn2.style.display = "none";
//////
function nameOk() {
	var regex = /^[a-zA-z]+$/;
	if((regex.test(name.value) == false)||(name.value === "")) {
		yName.style.visibility = "visible";
		document.querySelectorAll('label')[0].style.color = "red";
		//name.value = "";
		name.focus();
		return false;
	} else {
		yName.style.visibility = "hidden";
		document.querySelectorAll('label')[0].style.color = "initial";
		return true;
	}
}
function mailOk() {
	var regex = /^(([\-\w]+)\.?)+@(([\-\w]+)\.?)+\.[a-zA-Z]{2,4}$/;
	if ((mail.value === "")||(regex.test(mail.value) == false)) {
		yMail.style.visibility = "visible";
		document.querySelectorAll('label')[1].style.color = "red";
		//mail.value = "";
		return false;
	} else {
		yMail.style.visibility = "hidden";
		document.querySelectorAll('label')[1].style.color = "initial";
		return true;
	}
}
function shirtOk() {
		if (color[color.selectedIndex].value == 0) {
		shirts.style.visibility = "visible";
		return false;
	} else {
		shirts.style.visibility = "hidden";
		return true;
	}
}
function sumOk() {
	if (sum == 0) {
		action.style.visibility = "visible";
		return false;
	} else {
		action.style.visibility = "hidden";
		return true;
	}
}
function ccOk() {
	var regex = /^\d{16}$/;
		
	if (regex.test(document.getElementById("cc-num").value) == false) {
		document.getElementById("cc-num").value = "";
		warn1.style.display = "inline-block";
		document.getElementById("cc-num").focus();
		return false;
	} else {
		warn1.style.display = "none";
		return true;
	}
}

function zipOk() {
	var regex = /^\d{5}-?\d{4}$/;
	if (regex.test(document.getElementById("zip").value) == false) {
		document.getElementById("zip").value = "";
		document.getElementById("zip").setAttribute("placeholder","12345-6789");
		//document.getElementById("zip").focus();
		return false;
	} else {
		document.getElementById("zip").removeAttribute("placeholder","12345-6789");
		return true;
	}
}
function paymentOk() {
	if (payment[payment.selectedIndex].value === "select_method") {
			document.getElementById("payment").style.borderColor = "red";
			return false;
			} 
	if (payment[payment.selectedIndex].value === "credit card") {
				if (document.getElementById("cc-num").value === "") {
				creditCard.querySelectorAll("label")[0].style.color = "red";
				} else {
					creditCard.querySelectorAll("label")[0].style.color = "initial";
					ccOk();
				}
				if (document.getElementById("zip").value === "") {
					creditCard.querySelectorAll("label")[1].style.color = "red";
				} else {
					creditCard.querySelectorAll("label")[1].style.color = "initial";
					zipOk();
				}
				if (document.getElementById("cvv").value === "") {
					creditCard.querySelectorAll("label")[2].style.color = "red";
				} else {
					creditCard.querySelectorAll("label")[2].style.color = "initial";
					cvvOk();
				}
	} else {
			document.getElementById("payment").style.borderColor = "initial";
			return true;
			}
}

function cvvOk() {
	var regex = /^\d{3}$/;
	if (regex.test(document.getElementById("cvv").value) == false) {
		document.getElementById("cvv").setAttribute("placeholder","123");
		document.getElementById("cvv").value = "";
		//document.getElementById("cvv").focus();
		return false;
	} else {
		document.getElementById("cvv").removeAttribute("placeholder","123");
		return true;
	}
}

//// WARNINGS

function validation() {
		let n = nameOk();
		//console.log(n);
		let m = mailOk();
		//console.log(m);
		let s = shirtOk();
		//console.log(s);
		let su = sumOk();
		//console.log(su)
		let p = paymentOk();
		//console.log(p);
	if ((n && m && s && su && p) != true) {
		console.log("NOT OK");
	} else {
		console.log("ready for submit");
		form1.removeEventListener("submit", function(event){
    event.preventDefault()
 });
	}
}

let subMit = document.getElementsByTagName('button')[0];
let form1 = document.getElementsByTagName('form')[0];

name.addEventListener("blur", nameOk);
mail.addEventListener("blur", mailOk);
// document.getElementById("cc-num").addEventListener("blur", ccOk);
// document.getElementById("zip").addEventListener("blur", zipOk);
// document.getElementById("ccv").addEventListener("blur", cvvOk);
window.addEventListener("load", firstInputOnFocus());
title.addEventListener('change', addJobRole);
design.addEventListener('change', choseTShirtColor);
activity.addEventListener('change', checkAndSumm);
payment.addEventListener('change', payBills);
color.addEventListener('change', selectTShirt);
 form1.addEventListener("submit", function(event){
    event.preventDefault()
 });
subMit.addEventListener('click', validation);