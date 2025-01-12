import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const TerminalProfile = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-slate-700 rounded-lg shadow-xl overflow-hidden">
        {/* Terminal top bar */}
        <div className="bg-slate-800 px-4 py-2 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        
        {/* Terminal content */}
        <div className="p-6 font-mono text-sm space-y-4">
          <div>
            <span className="text-white">&gt; Justin.currentLocation</span>
            <div className="text-yellow-300 ml-4">"San Jose, CA"</div>
          </div>

          <div>
            <span className="text-white">&gt; Justin.contactInfo</span>
            <div className="ml-4 text-teal-300 flex items-center gap-2">
              [
              <a href="mailto:j.chi2241@gmail.com" className="hover:underline flex items-center gap-1">
                <Mail size={16} />
                "j.chi2241@gmail.com"
              </a>,
              <a href="#" className="hover:underline flex items-center gap-1">
                <Linkedin size={16} />
                "LinkedIn"
              </a>,
              <a href="#" className="hover:underline flex items-center gap-1">
                <Github size={16} />
                "github"
              </a>
              ]
            </div>
          </div>

          <div>
            <span className="text-white">&gt; Justin.resume</span>
            <div className="text-teal-300 ml-4">"justinchi.pdf"</div>
          </div>

          <div>
            <span className="text-white">&gt; Justin.interests</span>
            <div className="text-yellow-300 ml-4">["design", "basketball", "cooking", "starcraft"]</div>
          </div>

          <div>
            <span className="text-white">&gt; Justin.education</span>
            <div className="text-yellow-300 ml-4">"B.Sc. Structural Engineering - University of California, San Diego"</div>
          </div>

          <div>
            <span className="text-white">&gt; Justin.skills</span>
            <div className="text-yellow-300 ml-4">["Sass", "JavaScript", "Python", "React", "Redux", "Flask", "webpack", "git"]</div>
          </div>

          <div className="text-white">&gt; <span className="animate-pulse">█</span></div>
        </div>
      </div>
    </div>
  );
};

export default TerminalProfile;