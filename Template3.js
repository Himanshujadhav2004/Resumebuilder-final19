
var userurl;
function addworkexperience(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3)
    
    let weOb=document.getElementById("we");
    let weaddbuttonOb=document.getElementById("addbtn");
    weOb.insertBefore(newNode,weaddbuttonOb);
    let  weField=document.getElementsByClassName("weField");
    let str=''
    for(let e of weField){
        str=str+ ` <li> ${e.value} </li>`
    }
    let weT=document.getElementById("weT");
    weT.innerHTML=str;
}


function addAcadmic(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("row",3)
    
    let weOb=document.getElementById("aq");
    let weaddbuttonOb=document.getElementById("addbtn2");
    weOb.insertBefore(newNode,weaddbuttonOb);
}
function CVgenerator(){
  document.getElementById("cvggnbtn").style.display="block";
    //first name
   
    let Firstname=document.getElementById("First-Name-input").value;
    let FirstnameT=document.getElementById("FirstnameT");
    FirstnameT.innerHTML=Firstname;
 //Last name
    let Lastname=document.getElementById("Second-Name-input").value;
    let LastnameT=document.getElementById("LastnameT");
   LastnameT.innerHTML=Lastname;
 
  //Profession
  let ProfessionT=document.getElementById("ProfessionT");
  let Profession=document.getElementById("Profession-input").value;
  ProfessionT.innerHTML=Profession; 
  
   let  City=document.getElementById("City-input").value;
//    let CityT=document.getElementById("CityT");

 


  let    Country=document.getElementById("Country-input").value;
//   let CountryT=document.getElementById("CountryT");
  



     let PinCode2=document.getElementById("Pincode-input").value;
     
//   let pincodeT=document.getElementById("pincodeT");


  pincodeT.innerHTML=addres;
let address_Section=document.getElementById("addressT");
if(City==""&& Country==""&& PinCode2==""){
    address_Section.innerHTML=City;
    pincodeT.innerHTML=City;
}

else if(City!=""&&Country==""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country!=""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+Country;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country==""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+PinCode2;
    pincodeT.innerHTML=addres;
}
//for Country
else if(City==""&&Country!=""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=Country;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country!=""&&PinCode2==""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+Country;
    pincodeT.innerHTML=addres;
}
else if(City==""&&Country!=""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=Country+','+PinCode2;
    pincodeT.innerHTML=addres;
}
//for Pincode
else if(City==""&&Country==""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=PinCode2;
    pincodeT.innerHTML=addres;
}
else if(City!=""&&Country==""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+PinCode2;
    pincodeT.innerHTML=addres;
}
else if(City==""&&Country!=""&&PinCode2!=""){
    address_Section.innerHTML="<b>Address</b>";
    var addres=Country+','+PinCode2;
    pincodeT.innerHTML=addres;
}
else{
    address_Section.innerHTML="<b>Address</b>";
    var addres=City+','+Country+','+PinCode2;
    pincodeT.innerHTML=addres;
}
  

    // let addressT=document.getElementById("addressT");
    // let addressField=document.getElementById("addressField").value;
    // addressT.innerHTML=addressField;


    //facebook
  
    let PhoneT=document.getElementById("PhoneT");
let PhoneIN=document.getElementById("Phone-input").value;
let PhoneNumberT=document.getElementById("PhoneNumberT");
    
let EmailIN=document.getElementById("Email-input").value;
let EmailidT=document.getElementById("EmailidT");
let EmailT=document.getElementById("EmailT");
EmailT.innerHTML=EmailIN;
if(PhoneIN!=""){
    PhoneT.innerHTML="<b>Phone</b>";
    PhoneNumberT.innerHTML=PhoneIN;
    
        }
        else{
            PhoneT.innerHTML=PhoneIN;
    PhoneNumberT.innerHTML=PhoneIN;
        }

        if(EmailIN!=""){
            EmailT.innerHTML="<b>Email</b>";
            EmailidT.innerHTML=EmailIN;
            
                }
                else{
                    EmailT.innerHTML=EmailIN;
            EmailidT.innerHTML=EmailIN;
                }
                if(City==""&&EmailIN==""&&PhoneIN==""&&Country==""&&PinCode2==""){
                    let contactT=document.getElementById("contactT");
                    contactT.style.display="none";

                }
                let Jobtitleinput=document.getElementById("Jobtitle-input").value;
                let JobtitleT=document.getElementById("JobtitleT");
                JobtitleT.innerHTML=Jobtitleinput;
                let Employerinput=document.getElementById("Employer-input").value;

                let CityinputWorkexperience=document.getElementById("City-input-Workexperience").value;
                let CountryinputWorkexperience=document.getElementById("Country-input-Workexperience").value;
                let WorkExaddress=document.getElementById("Work-Ex-address");
                if(Employerinput=="")
                {
                    WorkExaddress.innerHTML="";
                }
                else if(Employerinput!=""){
                    WorkExaddress.innerHTML=Employerinput;
                }
                else if(Employerinput!=""&&CityinputWorkexperience!=""&&CountryinputWorkexperience=="")
                {
                    WorkExaddress.innerHTML=Employerinput+","+CityinputWorkexperience;
                }
                else if(Employerinput!=""&&CityinputWorkexperience==""&&CountryinputWorkexperience!=""){
                    WorkExaddress.innerHTML=Employerinput+","+CountryinputWorkexperience; 
                }
                WorkExaddress.innerHTML=Employerinput+","+CityinputWorkexperience+","+CountryinputWorkexperience;
                let EndDateWorkExinput=document.getElementById("EndDate-WorkEx-input").value
                let StartDateWorkExinput=document.getElementById("StartDate-WorkEx-input").value
                let WorkExdateT=document.getElementById("Work-Ex-date")
                WorkExdateT.innerHTML=StartDateWorkExinput+"<br>"+EndDateWorkExinput;
             

                // const WorkExperienceDiv=document.getElementById("Work-Experience-Div");
                // if(Jobtitleinput==""&&Employerinput==""&&CityinputWorkexperience==""&&CountryinputWorkexperience==""&&EndDateWorkExinput==""&&StartDateWorkExinput=="")
                // {
                //     WorkExperienceDiv.remove();
                // }
let SchoolNameinput=document.getElementById("School-Name-input").value;
let SchoolLocationinput=document.getElementById("School-Location-input").value;
let Degreeinput=document.getElementById("Degree-input").value;
let FieldofStudy=document.getElementById("Field-of-Study").value
let GraduationStartDate=document.getElementById("Graduation-Start-Date").value;
let GraduationEndDate=document.getElementById("Graduation-End-Date").value;

let SchoolExdate=document.getElementById("School-Ex-date");
let DegreeT=document.getElementById("DegreeT");
let SchoolNameAddrres=document.getElementById("School-Name-Addrres");
SchoolNameAddrres.innerHTML=SchoolNameinput+","+SchoolLocationinput;
DegreeT.innerHTML=Degreeinput+":"+FieldofStudy;
SchoolExdate.innerHTML=GraduationStartDate+"<br>"+GraduationEndDate;
    // let facebookField=document.getElementById("facebookField").value;
    // let fbt=document.getElementById("fbt");
    // fbt.innerHTML=facebookField;
    // let InstagramField=document.getElementById("InstagramField").value;
    // let inst=document.getElementById("inst");
    // inst.innerHTML=facebookField;
    // let LinkdenField=document.getElementById("LinkdenField").value;
    // let linkdt=document.getElementById("linkdt");
    // linkdt.innerHTML=facebookField;
    let objectiveT=document.getElementById("objectiveT");
    let ObjectiveField=document.getElementById("ObjectiveField").value;
    objectiveT.innerHTML=ObjectiveField ;



    let eqField =document.getElementsByClassName("eqField ");
    let str2=''
    for(let e of eqField ){
        str2=str2+ ` <li> ${e.value} </li>`
    }
    let AcadmicT=document.getElementById("AcadmicT");
    AcadmicT.innerHTML=str;
}

