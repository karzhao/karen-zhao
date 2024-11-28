'use client'

const About = () => {
    return (
        <div id="about" style={{ scrollMarginTop: '70px' }}>
            <div>
                <h1 className="font-bold text-gray-300 text-4xl flex justify-center my-10">
                About
            </h1>
                <div className="flex flex-col items-center mx-auto w-fit">
                    <ul className="text-lg leading-loose tracking-wider text-left list-inside text-gray-300">
                        <li>Name: Karen Zhao</li>
                        <li>Location: Queens, NY 🌆</li>
                        <li>College: Stony Brook University, NY</li>
                        <li>Expected Graduation Date: May 2027</li>
                        <li>In my free time I like to:</li>
                        <ul className="leading-snug ml-20">
                            <li>Go on runs and hikes ⛅⛰️🌲🌼  </li>
                            <li>Read 📖 </li>
                            <li>Program 💻 </li>
                        </ul>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default About;