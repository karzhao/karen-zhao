import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const ViewLinkedInButton = () => {
    return (
        <Link className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-200 font-medium text-emerald-900" href="https://www.linkedin.com/in/karen-zhao-46166b2a4/">
            <FaLinkedin size={24} />
        </Link>
    );
}

export default ViewLinkedInButton;
