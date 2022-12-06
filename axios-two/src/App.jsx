import { useState } from "react";
import axios from "axios";
import "./App.css";
import { ToastContainer, toast, cssTransition } from "react-toastify";
import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

function App() {
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [submittingForm, setSubmittingForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setSubmittingForm(true);
    setErrorMessage("");

    axios
      // .get("http://localhost:2022/")
      .post("http://localhost:2022/")
      // .get("http://localhost:2022/response")
      // .get("http://localhost:2022/request")
      // .get("http://localhost:2022/server")
      .then((res) => {
        // setSuccessMessage(res.data.message);
        toast.success(res.data.message)
      })
      .catch((err) => {
        console.log(err);
        let message;
        message = err.message;
        if (err?.response !== undefined) {
          if (err.response.status == 500) {
            message = "Your backend does not work";
          } else {
            message = err.response.data.message;
          }
        }
        // setErrorMessage(message);
        toast.error(message)
      })
      .finally(() => {
        setSubmittingForm(false);
        console.log("finishing promise");
      });
  };
  return (
    <section class="text-gray-600 body-font">
      <ToastContainer transition={bounce} />
      <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 class="title-font font-medium text-3xl text-gray-900">
            Axios Class{" "}
          </h1>
          <p class="leading-relaxed mt-4">
            Request, Waiting and Error handling
          </p>
        </div>
        <form
          onSubmit={submittingForm ? (e) => e.preventDefault() :submitForm}
          class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
        >
          <p class="text-xs text-green-500 mt-3">{successMessage}</p>
          <p class="text-xs text-red-500 mt-3">{errorMessage}</p>

          <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
            Sign Up
          </h2>
          <div class="relative mb-4">
            <label for="full-name" class="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="relative mb-4">
            <label for="email" class="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            {submittingForm ? "Please wait..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default App;
