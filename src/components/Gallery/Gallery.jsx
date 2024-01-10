import React, { useState } from "react";

import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";

import Image from "./Image";
import Modal from "react-modal";
import img_1 from "../../assets/gallery-1.jpg";
import img_2 from "../../assets/gallery-2.jpg";
import img_3 from "../../assets/gallery-3.jpg";
import img_4 from "../../assets/gallery-4.jpg";
import img_5 from "../../assets/gallery-5.jpg";
import img_6 from "../../assets/gallery-6.jpg";
import img_7 from "../../assets/gallery-7.jpg";
import img_8 from "../../assets/gallery-8.jpg";
import img_9 from "../../assets/gallery-9.jpg";
import img_10 from "../../assets/gallery-10.jpg";
import img_11 from "../../assets/gallery-11.jpg";
import img_12 from "../../assets/gallery-12.jpg";
import img_13 from "../../assets/gallery-13.jpg";
import img_14 from "../../assets/gallery-14.jpg";
import "./Gallery.css";

const images = [
  { src: img_1, alt: "Image 1" },
  { src: img_2, alt: "Image 2" },
  { src: img_3, alt: "Image 3" },
  { src: img_4, alt: "Image 4" },
  { src: img_5, alt: "Image 5" },
  { src: img_6, alt: "Image 6" },
  { src: img_7, alt: "Image 7" },
  { src: img_8, alt: "Image 8" },
  { src: img_9, alt: "Image 9" },
  { src: img_10, alt: "Image 10" },
  { src: img_11, alt: "Image 11" },
  { src: img_12, alt: "Image 12" },
  { src: img_13, alt: "Image 13" },
  { src: img_14, alt: "Image 14" },
  // Add more images as needed
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = (index) => {
    setSelectedImage(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index} className="image" onClick={() => openModal(index)}>
          <Image src={image.src} alt={image.alt} />
        </div>
      ))}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <button className="close_btn" onClick={closeModal}>
          <IoMdClose />
        </button>

        <button onClick={handlePrev} className="prev_btn">
          <IoIosArrowBack />
        </button>
        <Image
          src={images[selectedImage]?.src}
          alt={images[selectedImage]?.alt}
        />
        <button onClick={handleNext} className="next_btn">
          <IoIosArrowForward />
        </button>
      </Modal>
    </div>
  );
};

export default Gallery;