window.onload = function () {
    document.getElementById("cvggnbtn")
    .addEventListener("click", () => {
            const invoice = this.document.getElementById("cv-template");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: -1,
              filename:'myfile.pdf',
                image: { type: 'pdf', quality: 1},
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().set({
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
              });
            html2pdf().from(invoice).save();
        })
}
var files=[];
var reader=new FileReader();
var userimg=document.getElementById("photo");

var upload=document.getElementById("uimg");
var selectbtn=document.getElementById("previewText");
var input=document.createElement("input");
var changeimg=document.getElementById("changeicon");
var iname;
var imgname;
var extention;
var fname;
input.type='file'
function GetFileExt(file)
{
var temp=file.name.split('.');
var ext=temp.slice((temp.length-1),(temp.length));
return '.'+ext[0];
}

function GetFileName(file)
{
  var temp=file.name.split('.');
   fname=temp.slice(0,-1).join('.');
  return fname;
}
input.onchange=e=>{
  files=e.target.files;
 
  extention=GetFileExt(files[0]);
  iname=GetFileName(files[0]);
  console.log(iname);
  console.log(extention);
  reader.readAsDataURL(files[0]);
  selectbtn.style.display="none";
 
}

reader.onload=function(){
userimg.src=reader.result;
userimg.style.display="block";

 
}
function change()
{
  input.click();
  
}



selectbtn.onclick=function(){
  input.click();

}
 async function uploadprocess()
{


  var imagetoupload=files[0];
  imgname=iname+extention;
 
   const metaData={
   contentType:imagetoupload.type
  
  }
  const storage=firebase.storage();
 
  const storageref=storage.ref("Images/"+imgname);

  const uploadTask= storageref.put(imagetoupload,metaData);

  uploadTask.on("state-change",(snapshot)=>{
    var progress=(snapshot.byteTransferred/snapshot.totalBytes)*100;
    console.log(progress);
  },
  (error)=>{
    alert("Image not uploaded");
  },
  ()=>{
    uploadTask.snapshot.ref.getDownloadURL().then((downloadUrl)=>{
      
      const database = firebase.database();
      var user = firebase.auth().currentUser;
      database.ref('users/'+user.uid+'/template3'+'/Personal-data').child('ImagesLinks').set(downloadUrl)
      userurl=downloadUrl
      console.log(userurl);
    })
  })
}


 

