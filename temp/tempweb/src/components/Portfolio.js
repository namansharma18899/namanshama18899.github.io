import React, { useState, useEffect } from 'react';
import Footer from './Footer';
import PostCard from './PostCard';

const Portfolio = () => {
    const [text, setText] = useState('');
    const [showContent, setShowContent] = useState(false);
    const fullName = 'Naman Sharma';

    const contactInfo = {
        email: 'namansharma18899@gmail.com',
        linkedin: 'https://www.linkedin.com/in/namansharma18899/',
        github: 'https://github.com/namansharma18899'
    };

    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullName.length) {
                setText(fullName.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                setShowContent(true);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    const handleEmailClick = (email) => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <div className="min-h-screen" style={{ backgroundColor: '#F6F9FC' }}>
            {/* Navigation Header */}
            <nav className="absolute top-0 right-0 p-12">
                <ul className="flex space-x-12 text-gray-600">
                    <li>
                        <a href="#projects" className="hover:text-indigo-500 transition-colors">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-indigo-500 transition-colors">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href='#personal' className='hover:text-indigo-500 transition-colors'>
                            Personal Blog
                        </a>
                    </li>
                </ul>
            </nav>
            <br></br>
            <div className="max-w-5xl pt-32 px-8" style={{ marginLeft: '13rem' }}>
                {/* Console Header */}
                <div className="font-mono text-7xl text-indigo-400 font-light mb-24 flex items-start">
                    <span>&gt;&nbsp;</span>
                    <div className="relative">
                        {text}
                        <span className="absolute ml-1 -mt-1 opacity-75 animate-[blink_1s_step-end_infinite]">▋</span>
                    </div>
                </div>

                {/* Introduction */}
                <div className="flex">
                    <div
                        className={`space-y-6 transition-opacity duration-500 mb-16 text-left ${showContent ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ marginRight: '8rem' }} /* Align to the `>` character */
                    >
                        <p className="text-gray-500 text-lg">
                            I am a Software Developer currently working at{' '}
                            <a
                                href="https://www.redhat.com/en"
                                className="text-red-400 hover:text-indigo-500 transition-colors font-bold"
                            >
                                RedHat
                            </a>{' '}
                            . My passion is building scalable, robust and performant applications, playing guitar & travelling...
                        </p>
                        <p className="text-gray-500 text-lg">
                            Book a {' '}
                            <a
                                href="#projects"
                                className="text-indigo-400 hover:text-indigo-500 transition-colors font-bold"
                            >
                                call
                            </a>{' '}
                           with me. 
                        </p>
                    </div>
                </div>


                {/* Terminal Window */}
                <div className={`bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
                    {/* Terminal Header */}
                    <div className="bg-gray-100 p-2 flex items-center space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-400"></div>
                        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                        <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-6 font-mono space-y-6 text-sm">
                        {/* Location */}
                        <br></br>
                        <div className="text-gray-200">
                            <span className="text-indigo-300">&gt; Naman.currentLocation</span>
                            <br />
                            <span className="text-yellow-300">"Pune, Maharashtra 🇮🇳"</span>
                        </div>

                        {/* Contact Info */}
                        <div className="text-gray-200">
                            <span className="text-indigo-300">&gt; Naman.contactInfo</span>
                            <br />
                            <span className="text-green-300">[</span>
                            <button
                                onClick={() => handleEmailClick(contactInfo.email)}
                                className="text-green-300 hover:text-green-400 transition-colors"
                            >
                                "namansharma18899@gmail.com"
                            </button>
                            <span className="text-green-300">,{' '}</span>
                            <a
                                href={contactInfo.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-300 hover:text-green-400 transition-colors"
                            >
                                "LinkedIn"
                            </a>
                            <span className="text-green-300">,{' '}</span>
                            <a
                                href={contactInfo.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-300 hover:text-green-400 transition-colors"
                            >
                                "github"
                            </a>
                            <span className="text-green-300">]</span>
                        </div>

                        {/* Resume */}
                        <div className="text-gray-200">
                            <span className="text-indigo-300">&gt; Naman.resume</span>
                            <br />
                            <a
                                href="https://drive.google.com/file/d/1XlocFRteJkarm31GHHBr66u1LWCrmo2v/view?usp=sharing"
                                // target="https://drive.google.com/file/d/1XlocFRteJkarm31GHHBr66u1LWCrmo2v/view?usp=sharing"
                                rel="noopener noreferrer"
                                className="text-cyan-300 hover:text-cyan-400 transition-colors"
                            >
                                "NamanSharmaResume-2025.pdf"
                            </a>
                        </div>

                        {/* Interests */}
                        <div className="text-gray-200">
                            <span className="text-indigo-300">&gt; Naman.interests</span>
                            <br />
                            {/* <a 
                href="https://drive.google.com/file/d/1XlocFRteJkarm31GHHBr66u1LWCrmo2v/view?usp=sharing" 
                // target="https://drive.google.com/file/d/1XlocFRteJkarm31GHHBr66u1LWCrmo2v/view?usp=sharing"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-400 transition-colors"
              > */}
                            [Containerization, Openshift, GoLang, Python, GameDev, Music, Poetry, Performance Benchmarking]
                            {/* </a> */}
                            {/* <div className="relative">
                <span className="absolute ml-1 text-gray-300 animate-[blink_1s_step-end_infinite]">▋</span>
              </div> */}
                        </div>
                        <br></br>
                        <br></br>
                    </div>
                </div>
                <br></br>
                <br></br>
                <PostCard/>
            </div>
            <Footer/>
        </div >
    );
};

export default Portfolio;