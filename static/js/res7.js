//alert("loading")
//work ex
function addnewwefield() {
    // console.log("Adding new field");

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weaddbuttonOb = document.getElementById("weaddbutton");

    weOb.insertBefore(newNode, weaddbuttonOb);
}

//eduaction
function addnewaqfield() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqfield');
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb = document.getElementById("aq");
    let aqaddbuttonOb = document.getElementById("aqaddbutton");

    aqOb.insertBefore(newNode, aqaddbuttonOb);
}

// //experiance
// function addnewskfield(){
//     let newNode=document.createElement('textarea');
//     newNode.classList.add('form-control');
//     newNode.classList.add('skfield');
//     newNode.classList.add("mt-3");
//     newNode.setAttribute("rows",3);
//     newNode.setAttribute("placeholder","Enter here");

//     let skOb=document.getElementById("sk");
//     let skaddbuttonOb=document.getElementById("skaddbutton");

//     skOb.insertBefore(newNode,skaddbuttonOb);
// }

function addNewSKField() {


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter here");

    let skOb = document.getElementById("sk");
    let skAddButtonOb = document.getElementById("skAddButton");

    skOb.insertBefore(newNode, skAddButtonOb);


}

//hobbie
function addnewhbfield() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('hbfield');
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let hbOb = document.getElementById("hb");
    let hbaddbuttonOb = document.getElementById("hbaddbutton");

    hbOb.insertBefore(newNode, hbaddbuttonOb);
}

// generate resume
function generateresume() {


    // name2
    let namefield = document.getElementById('namefield').value;

    let nameT1 = document.getElementById('nameT1')

    nameT1.innerHTML = namefield;

    //direct
    document.getElementById('nameT2').innerHTML = namefield


    //contact
    document.getElementById('contactT').innerHTML = document.getElementById('contactfield').value;

    //emailid
    document.getElementById('emailT').innerHTML = document.getElementById('emailfield').value;

    //address
    document.getElementById('addressT').innerHTML = document.getElementById('addressfield').value;
    //objective
    document.getElementById('objectiveT').innerHTML = document.getElementById('objectivefield').value;
    // language
    document.getElementById('langT').innerHTML = document.getElementById('langfield').value;
    // fb
    document.getElementById('fbT').innerHTML = document.getElementById('fbfield').value;
    // insta
    document.getElementById('instaT').innerHTML = document.getElementById('instafield').value;
    // linkedin
    document.getElementById('linkT').innerHTML = document.getElementById('linkedfield').value;

    // hb 
    document.getElementById('hbT').innerHTML = document.getElementById('hbfield').value;
    //we



    let str = "";

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML = str;

    //aq

    let aqs = document.getElementsByClassName('aqfield')

    let str1 = "";

    for (let e of aqs) {
        str1 += `<li> ${e.value} </li>`;
    }

    document.getElementById('aqT').innerHTML = str1;

    // skill 
    let sks = document.getElementsByClassName("skField");
    let str4 = "";
    for (let e of sks) {
        str4 += `<li> ${e.value} </li>`;
    }
    document.getElementById("skT").innerHTML = str4;


    //code for setting image

    let file = document.getElementById('imgfield').files[0]

    console.log(file);

    let reader = new FileReader()

    reader.readAsDataURL(file);

    console.log(reader.result);

    //set the image to tamplet

    reader.onloadend = function() {
        document.getElementById("imgT").src = reader.result;
    };

    document.getElementById('resume-form').style.display = 'none';
    document.getElementById('resume-tamplate').style.display = 'block';

}
//print resume
function printresume() {
    window.print();
}

function handleOnChangeEvent(x) {
    document.getElementById("text13").style.backgroundColor = x;


}

// function handleOnChangeEvent(x){
//     document.getElementsByClassName("col-background").style.backgroundColor=x;
// }

function smallA() {
    document.getElementById('text11').style.fontSize = '1em';

}

function mediumA() {
    document.getElementById('text11').style.fontSize = '1.25em';

}

function bigA() {
    document.getElementById('text11').style.fontSize = '1.55em';

}


function changeFont() {
    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('text11').style.fontFamily = selectedValue;
}