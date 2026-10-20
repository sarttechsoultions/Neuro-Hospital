import "./site-footer.css";
import Link from "next/link";
export { default as SiteHeader } from "./site-header";

export function SiteFooter() {
  return <div className="neuro-footer" data-name="MainFooter" id="contact">
    <footer className="neuro-footer-inner">
      <div className="footer-intro">
        <Link href="/" className="footer-brand"><span className="footer-brand-icon"><img src="/figma/nav.png" width="48" height="48" alt="" /></span><span><strong>NeuroCare Clinic</strong><small>Expert Neurology Care</small></span></Link>
        <p>Better brain. Better life.<br />Compassionate care, every step of the way.</p>
        <Link className="footer-appointment" href="/book-appointment">Book an appointment <span aria-hidden="true">↗</span></Link>
      </div>
      <div className="footer-main">
        <div className="footer-links"><h2>Explore</h2><nav aria-label="Footer navigation">{[["Home", "/"], ["About us", "/about"], ["Our doctors", "/#doctors"], ["Services", "/#services"], ["Gallery", "/#gallery"], ["Contact", "/#contact"]].map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</nav></div>
        <div className="footer-clinics"><h2>Our clinics</h2><div className="footer-clinic-list">
          <address><span className="footer-clinic-label">CHOMU</span><h3>Vasudev ENT &amp; Neuro Centre</h3><p>Radha Swami Bagh, Sagar City Road,<br />Chomu, Rajasthan 303702</p><a href="https://www.google.com/maps/dir/?api=1&destination=Vasudev%20ENT%20and%20Neuro%20Centre%2C%20Radha%20Swami%20Bagh%2C%20Sagar%20City%20Road%2C%20Chomu%2C%20Rajasthan%20303702&travelmode=driving&dir_action=navigate" target="_blank" rel="noopener noreferrer">Get directions <span aria-hidden="true">↗</span></a></address>
          <address><span className="footer-clinic-label">SIKAR</span><h3>Neuro Clinic</h3><p>Ground floor, Hanuman Height,<br />behind SK Hospital, Sikar</p><a href="https://www.google.com/maps/dir/?api=1&destination=27.613262%2C75.1491239&travelmode=driving&dir_action=navigate" target="_blank" rel="noopener noreferrer">Get directions <span aria-hidden="true">↗</span></a></address>
        </div></div>
        <div className="footer-contact"><h2>Get in touch</h2><a className="footer-phone" href="tel:+919664360984">+91 96643 60984</a><a href="mailto:info@neurocareclinic.com">info@neurocareclinic.com</a><p>Have a question about your visit?<br />Our team is here to help.</p></div>
      </div>
      <div className="footer-bottom"><span>© 2026 NeuroCare Clinic. All rights reserved.</span><span>Expert care. Personal attention.</span></div>
    </footer>
  </div>;
}



