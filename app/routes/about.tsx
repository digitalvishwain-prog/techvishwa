import type { Route } from "./+types/about";
import { Link } from "react-router";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Target, Users, Zap, Shield, Clock, Globe, MessageCircle, MapPin } from "lucide-react";
import styles from "./about.module.css";
import { useEffect, useRef } from "react";

const PHONE_NUMBER = "+919404006526";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About TechVishwa - Digital Marketing for Indian Businesses" },
    {
      name: "description",
      content:
        "Built to empower Indian businesses digitally. Enterprise-level digital tools at affordable costs for small and growing businesses.",
    },
  ];
}

export default function About() {
  const observerRef = useRef<IntersectionObserver | null>(null);

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

  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`, "_blank");
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
              <h1 className={styles.heroTitle}>Built to empower Indian businesses digitally</h1>
              <div className={styles.heroText}>
                <p>
                  TechVishwa was started with a simple mission: help small and growing businesses build a premium digital
                  presence without paying enterprise-level agency fees. In local markets, perception matters. A clean website,
                  consistent branding, and the right marketing can change how customers trust you, contact you, and buy from
                  you.
                </p>
                <p>
                  We work with businesses across Maharashtra and India—retailers, service providers, institutes, cafés, local
                  brands, and professionals—helping them look premium online and convert better.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className={styles.missionVision}>
          <div className={styles.container}>
            <div className={styles.mvGrid}>
              <div className={`${styles.mvCard} scroll-animate`}>
                <div className={styles.mvIcon}>
                  <Target size={40} />
                </div>
                <h2>Our Mission</h2>
                <p>Make enterprise-level digital tools accessible to Indian small businesses.</p>
              </div>

              <div className={`${styles.mvCard} scroll-animate delay-1`}>
                <div className={styles.mvIcon}>
                  <Zap size={40} />
                </div>
                <h2>Our Vision</h2>
                <p>
                  Build a trusted digital partner brand that helps thousands of businesses win online—through practical
                  execution and ROI-first marketing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.values}>
          <div className={styles.container}>
            <div className={`${styles.sectionHeader} scroll-animate`}>
              <h2>What drives us</h2>
            </div>
            <div className={styles.valuesGrid}>
              {[
                {
                  icon: <Target size={32} />,
                  title: "Practical Execution",
                  description: "We focus on what works in the real world—not marketing theory. Every strategy is built around actual business outcomes."
                },
                {
                  icon: <Users size={32} />,
                  title: "Clear Communication",
                  description: "No jargon, no confusion. We explain everything in simple language so you know exactly what you're getting."
                },
                {
                  icon: <Shield size={32} />,
                  title: "Transparent Pricing",
                  description: "Clear scope, clear costs. You know what you're paying for and what results to expect from day one."
                },
                {
                  icon: <Zap size={32} />,
                  title: "ROI-First Approach",
                  description: "We measure success in enquiries, calls, and conversions—not likes and impressions. Your growth is our priority."
                },
                {
                  icon: <Clock size={32} />,
                  title: "Fast Support",
                  description: "Quick responses, hands-on support, and a team that understands the urgency of running a small business."
                },
                {
                  icon: <Globe size={32} />,
                  title: "Local Understanding",
                  description: "We understand Indian customer behavior, local market dynamics, and what it takes to build trust in your community."
                }
              ].map((value, index) => (
                <div key={index} className={`${styles.valueCard} scroll-animate delay-${(index % 3) + 1}`}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className={styles.locations}>
          <div className={styles.container}>
            <div className={`${styles.sectionHeader} scroll-animate`}>
              <MapPin size={40} />
              <h2>We're local. And we work India-wide.</h2>
            </div>
            <div className={styles.locationsGrid}>
              {[
                { city: "Pune", area: "Viman Nagar (Airport Road)", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&h=350&fit=crop" },
                { city: "Nashik", area: "Indira Nagar (Rathchakra)", image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=500&h=350&fit=crop" },
                { city: "Ahilya Nagar", area: "(Ahmednagar)", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=500&h=350&fit=crop" },
                { city: "Navi Mumbai", area: "Serving local businesses", image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=500&h=350&fit=crop" }
              ].map((location, index) => (
                <div key={index} className={`${styles.locationCard} scroll-animate delay-${(index % 2) + 1}`}>
                  <div className={styles.locationImage}>
                    <img src={location.image} alt={location.city} />
                  </div>
                  <div className={styles.locationInfo}>
                    <h3>{location.city}</h3>
                    <p>{location.area}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className={`${styles.indiaWide} scroll-animate`}>Serving businesses across India</p>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.cta}>
          <div className={styles.container}>
            <div className={`${styles.ctaBox} scroll-animate`}>
              <h2>Let's build your digital presence together</h2>
              <p>
                Whether you need a website, social media management, or complete digital marketing—we're here to help you
                grow with practical solutions and clear execution.
              </p>
              <div className={styles.ctaButtons}>
                <button
                  className={styles.ctaPrimary}
                  onClick={() => handleWhatsAppClick("Hi TechVishwa, I'd like to learn more about your services.")}
                >
                  <MessageCircle size={20} />
                  Talk to TechVishwa
                </button>
                <Link to="/contact" className={styles.ctaSecondary}>
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
