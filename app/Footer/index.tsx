'use client'

import ViewGitHubButton from "../Hero/ViewGitHubButton"
import ViewLinkedInButton from "../Hero/ViewLinkedInButton"

const Footer = () => {
    return (
        <footer className="footer footer-center items-center p-2 bg-teal-950">
            <div className="flex justify-center gap-4">
                <ViewGitHubButton />
                <ViewLinkedInButton />
            </div>
        </footer>
    );
};

export default Footer;