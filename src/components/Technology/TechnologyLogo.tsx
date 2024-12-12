import Image from "next/image";

interface TechnologyLogoProps {
  name: string;
  logoUrl: string;
  websiteUrl: string;
}

const TechnologyLogo = ({ name, logoUrl, websiteUrl }: TechnologyLogoProps) => (
  <a
    href={websiteUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="w-32 h-32 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 p-2 cursor-pointer"
    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
    title={`Visit ${name} website`}
  >
  <Image
      src={logoUrl}
      alt={`${name} logo`}
      width={128} // Seems these get overridden anyway...
      height={128}
      style={{ objectFit: "contain" }}
    />
  </a>
);

export default TechnologyLogo;