function geturlfromdatabase(URL)
{
  const realdb = firebase.database();
   const dbref = realdb.ref();
   const user = firebase.auth().currentUser;
   if (!user) {
     console.log("User is not signed in");
     return;
   }
  
   const userId = user.uid;
   const imageUrlRef = firebase.database().ref(`users/${userId}/template3/Personal-data/ImagesLinks`);
   
   imageUrlRef.once('value').then((snapshot) => {
     const imageUrl = snapshot.val();
     console.log(imageUrl);

     if (snapshot.exists()&&imageUrl) {
       userimg.src = imageUrl;
       var img= userimg.src = imageUrl;
var photo2=document.getElementById("photo2").src=img;

       userimg.style.display = "block";
       selectbtn.style.display = "none";

     }
     else{
      console.log("user not uploaded image");
     }
   }).catch((error) => {
     console.error(error);
   });
}

changeimg.addEventListener('click',change)


// function fainalize()
// {
//     document.getElementById("formid").style.display="none";
   
// }

// //photo change


// const file=document.querySelector('#uploadBtn');




// file.addEventListener('change',function(){

// const choosedFile=this.files[0];
// if(choosedFile){

//     const reader =new FileReader();
//     reader.addEventListener('load',function(){

//         img.setAttribute('src',reader.result)
//     });
//     reader.readAsDataURL(choosedFile);
// }

// });
let SchoolNameinput=document.getElementById("School-Name-input");
let SchoolLocationinput=document.getElementById("School-Location-input");
let Degreeinput=document.getElementById("Degree-input");
let FieldofStudy=document.getElementById("Field-of-Study")
 let GraduationStartDate=document.getElementById("Graduation-Start-Date");
let GraduationEndDate=document.getElementById("Graduation-End-Date");
let Educationtextarea=document.getElementById("Education-textarea");
let EducationtextareaT=document.getElementById("Education-textareaT");
 let SchoolExdate=document.getElementById("School-Ex-date");
let DegreeT=document.getElementById("DegreeT");
let SchoolNameAddrres=document.getElementById("School-Name-Addrres");
let cardEducationid=document.getElementById("cardEducationid");
                let Jobtitleinput=document.getElementById("Jobtitle-input");
                let JobtitleT=document.getElementById("JobtitleT");
              let WorkExtextarea=document.getElementById("Work-Ex-textarea");
              let workexpereincetextareaT=document.getElementById("work-expereince-textareaT");

                let Employerinput=document.getElementById("Employer-input");

                let CityinputWorkexperience=document.getElementById("City-input-Workexperience");
                let CountryinputWorkexperience=document.getElementById("Country-input-Workexperience");
                let WorkExaddress=document.getElementById("work-ex-address");
          
            
                let EndDateWorkExinput=document.getElementById("EndDate-WorkEx-input")
                let StartDateWorkExinput=document.getElementById("StartDate-WorkEx-input")
                let WorkExdateT=document.getElementById("Work-Ex-date")
                
var nameInput = document.getElementById('First-Name-input');
let FirstnameT=document.getElementById("FirstnameT");

let lastnameName=document.getElementById("Second-Name-input");
let lastnameT=document.getElementById("LastnameT");

let Introductioninput=document.getElementById("Introduction-input");
let IntroductionT=document.getElementById("IntroductionT");

let ProfessionT=document.getElementById("ProfessionT");
let ProfessionInput=document.getElementById("Profession-input");

let  CityInput=document.getElementById("City-input");
let CityT=document.getElementById("CityT");

let CountryInput=document.getElementById("Country-input");
let CountryT=document.getElementById("CountryT");

let PinCode2Input=document.getElementById("Pincode-input");
let pincodeT=document.getElementById("pincodeT");
let address_Section=document.getElementById("addressT");
 
let PhoneT=document.getElementById("PhoneT");
let PhoneIN=document.getElementById("Phone-input");
let PhoneNumberT=document.getElementById("PhoneNumberT");
    
let EmailIN=document.getElementById("Email-input");
let EmailidT=document.getElementById("EmailidT");
let EmailT=document.getElementById("EmailT");
//formdatabase
firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        document.getElementById("user").innerHTML = "Hello, "+user.email
        const database = firebase.database();
        //retirve data of firstname form firebase
        var nameInput = document.getElementById('First-Name-input')
        let FirstnameT=document.getElementById("FirstnameT");
        database.ref('users/' + user.uid +'/template3'+'/Personal-data').once('value')
        .then((snapshot) => {
           const Firstname = snapshot.child('firstname').val();
           const lastname = snapshot.child('lastname').val();
           FirstnameT.innerHTML=Firstname+" "+lastname;

           nameInput.value=Firstname;
           lastnameName.value=lastname;
         })
         //retirve data of secondname form firebase
       
         database.ref('users/' + user.uid +'/template3'+'/Personal-data'+'/Introduction').once('value')
         .then((snapshot) => {
            const Introduction = snapshot.val();
            Introductioninput.value=Introduction;
            IntroductionT.innerHTML=Introduction;
         
          })
      database.ref('users/' + user.uid +'/template3'+'/Personal-data'+'/lastname').once('value')
      .then((snapshot) => {
         const lastname = snapshot.val();
      
         lastnameT.innerHTML=lastname;
         lastnameName.value=lastname
       })
       database.ref('users/' + user.uid +'/template3'+'/Personal-data'+'/profession').once('value')
