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

//experiance
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

//skill
function addnewlskfield() {
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('lskfield');
    newNode.classList.add("mt-3");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let lskOb = document.getElementById("lsk");
    let lskaddbuttonOb = document.getElementById("lskaddbutton");

    lskOb.insertBefore(newNode, lskaddbuttonOb);
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



//generating resume
function generateresume() {
    // console.log("hey diksha");

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

    //fb
    document.getElementById('fbT').innerHTML = document.getElementById('fbfield').value;

    //insta
    document.getElementById('instaT').innerHTML = document.getElementById('instafield').value;

    //linkedin
    document.getElementById('linkedT').innerHTML = document.getElementById('linkedfield').value;


    //objective

    document.getElementById('objectiveT').innerHTML = document.getElementById('objectivefield').value;

    //we

    let wes = document.getElementsByClassName('wefield')

    let str = ''

    for (let e of wes) {
        str = str + `<li> ${e.value} </li>`;
    }
    document.getElementById('weT').innerHTML = str;

    //aq

    let aqs = document.getElementsByClassName('eqfield')

    let str1 = ''

    for (let e of aqs) {
        str1 += `<li> ${e.value} </li>`;
    }

    document.getElementById('aqT').innerHTML = str1;

    //sk

    // let sks=document.getElementsByClassName('skfield')

    // let str2=''

    // for(let e of sks)
    // {
    //     str2+=`<li> ${e.value} </li>`;
    // }
    // document.getElementById('skT').innerHTML=str2;

    //hb
    let hbs = document.getElementsByClassName('hbfield')

    let str3 = ''

    for (let e of hbs) {
        str3 += `<li> ${e.value} </li>`;
    }
    document.getElementById('hbT').innerHTML = str3;

    //lsk
    console.log("Adding new field");
    let lsks = document.getElementsByClassName('lskfield')

    let str4 = ''

    for (let e of lsks) {
        str4 += `<li> ${e.value} </li>`;
    }
    document.getElementById('lskT').innerHTML = str4;


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
    document.getElementById("text14").style.color = x;
    document.getElementById("text15").style.color = x;
    document.getElementById("text16").style.color = x;

}

// function handleOnChangeEvent(x){
//     document.getElementsByClassName("col-background").style.backgroundColor=x;
// }

function smallA() {
    document.getElementById('text11').style.fontSize = '1em';
    document.getElementById('text12').style.fontSize = '1em';
}

function mediumA() {
    document.getElementById('text11').style.fontSize = '1.25em';
    document.getElementById('text12').style.fontSize = '1.25em';
}

function bigA() {
    document.getElementById('text11').style.fontSize = '1.55em';
    document.getElementById('text12').style.fontSize = '1.55em';
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
