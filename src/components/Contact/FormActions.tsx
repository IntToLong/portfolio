import SocialCard from "../Hero/SocialCard";
import FacebookIcon from "../../assets/social/facebook.svg?react";
import LinkedinIcon from "../../assets/social/linkedin.svg?react";
import DiscordIcon from "../../assets/social/discord.svg?react";
import GitHubIcon from "../../assets/social/github.svg?react";

export default function FormActions({ clicked }: { clicked: boolean }) {
  return (
    <div className="flex flex-col justify-between gap-5 md:flex-row">
      <button
        type="submit"
        disabled={clicked}
        className="group text-primary-white bg-primary-black hover:text-primary-black hover:bg-primary-white hover:shadow-bottom flex-center disabled:text-primary-black disabled:bg-primary-white disabled:shadow-bottom relative h-14 w-[153px] cursor-pointer gap-2 rounded px-4 py-3 font-semibold transition-all active:translate-y-1 md:border-2 xl:w-44"
      >
        {clicked ? "Sending..." : "Get In Touch"}
      </button>
      <div className="flex gap-3 md:justify-evenly md:gap-5">
        <SocialCard path="https://www.linkedin.com/in/nataliia-luibynets/">
          <LinkedinIcon className="group-hover:fill-primary-white h-5 w-5" />
        </SocialCard>
        <SocialCard path="https://inttolong.github.io/Resume/">
          <FacebookIcon className="group-hover:fill-primary-white h-5 w-5" />
        </SocialCard>
        <SocialCard path="https://github.com/IntToLong/">
          <GitHubIcon className="group-hover:fill-primary-white h-5 w-5" />
        </SocialCard>
        <SocialCard path="https://discord.com/users/831960537923453008">
          <DiscordIcon className="group-hover:fill-primary-white h-5 w-5" />
        </SocialCard>
      </div>
    </div>
  );
}
