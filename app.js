import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword , onAuthStateChanged,
  signOut} from "./firebase.js"




const signupBtn = document.getElementById("signupBtn");

if (signupBtn) {
  signupBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created Successfully");
       window.location.href = "index.html";

    } catch (error) {
      alert(error.message);
    }
  });
}

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "home.html";
    } catch (error) {
      alert(error.message);
    }
  });
}




onAuthStateChanged(auth, (user) => {

  if (user) {
    document.getElementById("welcome").innerText =
      `Welcome bro...`;
       document.getElementById("msg").innerText =
      `I am very happy that you visited my webpage ${user.email}`;
  } else {
    window.location.href = "index.html";
  }

});

document.getElementById("logoutBtn")
.addEventListener("click", async () => {

  await signOut(auth);

  window.location.href = "index.html";

});