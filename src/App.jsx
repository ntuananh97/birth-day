import { useState, useEffect, useRef } from "react";
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
  const [numLeaves, setNumLeaves] = useState(100);

  // Hàm để xác định số lượng lá dựa trên kích thước màn hình
  const determineNumLeaves = () => {
      const width = window.innerWidth;
      if (width < 768) {
          // Thiết bị di động
          return 30;
      } else if (width < 1200) {
          // Máy tính bảng
          return 60;
      } else {
          // Máy tính để bàn
          return 100;
      }
  };

  useEffect(() => {
      // Thiết lập số lượng lá ban đầu
      setNumLeaves(determineNumLeaves());

      // Thêm sự kiện lắng nghe khi kích thước cửa sổ thay đổi
      const handleResize = () => {
          setNumLeaves(determineNumLeaves());
      };

      window.addEventListener('resize', handleResize);

      return () => {
          window.removeEventListener('resize', handleResize);
      };
  }, []);

  useEffect(() => {
      const leafContainer = document.getElementById('leaf-container');

      const leafImages = [
          'https://res.cloudinary.com/du0a2dniv/image/upload/w_100,h_100,c_fill/v1730914375/heart1-Photoroom_vap0wp.png',
          'https://res.cloudinary.com/du0a2dniv/image/upload/w_100,h_100,c_fill/v1730914375/heart1-Photoroom_vap0wp.png',
          'https://res.cloudinary.com/du0a2dniv/image/upload/w_100,h_100,c_fill/v1730914375/heart1-Photoroom_vap0wp.png',
          'https://res.cloudinary.com/du0a2dniv/image/upload/w_100,h_100,c_fill/v1730914375/heart1-Photoroom_vap0wp.png',
      ]; // Thêm đường dẫn tới các hình ảnh lá của bạn

      for (let i = 0; i < numLeaves; i++) {
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

      // Dọn dẹp khi component unmount hoặc numLeaves thay đổi
      return () => {
          while (leafContainer.firstChild) {
              leafContainer.removeChild(leafContainer.firstChild);
          }
      };
  }, [numLeaves]);

  return <div id="leaf-container" className="leaf-container"></div>;
};

function App() {
  const [open, setOpen] = useState(false);
  const audio = useRef()


  useEffect(() => {
    if (open) {
      audio.current.play()
    }
  }, [open])
  
  
  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div className="wrapper">
      {open ? (
        <div>
          <audio ref={audio} hidden autoPlay loop src="https://res.cloudinary.com/du0a2dniv/video/upload/v1730912751/simple-happy-birthday-song-254480_yqts4k.mp3"></audio>
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


        <FallingLeaves />


        </div>
      ) : (
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          <img
            src="https://birthdaycake24.com/uploads/worigin/2019/06/18/bd-gif5d0840a2bdea0_503e82571271c49db4e4f645e4cacdae.gif"
            alt=""
            className="birthday-image"
          />
        </div>
      )}
    </div>
  );
}

export default App;
