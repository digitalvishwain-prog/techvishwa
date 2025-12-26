import type { Route } from "./+types/contact";
import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import styles from "./contact.module.css";

const PHONE_NUMBER = "+919404006526";
const EMAIL = "contact@techvishwa.in";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact TechVishwa - Get Your Free Digital Marketing Plan" },
    {
      name: "description",
      content:
        "Get in touch with TechVishwa for website design, social media management, and digital marketing services. Free consultation available.",
    },
  ];
}

export default function Contact() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    businessName: "",
    city: "",
    service: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
New Enquiry from Website:

Name: ${formData.name}
Phone: ${formData.phone}
Business: ${formData.businessName || "Not provided"}
City: ${formData.city}
Service Interested: ${formData.service}
Budget Range: ${formData.budget}

Message:
${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`, "_blank");

    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.gradientOrb1}></div>
            <div className={styles.gradientOrb2}></div>
          </div>
          <div className={styles.container}>
            <div className={`${styles.heroContent} animate-fade-in-up`}>
              <h1 className={styles.heroTitle}>Tell us what you need. We'll suggest what works.</h1>
              <p className={styles.heroDescription}>
                Share your business type, city, service requirement, and budget range. We'll respond with a practical plan.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contactSection}>
          <div className={styles.container}>
            <div className={styles.contentGrid}>
              {/* Contact Info */}
              <div className={`${styles.contactInfo} scroll-animate`}>
                <h2>Get in Touch</h2>

                <div className={styles.contactCard}>
                  <div className={styles.cardIcon}>
                    <Phone size={28} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3>Phone / WhatsApp</h3>
                    <a href={`tel:${PHONE_NUMBER}`} className={styles.contactLink}>{PHONE_NUMBER}</a>
                    <p>Available for quick consultations</p>
                  </div>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.cardIcon}>
                    <Mail size={28} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3>Email</h3>
                    <a href={`mailto:${EMAIL}`} className={styles.contactLink}>{EMAIL}</a>
                    <p>We respond within 24 hours</p>
                  </div>
                </div>

                <div className={styles.contactCard}>
                  <div className={styles.cardIcon}>
                    <MapPin size={28} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3>Locations</h3>
                    <ul className={styles.locationsList}>
                      <li>Pune – Viman Nagar</li>
                      <li>Nashik – Indira Nagar</li>
                      <li>Ahilya Nagar</li>
                      <li>Navi Mumbai</li>
                    </ul>
                    <p className={styles.indiaWide}>Serving India-wide</p>
                  </div>
                </div>

                <div className={styles.quickContact}>
                  <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=600&h=400&fit=crop" alt="Contact Us" />
                </div>
              </div>

              {/* Contact Form */}
              <div className={`${styles.formContainer} scroll-animate delay-2`}>
                {!submitted ? (
                  <>
                    <h2>Request a Quote</h2>
                    <p className={styles.formSubtitle}>Fill out the form and we'll get back to you with a tailored plan</p>
                    <form className={styles.form} onSubmit={handleSubmit}>
                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label htmlFor="name">
                            Full Name <span className={styles.required}>*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                          />
                        </div>

                        <div className={styles.formGroup}>
                          <label htmlFor="phone">
                            Phone Number <span className={styles.required}>*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                      </div>

                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label htmlFor="businessName">Business Name</label>
                          <input
                            type="text"
                            id="businessName"
                            name="businessName"
                            value={formData.businessName}
                            onChange={handleChange}
                            placeholder="Optional"
                          />
                        </div>

                        <div className={styles.formGroup}>
                          <label htmlFor="city">
                            City <span className={styles.required}>*</span>
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            required
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="Your city"
                          />
                        </div>
                      </div>

                      <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                          <label htmlFor="service">
                            Service Interested In <span className={styles.required}>*</span>
                          </label>
                          <select id="service" name="service" required value={formData.service} onChange={handleChange}>
                            <option value="">Select a service</option>
                            <option value="Website">Website</option>
                            <option value="Social Media">Social Media</option>
                            <option value="Complete Digital Marketing">Complete Digital Marketing</option>
                            <option value="Not sure (Need guidance)">Not sure (Need guidance)</option>
                          </select>
                        </div>

                        <div className={styles.formGroup}>
                          <label htmlFor="budget">
                            Budget Range <span className={styles.required}>*</span>
                          </label>
                          <select id="budget" name="budget" required value={formData.budget} onChange={handleChange}>
                            <option value="">Select budget range</option>
                            <option value="Under ₹10,000">Under ₹10,000</option>
                            <option value="₹10,000–₹25,000">₹10,000–₹25,000</option>
                            <option value="₹25,000–₹50,000">₹25,000–₹50,000</option>
                            <option value="₹50,000+">₹50,000+</option>
                          </select>
                        </div>
                      </div>

                      <div className={styles.formGroup}>
                        <label htmlFor="message">Message / Requirements</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your business and what you're looking for..."
                          rows={5}
                        />
                      </div>

                      <button type="submit" className={styles.submitButton}>
                        <Send size={20} />
                        Get a Free Website & Marketing Plan
                      </button>
                    </form>
                  </>
                ) : (
                  <div className={styles.successMessage}>
                    <div className={styles.successIcon}>
                      <MessageCircle size={48} />
                    </div>
                    <h3>Thank you for reaching out!</h3>
                    <p>
                      Your enquiry has been sent via WhatsApp. Our team will review your requirements and get back to you
                      within 24 hours with a practical plan tailored to your business.
                    </p>
                    <button onClick={() => setSubmitted(false)} className={styles.secondaryButton}>
                      Submit Another Enquiry
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
