import React, { useState, useRef } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

import Overlay from "react-bootstrap/Overlay";
import Tooltip from "react-bootstrap/Tooltip";
import copylogo from "../../src/image/copy.png";
import textlogo from "../../src/image/textlogo.png";
import cleartextlogo from "../../src/image/cleartextlogo.png";
import lowerlogo from "../../src/image/lowerlogo.png";
import upperlogo from "../../src/image/upperlogo.png";
import boldlogo from "../../src/image/boldlogo.png";
import italiclogo from "../../src/image/italiclogo.png";

const TextForm = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  const [text, setText] = useState("");

  //to clear the space
  const handleOnClearSpace = () => {
    setText("");
  };

  //to change text to Uppercase
  const handleOnUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  //to change text to lowercase
  const handleOnLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  //to remove extra space
  const handleOnExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  const boldText = () => {
    var element = document.getElementById("myPara");
    element.style.fontWeight = "bold";
  };
  const italicText = () => {
    var element = document.getElementById("myPara");
    element.style.fontStyle = "italic";
  };

  const removestyle = () => {
    var element = document.getElementById("myPara");
    element.style = "";
  };

  const copyPara = () => {
    var text = document.getElementById("myPara");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  //color picker logic
  var box = document.getElementById("myPara");
  let colorpicker = document.getElementById("ColorPicker1");
  setInterval(() => {
    let color = colorpicker.value;
    box.style.color = color;
  }, 100);

  return (
    <>
      <Container>
        <Form className="mt-4">
          <Form.Group>
            <Form.Control
              id="myPara"
              placeholder="Enter your text here"
              className="my-3"
              as="textarea"
              style={{ height: "240px" }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>

          <Button
            disabled={text.length === 0}
            className="mx-2 my-2"
            variant="primary"
            onClick={handleOnClearSpace}
          >
            <img
              alt=""
              src={cleartextlogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Button>
          <Button
            disabled={text.length === 0}
            className="mx-2"
            variant="primary"
            onClick={handleOnUppercase}
          >
            <img
              alt=""
              src={upperlogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Button>
          <Button
            disabled={text.length === 0}
            className="mx-2"
            variant="primary"
            onClick={handleOnLowercase}
          >
            <img
              alt=""
              src={lowerlogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Button>
          <Button
            disabled={text.length === 0}
            className="mx-2"
            variant="primary"
            onClick={handleOnExtraSpace}
          >
            Remove Extra Space{" "}
          </Button>
          <Button
            disabled={text.length === 0}
            className="mx-2"
            variant="primary"
            onClick={boldText}
          >
            <img
              alt=""
              src={boldlogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Button>
          <Button
            disabled={text.length === 0}
            className="mx-2"
            variant="primary"
            onClick={italicText}
          >
            <img
              alt=""
              src={italiclogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Button>
          <Button
            disabled={text.length === 0}
            className="mx-2"
            variant="primary"
            onClick={removestyle}
          >
            Remove-Style
          </Button>
          <Button
            disabled={text.length === 0}
            className="mx-2"
            variant="primary"
            onClick={copyPara}
          >
            <img
              alt=""
              src={copylogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Button>
          <Button ref={target} onClick={() => setShow(!show)}>
            <img
              alt=""
              src={textlogo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
          </Button>
          <Overlay target={target.current} show={show} placement="right">
            {(props) => (
              <Tooltip id="overlay-example" {...props}>
                <input name="MyColorPicker" type="color" id="ColorPicker1" />
              </Tooltip>
            )}
          </Overlay>
        </Form>
        <Card className="mt-2" style={{ width: "100vh" }}>
          <Card.Body>
            <Card.Title>Word Counter</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Total World And charecters
            </Card.Subtitle>
            <Card.Text>
              In the above text total word is {text.split(" ").length} and{" "}
              {text.length} charecters
            </Card.Text>
            <Card.Subtitle className="mb-2 text-muted">
              Required Time
            </Card.Subtitle>
            <Card.Text>
              Required time to read is {[text.length] * 0.3} sec
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="mt-2" style={{ width: "100vh" }}>
          <Card.Body>
            <Card.Title>Preview text here</Card.Title>
            <Card.Text>
              {text.length === 0 ? "No text to preview here" : text}
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default TextForm;
