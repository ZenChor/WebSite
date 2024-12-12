import React from 'react';
import { theme } from '../styles/theme';

const AboutSection = () => (
  <section id="about" className="min-h-screen py-20 pt-24">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.blue }}>
        About Zenchor
      </h2>
      <p className="text-xl leading-relaxed text-center" style={{ color: theme.yellow }}>
        Zenchor was born from a simple question: How can we better share and discover music within our social circles?
        <br /><br />
        In shared spaces, choosing music often becomes a chore or falls to one person&apos;s preferences. We&apos;ve all been there – trying to remember that song recommendation from a friend, or struggling to create a playlist that everyone will enjoy.
        <br /><br />
        That&apos;s where Zenchor comes in. We automate playlist creation through intuitive, customizable rules (what we call &quot;chors&quot;) that reflect everyone&apos;s musical tastes. Beyond just playlists, Zenchor helps you curate the perfect atmosphere for any event. Hosts can set their musical preferences in advance, allowing guests to discover new venues and connect with people who share their vibe.
        <br /><br />
        Whether you&apos;re hosting a gathering or exploring new music, Zenchor transforms the way we experience and share music together.
      </p>
    </div>
  </section>
);

export default AboutSection;
