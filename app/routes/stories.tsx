import type { Route } from "./+types/stories";
import { Link } from "react-router";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ArrowRight, Target, TrendingUp, CheckCircle, MessageCircle } from "lucide-react";
import styles from "./stories.module.css";
import { useEffect, useRef } from "react";

const PHONE_NUMBER = "+919404006526";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Stories - TechVishwa Case Studies" },
    {
      name: "description",
      content:
        "Real businesses, real problems, practical digital solutions. See how TechVishwa helps Indian small businesses grow online.",
    },
  ];
}

const caseStudies = [
  {
    title: "Retail Apparel Store, Pune",
    challenge: "Heavy dependence on walk-ins and seasonal rush. Weak online presence.",
    solution: "Website + WhatsApp enquiry flow + festive campaigns.",
    outcome: "Improved festive enquiries and stronger brand recall within the local area.",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
  },
  {
    title: "Logistics & Transport, Nashik",
    challenge: "Low trust from new corporate enquiries due to no online presence.",
    solution: "Professional website + clear services + enquiry flow.",
    outcome: "Improved credibility and smoother conversion conversations.",
    category: "B2B",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop"
  },
  {
    title: "Café & Food Outlet, Ahilya Nagar",
    challenge: "Inconsistent posting, low engagement, no clear content direction.",
    solution: "Posting strategy + reels + local campaigns.",
    outcome: "Better engagement and increased weekend footfall.",
    category: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
  },
  {
    title: "Coaching Institute, Navi Mumbai",
    challenge: "Admission flow depended on referrals and offline banners.",
    solution: "Landing page + admission-season ads + enquiry form flow.",
    outcome: "More consistent admission enquiries with better intent.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop"
  },
  {
    title: "Home Services, Bengaluru",
    challenge: "Losing leads to competitors with stronger digital presence.",
    solution: "Website refresh + search visibility + local ads targeting.",
    outcome: "Better visibility and more consistent enquiries.",
    category: "Services",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop"
  },
  {
    title: "Boutique Jewellery Brand, Jaipur",
    challenge: "Strong product, weak online storytelling and consistency.",
    solution: "Brand-consistent creatives + reels + posting discipline.",
    outcome: "Better engagement and higher buyer confidence.",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&h=400&fit=crop"
  },
  {
    title: "Interior Design Studio, Hyderabad",
    challenge: "Website existed but didn't communicate value clearly.",
    solution: "Reworked messaging + project highlights + enquiry CTAs.",
    outcome: "More relevant enquiries and better client discussions.",
    category: "Professional Services",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=400&fit=crop"
  },
  {
    title: "Electronics Retailer, Indore",
    challenge: "Competition from marketplaces reduced walk-ins.",
    solution: "Local visibility + promotions + festival creatives.",
    outcome: "Increased local awareness and improved store visits during campaigns.",
    category: "Retail",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&h=400&fit=crop"
  },
  {
    title: "Professional Services Firm, Delhi NCR",
    challenge: "Low-quality leads and unclear positioning.",
    solution: "Service-focused website + better targeting + controlled budget.",
    outcome: "Fewer but higher-intent enquiries.",
    category: "Professional Services",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
  },
];

export default function Stories() {
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
              <h1 className={styles.heroTitle}>Stories that sound like real business—because they are.</h1>
              <p className={styles.heroDescription}>
                Each project starts with a simple question: "What will actually move the needle?" Then we build the website,
                content, or marketing system around that.
              </p>
            </div>
          </div>
        </section>

        {/* Stories Grid */}
        <section className={styles.storiesSection}>
          <div className={styles.container}>
            <div className={styles.storiesGrid}>
              {caseStudies.map((study, index) => (
                <div key={index} className={`${styles.storyCard} scroll-animate delay-${(index % 3) + 1}`}>
                  <div className={styles.storyImage}>
                    <img src={study.image} alt={study.title} />
                    <div className={styles.categoryBadge}>{study.category}</div>
                  </div>
                  <div className={styles.storyContent}>
                    <h3 className={styles.storyTitle}>{study.title}</h3>

                    <div className={styles.storySection}>
                      <div className={styles.sectionIcon}>
                        <Target size={18} />
                      </div>
                      <div>
                        <h4>Challenge</h4>
                        <p>{study.challenge}</p>
                      </div>
                    </div>

                    <div className={styles.storySection}>
                      <div className={styles.sectionIcon}>
                        <ArrowRight size={18} />
                      </div>
                      <div>
                        <h4>What we did</h4>
                        <p>{study.solution}</p>
                      </div>
                    </div>

                    <div className={styles.outcome}>
                      <div className={styles.sectionIcon}>
                        <TrendingUp size={18} />
                      </div>
                      <div>
                        <h4>Outcome</h4>
                        <p>{study.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`${styles.closingSection} scroll-animate`}>
              <CheckCircle size={32} />
              <p>
                Every business is different. Our approach stays the same—understand the problem, apply the right digital
                tools, and focus on outcomes that matter.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={`${styles.ctaBox} scroll-animate`}>
              <h2>Ready to write your success story?</h2>
              <p>
                Tell us about your business challenges. We'll show you how digital marketing can help you grow—with clear
                pricing and practical execution.
              </p>
              <div className={styles.ctaButtons}>
                <button
                  className={styles.ctaPrimary}
                  onClick={() => handleWhatsAppClick("Hi, I want to discuss how you can help my business grow.")}
                >
                  <MessageCircle size={20} />
                  Get a Free Website & Marketing Plan
                </button>
                <Link to="/contact" className={styles.ctaSecondary}>
                  Request a Quote
                  <ArrowRight size={20} />
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
