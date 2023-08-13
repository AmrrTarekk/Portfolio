import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import imgp1 from "../../imgs/myreads.jpg";
import imgp2 from "../../imgs/woudyou.jpg";
import imgp3 from "../../imgs/cargame.png";
import imgp4 from "../../imgs/gawad.png";
import imgp5 from "../../imgs/form.png";

let data = [
  {
    name: "MyReads",
    img: imgp1,
    disc: "A Book Tracking App which tracks your books and places them on one of three shelves.",
    link: "https://github.com/AmrrTarekk/MyReads-track-app",
  },
  {
    name: "WouldYouRather-Game",
    img: imgp2,
    disc: "This game is about that a user is asked a question and he/she has two options to choose from. It also allows the user to create his own NEW QUESTION",
    link: "https://github.com/AmrrTarekk/WouldYouRather",
  },
  {
    name: "CrossTheRoad-Game",
    img: imgp3,
    disc: "A game for eductional purpose.",
    link: "https://github.com/AmrrTarekk/CrossRoad",
  },
  {
    name: "Freelancing-Project",
    img: imgp4,
    disc: "E-Commerce App for Gawad Honey Company.",
    link: "https://testgawadhoney.netlify.app",
  },
  {
    name: "ReactForm",
    img: imgp5,
    disc: "Login and Registration Form with Validation, Authentication and Authorization made with Axios and Route API.",
    link: "https://github.com/AmrrTarekk/React-Form",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const toggleCursor = () => {
  const cursor = document.getElementById("sliderContainer");
  if (cursor.style["cursor"] === "-webkit-grabbing") {
    cursor.style["cursor"] = "-webkit-grab";
  } else {
    cursor.style["cursor"] = "-webkit-grabbing";
  }
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container
      id="sliderContainer"
      onMouseDown={toggleCursor}
      onMouseUp={toggleCursor}
    >
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
  cursor: grab;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 3rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #00b4ff;
    border: none;
    position: absolute;
    top: 40%;
    right: -1rem;
    svg {
      font-size: 2em !important ;
    }
  }
  .back {
    left: -1rem;
  }
`;
