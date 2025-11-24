import { MailOutline, PhoneAndroid } from "@mui/icons-material";
import ExtraTitle from "./ExtraTitle";
import "../css/contact.css";
import ContactForm from "./ContactForm.jsx";

function Contact() {
  return (
    <section className="container bg-dark" id="contact">
      <div className="row">
        <ExtraTitle color="1">Skontakuj się</ExtraTitle>
        <h2 className="text-center">
          Gotowy na nową stronę <i>WWW</i>?
        </h2>
        <p className="text-muted">
          Napisz do mnie — wspólnie stworzymy coś, co naprawdę działa.
        </p>
      </div>
      <div className="row">
        <div className="contact-options">
          <div className="contact-option">
            <MailOutline className="contact-icon" />
            <h4>Email</h4>
            <a className="text-muted" href="mailto:mail@mail.com">
              mail@mail.com
            </a>
          </div>
          <div className="contact-option">
            <PhoneAndroid className="contact-icon" />
            <h4>Telefon</h4>
            <a className="text-muted" href="tel:+48123123123">
              +48 123 213 123
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <ContactForm />
      </div>
    </section>
  );
}
export default Contact;