.then((snapshot) => {
   const Profession = snapshot.val();
   ProfessionT.innerHTML=Profession; 
   ProfessionInput.value=Profession
 })


 database.ref('users/' + user.uid +'/template3'+'/Personal-data'+'/city').once('value')
 .then((snapshot) => {
    const city = snapshot.val();
 
    CityInput.value=city
  })
  database.ref('users/' + user.uid +'/template3'+'/Personal-data'+'/country').once('value')
  .then((snapshot) => {
     const city = snapshot.val();
  
     CountryInput.value=city
   })
   database.ref('users/' + user.uid +'/template3'+'/Personal-data'+'/pincode').once('value')
   .then((snapshot) => {
      const city = snapshot.val();
   
      PinCode2Input.value=city
    })
    database.ref('users/'+user.uid+'/template3'+'/Personal-data'+'/phone').once('value')
    .then((snapshot) => {
      const phone = snapshot.val();
   
      PhoneIN.value=phone
    })
    database.ref('users/'+user.uid+'/template3'+'/Personal-data'+'/emailT').once('value')
    .then((snapshot) => {
      const emailt = snapshot.val();
   
     EmailIN.value=emailt
    })

    //---
    
    database.ref('users/'+user.uid+'/template3'+'/Work-Experience'+'/Job-Title').once('value')
    .then((snapshot) => {
      const Jobtitleinputs = snapshot.val();
   
      Jobtitleinput.value=Jobtitleinputs
    })
    database.ref('users/'+user.uid+'/template3'+'/Work-Experience'+'/Employer-Position').once('value')
    .then((snapshot) => {
      const Employerinputs = snapshot.val();
   
      Employerinput.value=Employerinputs;

    })
    database.ref('users/'+user.uid+'/template3'+'/Work-Experience'+'/City-Work').once('value')
    .then((snapshot) => {
      const CityinputWorkexperiences = snapshot.val();
   
      CityinputWorkexperience.value=CityinputWorkexperiences;

    })
    database.ref('users/'+user.uid+'/template3'+'/Work-Experience'+'/Country').once('value')
    .then((snapshot) => {
      const CountryinputWorkexperiences = snapshot.val();
   
      CountryinputWorkexperience.value=CountryinputWorkexperiences;

    })
    database.ref('users/'+user.uid+'/template3'+'/Work-Experience'+'/Start-Date').once('value')
    .then((snapshot) => {
      const  StartDateWorkExinputs = snapshot.val();
   
      StartDateWorkExinput.value= StartDateWorkExinputs;

    })
    database.ref('users/'+user.uid+'/template3'+'/Work-Experience'+'/End-Date').once('value')
    .then((snapshot) => {
      const  EndDateWorkExinputs = snapshot.val();
   
      EndDateWorkExinput.value= EndDateWorkExinputs;

    })

    database.ref('users/'+user.uid+'/template3'+'/Work-Experience'+'/Work-Experience-Info').once('value')
    .then((snapshot) => {
      const WorkExtextareas = snapshot.val();
   
      WorkExtextarea.value= WorkExtextareas;

    })
    database.ref('users/'+user.uid+'/template3'+'/Education'+'/School-Name').once('value')
    .then((snapshot) => {
      const   SchoolNameinputs= snapshot.val();
   
      SchoolNameinput.value=SchoolNameinputs ;

    })
    database.ref('users/'+user.uid+'/template3'+'/Education'+'/School-Location').once('value')
    .then((snapshot) => {
      const   SchoolLocationinputs= snapshot.val();
   
      SchoolLocationinput.value=SchoolLocationinputs;

    })
    database.ref('users/'+user.uid+'/template3'+'/Education'+'/Degree').once('value')
    .then((snapshot) => {
      const  Degreeinputs= snapshot.val();
   
      Degreeinput.value=Degreeinputs;

    })
    database.ref('users/'+user.uid+'/template3'+'/Education'+'/Field-of-Study').once('value')
    .then((snapshot) => {
      const  FieldofStudys= snapshot.val();
   
      FieldofStudy.value= FieldofStudys;

    })
    database.ref('users/'+user.uid+'/template3'+'/Education'+'/Graduation-Start-Date').once('value')
    .then((snapshot) => {
      const  GraduationStartDates= snapshot.val();
   
      GraduationStartDate.value= GraduationStartDates;

    })
    database.ref('users/'+user.uid+'/template3'+'/Education'+'/Graduation-End-Date').once('value')
    .then((snapshot) => {
      const  GraduationEndDates= snapshot.val();
   
      GraduationEndDate.value= GraduationEndDates;

    })
    database.ref('users/'+user.uid+'/template3'+'/Education'+'/Education-Info').once('value')
    .then((snapshot) => {
      const  EducationInfo= snapshot.val();
   
      Educationtextarea.value= EducationInfo;

    })
    database.ref('users/'+user.uid+'/template3'+'/Accomplishments').once('value')
