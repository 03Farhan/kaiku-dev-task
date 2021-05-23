import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const NewMeetingForm = ({ startupName, show, closeForm }) => {
  return (
    <Modal show={show} onHide={closeForm}>
      <Modal.Header>
        <Modal.Title>Schedule Meeting with {startupName}</Modal.Title>
      </Modal.Header>
      <div className="meeting-form">
        <label htmlFor="meetingTime">Meeting time:</label>
        <input
          id="meetingTime"
          name="meetingTime"
          type="datetime-local"
        ></input>
        <label htmlFor="meetingMessage">Message:</label>
        <textarea
          style={{ width: "50%" }}
          id="meetingMessage"
          name="meetingMessage"
          type="text"
        ></textarea>
      </div>

      <Modal.Footer>
        <Button
          className="close-button"
          variant="secondary"
          onClick={closeForm}
        >
          Close
        </Button>
        <Button variant="success" onClick={closeForm}>
          Request Meeting &#128101;
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NewMeetingForm;
