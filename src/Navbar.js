import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
  faBarsStaggered,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  // 모달 1을 열 때
  const openModal1 = () => {
    setModalIsOpen(true);
    setModalIsOpen2(false); // 모달 2는 닫음
  };

  // 모달 2를 열 때
  const openModal2 = () => {
    setModalIsOpen(false); // 모달 1은 닫음
    setModalIsOpen2(true);
  };

  // 모달 1을 닫을 때
  const closeModal1 = () => {
    setModalIsOpen(false);
  };

  // 모달 2를 닫을 때
  const closeModal2 = () => {
    setModalIsOpen2(false);
  };
  const modalStyle1 = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    content: {
      width: "400px",
      height: "100%",
      margin: "auto",
      backgroundColor: "#fff",
      border: "none",
      right: 0,
      position: "absolute",
      left: "auto",
      display: "flex",
      flexDirection: "column", // 수직 방향으로 요소 배치
    },
  };

  const modalStyle2 = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    content: {
      width: "500px",
      height: "100%",
      margin: "auto",
      backgroundColor: "#fff",
      border: "none",
      left: "0", // 왼쪽에 붙도록 설정
      right: "auto", // 오른쪽 여백 제거
      position: "absolute",
      display: "flex",
      flexDirection: "column", // 수직 방향으로 요소 배치
    },
  };

  return (
    <div className="black-nav">
      <div className="left">
        <FontAwesomeIcon
          icon={faUser}
          className="icons hover"
          onClick={() => {
            setModalIsOpen(false); // 모달 1 닫기
            setModalIsOpen2(!modalIsOpen2); // 모달 2 열기/닫기 토글
          }}
        />
        <Modal
          isOpen={modalIsOpen2}
          onRequestClose={closeModal2} // 모달 2 닫기
          style={{ ...modalStyle2 }}
        >
          <div className="user">
            <div className="space"></div>
            <div>Log Into, or Create Your Account</div>
            <input></input>
          </div>
        </Modal>
      </div>
      <h1 className="center">
        <Link to="/">
          <img
            src="https://i.imgur.com/F8FF2Zk.png"
            width={40}
            height={60}
            className="logo"
            onClick={() => {
              setModalIsOpen(false); // 모달 1 닫기
              setModalIsOpen2(false); // 모달 2 열기/닫기 토글
            }}
          ></img>
        </Link>
      </h1>
      <div className="right">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="icons hover"
          onClick={() => {
            setModalIsOpen(false); // 모달 1 닫기
            setModalIsOpen2(false); // 모달 2 열기/닫기 토글
          }}
        />
        <Link to="/cart" className="link">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="icons"
            onClick={() => {
              setModalIsOpen(false); // 모달 1 닫기
              setModalIsOpen2(false); // 모달 2 열기/닫기 토글
            }}
          />
        </Link>
        <FontAwesomeIcon
          icon={faBarsStaggered}
          className="icons hover"
          onClick={() => {
            setModalIsOpen(!modalIsOpen); // 모달 1 닫기
            setModalIsOpen2(false); // 모달 2 열기/닫기 토글
          }}
        />

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          style={{ ...modalStyle1 }} // 모달이 열릴 때와 닫힐 때 서로 다른 스타일 적용
        >
          <div>
            <div className="space"></div>
            <p className="category">DOBLUE</p>
            <Link
              to={"/doblue-service"}
              onClick={() => setModalIsOpen(false)}
              className="link"
            >
              <p className="front-padding category-small">DOBLUE SERVICE</p>
            </Link>
            <Link
              to={"/subscription"}
              onClick={() => setModalIsOpen(false)}
              className="link"
            >
              <p className="front-padding category-small">SUBSCRIPTION</p>
            </Link>
            <Link
              to={"/sell-trade"}
              onClick={() => setModalIsOpen(false)}
              className="link"
            >
              <p className="front-padding category-small">SELL/TRADE</p>
            </Link>
            <div className="small-space"></div>
            <p className="category">SHOP</p>
            <Link
              to={"/collection/all"}
              onClick={() => setModalIsOpen(false)}
              className="link"
            >
              <p className="front-padding category-small">ALL</p>
            </Link>{" "}
            <Link
              to={"/collection/men"}
              onClick={() => setModalIsOpen(false)}
              className="link"
            >
              <p className="front-padding category-small">MEN</p>
            </Link>
            <Link
              to={"/collection/women"}
              onClick={() => setModalIsOpen(false)}
              className="link"
            >
              <p className="front-padding category-small">WOMEN</p>
            </Link>{" "}
            <Link
              to={"/collection/gs"}
              onClick={() => setModalIsOpen(false)}
              className="link"
            >
              <p className="front-padding category-small">GRADESCHOOL</p>
            </Link>{" "}
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