.then((snapshot) => {
   const checkboxState = snapshot.child('checkboxState').val();

   if( checkboxState==true)
   {
  
    // var Accomplishments=document.getElementById("Accomplishments");
    // Accomplishments.checked="true";
     var Accomplishmentsdivid=document.getElementById("Accomplishmentsdivid").style.display="block";
    //  var AcomplisTemplateDividT=document.getElementById("AcomplisTemplateDividT").style.hidden="true";
    var AcomplisTemplateDividT=document.getElementById("AcomplisTemplateDividT").style.display="block";


   }
   else if(checkboxState==false){
    var AcomplisTemplateDividT=document.getElementById("AcomplisTemplateDividT").style.display="none";
    var Accomplishmentsdivid=document.getElementById("Accomplishmentsdivid").style.display="none";
    // var Accomplishments=document.getElementById("Accomplishments").style.display="block";
   }

 })

    //retrieval of data (form) when auth is changed//
  addrees();   
  phoneandemail();
  workexperienceinputandinnerhtml();
  academicinputandinnerhtml();
  //photo retrieval ka calling yaha aayega
   geturlfromdatabase();
  //ek func bana vaha set kr aur vaha se get kr yaha se bhi

  AcomplishmentTextarea()
    }
    
})

function academicdata()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  database.ref('users/'+user.uid+'/template3'+'/Education').child('School-Name').set(SchoolNameinput.value)
  database.ref('users/'+user.uid+'/template3'+'/Education').child('School-Location').set(SchoolLocationinput.value)
  database.ref('users/'+user.uid+'/template3'+'/Education').child('Degree').set(Degreeinput.value)
  database.ref('users/'+user.uid+'/template3'+'/Education').child('Field-of-Study').set(FieldofStudy.value)
  database.ref('users/'+user.uid+'/template3'+'/Education').child('Graduation-Start-Date').set(GraduationStartDate.value)
  database.ref('users/'+user.uid+'/template3'+'/Education').child('Graduation-End-Date').set(GraduationEndDate.value)

  database.ref('users/'+user.uid+'/template3'+'/Education').child('Education-Info').set(Educationtextarea.value)
  academicinputandinnerhtml()
}
function Workexperiencedata()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  database.ref('users/'+user.uid+'/template3'+'/Work-Experience').child('Job-Title').set(Jobtitleinput.value)
  database.ref('users/'+user.uid+'/template3'+'/Work-Experience').child('Employer-Position').set(Employerinput.value)
  database.ref('users/'+user.uid+'/template3'+'/Work-Experience').child('City-Work').set(CityinputWorkexperience.value)
  database.ref('users/'+user.uid+'/template3'+'/Work-Experience').child('Country').set(CountryinputWorkexperience.value)
  database.ref('users/'+user.uid+'/template3'+'/Work-Experience').child('Start-Date').set(StartDateWorkExinput.value)
  database.ref('users/'+user.uid+'/template3'+'/Work-Experience').child('End-Date').set(EndDateWorkExinput.value)

  database.ref('users/'+user.uid+'/template3'+'/Work-Experience').child('Work-Experience-Info').set(WorkExtextarea.value)
  workexperienceinputandinnerhtml();
}
function academicinputandinnerhtml()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  database.ref('users/' + user.uid + '/template3'+'/Education').once('value')
  .then((snapshot) => {
    const SchoolNameinput = snapshot.child('School-Name').val();
   
    const SchoolLocationinput =snapshot.child('School-Location').val();
    const Degreeinput = snapshot.child('Degree').val();
    const FieldofStudy = snapshot.child('Field-of-Study').val();
    const GraduationStartDate =snapshot.child('Graduation-Start-Date').val();
    const GraduationEndDate =snapshot.child('Graduation-End-Date').val();
const Educationtextarea=snapshot.child('Education-Info').val();

if(Educationtextarea==""&&SchoolLocationinput==""&&Degreeinput==""&&FieldofStudy==""&&GraduationStartDate==""&&GraduationStartDate==""){
  cardEducationid.style.display="none";
}
else{
  cardEducationid.style.display="block";
EducationtextareaT.innerHTML=Educationtextarea;
if(Degreeinput!=""&&FieldofStudy!=""){

  DegreeT.innerHTML=Degreeinput+":"+FieldofStudy;
}
else if(Degreeinput!=""&&FieldofStudy==""){
  DegreeT.innerHTML=Degreeinput;
}
else if(Degreeinput==""&&FieldofStudy!=""){
  DegreeT.innerHTML=FieldofStudy;
}
else if(Degreeinput==""&&FieldofStudy==""){
  DegreeT.innerHTML="";
}

   

 if(SchoolLocationinput!=""&&SchoolNameinput!=""){
  SchoolNameAddrres.innerHTML=SchoolNameinput+","+SchoolLocationinput;
}
else if(SchoolNameinput!=""&&SchoolLocationinput==""){
  SchoolNameAddrres.innerHTML=SchoolNameinput;
}
else if(SchoolNameinput==""&&SchoolLocationinput!=""){
  SchoolNameAddrres.innerHTML=SchoolLocationinput;
}
else if(SchoolNameinput==""&&SchoolLocationinput==""){
  SchoolNameAddrres.innerHTML="";

}
 SchoolExdate.innerHTML=GraduationStartDate+"<br>"+GraduationEndDate;
}
})
}

