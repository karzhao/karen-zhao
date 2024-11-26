import { IoLogoGithub } from "react-icons/io";
import Link from 'next/link';

const ViewGitHubButton = () => {
    return (
        <Link className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-50 px-6  text-neutral-950" href="https://github.com/karenz710">
            <IoLogoGithub size={24}/>
        </Link>
    );
}

export default ViewGitHubButton;
