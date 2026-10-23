import { ScrollControls } from "./scroll-controls";
import "./clinic-gallery.css";
export function ClinicGallery() { return (
<section id="gallery" className="home-gallery" aria-labelledby="gallery-heading">
        <header className="home-gallery-heading"><p>OUR GALLERY</p><h2 id="gallery-heading">A Glimpse Into Our Care</h2><span>Modern facilities, advanced technology, and a caring environment.</span></header>
        <div className="home-gallery-rail" tabIndex={0} role="region" aria-label="Clinic photo gallery, scroll to see more photos">
          {[
            ["/figma/gallery1.png", "Doctor consulting an elderly patient"],
            ["/figma/gallery2.png", "Neurologist performing an EEG test"],
            ["/figma/gallery3.png", "Patient receiving physiotherapy care"],
            ["/figma/gallery5.png", "Patients at the clinic reception"],
            ["/figma/gallery4.png", "Brain MRI scan evaluation"],
            ["/figma/gallery6.png", "Our clinic team"],
            ["/figma/gallery7.png", "Our clinic team"],
            ["/figma/gallery8.png", "Our clinic team"],
          ].map(([src, alt]) => <figure key={src}><img src={src} alt={alt} loading="lazy" /></figure>)}
        </div><ScrollControls />
      </section>
); }
