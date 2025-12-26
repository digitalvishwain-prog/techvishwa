import { Link } from "react-router";
import type { Route } from "./+types/home";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { MessageCircle, Phone, ArrowRight, CheckCircle, Sparkles, TrendingUp, Users, Zap, Globe, Rocket, Target, BarChart3 } from "lucide-react";
import styles from "./home.module.css";
import { useEffect, useRef } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TechVishwa - Digital Marketing & Website Design for Indian Small Businesses" },
    { name: "description", content: "Enterprise-level digital tools built for Indian small businesses. Website packages from ₹6,000. Social media management from ₹4,500/month. ROI-driven marketing." },
  ];
}

export default function Home() {
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

  const whatsappMessage = encodeURIComponent("Hi TechVishwa! I'm interested in learning more about your services.");
  const whatsappLink = `https://wa.me/919404006526?text=${whatsappMessage}`;

  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroBackground}>
            <div className={styles.gradientOrb1}></div>
            <div className={styles.gradientOrb2}></div>
            <div className={styles.gradientOrb3}></div>
          </div>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <div className={`${styles.badge} animate-fade-in-up`}>
                  <Sparkles size={16} />
                  <span>Built for Indian Small Businesses</span>
                </div>
                <h1 className={`${styles.heroTitle} animate-fade-in-up delay-1`}>
                  Stop Losing Customers to Competitors Who Look Bigger Online
                </h1>
                <p className={`${styles.heroSubtitle} animate-fade-in-up delay-2`}>
                  TechVishwa helps local brands and growing businesses build websites, manage social media, and run ROI-driven digital marketing—at pricing that makes sense for India.
                </p>
                <div className={`${styles.heroCta} animate-fade-in-up delay-3`}>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                    <MessageCircle size={20} />
                    Talk to TechVishwa on WhatsApp
                  </a>
                  <a href="tel:+919404006526" className={styles.ctaSecondary}>
                    <Phone size={20} />
                    Book a 15-Min Call
                  </a>
                </div>
                <div className={`${styles.proofPoints} animate-fade-in-up delay-4`}>
                  <div className={styles.proofItem}>
                    <CheckCircle size={18} />
                    <span>Website packages from ₹6,000</span>
                  </div>
                  <div className={styles.proofItem}>
                    <CheckCircle size={18} />
                    <span>Social media from ₹4,500/month</span>
                  </div>
                  <div className={styles.proofItem}>
                    <CheckCircle size={18} />
                    <span>Digital marketing from ₹9,000/month</span>
                  </div>
                  <div className={styles.proofItem}>
                    <CheckCircle size={18} />
                    <span>Multiple offices across Maharashtra</span>
                  </div>
                </div>
              </div>
              <div className={`${styles.heroIllustration} animate-fade-in-right delay-2`}>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" alt="Digital Marketing Dashboard" className={styles.floatingImage} />
                <div className={styles.floatingCard1}>
                  <TrendingUp size={24} />
                  <div>
                    <div className={styles.cardLabel}>Enquiries</div>
                    <div className={styles.cardValue}>+45%</div>
                  </div>
                </div>
                <div className={styles.floatingCard2}>
                  <Users size={24} />
                  <div>
                    <div className={styles.cardLabel}>Reach</div>
                    <div className={styles.cardValue}>12.5K</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Help Section */}
        <section className={styles.whoWeHelp}>
          <div className={styles.container}>
            <div className={`${styles.sectionHeader} scroll-animate`}>
              <h2>If you're a small business owner—this is built for you</h2>
              <p>
                Most small businesses don't need complicated marketing theory. They need practical execution: a strong website, consistent content, and campaigns that bring real enquiries. TechVishwa works best with businesses that want a reliable digital partner—not a vendor who disappears after delivery.
              </p>
            </div>
            <div className={styles.categoriesGrid}>
              {[
                { icon: <Globe size={32} />, title: "Retail Stores & Local Brands", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop" },
                { icon: <Target size={32} />, title: "Coaching Institutes & Education", image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop" },
                { icon: <Sparkles size={32} />, title: "Clinics, Salons, Home Services", image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop" },
                { icon: <Zap size={32} />, title: "Cafés, Restaurants & Food Outlets", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop" },
                { icon: <Rocket size={32} />, title: "Logistics, Manufacturing, B2B", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop" },
                { icon: <BarChart3 size={32} />, title: "Professionals: Consultants, Architects", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop" },
              ].map((category, index) => (
                <div key={index} className={`${styles.categoryCard} scroll-animate delay-${(index % 3) + 1}`}>
                  <div className={styles.categoryImage}>
                    <img src={category.image} alt={category.title} />
                  </div>
                  <div className={styles.categoryIcon}>{category.icon}</div>
                  <h3>{category.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.services}>
          <div className={styles.container}>
            <div className={`${styles.sectionHeader} scroll-animate`}>
              <h2>Everything you need to look premium online—and convert customers</h2>
            </div>
            <div className={styles.servicesGrid}>
              <div className={`${styles.serviceCard} scroll-animate delay-1`}>
                <div className={styles.serviceIcon}>
                  <Globe size={40} />
                </div>
                <div className={styles.serviceHeader}>
                  <h3>Website Design & Development</h3>
                  <div className={styles.servicePrice}>Starting at ₹6,000 (one-time)</div>
                </div>
                <ul className={styles.serviceFeatures}>
                  <li><CheckCircle size={18} /> Mobile-friendly structure</li>
                  <li><CheckCircle size={18} /> Fast performance and clean setup</li>
                  <li><CheckCircle size={18} /> WhatsApp & Call integration</li>
                  <li><CheckCircle size={18} /> Basic SEO foundation</li>
                  <li><CheckCircle size={18} /> Enquiry-focused content structure</li>
                </ul>
                <img src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop" alt="Website Development" className={styles.serviceImage} />
              </div>

              <div className={`${styles.serviceCard} ${styles.featured} scroll-animate delay-2`}>
                <div className={styles.featuredBadge}>
                  <Sparkles size={16} />
                  Popular Choice
                </div>
                <div className={styles.serviceIcon}>
                  <Target size={40} />
                </div>
                <div className={styles.serviceHeader}>
                  <h3>Social Media Management</h3>
                  <div className={styles.servicePrice}>Starting at ₹4,500/month</div>
                </div>
                <ul className={styles.serviceFeatures}>
                  <li><CheckCircle size={18} /> Instagram + Facebook creatives</li>
                  <li><CheckCircle size={18} /> Festival creatives (regional + national)</li>
                  <li><CheckCircle size={18} /> Posting support & page management</li>
                  <li><CheckCircle size={18} /> Brand consistency across posts</li>
                </ul>
                <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop" alt="Social Media" className={styles.serviceImage} />
              </div>

              <div className={`${styles.serviceCard} scroll-animate delay-3`}>
                <div className={styles.serviceIcon}>
                  <Rocket size={40} />
                </div>
                <div className={styles.serviceHeader}>
                  <h3>Complete Digital Marketing</h3>
                  <div className={styles.servicePrice}>Starting at ₹9,000/month</div>
                </div>
                <ul className={styles.serviceFeatures}>
                  <li><CheckCircle size={18} /> SEO foundation and improvements</li>
                  <li><CheckCircle size={18} /> Paid ads management (Google / Meta)</li>
                  <li><CheckCircle size={18} /> Social media + creative support</li>
                  <li><CheckCircle size={18} /> Basic reels/video support</li>
                </ul>
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" alt="Digital Marketing" className={styles.serviceImage} />
              </div>
            </div>
            <p className={`${styles.pricingNote} scroll-animate delay-4`}>
              Final pricing depends on scope, number of pages/posts, and campaign goals.
            </p>
          </div>
        </section>

        {/* Why TechVishwa Section */}
        <section className={styles.whyUs}>
          <div className={styles.container}>
            <div className={styles.whyUsContent}>
              <div className={`${styles.whyUsText} scroll-animate`}>
                <h2>Because small businesses need results—not complicated marketing talk</h2>
                <p className={styles.leadText}>
                  TechVishwa is built around one simple idea: give Indian businesses enterprise-level digital tools at affordable costs—without cutting the essentials. We combine practical strategy with fast execution so you get what matters: real enquiries, better brand perception, and improved sales conversations.
                </p>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><CheckCircle size={24} /></div>
                    <div>
                      <h4>Local Market Understanding</h4>
                      <p>We understand Indian customer behaviour and local market reality</p>
                    </div>
                  </div>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><CheckCircle size={24} /></div>
                    <div>
                      <h4>Clear & Transparent Pricing</h4>
                      <p>Clear scope with transparent pricing from day one</p>
                    </div>
                  </div>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><CheckCircle size={24} /></div>
                    <div>
                      <h4>ROI-Focused Execution</h4>
                      <p>ROI-focused execution, not vanity metrics</p>
                    </div>
                  </div>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><CheckCircle size={24} /></div>
                    <div>
                      <h4>Fast Communication</h4>
                      <p>Fast communication and hands-on support</p>
                    </div>
                  </div>
                  <div className={styles.benefitItem}>
                    <div className={styles.benefitIcon}><CheckCircle size={24} /></div>
                    <div>
                      <h4>Multi-Location Presence</h4>
                      <p>4 offices across Maharashtra with India-wide service delivery</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${styles.whyUsVisual} scroll-animate delay-2`}>
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=800&fit=crop" alt="Team Collaboration" />
                <div className={styles.statsCard}>
                  <div className={styles.statItem}>
                    <div className={styles.statValue}>100+</div>
                    <div className={styles.statLabel}>Clients Served</div>
                  </div>
                  <div className={styles.statItem}>
                    <div className={styles.statValue}>4</div>
                    <div className={styles.statLabel}>Offices in Maharashtra</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className={styles.testimonials}>
          <div className={styles.container}>
            <div className={`${styles.sectionHeader} scroll-animate`}>
              <h2>What clients like about working with us</h2>
            </div>
            <div className={styles.testimonialsGrid}>
              {[
                {
                  quote: "Website work was quick and clean. The best part was they explained everything in simple language and focused on enquiries.",
                  author: "Retail Owner",
                  location: "Pune",
                  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                },
                {
                  quote: "During festive season we needed consistency. Creatives were on time, and our page finally started looking professional.",
                  author: "Service Business",
                  location: "Nashik",
                  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                },
                {
                  quote: "We were depending only on word-of-mouth. After marketing and website setup, we started getting regular online enquiries.",
                  author: "Local Business",
                  location: "Ahilya Nagar",
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                },
                {
                  quote: "Leads became more relevant after they improved our messaging and ad targeting. No fake promises, just practical work.",
                  author: "Business Owner",
                  location: "Delhi NCR",
                  image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                },
              ].map((testimonial, index) => (
                <div key={index} className={`${styles.testimonialCard} scroll-animate delay-${(index % 2) + 1}`}>
                  <div className={styles.quoteIcon}>"</div>
                  <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                  <div className={styles.testimonialAuthor}>
                    <img src={testimonial.image} alt={testimonial.author} />
                    <div>
                      <div className={styles.authorName}>{testimonial.author}</div>
                      <div className={styles.authorLocation}>{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stories Preview Section */}
        <section className={styles.storiesPreview}>
          <div className={styles.container}>
            <div className={`${styles.sectionHeader} scroll-animate`}>
              <h2>Real businesses. Real problems. Practical digital solutions.</h2>
            </div>
            <div className={styles.storiesGrid}>
              {[
                {
                  title: "Retail Apparel Store, Pune",
                  description: "Improved festive enquiries and brand recall",
                  image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&h=350&fit=crop",
                  tag: "E-commerce"
                },
                {
                  title: "Coaching Institute, Navi Mumbai",
                  description: "Consistent admission enquiries during season",
                  image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=500&h=350&fit=crop",
                  tag: "Education"
                },
                {
                  title: "Home Services, Bengaluru",
                  description: "Better search visibility and enquiry flow",
                  image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&h=350&fit=crop",
                  tag: "Services"
                },
              ].map((story, index) => (
                <div key={index} className={`${styles.storyCard} scroll-animate delay-${index + 1}`}>
                  <div className={styles.storyImage}>
                    <img src={story.image} alt={story.title} />
                    <div className={styles.storyTag}>{story.tag}</div>
                  </div>
                  <div className={styles.storyContent}>
                    <h3>{story.title}</h3>
                    <p>{story.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={`${styles.storiesCta} scroll-animate delay-4`}>
              <Link to="/stories" className={styles.ctaLink}>
                Read More Stories
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* AI & Automation Section */}
        <section className={styles.aiSection}>
          <div className={styles.container}>
            <div className={styles.aiContent}>
              <div className={`${styles.aiVisual} scroll-animate`}>
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=700&fit=crop" alt="AI Technology" />
                <div className={styles.aiFloatingIcon}>
                  <Sparkles size={32} />
                </div>
              </div>
              <div className={`${styles.aiText} scroll-animate delay-2`}>
                <h2>Smarter execution with AI-assisted workflows</h2>
                <p className={styles.leadText}>
                  We use AI-assisted tools internally to speed up content ideation, improve consistency, and reduce turnaround time—so you get faster delivery without extra cost. The goal is simple: better output, quicker iterations, and smoother execution.
                </p>
                <div className={styles.aiFeatures}>
                  <div className={styles.aiFeature}>
                    <Zap size={24} />
                    <div>
                      <h4>Content Planning</h4>
                      <p>Idea generation and content strategy</p>
                    </div>
                  </div>
                  <div className={styles.aiFeature}>
                    <Rocket size={24} />
                    <div>
                      <h4>Faster Drafts</h4>
                      <p>Quick iterations for social creatives</p>
                    </div>
                  </div>
                  <div className={styles.aiFeature}>
                    <Target size={24} />
                    <div>
                      <h4>Campaign Testing</h4>
                      <p>Multiple variations for better results</p>
                    </div>
                  </div>
                  <div className={styles.aiFeature}>
                    <BarChart3 size={24} />
                    <div>
                      <h4>Better Messaging</h4>
                      <p>Structured website and ad copy</p>
                    </div>
                  </div>
                </div>
                <p className={styles.aiDisclaimer}>
                  We don't automate your business blindly—we use tools to support strong execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className={styles.finalCta}>
          <div className={styles.container}>
            <div className={`${styles.ctaBox} scroll-animate`}>
              <div className={styles.ctaContent}>
                <h2>Want to know what will work for your business?</h2>
                <p>
                  Tell us your business category, budget, and city. We'll suggest the best plan—website, social, ads, or a complete package—based on what will actually bring enquiries.
                </p>
                <div className={styles.ctaButtons}>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
                    <MessageCircle size={20} />
                    WhatsApp Now
                  </a>
                  <Link to="/contact" className={styles.ctaSecondary}>
                    Request Quote
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
