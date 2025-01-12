import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
    // const text = "Welcome to my awesome animated text component that reveals words one by one";
    const text = "I am a Software Developer currently working at Red Hat. My passion is building scalable, robust and performant applications, playing guitar & travelling..."
    const text2="Book a call with me."
    const words = text.split(" ");
    const words2 = text2.split(" ");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndex2, setCurrentIndex2] = useState(0);

    useEffect(() => {
        if (currentIndex < words.length) {
            const timer = setTimeout(() => {
                setCurrentIndex(prev => prev + 1);
                setCurrentIndex2(prev => prev + 1);
            }, 80);

            return () => clearTimeout(timer);
        }
    }, [currentIndex]);

    return (
        <div
            className={`space-y-6 transition-opacity duration-500 mb-16 text-left}`}
            style={{ marginRight: '8rem' }}
        >
            <p className="text-gray-500 text-lg">
                {words.map((word, index) => (
                    <span
                        key={index}
                        className="mx-1 inline-block transition-all duration-500 ease-in-out"
                        style={{
                            opacity: index < currentIndex ? 1 : 0,
                            transform: index < currentIndex ? 'translateY(0)' : 'translateY(20px)'
                        }}
                    >
                        {word}
                    </span>
                ))}
                <span className="inline-block w-2 h-8  ml-1 animate-pulse" />
            </p>
            <p className="text-gray-500 text-lg">
                {words2.map((word, index2) => (
                    <span
                        key={index2}
                        className="mx-1 inline-block transition-all duration-500 ease-in-out"
                        style={{
                            opacity: index2 < currentIndex2 ? 1 : 0,
                            transform: index2 < currentIndex2 ? 'translateY(0)' : 'translateY(20px)'
                        }}
                    >
                        {word}
                    </span>
                ))}
                <span className="inline-block w-2 h-8  ml-1 animate-pulse" />
            </p>
        </div>
    );
};

export default AnimatedText;
