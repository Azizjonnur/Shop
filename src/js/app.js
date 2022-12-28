import "./style";
import { SignUp } from "./signUp";
import { signUp, SignIn } from "../api";
import { signIn } from "./signIn";
document.addEventListener("DOMContentLoaded", async (e) => {
  const page = location.pathname;
  if (page === "/index.html" || page === "/") {
    
  }
  if (page === "/sign-in.html" || page === "/sign-in") {
    const signInForm = document.querySelector(".signin_form");
    try {
      signInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new signIn(
          signInForm.email.value,
          signInForm.password.value,
        );
        console.log(formData);
        SignIn(formData)
          .then(({ data }) => {
            console.log(data);
            localStorage.token = data.token;
            localStorage.user = JSON.stringify(data.user.role);
            location.assign("/");
          })
          .catch((err) => {
            Toastify({
              text: err.msg,
              duration: 3000,
              newWindow: true,
              close: true,
              gravity: "top",
              position: "right",
              stopOnFocus: true,
              style: {
                background: "linear-gradient(to right, red, red)",
              },
              onClick: function () {},
            }).showToast();
            if (err?.path) {
              location.assign(err.path);
            }
          });
      });
    } catch (err) {
      console.log(err);
    }
  }
  if (page === "/sign-up.html" || page === "/sign-up") {
    const signUpForm = document.querySelector(".signup_form");
    try {
      signUpForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new SignUp(
          signUpForm.name.value,
          signUpForm.lastName.value,
          signUpForm.email.value,
          signUpForm.password.value,
          signUpForm.phone.value
        );
        console.log(formData);
        signUp(formData)
          .then(({ data }) => {
            console.log(data);
            localStorage.token = data.token;
            localStorage.user = JSON.stringify(data.user.role);
            location.assign("/");
          })
          .catch((err) => {
            Toastify({
              text: err.msg,
              duration: 3000,
              newWindow: true,
              close: true,
              gravity: "top",
              position: "right",
              stopOnFocus: true,
              style: {
                background: "linear-gradient(to right, red, red)",
              },
              onClick: function () {},
            }).showToast();
            if (err?.path) {
              location.assign(err.path);
            }
          });
      });
    } catch (err) {
      console.log(err);
    }
  }
});
