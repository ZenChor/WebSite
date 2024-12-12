import React from 'react';
import TechnologyLogo from './TechnologyLogo';

const technologies = [
  {
    name: 'Clojure',
    logo: '/tech-logos/clojure.png',
    website: 'https://clojure.org/'
  },
  {
    name: 'Datomic',
    logo: '/tech-logos/datomic.png',
    website: 'https://www.datomic.com/'
  },
  {
    name: 'Fulcro',
    logo: '/tech-logos/fulcro.png',
    website: 'https://fulcro.fulcrologic.com/'
  },
  {
    name: 'Musicbrainz',
    logo: '/tech-logos/musicbrainz.png',
    website: 'https://musicbrainz.org/'
  },
  {
    name: 'Pathom',
    logo: '/tech-logos/pathom.svg',
    website: 'https://pathom3.wsscode.com/'
  },
  {
    name: 'Nix',
    logo: '/tech-logos/nix.png',
    website: 'https://nixos.org/'
  },
  {
    name: 'Mantine',
    logo: '/tech-logos/mantine.svg',
    website: 'https://mantine.dev/'
  },
  {
    name: 'React Native',
    logo: '/tech-logos/react-native.svg',
    website: 'https://reactnative.dev/'
  },
];

const TechnologyGrid = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
    {technologies.map((tech) => (
      <TechnologyLogo
        key={tech.name}
        name={tech.name}
        logoUrl={tech.logo}
        websiteUrl={tech.website}
      />
    ))}
  </div>
);

export default TechnologyGrid;
