import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const ViewLinkedInButton = () => {
    return (
        <Link className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-50 px-6  text-neutral-950" href="https://www.linkedin.com/in/karen-zhao-46166b2a4/">
            <FaLinkedin size={24}/>
        </Link>
    );
}

export default ViewLinkedInButton;
