import { IoLogoGithub } from "react-icons/io";
import Link from 'next/link';

const ViewGitHubButton = () => {
    return (
        <Link className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 font-medium text-emerald-900" href="https://github.com/karenz710">
            <IoLogoGithub size={24} />
        </Link>

        /*<Link className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-50 px-6  text-neutral-950" href="https://github.com/karenz710">
            <IoLogoGithub size={24}/>
        </Link>*/
    );
}

export default ViewGitHubButton;