function workexperienceinputandinnerhtml()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;
  const WorkExperienceDiv=document.getElementById("Work-Experience-Div");

  database.ref('users/' + user.uid + '/template3'+'/Work-Experience').once('value')
  .then((snapshot) => {
    const Jobtitleinput = snapshot.child('Job-Title').val();
    JobtitleT.innerHTML=Jobtitleinput;
    const Employerinput=snapshot.child('Employer-Position').val();
    const CityinputWorkexperience = snapshot.child('City-Work').val();
    const CountryinputWorkexperience = snapshot.child('Country').val();
    const EndDateWorkExinput=snapshot.child('End-Date').val();
    const StartDateWorkExinput=snapshot.child('Start-Date').val()
    const  WorkExtextarea=snapshot.child('Work-Experience-Info').val()
    if(Jobtitleinput==""&&Employerinput==""&&CityinputWorkexperience==""&&CountryinputWorkexperience==""&&EndDateWorkExinput==""&&StartDateWorkExinput==""&&WorkExtextarea=="")
    {
         WorkExperienceDiv.style.display="none";
    }
    else{
      WorkExperienceDiv.style.display="block";
      // var newDiv = document.createElement("div");
      // newDiv.setAttribute("id", "WorkExperienceDiv");
      // Add any additional properties or content to the new div here
      // document.body.appendChild(newDiv);
  // if(Employerinput==""&&CityinputWorkexperience==""&&CountryinputWorkexperience=="")
  // {
  //     WorkExaddress.innerHTML="";
  // }
  // else if(Employerinput!=""&&CityinputWorkexperience==""&&CountryinputWorkexperience==""){
  //     WorkExaddress.innerHTML=Employerinput;
  // }
  // else if(Employerinput!=""&&CityinputWorkexperience!=""&&CountryinputWorkexperience=="")
  // {
  //     WorkExaddress.innerHTML=Employerinput+","+CityinputWorkexperience;
  // }
  // else if(Employerinput!=""&&CityinputWorkexperience==""&&CountryinputWorkexperience!=""){
  //     WorkExaddress.innerHTML=Employerinput+","+CountryinputWorkexperience; 
  // }
  // WorkExaddress.innerHTML=Employerinput+","+CityinputWorkexperience+","+CountryinputWorkexperience;

  if(Employerinput!=""&&CityinputWorkexperience!=""&&CountryinputWorkexperience!=""){
  WorkExaddress.innerHTML=Employerinput+" : "+CityinputWorkexperience+","+CountryinputWorkexperience;
  }
  else if(Employerinput!=""&&CityinputWorkexperience==""&&CountryinputWorkexperience=="")
  {
  WorkExaddress.innerHTML=Employerinput;
  }
  else if(Employerinput!==""&&CityinputWorkexperience!=""&&CountryinputWorkexperience=="")
  {
    WorkExaddress.innerHTML=Employerinput+" : "+CityinputWorkexperience;
  }
  else if(Employerinput!==""&&CityinputWorkexperience==""&&CountryinputWorkexperience!="")
  {
    WorkExaddress.innerHTML=Employerinput+" : "+CountryinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience!=""&&CountryinputWorkexperience!=""){
    WorkExaddress.innerHTML=CityinputWorkexperience+","+CountryinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience!=""+CountryinputWorkexperience==""){
    WorkExaddress.innerHTML=CityinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience==""+CountryinputWorkexperience!=""){
    WorkExaddress.innerHTML=CountryinputWorkexperience;
  }
  else if(Employerinput==""&&CityinputWorkexperience==""+CountryinputWorkexperience==""){
    WorkExaddress.innerHTML="";
  }
  
workexpereincetextareaT.innerHTML=WorkExtextarea;
  
  let WorkExdateT=document.getElementById("Work-Ex-date")
  WorkExdateT.innerHTML=StartDateWorkExinput+"<br>"+EndDateWorkExinput;
    }


  
})


}

