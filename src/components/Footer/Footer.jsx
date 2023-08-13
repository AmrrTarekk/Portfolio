import React from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack, BsTwitter } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";

const Footer = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>A.Tarek's Portfolio</h1>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <h1>Address:</h1>
          </Slide>
          <Slide direction="left">
            <p className="center">Alexandria, Egypt</p>
          </Slide>
        </div>
        <div className="links">
          <Slide direction="left">
            <h1>Contact me directly:</h1>
          </Slide>
          <div className="center d-flex">
            <div className="center">
              <span>
                <FiPhoneCall />
              </span>
              <Slide direction="left">
                <a href="tel:+201222841166">+20 122 284 1166</a>
              </Slide>
            </div>
            <div className="center">
              <Slide direction="left">
                <span>
                  <HiOutlineMailOpen />
                </span>
              </Slide>
              <Slide>
                <a href="amrrtarek73@gmail.com">amrrtarek73@gmail.com</a>
              </Slide>
            </div>
          </div>
        </div>
        <div className="profiles">
          <Slide direction="left">
            <h1>Check my profiles</h1>
          </Slide>
          <div className="icons center d-flex-row">
            <Zoom>
              <span className="pointerr">
                <a
                  href="https://github.com/AmrrTarekk"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span className="pointerr">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/amrrtarekk/"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span className="pointerr">
                <a
                  target="_blank"
                  href="https://www.facebook.com/amrtarekbs"
                  rel="noreferrer"
                >
                  <BsFacebook />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span className="pointerr">
                <a
                  target="_blank"
                  href="https://twitter.com/AmrrTarek"
                  rel="noreferrer"
                >
                  <BsTwitter />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
        <Fade className="center d-flex-end">
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 840px) {
    width: 90%;
  }
  .center {
    text-align: center;
  }
  .d-flex {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .d-flex-row {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .d-flex-end {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 100%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }
    .pointerr {
      cursor: pointer !important ;
    }
    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: #00b4ff;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #00b4ff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
