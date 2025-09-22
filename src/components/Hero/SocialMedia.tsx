import SocialCard from "./SocialCard";
import FacebookIcon from "../../assets/social/facebook.svg?react";
import LinkedinIcon from "../../assets/social/linkedin.svg?react";
import GmailIcon from "../../assets/social/gmail.svg?react";
import GitHubIcon from "../../assets/social/github.svg?react";

export default function SocialMedia() {
  return (
    <div className="flex gap-6 text-black">
      <SocialCard path="https://www.linkedin.com/in/nataliia-luibynets/">
        <LinkedinIcon className="group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>
      <SocialCard path="https://github.com/IntToLong/">
        <GitHubIcon className="group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>
      <SocialCard path="https://inttolong.github.io/Resume/">
        <FacebookIcon className="group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>
      <SocialCard path="https://mail.google.com/mail/?view=cm&fs=1&to=liubynets.nataliia@gmail.com&su=Connect%20Request&body=Hi%2C%20Nataliia%21">
        <GmailIcon className="group-hover:fill-primary-white h-5 w-5 md:h-10 md:w-10" />
      </SocialCard>
    </div>
  );
}
