import SocialCard from "./SocialCard";
import FacebookIcon from "@app/assets/social/facebook.svg?react";
import LinkedinIcon from "@app/assets/social/linkedin.svg?react";
import GmailIcon from "@app/assets/social/gmail.svg?react";
import GitHubIcon from "@app/assets/social/github.svg?react";

const socialLinks = [
  {
    path: "https://www.linkedin.com/in/nataliia-luibynets/",
    icon: LinkedinIcon,
    label: "LinkedIn"
  },
  {
    path: "https://github.com/IntToLong/",
    icon: GitHubIcon,
    label: "GitHub"
  },
  {
    path: "https://inttolong.github.io/Resume/",
    icon: FacebookIcon,
    label: "Resume"
  },
  {
    path: "https://mail.google.com/mail/?view=cm&fs=1&to=liubynets.nataliia@gmail.com&su=Connect%20Request&body=Hi%2C%20Nataliia%21",
    icon: GmailIcon,
    label: "Email"
  }
];

const iconStyles = "group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10";

export default function SocialMedia() {
  return (
    <div className="flex gap-6 text-black">
      {socialLinks.map(({ path, icon: Icon, label }) => (
        <SocialCard key={path} path={path} aria-label={label}>
          <Icon className={iconStyles} />
        </SocialCard>
      ))}
    </div>
  );
}