function handleSubmit() {

const database = firebase.database();
var user = firebase.auth().currentUser;
   //Storing data of firstname form firebase
database.ref('users/'+user.uid+'/template3'+'/Personal-data').child('firstname').set(nameInput.value);
database.ref('users/' + user.uid +'/template3'+'/Personal-data').once('value')
.then((snapshot) => {
   const Firstname = snapshot.child('firstname').val();
   const lastname = snapshot.child('lastname').val();
   FirstnameT.innerHTML=Firstname+lastname;

   nameInput.value=Firstname;
 })


 database.ref('users/'+user.uid+'/template3'+'/Personal-data').child('Introduction').set(Introductioninput.value);
database.ref('users/' + user.uid +'/template3'+'/Personal-data'+'/Introduction').once('value')
.then((snapshot) => {
   const Introduction = snapshot.val();

   IntroductionT.innerHTML=Introduction;

 })
   //Storing data of secondname form firebase
database.ref('users/'+user.uid+'/template3'+'/Personal-data').child('lastname').set(lastnameName.value);
database.ref('users/' + user.uid +'/template3'+'/Personal-data'+'/lastname').once('value')
.then((snapshot) => {
   const lastname = snapshot.val();
   lastnameT.innerHTML=lastname;
 })
//storing data of Profession form firebase

database.ref('users/'+user.uid+'/template3'+'/Personal-data').child('profession').set(ProfessionInput.value);
database.ref('users/' + user.uid +'/template3'+'/Personal-data'+'/profession').once('value')
.then((snapshot) => {
   const Profession = snapshot.val();
   ProfessionT.innerHTML=Profession; 
 })
 
    
 database.ref('users/'+user.uid+'/template3'+'/Personal-data').child('city').set(CityInput.value);
 database.ref('users/'+user.uid+'/template3'+'/Personal-data').child('country').set(CountryInput.value);
 database.ref('users/'+user.uid+'/template3'+'/Personal-data').child('pincode').set(PinCode2Input.value)
 database.ref('users/'+user.uid+'/template3'+'/Personal-data').child('phone').set(PhoneIN.value)
 database.ref('users/'+user.uid+'/template3'+'/Personal-data').child('emailT').set(EmailIN.value)


 addrees();
 phoneandemail();
 uploadprocess();

}
  function phoneandemail(){
    const database = firebase.database();
     var user = firebase.auth().currentUser;
    database.ref('users/' + user.uid + '/template3'+'/Personal-data').once('value')
      .then((snapshot) => {
    
    const PhoneIN = snapshot.child('phone').val();
    const EmailIN=snapshot.child('emailT').val();
    const City = snapshot.child('city').val();
    const Country = snapshot.child('country').val();
    const PinCode2=snapshot.child('pincode').val();
  
    if(PhoneIN!=""){
    PhoneT.innerHTML="<b>Phone</b>";
    PhoneNumberT.innerHTML=PhoneIN;
    
        }
        else{
            PhoneT.innerHTML=PhoneIN;
    PhoneNumberT.innerHTML=PhoneIN;
        }

        if(EmailIN!=""){
            EmailT.innerHTML="<b>Email</b>";
            EmailidT.innerHTML=EmailIN;
            
                }
                else{
                    EmailT.innerHTML=EmailIN;
            EmailidT.innerHTML=EmailIN;
                }
                if(City==""&&EmailIN==""&&PhoneIN==""&&Country==""&&PinCode2==""){
                    let contactT=document.getElementById("contactT");
                    contactT.style.display="none";

                }
                else{
                  let contactT=document.getElementById("contactT");
                    contactT.style.display="block";
                }
                
  })
}
  function addrees(){
    const database = firebase.database();
    var user = firebase.auth().currentUser;
    
    database.ref('users/' + user.uid + '/template3'+'/Personal-data').once('value')
      .then((snapshot) => {
    const City = snapshot.child('city').val();
    const Country = snapshot.child('country').val();
    const PinCode2=snapshot.child('pincode').val();
  
   
  
  
    if(City==""&& Country==""&& PinCode2==""){
        address_Section.innerHTML=City;
        pincodeT.innerHTML=City;
    }
    
    else if(City!=""&&Country==""&&PinCode2==""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=City;
        pincodeT.innerHTML=addres;
    }
    else if(City!=""&&Country!=""&&PinCode2==""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=City+','+Country;
        pincodeT.innerHTML=addres;
    }
    else if(City!=""&&Country==""&&PinCode2!=""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=City+','+PinCode2;
        pincodeT.innerHTML=addres;
    }
    //for Country
    else if(City==""&&Country!=""&&PinCode2==""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=Country;
        pincodeT.innerHTML=addres;
    }
    else if(City!=""&&Country!=""&&PinCode2==""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=City+','+Country;
        pincodeT.innerHTML=addres;
    }
    else if(City==""&&Country!=""&&PinCode2!=""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=Country+','+PinCode2;
        pincodeT.innerHTML=addres;
    }
    //for Pincode
    else if(City==""&&Country==""&&PinCode2!=""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=PinCode2;
        pincodeT.innerHTML=addres;
    }
    else if(City!=""&&Country==""&&PinCode2!=""){
        address_Section.innerHTML="<b>Address</b>";
        var addres=City+','+PinCode2;
        pincodeT.innerHTML=addres;
    }
    else{
        address_Section.innerHTML="<b>Address</b>";
        var addres=City+','+Country+','+PinCode2;
        pincodeT.innerHTML=addres;
    }});
  }


   var Workexpereinceaddinputsdiv=document.getElementById("Work-expereince-add-inputs-div");
   var workexpereinceaddbtn=document.getElementById("work-expereince-add-btn");
   var workexpereinceRemovebtn=document.getElementById("work-expereince-Remove-btn");
   function addworkexperienceinput(){

    var newfiled=document.createElement('input');
    newfiled.setAttribute('type','text');
    Workexpereinceaddinputsdiv.appendChild(newfiled)
   }
 
  // function addworkexperienceinput() {
  //   var newForm = document.createElement('form');
  //   newForm.innerHTML = document.getElementById('Work-expereince-add-inputs-div').innerHTML;
  //   document.getElementById('Work-expereince-add-inputs-div').appendChild(newForm);
  // }
   function workexpereinceRemovebtnfnc(){
    
    var input_tags=Workexpereinceaddinputsdiv.getElementsByTagName('input');
    if(input_tags.length>2){
      Workexpereinceaddinputsdiv.removeChild(input_tags[(input_tags.length)-1]);
    }
   }


  // function workexpereinceRemovebtnfnc(){
  // var forms = document.querySelectorAll('#Work-expereince-add-inputs-div form');
  // if (forms.length > 1) {
  //   forms[forms.length - 1].remove();
  // }
