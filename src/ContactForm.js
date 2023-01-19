import { Button, Form } from "react-bootstrap";

export default function ContactForm() {
  return (
    <div className="formContainer" id="contact">
      <div className="contactInfo">
        <span className="xxsmallText smallBold">GET IN TOUCH</span>
        <h5>
          Just a phone call away, our professionals are ready to assist you with
          our creative ideas and options here at<span> E-Max</span>.
        </h5>
        <div className="smallText smallBold address">
          CORPORATE HEADQUARTERS <br />
          140 Florida Street <br />
          Farmingdale NY <br />
          (877) 885-0705
        </div>
      </div>
      <Form>
        <h3>let's connect!</h3>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Your phone number</Form.Label>
          <Form.Control type="tel" placeholder="Enter phone number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMsg">
          <Form.Label>Your message</Form.Label>
          <Form.Control type="text" placeholder="Tell us about your thoughts" />
        </Form.Group>
        <Button type="submit">SUBMIT</Button>
      </Form>
    </div>
  );
}
