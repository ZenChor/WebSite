import React from 'react';
import ContactForm from './ContactForm';
import { theme } from '../styles/theme';

const ContactSection = () => (
  <section id="contact" className="min-h-screen py-20">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.purple }}>
        Get in Touch
      </h2>
      <div className="max-w-2xl mx-auto">
        <ContactForm />
      </div>
    </div>
  </section>
);

export default ContactSection;
