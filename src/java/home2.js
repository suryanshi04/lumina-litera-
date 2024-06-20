import React, { useEffect, useState } from 'react';

const Home2 = () => {
    const [text, setText] = useState('');
    const words = ["Love", "like Art", "the Future", "Everything"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    useEffect(() => {
        const typeEffect = () => {
            const currentWord = words[wordIndex];
            const currentChar = isDeleting ? currentWord.substring(0, charIndex - 1) : currentWord.substring(0, charIndex + 1);
            setText(currentChar);
            if (!isDeleting && charIndex === currentWord.length) {
                setTimeout(() => {
                    isDeleting = true;
                    typeEffect();
                }, 1000);
            } else if (isDeleting && charIndex === 0) {
                setTimeout(() => {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                    typeEffect();
                }, 500);
            } else {
                setTimeout(() => {
                    charIndex = isDeleting ? charIndex - 1 : charIndex + 1;
                    typeEffect();
                }, isDeleting ? 100 : 200);
            }
        };

        typeEffect();
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <h1>
            <span>{text}</span>
        </h1>
    );
};

export default Home2;
