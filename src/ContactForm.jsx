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
        <div className="xsmallText smallBold address">
          CORPORATE HEADQUARTERS <br />
          140 Florida Street <br />
          Farmingdale NY <br />
          (877) 885-0705
        </div>

        <h3
          style={{
            fontSize: "3rem",
            textTransform: "capitalize",
            marginTop: "3rem",
          }}
        >
          let's connect!
        </h3>
      </div>
      <Form
        action="https://crm.zoho.com/crm/WebForm"
        name="WebForm1783950000105979042"
        method="POST"
        id="crmWebToEntityForm"
        className="zcwf_lblLeft crmWebToEntityForm"
      >
        <input
          type="text"
          style={{ display: "none" }}
          name="xnQsjsdp"
          value="4db42541326d55016ac8b720a02a9d9e6c126b8584e6573fdd74efcb89f229ed"
          readOnly
        ></input>
        <input type="hidden" name="zc_gad" id="zc_gad" value=""></input>
        <input
          type="text"
          style={{ display: "none" }}
          name="xmIwtLD"
          value="bdf616f942dbf09d525ab87f94005707c9845f7b905b5d7ca9f19aa700272819"
          readOnly
        ></input>
        <input
          type="text"
          style={{ display: "none" }}
          name="actionType"
          value="Q3VzdG9tTW9kdWxlMw=="
          readOnly
        ></input>
        <input
          type="text"
          style={{ display: "none" }}
          name="returnURL"
          value="https&#x3a;&#x2f;&#x2f;emaxinteractive.com&#x2f;thankyou"
          readOnly
        ></input>
        <div className="formTitleContainer">
          <h3 className="zcwf_title">Contact Us Info</h3>
        </div>
        <Form.Group className="mb-3 zcwf_row" controlId="NAME">
          <Form.Label className="zcwf_col_lab">
            First Name <span className="require">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            className="zcwf_col_fld"
            name="NAME"
            maxLength={120}
            required
          />
          <div className="zcwf_col_help"></div>
        </Form.Group>
        <Form.Group className="mb-3 zcwf_row" controlId="COBJ3CF4">
          <Form.Label className="zcwf_col_lab">
            Last Name <span className="require">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            className="zcwf_col_fld"
            name="COBJ3CF4"
            maxLength={250}
            required
          />
          <div className="zcwf_col_help"></div>
        </Form.Group>
        <Form.Group className="mb-3 zcwf_row" controlId="COBJ3CF3">
          <Form.Label className="zcwf_col_lab">Company</Form.Label>
          <Form.Control
            type="text"
            className="zcwf_col_fld"
            name="COBJ3CF3"
            maxLength={250}
          />
          <div className="zcwf_col_help"></div>
        </Form.Group>
        <Form.Group className="mb-3 zcwf_row" controlId="Email">
          <Form.Label className="zcwf_col_lab">
            Email <span className="require">*</span>
          </Form.Label>
          <Form.Control
            type="email"
            ftype="email"
            name="Email"
            className="zcwf_col_fld"
            maxLength={100}
            required
          />
          <div className="zcwf_col_help"></div>
        </Form.Group>
        <Form.Group className="mb-3 zcwf_row" controlId="COBJ3CF2">
          <Form.Label className="zcwf_col_lab">Phone</Form.Label>
          <Form.Control
            type="tel"
            className="zcwf_col_fld"
            name="COBJ3CF2"
            maxLength={250}
          />
          <div className="zcwf_col_help"></div>
        </Form.Group>
        <Form.Group className="mb-3 zcwf_row" controlId="COBJ3CF1">
          <Form.Label className="zcwf_col_lab">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            className="zcwf_col_fld"
            height={"30px"}
            name="COBJ3CF1"
          />
          <div className="zcwf_col_help"></div>
        </Form.Group>
        <Form.Group
          className="mb-3 zcwf_row wfrm_fld_dpNn"
          controlId="COBJ3CF9"
          style={{ display: "none" }}
        >
          <Form.Label className="zcwf_col_lab">Lead Source</Form.Label>
          <Form.Select
            className="zcwf_col_fld_slt"
            height={"30px"}
            name="COBJ3CF9"
            defaultValue={"Emax&#x20;Contact&#x20;Us&#x20;Form"}
          >
            <option value="Emax&#x20;Contact&#x20;Us&#x20;Form">
              Emax Contact Us Form
            </option>
          </Form.Select>
          <div className="zcwf_col_help"></div>
        </Form.Group>
        <Form.Group
          className="mb-3 zcwf_row wfrm_fld_dpNn"
          controlId="COBJ3CF8"
          style={{ display: "none" }}
        >
          <Form.Label className="zcwf_col_lab">Referred From</Form.Label>
          <Form.Control
            type="text"
            className="zcwf_col_fld"
            name="COBJ3CF8"
            maxLength={250}
            value="Emax&#x20;Interactive&#x20;Splash"
            readOnly
          />
          <div className="zcwf_col_help"></div>
        </Form.Group>

        <Button
          type="submit"
          id="formsubmit"
          className="formsubmit zcwf_button"
          title="Submit"
        >
          SUBMIT
        </Button>
      </Form>
    </div>
  );
}
