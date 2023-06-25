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
        <IconButton variant="text">
          <LinkedInLogo className="w-5 h-5 text-p-5" />
        </IconButton>
      </Link>
      <Link target="_blank" href={"https://github.com/abhishek-yanjarappa"}>
        <IconButton variant="text">
          <GitHubIcon className="w-5 h-5 text-p-5" />
        </IconButton>
      </Link>
      <Link target="_blank" href={"https://twitter.com/@_abhyi"}>
        <IconButton variant="text">
          <TwitterIcon className="w-5 h-5 text-p-5" />
        </IconButton>
      </Link>
      <Link target="_blank" href={"mailto:abhishekyanjarappa@gmail.com"}>
        <IconButton variant="text">
          <EmailIcon className="w-5 h-5 text-p-5" />
        </IconButton>
      </Link>
    </>
  );
};
