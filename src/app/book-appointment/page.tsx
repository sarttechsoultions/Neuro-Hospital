import "./booking.css";
import AppointmentForm from "./request-form";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";

export default function BookAppointment() {
  return <div className="homepage booking-page">
    <SiteHeader />
    <main>
      <section className="booking-hero"><div><p className="booking-eyebrow">PERSONALIZED NEUROLOGY CARE</p><h1>Book Appointment</h1><p>Choose a convenient time and our team will confirm your visit.</p></div></section>
      <section className="booking-form-section" aria-labelledby="request-heading"><AppointmentForm /></section>
    </main>
    <SiteFooter />
  </div>;
}


