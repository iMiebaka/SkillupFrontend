import { useState } from "react";
import { v4 as uuid } from "uuid";
// import { ToastContainer, toast, cssTransition } from "react-toastify";
// import "animate.css/animate.min.css";
// import "react-toastify/dist/ReactToastify.css";
// import "./App.css";

// const bounce = cssTransition({
//   enter: "animate__animated animate__bounceIn",
//   exit: "animate__animated animate__bounceOut",
// });

function App() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");

  const [list, setListData] = useState({
    title: "",
    reminder: "",
    item: [],
  });
  const submitForm = (e) => {
    e.preventDefault();
    setItems([...items, list]);
    setListData({
      title: "",
      reminder: "",
      item: [],
    });
  };

  const addItems = () => {

    const tempData = list;
    tempData.title = title;
    tempData.reminder = date;
    if (tempData.item.length > 0) {
      tempData.item = [
        ...tempData.item,
        { name: itemName, quantity: itemQuantity },
      ];
    } else {
      tempData.item = [{ name: itemName, quantity: itemQuantity }];
    }
    console.log(tempData);
    setListData(() => tempData);
  };
  return (
    <section className="text-gray-600 body-font">
      {/* <ToastContainer transition={bounce} /> */}
      <div className="container px-5 py-1 mx-auto flex flex-wrap">
        <div className="flex flex-wrap gap-x-2">
          {items.map((i, k) => {
            return (
              <div key={uuid()} className="border">
                <h2>{i.title}</h2>
                <h3>{i.reminder}</h3>
                <div>
                  {i.item.map((i) => (
                    <div key={uuid()}>
                      <p>{i.name}</p>
                      <p>{i.quantity}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-2 md:mt-0">
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
            Add Items
          </h2>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Reminder
            </label>
            <input
              type="date"
              id="full-name"
              name="full-name"
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="flex">
            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Item Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                onChange={(e) => setItemName(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Item Quntity
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                onChange={(e) => setItemQuantity(e.target.value)}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={addItems}
            className="text-black bg-white border-0 py-2 mb-2 px-8 focus:outline-none rounded text-lg"
          >
            Add Item
          </button>
          <button
            onClick={submitForm}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>

          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <div className="border mt-3">
              <h2>{list.title}</h2>
              <h3>{list.reminder}</h3>
              <div>
                <ul>
                  {list?.item?.map((i, k) => (
                    <li key={uuid()}>
                      <span className="mr-2">{i?.name}</span>
                      <span>{i?.quantity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
