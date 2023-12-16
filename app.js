import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCJRlLCcS6DsYpRKnjFDKGEDwGNOMFN47w",
  authDomain: "saylani-form-7a1d8.firebaseapp.com",
  projectId: "saylani-form-7a1d8",
  storageBucket: "saylani-form-7a1d8.appspot.com",
  messagingSenderId: "334474923261",
  appId: "1:334474923261:web:3c0149306417b417c68294",
  measurementId: "G-TPHCV46W5Y"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const opt1 = document.querySelector("#opt1")
const opt2 = document.querySelector("#opt2")
const opt3 = document.querySelector("#opt3")
const opt4 = document.querySelector("#opt4")
const opt5 = document.querySelector("#opt5")
const opt6 = document.querySelector("#opt6")
const opt7 = document.querySelector("#opt7")
const opt8 = document.querySelector("#opt8")
const opt9 = document.querySelector("#opt9")
const opt10 = document.querySelector("#opt10")
const opt11 = document.querySelector("#opt11")
const opt12 = document.querySelector("#opt12")
const getFile = document.querySelector("#getFile")
const alloptions = document.querySelector(".options")
const SubmitBtn = document.querySelector("#SubmitBtn");

  
if(SubmitBtn){
SubmitBtn.addEventListener("click", async() => {
  console.log("aaraha hai")
  if ( opt1.value == "" ) {
      SubmitBtn.Disabled = true
      alert("please fill all the fields")
  }
  else if(opt2.value == ""){
    SubmitBtn.Disabled = true
    alert("please fill all the fields")
  }
  else if(opt3.value == ""){
    alert("please fill all the fields")
  } else if(opt4.value == ""){
    alert("please fill all the fields")
  } else if(opt5.value == ""){
    alert("please fill all the fields")
  } else if(opt6.value == ""){
    alert("please fill all the fields")
  } else if(opt7.value == ""){
    alert("please fill all the fields")
  } else if(opt8.value == ""){
    alert("please fill all the fields")
  } else if(opt9.value == ""){
    alert("please fill all the fields")
  } else if(opt10.value == ""){
    alert("please fill all the fields")
  } else if(opt11.value == ""){
    alert("please fill all the fields")
  } else if(opt12.value == ""){
    alert("please fill all the fields")
  }
  else if(getFile.value == ""){
    alert("please add your profile picture")
    
  }
  else {
    const docRef = await addDoc(collection(db, "User data"), {
    
      City: opt1.value,
      Course: opt2.value,
      Name: opt3.value,
      Father_Name : opt4.value,
      Email: opt5.value,
      Phone_Number : opt6.value,
      Cnic : opt7.value,
      Fathers_Cnic : opt8.value,
      DOB : opt9.value,
      Gender : opt10.value,
      address : opt11.value,
      qualification : opt12.value,
      getFile :  getFile.value,
  
  
  
  
    });
  
  
    SubmitBtn.Disabled = false
  
   
  
  
    
  
    opt1.value = "";
    opt2.value = "";
    opt3.value = "";
    opt4.value = "";
    opt5.value = "";
    opt6.value = "";
    opt7.value = "";
    opt8.value = "";
    opt9.value = "";
    opt10.value = "";
    opt11.value = "";
    opt12.value = "";
    getFile.value = "";
    
  
   
      
    console.log("Your Information is written in :" , docRef.id)
  
  
  
   alert("you are enrolled")
  }

 


}
)

}







