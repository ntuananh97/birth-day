import { useState, useEffect } from "react";
import "./App.css";
// https://motionarray.imgix.net/preview-159856-q27ngZBKXx-high_0009.jpg?w=660&q=60&fit=max&auto=format 

const getLeafImage = () => {
  const leafImages = []
  for (let index = 0; index < 100; index++) {
     leafImages.push('/public/heart1.png');
    
  }

  return leafImages;
}

const FallingLeaves = () => {
  useEffect(() => {
      const NUM_LEAVES = 100;
      const leafContainer = document.getElementById('leaf-container');

      const leafImages = [
          '/public/heart1.png',
          '/public/heart1.png',
          '/public/heart1.png',
          '/public/heart1.png',
          '/public/heart1.png'
      ]; // Thêm đường dẫn tới các hình ảnh lá của bạn

      for (let i = 0; i < NUM_LEAVES; i++) {
          const leaf = document.createElement('div');
          leaf.classList.add('leaf');

          // Chọn ngẫu nhiên hình ảnh lá
          const img = leafImages[Math.floor(Math.random() * leafImages.length)];
          leaf.style.backgroundImage = `url(${img})`;

          // Vị trí ban đầu trên trục X
          leaf.style.left = `${Math.random() * 100}vw`;

          // Kích thước lá
          const size = Math.random() * 20 + 20; // 20px đến 40px
          leaf.style.width = `${size}px`;
          leaf.style.height = `${size}px`;

          // Thời gian hoạt ảnh
          const duration = Math.random() * 5 + 5; // 5s đến 10s
          leaf.style.animationDuration = `${duration}s`;

          // Độ trễ hoạt ảnh
          const delay = Math.random() * -20; // -20s đến 0s
          leaf.style.animationDelay = `${delay}s`;

          // Độ mờ
          leaf.style.opacity = Math.random() * 0.5 + 0.5; // 0.5 đến 1

          leafContainer.appendChild(leaf);
      }

      // Dọn dẹp khi component unmount
      return () => {
          while (leafContainer.firstChild) {
              leafContainer.removeChild(leafContainer.firstChild);
          }
      };
  }, []);

  return <div id="leaf-container" className="leaf-container"></div>;
};

function App() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="wrapper">
      {open ? (
        <div>
          <audio hidden autoPlay loop src="/public/happy-birthday.mp3"></audio>
          <h1 className="birthday-text">Chúc mừng sinh nhật lan anh iuuu</h1>
    <div className="confetti-container">
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
      <div className="confetti"></div>
    </div>
    <div className="sparkles"></div>

        {/* {[...Array(1000)].map((_, index) => (
          <div key={index} className="leaf"></div>
        ))} */}
        <FallingLeaves />


        </div>
      ) : (
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          <img
            src="https://birthdaycake24.com/uploads/worigin/2019/06/18/bd-gif5d0840a2bdea0_503e82571271c49db4e4f645e4cacdae.gif"
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default App;