// }

function logout(){
    firebase.auth().signOut()
}
function colorchangere()
{
  const database = firebase.database();
var user = firebase.auth().currentUser;
var colorappy=document.getElementById("firsts");

var colorchoice=document.getElementById("color-template");
database.ref('users/'+user.uid+'/template3'+'/Template-Editor').child('Color').set(colorchoice.value);
database.ref('users/' + user.uid + '/template3'+'/Personal-data').once('value')
      .then((snapshot) => {
    const colors = snapshot.child('color').val();
    colorappy.style.backgroundColor=colors;
  
  
  });
}

function templatepreviewbtn(){
  document.getElementById("TemplatePreiew").style.display="block";

}

function templatepreviewbtnno(){
  document.getElementById("TemplatePreiew").style.display="none";
}
var Accomplishmentsdivid=document.getElementById("Accomplishmentsdivid").style.display="none";
function addsectionfnc()
{
  const database = firebase.database();
  var user = firebase.auth().currentUser;

var Accomplishments=document.getElementById("Accomplishments");

// var Interests=document.getElementById("Interests");
database.ref('users/'+user.uid+'/template3'+'/Accomplishments').child('checkboxState').set(Accomplishments.checked);

database.ref('users/'+user.uid+'/template3'+'/Accomplishments').once('value')
.then((snapshot) => {
   const checkboxState = snapshot.child('checkboxState').val();

   if( checkboxState==true)
   {
  
    // var Accomplishments=document.getElementById("Accomplishments");
    // Accomplishments.checked="true";
     var Accomplishmentsdivid=document.getElementById("Accomplishmentsdivid").style.display="block";
    //  var AcomplisTemplateDividT=document.getElementById("AcomplisTemplateDividT").style.hidden="true";
    var AcomplisTemplateDividT=document.getElementById("AcomplisTemplateDividT").style.display="block";


   }
   else if(checkboxState==false){
    var AcomplisTemplateDividT=document.getElementById("AcomplisTemplateDividT").style.display="none";
    var Accomplishmentsdivid=document.getElementById("Accomplishmentsdivid").style.display="none";
    // var Accomplishments=document.getElementById("Accomplishments").style.display="block";
   }

 })


var Interests=document.getElementById("Interests");
database.ref('users/'+user.uid+'/template3'+'/Interests').child('checkboxState').set(Interests.checked);

database.ref('users/'+user.uid+'/template3'+'/Interests').once('value')
.then((snapshot) => {
   const checkboxState = snapshot.child('checkboxState').val();

   if( checkboxState==true)
   {
  
    var Intersetid=document.getElementById("Intersetid").style.display="block";


    
   }
   else if(checkboxState==false){
    var Intersetid=document.getElementById("Intersetid").style.display="none";
   }

 })
}


function AccomplishmentPreviousfnc(){
  var Intersetid=document.getElementById("Intersetid").style.display="none";
var AccomplishmentPrevious=document.getElementById("Accomplishmentsdivid").style.display="none";


}

function AcomplishmentTextarea()
{
  var Accomplishmentstextarea=document.getElementById("Accomplishments-textarea");
  var AcomplistextareaT=document.getElementById("Acomplis-textareaT");
  const database = firebase.database();
var user = firebase.auth().currentUser;
   //Storing data of firstname form firebase
database.ref('users/'+user.uid+'/template3'+'/Accomplishments').child('Accomplishments-info').set(Accomplishmentstextarea.value);
database.ref('users/' + user.uid +'/template3'+'/Accomplishments').once('value')
.then((snapshot) => {
   const Accomplishments = snapshot.child('Accomplishments-info').val();
   AcomplistextareaT.innerHTML=Accomplishments
 })

}