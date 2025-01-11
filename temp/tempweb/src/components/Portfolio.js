import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [text, setText] = useState('');
  const [showContent, setShowContent] = useState(false);
  const fullName = 'Naman Sharma';
  
  // Social links data
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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Console Header */}
        <div className="font-mono text-4xl text-indigo-500">
          <div className="flex items-start">
            <span>&gt;&nbsp;</span>
            <div className="relative">
              {text}
              <span className="absolute ml-1 -mt-1 opacity-75 animate-[blink_1s_step-end_infinite]">▋</span>
            </div>
          </div>
        </div>

        {/* Introduction */}
        <div className={`text-gray-700 space-y-4 transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <p>I am a web developer at MemSQL. My passion is building simple, beautiful user experiences.</p>
          <p>
            Check out my{' '}
            <a href="#projects" className="text-indigo-500 hover:text-indigo-600 transition-colors">
              side-projects
            </a>{' '}
            below.
          </p>
        </div>

        {/* Terminal Window */}
        <div className={`bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          {/* Terminal Header */}
          <div className="bg-gray-800 p-2 flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono space-y-6 text-sm">
            {/* Location */}
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
                "namansharma18899"
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
                "NamanSharma.pdf"
              </a>
            </div>

            {/* Interests */}
            <div className="text-gray-200">
              <span className="text-indigo-300">&gt; Naman.interests</span>
              <div className="relative">
                <span className="absolute ml-1 text-gray-300 animate-[blink_1s_step-end_infinite]">▋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;