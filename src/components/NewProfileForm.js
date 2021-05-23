import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

const NewProfileForm = ({ show, closeForm, onSubmit }) => {
  const [raises, setRaises] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const startupInfo = {
      name: e.target["name"].value,
      oneLiner: e.target["oneLiner"].value,
      targetRaise: e.target["targetRaise"].value,
      raises: raises.map((_, index) => ({
        amountRaised: e.target["raise" + index].value,
      })),
    };
    onSubmit(startupInfo);
  };

  return (
    <Modal show={show} onHide={closeForm}>
      <Modal.Header>
        <Modal.Title>Create New Profile</Modal.Title>
      </Modal.Header>
      <div className="profile-form">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control required />
          </Form.Group>

          <Form.Group controlId="oneLiner">
            <Form.Label>One Liner</Form.Label>
            <Form.Control required as="textarea" />
          </Form.Group>

          <Form.Group controlId="targetRaise">
            <Form.Label>Target Raise</Form.Label>
            <Form.Control required type="number" />
          </Form.Group>

          <Form.Group>
            {raises.map((_, index) => (
              <Row key={index}>
                <Col xs={10}>
                  <Form.Group controlId={"raise" + index}>
                    <Form.Label>Raise {index + 1}</Form.Label>
                    <Form.Control required type="number" />
                  </Form.Group>
                </Col>
                <Col xs={2} className="d-flex align-items-center">
                  {index === raises.length - 1 ? (
                    <div
                      className="raise-button"
                      onClick={() => {
                        const newRaises = [...raises];
                        newRaises.pop();
                        setRaises(newRaises);
                      }}
                      style={{ backgroundColor: "red" }}
                    >
                      -
                    </div>
                  ) : (
                    <div></div>
                  )}
                </Col>
              </Row>
            ))}
          </Form.Group>

          <div
            className="raise-button"
            onClick={() => setRaises([...raises, 0])}
            style={{ backgroundColor: "green" }}
          >
            Add raise
          </div>

          <Button style={{ marginTop: "20px" }} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <Modal.Footer>
        <Button
          className="close-button"
          variant="secondary"
          onClick={closeForm}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewProfileForm;
