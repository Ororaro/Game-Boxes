import { Col, Divider, Grid, Layout, Row } from "antd";
import Buttonlang from "./components/buttonlang/buttonlang";
import "./scss/main.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface DataItem {
  id: number;
  term: string;
  style: React.CSSProperties;
}

const BoxesQuiz = () => {
  const { t } = useTranslation();

  const mockShape1: DataItem[] = [
    {
      id: 1,
      term: "circle1",
      style: {
        width: "100px",
        height: "100px",
        background: "gray",
        margin: "0 auto",
      },
    },
    {
      id: 2,
      term: "circle2",
      style: {
        width: "100px",
        height: "100px",
        background: "gray",
        borderRadius: "50%",
        margin: "0 auto",
      },
    },
    {
      id: 3,
      term: "circle3",
      style: {
        width: "200px",
        height: "100px",
        background: "gray",
        borderRadius: "100px/50px",
        margin: "0 auto",
      },
    },
    {
      id: 4,
      term: "circle4",
      style: {
        borderBottom: "100px solid gray",
        borderLeft: "25px solid transparent",
        borderRight: "25px solid transparent",
        height: "0px",
        width: "100px",
        margin: "0 auto",
      },
    },
    {
      id: 5,
      term: "circle5",
      style: {
        width: "200px",
        height: "100px",
        background: "gray",
        margin: "0 auto",
      },
    },
    {
      id: 6,
      term: "circle6",
      style: {
        width: "150px",
        height: "100px",
        transform: "skew(20deg)",
        background: "gray",
        margin: "0 auto",
      },
    },
  ];

  function shuffleArray() {
    const newArray1 = [...mockShape1];
    for (let i = newArray1.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray1[i], newArray1[j]] = [newArray1[j], newArray1[i]];
    }
    setBoxes(newArray1);
  }

  type JustifyType =
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";

  const [justify1, setJustify1] = useState<JustifyType>("end");
  const [justify2, setJustify2] = useState<JustifyType>("center");

  const [boxes, setBoxes] = useState<DataItem[]>(mockShape1);
  const firstRow = boxes.slice(0, 3);
  const secondRow = boxes.slice(3);
  const toggleJustify = () => {
    setJustify1((prev) => (prev === "center" ? "end" : "center"));
    setJustify2((prev) => (prev === "end" ? "center" : "end"));
  };

  const moveItem = (direction: "left" | "right") => {
    if (direction === "left") {
      const newBoxes = [...boxes];
      const frontBox = newBoxes.shift();
      if (frontBox) {
        newBoxes.push(frontBox);
        setBoxes(newBoxes);
      }
    }
    if (direction === "right") {
      const newBoxes = [...boxes];
      const lastBox = newBoxes.pop();
      if (lastBox) {
        newBoxes.unshift(lastBox);
        setBoxes(newBoxes);
      }
    }
  };

  return (
    <>
      <div>
        <Buttonlang />
        <h1>{t("greeting.desc1")}</h1>
      </div>
      <div className="container">
        <Row>
          <Col span={6}>
            <div
              className="background-box"
              style={{ cursor: "pointer" }}
              onClick={() => moveItem("left")}
            >
              <div id="triangle-left">
                <div className="titleBadge">{t("greeting.moveShape")}</div>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div
              className="background-box-pair"
              onClick={() => toggleJustify()}
            >
              <div style={{ cursor: "pointer" }}>
                <div id="triangle-up">
                  <div className="titleBadgePair">
                    {t("greeting.movePostion")}
                  </div>
                </div>
              </div>
              <div style={{ cursor: "pointer" }}>
                <div id="triangle-down"></div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div
              className="background-box"
              style={{ cursor: "pointer" }}
              onClick={() => moveItem("right")}
            >
              <div id="triangle-right">
                {" "}
                <div className="titleBadge">{t("greeting.moveShape")}</div>
              </div>
            </div>
          </Col>
        </Row>
        <Divider orientation="left"></Divider>
        <Row gutter={[16, 16]} justify={justify1}>
          {firstRow.map((item, index) => (
            <>
              <Col key={item.id} md={6} onClick={() => shuffleArray()}>
                <div className="background-box-random" style={{ cursor: "pointer" }}>
                  <div className={`shape ${item.term}`} style={item.style}></div>
                </div>
              </Col>
            </>
          ))}
        </Row>
        <Row gutter={[16, 16]} justify={justify2}>
          {secondRow.map((item, index) => (
            <>
              <Col key={item.id} md={6} onClick={() => shuffleArray()}>
                <div className="background-box-random" style={{ cursor: "pointer" }}>
                  <div className={`shape ${item.term}`} style={item.style}></div>
                </div>
              </Col>
            </>
          ))}
        </Row>
      </div>
    </>
  );
};

export default BoxesQuiz;
