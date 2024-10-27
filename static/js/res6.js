function addNewWEField() {


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");


    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);


}

function addNewEDField() {


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("edField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 2);
    newNode.setAttribute("placeholder", "Enter here");

    let edOb = document.getElementById("ed");
    let edAddButtonOb = document.getElementById("edAddButton");

    edOb.insertBefore(newNode, edAddButtonOb);


}

function addNewADField() {


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("adField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter here");

    let adOb = document.getElementById("ad");
    let adAddButtonOb = document.getElementById("adAddButton");

    adOb.insertBefore(newNode, adAddButtonOb);


}



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

function addNewHBField() {


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("hbField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter here");

    let hbOb = document.getElementById("hb");
    let hbAddButtonOb = document.getElementById("hbAddButton");

    hbOb.insertBefore(newNode, hbAddButtonOb);


}

//generating resume

function generateresume() {
    // console.log("generating resume");


    //  name
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("nameT1")
    nameT1.innerHTML = nameField;


    // profession 
    document.getElementById("proT").innerHTML = document.getElementById("proField").value;


    // contact 
    // phone 

    let contactField = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT")
    contactT.innerHTML = contactField;

    // email 
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;

    // website
    document.getElementById("webT").innerHTML = document.getElementById("webField").value;


    //    address 
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    // skill 
    let sks = document.getElementsByClassName("skField");
    let str5 = "";
    for (let e of sks) {
        str5 += `<li> ${e.value} </li>`;
    }
    document.getElementById("skT").innerHTML = str5;

    // hobbies
    let hbs = document.getElementsByClassName("hbField");
    let str4 = "";
    for (let e of hbs) {
        str4 += `<li> ${e.value} </li>`;
    }
    document.getElementById("hbT").innerHTML = str4;





    // profile
    document.getElementById("profileT").innerHTML = document.getElementById("profileField").value;




    // experience
    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;






    // education

    let eds = document.getElementsByClassName("edField");
    let str2 = "";
    for (let e of eds) {
        str2 += `<li> ${e.value} </li>`;
    }
    document.getElementById("edT").innerHTML = str2;





    // award
    let ads = document.getElementsByClassName("adField");
    let str3 = "";
    for (let e of ads) {
        str3 += `<li> ${e.value} </li>`;
    }
    document.getElementById("adT").innerHTML = str3;

    // select photo 

    let file = document.getElementById("imgField").files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

    // // set img to template 


    reader.onload = function() {
        document.getElementById("imgTemplate").src = reader.result;

    };




    document.getElementById("resume-form").style.display = "none";
    document.getElementById("resume-template").style.display = "block";





}

// print resume
function Print() {
    window.print();
}

function handleOnChangeEvent(x) {
    document.getElementById("text12").style.backgroundColor = x;


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