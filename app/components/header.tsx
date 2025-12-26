import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet/sheet";
import styles from "./header.module.css";
import { useState } from "react";

const PHONE_NUMBER = "+919404006526";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi TechVishwa, I'd like to discuss my business requirements.");
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${message}`, "_blank");
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Servicessx" },
    { to: "/stories", label: "Our Stories" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          TechVishwau
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button onClick={handleWhatsAppClick} className={styles.ctaButton}>
            Talk to TechVishwa
          </Button>
        </nav>

        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className={styles.mobileMenuButton}>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <nav className={styles.navMobile}>
              <ul className={styles.navLinks}>
                {navItems.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className={styles.navLink} onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button onClick={handleWhatsAppClick}>Talk to TechVishwa</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
