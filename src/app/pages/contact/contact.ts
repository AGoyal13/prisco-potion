import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ScrollRevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  submitted = signal(false);
  submitting = signal(false);

  form: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  subjects = [
    'Distribution Enquiry',
    'International Brand Partnership',
    'Trade / Retail Query',
    'Media & Press',
    'General Enquiry',
  ];

  contactDetails = [
    {
      icon: '📞',
      label: 'Phone',
      value: '+91 93105 17996',
      href: 'tel:+919310517996',
    },
    {
      icon: '✉️',
      label: 'Email',
      value: 'info@priscopotion.com',
      href: 'mailto:info@priscopotion.com',
    },
    {
      icon: '📍',
      label: 'Address',
      value: 'D-6/4, Okhla Industrial Area Phase II, South Delhi, New Delhi',
      href: null,
    },
  ];

  socials = [
    {
      name: 'Instagram',
      handle: '@priscopotion',
      href: 'https://instagram.com/priscopotion',
      icon: 'instagram',
    },
    {
      name: 'LinkedIn',
      handle: 'Prisco Potion Pvt. Ltd.',
      href: 'https://www.linkedin.com/company/priscopotion/',
      icon: 'linkedin',
    },
  ];

  onSubmit(): void {
    if (this.submitting()) return;
    this.submitting.set(true);
    // Simulate async — replace with real API call
    setTimeout(() => {
      this.submitting.set(false);
      this.submitted.set(true);
    }, 1200);
  }

  reset(): void {
    this.submitted.set(false);
    this.form = { name: '', email: '', phone: '', subject: '', message: '' };
  }
}
