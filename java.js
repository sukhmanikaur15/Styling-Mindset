//form open-close//
let formwrapper = document.querySelector(".formwrapper");

function closeForm() {
    formwrapper.style.display = "none";
}
function openForm() {
    formwrapper.style.display = "grid";
}
//form open-close end//

//search bar//
function searchFun() {

    let inpf = document.querySelector("#inpf");

    let val = "" + inpf.value;

    if (val.length == 0) {
        alert("Field is empty");
    }
    else {
        console.log(val);
    }
}
//search bar end//

//form fields//
function validateForm() {
    let name = document.forms["myForm"]["fname"].value;

    console.log(name);

    if (name == "") {
        swal("First Name must be filled out");
        return false;
    }

    var course = document.forms["myForm"]["lname"].value;
    if (course == "") {
        swal("Last Name must be filled out");
        return false;
    }

    var email = document.forms["myForm"]["email"].value;
    if (email.indexOf("@") < 0 || email.indexOf(".com") < 0) {

        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            swal("Wrong! Email format");
            return false;
        }

    }

    var rollno = document.forms["myForm"]["psswrd"].value;
    if (rollno == "") {
        swal("Password must be required");
        return false;
    }
}

//form fields end//

//nav links//
let nlinks = document.querySelectorAll(".box");

for (let i = 0; i < nlinks.length; i++) {
    let nlink = nlinks[i];

    nlink.onclick = function () {

        for (let j = 0; j < nlinks.length; j++) {
            let nlink = nlinks[j];
            nlink.style.backgroundColor = "#ffffff55";
        }
        this.style.backgroundColor = "#ff1493";

    };
}
//nav links end//

//chat window//
function openform() {
    document.getElementById("myForm").style.display = "block";
}

function closeform() {
    document.getElementById("myForm").style.display = "none";
}
// chat window end//

//form eye//
let eye = document.querySelector(".peye");

let psswrd = document.querySelector("#psswrd");

let ptoggle = 0;

eye.onclick = function () {
    if (ptoggle % 2 == 0) {
        psswrd.setAttribute("type", "text");
    }
    else {
        psswrd.setAttribute("type", "password");
    }

    ptoggle++;
};
//form eye end//

// content//
function elementInViewport2(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) &&
        left < (window.pageXOffset + window.innerWidth) &&
        (top + height) > window.pageYOffset &&
        (left + width) > window.pageXOffset
    );
}

let elements = document.querySelectorAll(".boxse");

var lcls = document.querySelectorAll(".lcl");

var rcls = document.querySelectorAll(".rcl");

window.onscroll = function () {
    for (let i = 0; i < lcls.length; i++) {
        let lcl = lcls[i];

        let rcl = rcls[i];

        if (elementInViewport2(lcl)) {
            lcl.classList = "cloud c1 lcl";
        }
        else {
            lcl.classList = "cloud c1 lc lcl";
        }

        if (elementInViewport2(rcl)) {
            rcl.classList = "cloud c1 rcl";
        }
        else {
            rcl.classList = "cloud c1 rc rcl";
        }

    }
};
// conetent end//

//login form//
let loginformwrapper = document.querySelector(".loginformwrapper");

function closeLoginForm() {
    loginformwrapper.style.display = "none";
}


function openLoginForm() {
    loginformwrapper.style.display = "grid";
}

//openLoginForm();

let pinps = document.querySelector("#psswrd");

let ptgs = 0;

function showSPass() {

    if (ptgs % 2 == 0) {
        pinps.setAttribute("type", "text");
    }
    else {
        pinps.setAttribute("type", "password");
    }

    ptgs++;
}

let pinp = document.querySelector("#psswrdlogin");

let ptg = 0;

function showPass() {

    if (ptg % 2 == 0) {
        pinp.setAttribute("type", "text");
    }
    else {
        pinp.setAttribute("type", "password");
    }

    ptg++;
}
//login form end//

//search files//
let searchContainer = document.querySelector(".bs");


let data = [

    ["footwear", "https://i.imgur.com/jCMeYlB.jpg"],
    ["footwear", "https://i.imgur.com/c5valUd.jpg"],
    ["footwear", "https://i.imgur.com/6BjiJJr.jpg"],

    ["outfit", "https://i.imgur.com/9VcTxTG.jpg"],
    ["outfit", "https://i.imgur.com/hiZRG0R.jpg"],
    ["outfit", "https://i.imgur.com/fETflpq.jpg"],

    ["accessory", "https://i.imgur.com/oNJQvDi.jpg"],
    ["accessory", "https://i.imgur.com/H0VeWDT.jpg"],
    ["accessory", "https://i.imgur.com/5zr6Hbz.jpg"],

    ["shoes", "https://i.imgur.com/JyDmZqf.jpg"],
    ["shoes", "https://i.imgur.com/lrkXVxf.jpg"],

    ["necklace", "https://i.imgur.com/NcfcHwY.jpg"],
    ["necklace", "https://i.imgur.com/YQBvfqZ.jpg"],

    ["ethnic", "https://i.imgur.com/sXPJ5aP.jpg"],
    ["ethnic", "https://i.imgur.com/fypDAnc.jpg"],

    ["western", "https://i.imgur.com/IMzhTKQ.jpg"],
    ["western", "https://i.imgur.com/ukLarJ5.jpg"]

];


function getCard(name, url) {
    let trends =
        `<div class="trends">
		<div class="pic" 
		style="	background-image: url('${url}');
"></div>

		<div class="details">
			<h3>${name}</h3> 
            <p>Details <br>
            <a href=""></a>	
			</p>
		</div>
	</div>
`;
    return trends;
}

function search(name) {
    let cards = "";

    for (let i = 0; i < data.length; i++) {
        let d = data[i];

        if (d[0] == name) {
            let card = getCard(d[0], d[1]);
            cards += card;
        }
    }

    return cards;

}

let input = document.querySelector("#inpf");

input.oninput = function () {

    let val = input.value;

    console.log(val);

    let cards = search("" + val);

    bs.innerHTML = cards;

};
//search files end//