'use client'

import ViewGitHubButton from "../Hero/ViewGitHubButton"
import ViewLinkedInButton from "../Hero/ViewLinkedInButton"

const Footer = () => {
    return (
        <footer className="footer footer-center items-center p-5 bg-teal-950">
            <div className="flex justify-center gap-4">
                <div className="text-right text-gray-300 ">
                    <p>Karen Zhao</p>
                    <p>CS @ Stony Brook University</p>
                </div>
                <div className="flex justify-center gap-4">
                    <ViewGitHubButton />
                    <ViewLinkedInButton />
                </div>
            </div>
        </footer>
    );
};

export default Footer;