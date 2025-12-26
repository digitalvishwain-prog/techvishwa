import type { Route } from "./+types/services";
import { Link } from "react-router";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Globe, Target, Rocket, CheckCircle, MessageCircle, ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Button } from "../components/ui/button/button";
import styles from "./services.module.css";
import { useEffect, useRef } from "react";

const PHONE_NUMBER = "+919404006526";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Our Services - TechVishwa Digital Marketing" },
    {
      name: "description",
      content:
        "Website design, social media management, and complete digital marketing services for Indian small businesses. Starting at ₹6,000.",
    },
  ];
}

export default function Services() {
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
              <h1 className={styles.heroTitle}>Choose what you need today. Scale when you're ready.</h1>
              <p className={styles.heroDescription}>
                Some businesses need only a website. Some need consistent social media. Some need full marketing execution.
                TechVishwa offers structured services so you can start small and scale without confusion.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className={styles.servicesSection}>
          <div className={styles.container}>
            {/* Website Design & Development */}
            <div className={`${styles.serviceBlock} scroll-animate`}>
              <div className={styles.serviceContent}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    <Globe size={48} />
                  </div>
                  <div>
                    <h2 className={styles.serviceTitle}>Website Design & Development</h2>
                    <div className={styles.servicePrice}>Starting at ₹6,000 (one-time)</div>
                  </div>
                </div>

                <div className={styles.serviceDetails}>
                  <div className={styles.detailSection}>
                    <h3>Who it's for:</h3>
                    <ul className={styles.bulletList}>
                      <li><CheckCircle size={20} /> Businesses needing a premium online presence quickly</li>
                      <li><CheckCircle size={20} /> Brands that want enquiries and calls</li>
                      <li><CheckCircle size={20} /> Owners who want clarity, not tech jargon</li>
                    </ul>
                  </div>

                  <div className={styles.detailSection}>
                    <h3>Deliverables:</h3>
                    <ul className={styles.bulletList}>
                      <li><CheckCircle size={20} /> Mobile-friendly website structure</li>
                      <li><CheckCircle size={20} /> Fast performance setup</li>
                      <li><CheckCircle size={20} /> Enquiry flow: WhatsApp / Call buttons + contact form</li>
                      <li><CheckCircle size={20} /> Basic on-page SEO foundation</li>
                      <li><CheckCircle size={20} /> Pages and sections written to convert visitors into enquiries</li>
                    </ul>
                  </div>

                  <div className={styles.detailSection}>
                    <h3>Website types we build:</h3>
                    <div className={styles.websiteTypes}>
                      <span className={styles.typeTag}>Business Websites</span>
                      <span className={styles.typeTag}>Landing Pages</span>
                      <span className={styles.typeTag}>E-commerce Stores</span>
                    </div>
                  </div>

                  <p className={styles.note}>
                    Final pricing depends on scope, number of pages, and specific requirements.
                  </p>
                  

                </div>
              </div>
              <div className={styles.serviceVisual}>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&h=800&fit=crop" alt="Website Development" />
                <div className={styles.floatingBadge}>
                  <TrendingUp size={20} />
                  <span>Mobile-First Design</span>
                </div>
              </div>
              <div className={styles.serviceActions}>
                <Button 
                  onClick={() => handleWhatsAppClick("Hi, I'm interested in Website Design & Development services.")}
                  className={styles.actionButton}
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = `tel:${PHONE_NUMBER}`}
                  className={styles.actionButton}
                >
                  Call Now
                </Button>
              </div>
            </div>

            {/* Social Media & Graphic Design */}
            <div className={`${styles.serviceBlock} ${styles.reverse} scroll-animate`}>
              <div className={styles.serviceVisual}>
                <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=700&h=800&fit=crop" alt="Social Media Management" />
                <div className={styles.floatingBadge}>
                  <Sparkles size={20} />
                  <span>Creative Posts</span>
                </div>
              </div>
              <div className={styles.serviceActions}>
                <Button 
                  onClick={() => handleWhatsAppClick("Hi, I'm interested in Social Media & Graphic Design services.")}
                  className={styles.actionButton}
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = `tel:${PHONE_NUMBER}`}
                  className={styles.actionButton}
                >
                  Call Now
                </Button>
              </div>
              <div className={styles.serviceContent}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    <Target size={48} />
                  </div>
                  <div>
                    <h2 className={styles.serviceTitle}>Social Media & Graphic Design</h2>
                    <div className={styles.servicePrice}>Starting at ₹4,500/month</div>
                  </div>
                </div>

                <div className={styles.serviceDetails}>
                  <div className={styles.detailSection}>
                    <h3>Who it's for:</h3>
                    <ul className={styles.bulletList}>
                      <li><CheckCircle size={20} /> Businesses that need daily/regular posting</li>
                      <li><CheckCircle size={20} /> Brands struggling with consistency</li>
                      <li><CheckCircle size={20} /> Owners who want professional-looking content</li>
                    </ul>
                  </div>

                  <div className={styles.detailSection}>
                    <h3>Deliverables:</h3>
                    <ul className={styles.bulletList}>
                      <li><CheckCircle size={20} /> Regular post creatives (as per plan)</li>
                      <li><CheckCircle size={20} /> Festival & seasonal creatives</li>
                      <li><CheckCircle size={20} /> Content calendar support (basic)</li>
                      <li><CheckCircle size={20} /> Visual consistency across posts</li>
                    </ul>
                  </div>

                  <p className={styles.note}>
                    Final pricing depends on number of posts per month and content complexity.
                  </p>
                  

                </div>
              </div>
            </div>

            {/* Complete Digital Marketing */}
            <div className={`${styles.serviceBlock} scroll-animate`}>
              <div className={styles.serviceContent}>
                <div className={styles.serviceHeader}>
                  <div className={styles.serviceIcon}>
                    <Rocket size={48} />
                  </div>
                  <div>
                    <h2 className={styles.serviceTitle}>Complete Digital Marketing</h2>
                    <div className={styles.servicePrice}>Starting at ₹9,000/month</div>
                  </div>
                </div>

                <div className={styles.serviceDetails}>
                  <div className={styles.detailSection}>
                    <h3>Who it's for:</h3>
                    <ul className={styles.bulletList}>
                      <li><CheckCircle size={20} /> Businesses that want leads and sales growth</li>
                      <li><CheckCircle size={20} /> Brands entering new markets</li>
                      <li><CheckCircle size={20} /> Owners serious about ROI and tracking results</li>
                    </ul>
                  </div>

                  <div className={styles.detailSection}>
                    <h3>What's included:</h3>
                    <ul className={styles.bulletList}>
                      <li><CheckCircle size={20} /> SEO improvements</li>
                      <li><CheckCircle size={20} /> Paid advertising (Google / Meta)</li>
                      <li><CheckCircle size={20} /> Social media management</li>
                      <li><CheckCircle size={20} /> Content + basic reels support (as per plan)</li>
                    </ul>
                  </div>

                  <div className={styles.outcomeBox}>
                    <Zap size={24} />
                    <p>
                      We measure success in what matters: enquiries, calls, lead quality, store visits, and sales
                      conversations—not vanity metrics.
                    </p>
                  </div>

                  <p className={styles.note}>
                    Final pricing depends on campaign goals, ad budget, and service scope.
                  </p>
                  

                </div>
              </div>
              <div className={styles.serviceVisual}>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=800&fit=crop" alt="Digital Marketing" />
                <div className={styles.floatingBadge}>
                  <Sparkles size={20} />
                  <span>Popular Choice</span>
                </div>
              </div>
              <div className={styles.serviceActions}>
                <Button 
                  onClick={() => handleWhatsAppClick("Hi, I'm interested in Complete Digital Marketing services.")}
                  className={styles.actionButton}
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.location.href = `tel:${PHONE_NUMBER}`}
                  className={styles.actionButton}
                >
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <div className={`${styles.ctaBox} scroll-animate`}>
              <h2>Not sure which service you need?</h2>
              <p>
                Share your business details and goals. We'll recommend the right starting point based on what will actually
                bring results.
              </p>
              <div className={styles.ctaButtons}>
                <button
                  className={styles.ctaPrimary}
                  onClick={() => handleWhatsAppClick("Hi, I need help choosing the right service for my business.")}
                >
                  <MessageCircle size={20} />
                  Get Consultation
                </button>
                <Link to="/contact" className={styles.ctaSecondary}>
                  Request a Quote
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.faqSection}>
          <div className={styles.container}>
            <div className={`${styles.faqHeader} scroll-animate`}>
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className={styles.faqGrid}>
              {[
                {
                  question: "Do you provide content writing?",
                  answer: "Yes—basic content for websites and captions can be included depending on plan."
                },
                {
                  question: "Can I start only with website and add marketing later?",
                  answer: "Yes. Many businesses start with website, then add social/ads when they're ready to scale."
                },
                {
                  question: "What industries do you work with?",
                  answer: "Retail, food, services, coaching, logistics, local brands, and more. We work with any business that needs a strong digital presence."
                },
                {
                  question: "Do you work outside Maharashtra?",
                  answer: "Yes. We have Maharashtra presence and serve businesses across India remotely."
                },
                {
                  question: "How do you track results?",
                  answer: "Enquiries, calls, form fills, lead quality, and campaign performance. We focus on metrics that matter to your business growth."
                },
                {
                  question: "What budget is good for ads?",
                  answer: "Depends on category and city—share details and we suggest a practical plan that fits your goals and market."
                }
              ].map((faq, index) => (
                <div key={index} className={`${styles.faqItem} scroll-animate delay-${(index % 3) + 1}`}>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
