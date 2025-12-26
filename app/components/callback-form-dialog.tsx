import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog/dialog";
import { Button } from "./ui/button/button";
import { Input } from "./ui/input/input";
import { Textarea } from "./ui/textarea/textarea";
import { Label } from "./ui/label/label";
import { Phone } from "lucide-react";
import styles from "./callback-form-dialog.module.css";

const PHONE_NUMBER = "+919404006526";

interface CallbackFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CallbackFormDialog({ open, onOpenChange }: CallbackFormDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `*Callback Request*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message || "No message provided"}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`, "_blank");
    
    // Reset form and close dialog
    setFormData({ name: "", phone: "", message: "" });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={styles.dialogContent}>
        <DialogHeader>
          <DialogTitle className={styles.dialogTitle}>
            <Phone size={24} />
            Request a Callback
          </DialogTitle>
          <DialogDescription>
            Fill in your details and we'll get back to you within 24 hours.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formField}>
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
            />
          </div>

          <div className={styles.formField}>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div className={styles.formField}>
            <Label htmlFor="message">Message (Optional)</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your requirements..."
              rows={4}
            />
          </div>

          <Button type="submit" className={styles.submitButton}>
            Send Request
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
