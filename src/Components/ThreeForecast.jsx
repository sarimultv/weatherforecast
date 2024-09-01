import { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const ThreeForecast = ({
  nextTemp,
  dtFirst,
  imFirst,
  secTemp,
  dtSec,
  imSec,
  thirdTemp,
  dtThd,
  imThrd,
}) => {
  const [threediv, setthreediv] = useState(false);
  const showTemp = () => {
    setthreediv(true);
  };
  return (
    <div>
      <Button
        variant="success"
        onClick={showTemp}
        onDoubleClick={() => {
          setthreediv(false);
        }}
      >
        {" "}
        Next 3 Days Forecast{" "}
      </Button>
      {threediv ? (
        <div>
          <br />
          <Row>
            <Col>{dtFirst}</Col>
            <Col>
              <img src={imFirst} alt="icon" /> {nextTemp}°C
            </Col>
          </Row>
          <Row>
            <Col>{dtSec}</Col>
            <Col>
              <img src={imSec} alt="icon" /> {secTemp}°C
            </Col>
          </Row>
          <Row>
            <Col>{dtThd}</Col>
            <Col>
              <img src={imThrd} alt="icon" /> {thirdTemp}°C
            </Col>
          </Row>
        </div>
      ) : (
        <p style={{ display: "none" }}>no data</p>
      )}
    </div>
  );
};

export default ThreeForecast;
