// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, collection, addDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmSpcQ7z8Jwd1JqB2cKeo_4JQcg_PWE1s",
  authDomain: "sage-490df.firebaseapp.com",
  projectId: "sage-490df",
  storageBucket: "sage-490df.appspot.com",
  messagingSenderId: "578470479490",
  appId: "1:578470479490:web:7f4314c31a5665b657d69b",
  measurementId: "G-WNZ175E6LD"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const firestore = getFirestore();
const analytics = getAnalytics(app);
const orderCollection = collection(firestore, 'UserData');


document.querySelector('.my-form').addEventListener('submit', e => {
	e.preventDefault();
	let fname = document.querySelector('#fname-input').value;
    let sname =  document.querySelector('#sname-input').value;
    let email = document.querySelector('#email-input').value;
    let phone = document.querySelector('#phone-input').value;
    let gender = document.querySelector('#gender-input').value;
    let medical = document.querySelector('#record-input').value;


	async function addANewDocument() {
        const newDoc = await addDoc (orderCollection, {
            fname : fname,
            sname: sname,
            email: email,
            phone: phone,
            gender: gender,
            medical: medical,   
        });
        
        
        console.log(`Your new doc was created at ${newDoc.path}`);
        
    }
    async function disp(){
        window.open("Result.html",'_blank');
        }
    addANewDocument();
    disp();
})
