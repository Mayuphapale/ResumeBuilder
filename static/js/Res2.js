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
    document.getElementById('text11').style.display = 'none';
    document.getElementById('size').style.display = 'none';
    document.getElementById('font').style.display = 'none';
    document.getElementById('rowbg').style.display = 'none';
    document.getElementById('printT').style.display = 'none';

    // Ensure the resume template is visible
    const resumeTemplate = document.getElementById('resume-template');
    resumeTemplate.style.display = 'flex';
    resumeTemplate.style.padding = '10px'; // Reduce padding
    resumeTemplate.style.margin = '0'; // Reduce margins
    resumeTemplate.style.fontSize = '12px'; // Smaller font size

    // Check if the image has loaded before generating PDF
    const imgElement = document.getElementById('imgTemplate');
    if (imgElement.complete) {
        setTimeout(generatePDF, 100);
    } else {
        imgElement.onload = function() {
            setTimeout(generatePDF, 100);
        };
    }
    
    function generatePDF() {
        const element = resumeTemplate; // Use the resume template directly
        const opt = {
            margin: 0, // Reduce margin
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 1.5, useCORS: true }, // Adjust scale
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        console.log(document.getElementById('resume-template').innerHTML);


        // Generate and download the PDF
        html2pdf().set(opt).from(element).save().then(function() {
            // Restore the original display states after download
            document.getElementById('resume-form').style.display = 'block';
            document.getElementById('size').style.display = 'block';
            document.getElementById('font').style.display = 'block';
            document.getElementById('rowbg').style.display = 'block';
            document.getElementById('printT').style.display = 'block';
            resumeTemplate.style.display = 'block';
        });
    }
}
