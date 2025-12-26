import { Link } from "react-router";
import { Menu, Phone } from "lucide-react";
import { Button } from "./ui/button/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet/sheet";
import { CallbackFormDialog } from "./callback-form-dialog";
import styles from "./header.module.css";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callbackDialogOpen, setCallbackDialogOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
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
          <Button onClick={() => setCallbackDialogOpen(true)} size="sm" className={styles.ctaButton}>
            <Phone size={16} />
            Get a Call
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
              <Button onClick={() => { setCallbackDialogOpen(true); setMobileMenuOpen(false); }}>
                <Phone size={16} />
                Get a Call
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      
      <CallbackFormDialog open={callbackDialogOpen} onOpenChange={setCallbackDialogOpen} />
    </header>
  );
}
