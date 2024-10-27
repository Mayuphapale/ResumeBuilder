function addNewSkillField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);


    let skillOb = document.getElementById("skill");
    let skillAddButtonOb = document.getElementById("skillAddButton");

    skillOb.insertBefore(newNode, skillAddButtonOb);
}

function addNewLangField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("langfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);


    let langOb = document.getElementById("lang");
    let langAddButtonOb = document.getElementById("langAddButton");

    langOb.insertBefore(newNode, langAddButtonOb);
}

function addNewHobbyField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("hobbyfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);


    let hobbyOb = document.getElementById("hobby");
    let hobbyAddButtonOb = document.getElementById("hobbyAddButton");

    hobbyOb.insertBefore(newNode, hobbyAddButtonOb);
}

function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 4);


    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);


    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewCerField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("cerfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 1);


    let cerOb = document.getElementById("cer");
    let cerAddButtonOb = document.getElementById("cerAddButton");

    cerOb.insertBefore(newNode, cerAddButtonOb);
}
// generate cv
function generate() {
    console.log("generate cv");

    //contact

    let contactfield = document.getElementById("contactfield").value;

    let contactT = document.getElementById("contactT");

    contactT.innerHTML = contactfield;

    //address

    document.getElementById("addressT").innerHTML =
        document.getElementById("addressfield").value;

    //name

    document.getElementById("name1T").innerHTML =
        document.getElementById("namefield").value;

    //email
    document.getElementById("emailT").innerHTML =
        document.getElementById("emailfield").value;

    //facebook

    document.getElementById("fbT").innerHTML =
        document.getElementById("fbfield").value;

    //instagram

    document.getElementById("instaT").innerHTML =
        document.getElementById("instafield").value;

    //linkedin

    document.getElementById("linkedT").innerHTML =
        document.getElementById("linkedinfield").value;

    //profession

    document.getElementById("proT").innerHTML =
        document.getElementById("profield").value;



    //objective

    document.getElementById("objT").innerHTML =
        document.getElementById("objfield").value;

    //experience

    let wes = document.getElementsByClassName("wefield");

    let str = "";

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;


    //skills

    let skills = document.getElementsByClassName("skillfield");

    let str2 = "";

    for (let e of skills) {
        str2 = str2 + `<li> ${e.value} </li>`;
    }
    document.getElementById("skillT").innerHTML = str2;

    //languages

    let langs = document.getElementsByClassName("langfield");

    let str3 = "";

    for (let e of langs) {
        str3 = str3 + `<li> ${e.value} </li>`;
    }
    document.getElementById("languageT").innerHTML = str3;

    //hobbies

    let hobbys = document.getElementsByClassName("hobbyfield");

    let str4 = "";

    for (let e of hobbys) {
        str4 = str4 + `<li> ${e.value} </li>`;
    }
    document.getElementById("hobbyT").innerHTML = str4;

    //education

    let aqs = document.getElementsByClassName("aqfield");

    let str5 = "";

    for (let e of aqs) {
        str5 = str5 + `<li> ${e.value} </li>`;
    }
    document.getElementById("eduT").innerHTML = str5;

    //certifications

    let cers = document.getElementsByClassName("cerfield");

    let str6 = "";

    for (let e of cers) {
        str6 = str6 + `<li> ${e.value} </li>`;
    }
    document.getElementById("cerT").innerHTML = str6;

    // code for setting image

    let file = document.getElementById("imgfield").files[0];

    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    //set the image to template

    reader.onloadend = function() {
        document.getElementById("imgtemplate").src = reader.result;
    };






    document.getElementById("cv-form").style.display = "none";
    document.getElementById("cv-template").style.display = "block";


}
//print cv
function printcv() {
    window.print();
}

function handleOnChangeEvent(x) {

    document.getElementById("text0").style.backgroundColor = x;
    document.getElementById("text14").style.color = x;
    document.getElementById("text15").style.color = x;
    document.getElementById("text16").style.color = x;
    document.getElementById("text17").style.color = x;
    document.getElementById("text18").style.color = x;
    document.getElementById("text19").style.color = x;
    document.getElementById("text20").style.color = x;
    document.getElementById("text21").style.color = x;

}

// function handleOnChangeEvent(x){
//     document.getElementsByClassName("col-background").style.backgroundColor=x;
// }

function smallA() {
    document.getElementById('name1T').style.fontSize = '1em';
    document.getElementById('text13').style.fontSize = '1em';
    document.getElementById('proT').style.fontSize = '1em';
    document.getElementById('text111').style.fontSize = '1em';
}

function mediumA() {
    document.getElementById('name1T').style.fontSize = '1.25em';
    document.getElementById('proT').style.fontSize = '1.25em';
    document.getElementById('text13').style.fontSize = '1.25em';
    document.getElementById('text111').style.fontSize = '1.25em';
}

function bigA() {
    document.getElementById('name1T').style.fontSize = '1.55em';
    document.getElementById('proT').style.fontSize = '1.55em';
    document.getElementById('text13').style.fontSize = '1.55em';
    document.getElementById('text111').style.fontSize = '1.55em';
}


function changeFont() {
    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('text13').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('text111').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('name1T').style.fontFamily = selectedValue;

    var selectbox = document.getElementById('font');
    var selectedValue = selectbox.options[selectbox.selectedIndex].value;
    document.getElementById('proT').style.fontFamily = selectedValue;
}


let imgDataUrl = '';

function loadImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    imgDataUrl = e.target.result;
    document.getElementById('imgT').src = imgDataUrl;
  }
  reader.readAsDataURL(file);
}

// Add this event listener to your file input
document.getElementById('imgfield').addEventListener('change', loadImage);
function downloadResume() {
    // Hide elements not needed in the PDF
    document.getElementById('resume-form').style.display = 'none';
    document.getElementById('size').style.display = 'none';
    document.getElementById('font').style.display = 'none';
    document.getElementById('rowbg').style.display = 'none';
    document.getElementById('printT').style.display = 'none';
  
    // Apply PDF-specific styles (e.g., reduce height or margins)
    document.getElementById('resume-template').style.display = 'flex';
    document.getElementById('resume-template').style.padding = '10px'; // Reduce padding
    document.getElementById('resume-template').style.margin = '0'; // Reduce margins
    document.getElementById('resume-template').style.fontSize = '13px'; // Smaller font size

    // Use html2pdf library to generate and download the PDF
    const element = document.getElementById('resume-template');
    const opt = {
      margin: 0, // Reduce margin
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 1.5, useCORS: true }, // Adjust scale (smaller scale = smaller content)
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
  
    // Generate and download the PDF
    html2pdf().set(opt).from(element).save().then(function() {
      // Restore the original display states after download
      document.getElementById('resume-form').style.display = 'block';
      document.getElementById('size').style.display = 'block';
      document.getElementById('font').style.display = 'block';
      document.getElementById('rowbg').style.display = 'block';
      document.getElementById('printT').style.display = 'block';
      document.getElementById('resume-template').style.display = 'block';
    });
}
