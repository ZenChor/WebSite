import React from 'react';
import FormInput from './FormInput';
import { theme } from '../styles/theme';

const ContactForm = () => (
  <form className="space-y-6">
    <FormInput label="Name" type="text" />
    <FormInput label="Email" type="email" />
    <FormInput label="Message" type="textarea" />
    <div className="text-center">
      <button
        type="submit"
        className="px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
        style={{
          background: theme.gradients.blueToGreen,
          color: theme.background
        }}
      >
        Send Message
      </button>
    </div>
  </form>
);

export default ContactForm;
