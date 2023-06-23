import Link from "next/link";
import { IconButton } from "../ui";
import LinkedInLogo from "../Icons/LinkedInLogo";
import GitHubIcon from "../Icons/GitHubIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import EmailIcon from "../Icons/EmailIcon";

export default () => {
  return (
    <>
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/abhishek-y-71743b202/"}
      >
        <IconButton variant="standard">
          <LinkedInLogo />
        </IconButton>
      </Link>
      <Link target="_blank" href={"https://github.com/abhishek-yanjarappa"}>
        <IconButton variant="standard">
          <GitHubIcon />
        </IconButton>
      </Link>
      <Link target="_blank" href={"https://twitter.com/@_abhyi"}>
        <IconButton variant="standard">
          <TwitterIcon />
        </IconButton>
      </Link>
      <Link target="_blank" href={"mailto:abhishekyanjarappa@gmail.com"}>
        <IconButton variant="standard">
          <EmailIcon />
        </IconButton>
      </Link>
    </>
  );
};
