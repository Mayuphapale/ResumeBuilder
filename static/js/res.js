function addNewWEField() {


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");


    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);


}

function addNewQUField() {


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("quField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let quOb = document.getElementById("qu");
    let quAddButtonOb = document.getElementById("quAddButton");

    quOb.insertBefore(newNode, quAddButtonOb);


}

function addNewLGField() {


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("lgField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter here");

    let lgOb = document.getElementById("lg");
    let lgAddButtonOb = document.getElementById("lgAddButton");

    lgOb.insertBefore(newNode, lgAddButtonOb);


}

function addNewSKLField() {


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("sklField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);
    newNode.setAttribute("placeholder", "Enter here");

    let sklOb = document.getElementById("skl");
    let sklAddButtonOb = document.getElementById("sklAddButton");

    sklOb.insertBefore(newNode, sklAddButtonOb);


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

    document.getElementById("nameT2").innerHTML = nameField;

    // contact 

    let contactField = document.getElementById("contactField").value;
    let contactT = document.getElementById("contactT")
    contactT.innerHTML = contactField;

    //    address 
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    // email 
    document.getElementById("emailT").innerHTML = document.getElementById("emailField").value;

    // reference
    document.getElementById("referenceT").innerHTML = document.getElementById("referenceField").value;

    // language
    let lgs = document.getElementsByClassName("lgField");
    let str3 = "";
    for (let e of lgs) {
        str3 += `<li> ${e.value} </li>`;
    }
    document.getElementById("lgT").innerHTML = str3;



    // hobbies
    let hbs = document.getElementsByClassName("hbField");
    let str4 = "";
    for (let e of hbs) {
        str4 += `<li> ${e.value} </li>`;
    }
    document.getElementById("hobbyT").innerHTML = str4;



    // summary 
    document.getElementById("summaryT").innerHTML = document.getElementById("summaryField").value;

    // experience
    let wes = document.getElementsByClassName("weField");
    let str = "";
    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;






    // qualification 

    let qus = document.getElementsByClassName("quField");
    let str2 = "";
    for (let e of qus) {
        str2 += `<li> ${e.value} </li>`;
    }
    document.getElementById("quT").innerHTML = str2;


    // skill left
    let sks = document.getElementsByClassName("skField");
    let str5 = "";
    for (let e of sks) {
        str5 += `<li> ${e.value} </li>`;
    }
    document.getElementById("skT").innerHTML = str5;

    // right 
    let skls = document.getElementsByClassName("sklField");
    let str6 = "";
    for (let e of skls) {
        str6 += `<li> ${e.value} </li>`;
    }
    document.getElementById("sklT").innerHTML = str6;

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