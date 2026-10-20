"use client";
import { useEffect, useState } from "react";

export default function AppointmentForm() {
  const [request, setRequest] = useState<{body: string; name: string} | null>(null);
  const [today, setToday] = useState<string>();
  useEffect(() => {
    setToday(new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Kolkata", year: "numeric", month: "2-digit", day: "2-digit",
    }).format(new Date()));
  }, []);
  return <div className="booking-card" id="appointment-form">
    <p className="booking-eyebrow">APPOINTMENT REQUEST</p>
    <h2 id="request-heading">Tell us what works for you</h2>
    <p className="booking-muted">Our team will confirm availability and help finalize your visit.</p>
    <div className="booking-notice"><span aria-hidden="true">✚</span><div><strong>Your care starts here</strong><p>Choose your preferred clinic, service and consultation time.</p></div></div>
    <form onSubmit={event => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      setRequest({name: String(data.get("name")), body: ["Appointment request", ...Array.from(data.entries()).map(([key,value]) => key + ": " + value)].join("\n")});
    }}>
      <div className="booking-fields">
        <label>Full name <span>*</span><input name="name" autoComplete="name" placeholder="Enter your full name" required maxLength={100} /></label>
        <label>Phone number <span>*</span><input name="phone" type="tel" autoComplete="tel" placeholder="+91 XXXXX XXXXX" pattern="[+0-9 ()-]{10,18}" title="Enter a valid phone number with 10 to 18 characters" required /></label>
        <label>Preferred clinic <span>*</span><select name="clinic" required defaultValue=""><option value="" disabled>Choose a clinic</option><option>Vasudev ENT & Neuro Centre, Chomu</option><option>Neuro Clinic, Sikar</option></select></label>
        <label>Care needed <span>*</span><select name="service" required defaultValue=""><option value="" disabled>Choose a service</option>{["Neurology consultation", "Stroke care", "Epilepsy treatment", "Headache & migraine", "Memory & dementia", "Spine & nerve disorders", "Other neurological concern"].map(service => <option key={service}>{service}</option>)}</select></label>
        <label>Preferred date <span>*</span><input name="date" type="date" min={today} required /></label>
        <label>Preferred time <span>*</span><select name="time" required defaultValue=""><option value="" disabled>Choose a time</option>{["3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM"].map(time => <option key={time}>{time}</option>)}</select></label>
      </div>
      <label className="booking-details">Additional details <small>(optional)</small><textarea name="details" maxLength={1000} rows={3} placeholder="Tell us anything that would help us prepare for your visit" /></label>
      <p className="booking-form-help">Continue to prepare your request, then send it using your email app. Your appointment is confirmed only after the clinic contacts you.</p>
      <button className="booking-button booking-submit" type="submit">Prepare appointment request <span aria-hidden="true">→</span></button>
    </form>
    {request && <div className="booking-review" role="status"><h3>Your request is ready, {request.name}.</h3><p>It has not been sent yet. Open your email app to review and send it to the clinic.</p><a className="booking-button" href={"mailto:info@neurocareclinic.com?subject=" + encodeURIComponent("NeuroCare appointment request") + "&body=" + encodeURIComponent(request.body)}>Continue by email</a><a href="tel:+919664360984">Or call +91 96643 60984</a></div>}
  </div>;
}

