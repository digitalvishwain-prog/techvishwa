import { Link } from "react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import styles from "./footer.module.css";

const PHONE_NUMBER = "+919404006526";
const EMAIL = "contact@techvishwa.in";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <h3>TechVishwa</h3>
            <p>Enterprise-level digital tools built for Indian small businesses.</p>
            <p>Clear pricing. Practical execution.</p>
          </div>

          <div className={styles.section}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/stories">Our Stories</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3>Contact</h3>
            <div className={styles.contactItem}>
              <Phone />
              <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
            </div>
            <div className={styles.contactItem}>
              <Mail />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>

          <div className={styles.section}>
            <h3>Our Presence</h3>
            <div className={styles.locations}>
              <div className={styles.location}>Pune – Viman Nagar (Airport Road)</div>
              <div className={styles.location}>Nashik – Indira Nagar (Rathchakra)</div>
              <div className={styles.location}>Ahilya Nagar (Ahmednagar)</div>
              <div className={styles.location}>Navi Mumbai</div>
            </div>
            <p style={{ marginTop: "var(--space-3)" }}>Serving businesses India-wide</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.copyright}>© 2024 TechVishwa. All rights reserved.</div>
          <div className={styles.trustLine}>Built for Indian small businesses.</div>
        </div>
      </div>
    </footer>
  );
}
