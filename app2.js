import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getStorage, ref , uploadBytes , uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";
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
  const storage = getStorage(app);
  const getFile = document.querySelector("#getFile")
  const SubmitBtn = document.querySelector("#SubmitBtn");


// ========= Storage =========
if(SubmitBtn){

  SubmitBtn.addEventListener("click" , () => {
    if(getFile.value == ""){
    alert("please add your Picture")
    }
  //   console.log(getFile.files[0].name)
  const mountainsRef = ref(storage, `images/${getFile.files[0].name}`);
  const uploadTask = uploadBytesResumable(mountainsRef,getFile.files[0]);
  
  uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case 'paused':
          
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
          
      }
      // Document.innerHTML = `${getFile.files[0].name}`
      
  
     
  
      
    }, 
    (error) => {
      console.log(error)
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log('File available at', downloadURL);
      });
    }
  );
  
  
  // 'file' comes from the Blob or File API
  // uploadBytes(mountainsRef , getFile.files[0]).then((snapshot) => {
  //     console.log('Uploaded a blob or file!');
  //     console.log(snapshot)
  //   });
  
})
}