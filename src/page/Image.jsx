import React, { useState, useEffect } from "react";

const images = [
  "https://via.placeholder.com/800x400/FF5733/fff?text=Image+1",
  "https://via.placeholder.com/800x400/33FF57/fff?text=Image+2",
  "https://via.placeholder.com/800x400/3357FF/fff?text=Image+3",
];

const Image = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div style={styles.container}>
      <img src={images[currentIndex]} alt="slider" style={styles.image} />
    </div>
  );
};

const styles = {
  container: {
    width: "800px",
    height: "400px",
    overflow: "hidden",
    position: "relative",
    margin: "auto",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 1s ease-in-out",
  },
};

export default Image;