import React from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { Slide } from "react-awesome-reveal";
import imgd from "../../imgs/1.png";
import { SocialIcon } from "react-social-icons";
import myCV from "../../CV/AmrTarek.pdf";

const ProfComponent = () => {
  return (
    <Container id="home">
      <Slide direction="left">
        <Texts>
          <h4>
            Hello <span className="blue">I'am</span>
          </h4>
          <h1 className="blue">Amr Tarek</h1>
          <h3>
            <b>Frontend Software Engineer</b>
          </h3>
          <p>
            I'd describe myself as an industrious, competent, and positive
            person who wants to have a long <br />
            successful career in this industry.
          </p>
          <p>
            I'm currently working at <b>Sphinx Publishing Company (Sayegh)</b>{" "}
            as a Front-end web developer. I've worked in large development teams
            that have enhanced my expertise.
          </p>
          <p>
            I'm naturally persevered, self-confident, quietly curios, innovative
            and constantly challenging my skills.
          </p>
          <p className="skills">
            <b>My Skills:</b>
            <img
              src="https://skillicons.dev/icons?i=html,css,sass,js,ts,react,git"
              alt="skills images"
            />
          </p>
          <Buttons>
            <button>
              <a href="#footer">
                <b>Let's talk</b>
              </a>
            </button>
            <button className="btn1">
              <a href={myCV} download={myCV}>
                <HiOutlineDownload /> My CV
              </a>
            </button>
          </Buttons>
          <Social>
            <p>Check out my</p>
            <div className="social-icons">
              <span>
                <SocialIcon
                  url="https://www.linkedin.com/in/amrrtarekk/"
                  target="_blank"
                />
              </span>
              <span>
                <SocialIcon
                  url="https://github.com/AmrrTarekk"
                  target="_blank"
                />
              </span>
              <span>
                <SocialIcon
                  url="https://www.facebook.com/amrtarekbs/"
                  target="_blank"
                />
              </span>
              <span>
                <SocialIcon
                  url="https://twitter.com/AmrrTarek"
                  target="_blank"
                />
              </span>
            </div>
          </Social>
        </Texts>
      </Slide>
      <Slide direction="right">
        <Profile>
          <img src={imgd} alt="profile" />
        </Profile>
      </Slide>
    </Container>
  );
};

export default ProfComponent;

const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding-top: 3rem;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  z-index: 1;
  @media (max-width: 840px) {
    width: 96%;
  }

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
const Texts = styled.div`
  flex: 1;
  h4 {
    padding: 1rem 0;
    font-weight: 500;
  }
  h1 {
    font-size: 2rem;
    font-family: "Secular One", sans-serif;
    letter-spacing: 2px;
  }
  h3 {
    font-weight: 500;
    font-size: 1.2rem;
    padding-bottom: 1.2rem;
    text-transform: capitalize;
  }
  p {
    font-weight: 300;
    margin-bottom: 0.5rem;
  }

  button {
    padding: 0.7rem 2rem;
    margin-top: 3rem;
    cursor: pointer;
    background-color: #00b4ff;
    border: none;
    color: black;
    font-weight: 500;

    filter: drop-shadow(0px 3px 3px #ffffff59);
    :hover {
      filter: drop-shadow(0px 10px 10px #00b4ff);
    }
  }
  .btn1 {
    text-align: center;
    background-color: #191923;
    padding: 0.7rem 1.5rem;
    padding-right: 1.7rem;
    width: 15%;
    @media (max-width: 840px) {
      width: 33%;
    }
  }
  a {
    text-decoration: none;
    color: white;
  }
  .skills {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
    @media (max-width: 450px) {
      img {
        width: 100%;
      }
    }
  }
`;
const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;
const Social = styled.div`
  margin-top: 3rem;
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  p {
    font-size: 0.9rem;
    @media (max-width: 690px) {
      font-size: 0.7rem;
    }
  }

  .social-icons {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      width: 2.3rem;
      height: 2rem;
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
      filter: drop-shadow(0px 10px 10px white);

      position: relative;
      transition: transform 400ms ease-in-out;
      :hover {
        transform: rotate(360deg);
      }
    }

    a {
      color: #fff;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;
const Profile = styled.div`
  img {
    width: 25rem;
    filter: drop-shadow(0px 10px 10px #00b4ff);
    transition: transform 400ms ease-in-out;
    @media (max-width: 790px) {
      width: 20rem;
    }

    @media (max-width: 660px) {
      width: 18rem;
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  :hover img {
    transform: translateY(-10px);
  }
`;
