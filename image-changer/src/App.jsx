import { useState, useRef } from "react";
import "./App.css";

const defaultAvatar = () => "https://www.w3schools.com/howto/img_avatar.png";

function App() {
  const [images, setImages] = useState([defaultAvatar()]);
  const addImg = useRef();

  const addImages = () => {
    addImg.current.click();
  };

  const handleChange = (e) => {
    const fileUploaded = e.target.files[0];

    var reader = new FileReader();
    reader.onload = function () {
      let currentImages = [];
      if (images.length == 1) {
        currentImages = [reader.result, defaultAvatar()];
      } else {
        const sortedImage = [...images];
        currentImages = [
          ...sortedImage.slice(0, sortedImage.length - 1),
          reader.result,
          defaultAvatar(),
        ];
      }
      setImages(currentImages);
    };
    reader.readAsDataURL(fileUploaded);
  };

  return (
    <div className="App">
      <input
        onChange={handleChange}
        hidden
        ref={addImg}
        type="file"
        name=""
        id=""
        accept="image/*"
      />
      {images.map((i, k) => (
        <img
          key={k}
          onClick={k == images.length - 1 ? addImages : null}
          src={i}
          width={200}
          height={200}
          alt=""
        />
      ))}
    </div>
  );
}

export default App;
