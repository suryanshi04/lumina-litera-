import React, { useEffect, useState } from 'react';
import '../Styles/Home.css';
import stuImage from './stu.png';
import girlImage from './girl.png';

const Home = () => {
    const [text, setText] = useState('');
    const words = [" Full Stack Developer", " Student", " Designer", " Human"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    useEffect(() => {
        const typeEffect = () => {
            const currentWord = words[wordIndex];
            setText(prevText => {
                if (!isDeleting) {
                    return currentWord.substring(0, charIndex + 1);
                } else {
                    return currentWord.substring(0, charIndex);
                }
            });
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
      <div>
        <div className="home-container">
            <div className="content">
                <h1>Hey!</h1>
                <h2><span className='ani2'>Suryanshi Sharma</span> this side.</h2>
                <h2 className='ani'>I am <span>{text}</span> </h2>
            </div>
            <div className="image-container">
                <img src={stuImage} alt="Student" className="student-image" />
            </div>
        </div>
        <div className='home-container'>
          <div className='content1'>
            <p className='he'>
              Let me <span className='ani2'>INTRODUCE</span> myself
            </p>
            <p className='bee'>I began my programming journey as a hobby, and now it's shaping my future.</p>
            <p className='be'>Proficient in foundational languages like <span className='ani2'>Python, C++, and Java.</span></p>
            <p className='be'> I'm keen on exploring <span className='ani2'>Website technologies and developing innovative products.</span></p>
            <p className='be'>I am a student of <span className='ani2'>B.Tech Computer Science</span> from <span className='ani2'>Bennett University</span> and currently in my <span className='ani2'>3rd year.</span></p>
            </div>
            <div className="image-container">
                <img src={girlImage} alt="Student" className="student-image" />
                </div>
            
            </div>

         <p className='hee'>FIND ME ON</p>   
         <p className='co'>Feel free to <span className='ani2'>connect</span> with me</p>
         <center>
         <a href="https://github.com/suryanshi04" target="_blank" rel="noopener noreferrer">
         <div class="button-icon">
         <div class="icon">
         <svg viewBox="0 0 24 24">
         <path
          d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z"
          fill="#222229"
        ></path>
         </svg>
        </div>
        <div class="cube"> 
         <span class="side front">GitHub</span>
         <span class="side top">suryanshi04</span>
    </div>
  </div>
</a>

<a href="https://www.linkedin.com/in/suryanshi-sharma-bbb806249/" target="_blank" rel="noopener noreferrer">
  <div class="button-icon2">
    <div class="icon">
    <svg viewBox="0 0 24 24" fill="#0077B5">
  <path d="M22.125 0h-20.25c-1.242 0-2.125 0.883-2.125 2.125v20.25c0 1.242 0.883 2.125 2.125 2.125h20.25c1.242 0 2.125-0.883 2.125-2.125v-20.25c0-1.242-0.883-2.125-2.125-2.125zM7.875 20.813h-3.563v-11.25h3.563v11.25zM5.094 8.625c-0.84 0-1.406-0.539-1.406-1.219s0.547-1.219 1.406-1.219c0.844 0 1.406 0.539 1.406 1.219s-0.563 1.219-1.406 1.219zM20.813 20.813h-3.563v-5.813c0-1.375-0.484-2.313-1.688-2.313s-1.969 0.938-1.969 2.313v5.813h-3.563v-11.25h3.281v1.547h0.047c0.453-0.859 1.562-1.766 3.234-1.766 2.734 0 5.125 1.781 5.125 5.672v6.797z"></path>
</svg>

    </div>
    <div class="cube">
      <span class="side front2">LinkedIn</span>
      <span class="side top2">Suryanshi Sharma</span>
    </div>
  </div>
</a>

<a href="https://www.instagram.com/suryanshi.18/" target="_blank" rel="noopener noreferrer">
  <div class="button-icon3">
    <div class="icon">
      <svg viewBox="0 0 24 24" fill="#E4405F">
        <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.206.056 2.022.248 2.686.513a5.377 5.377 0 0 1 1.95 1.24 5.378 5.378 0 0 1 1.24 1.95c.265.664.457 1.48.513 2.686.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.056 1.206-.248 2.022-.513 2.686a5.378 5.378 0 0 1-1.24 1.95 5.377 5.377 0 0 1-1.95 1.24c-.664.265-1.48.457-2.686.513-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.206-.056-2.022-.248-2.686-.513a5.378 5.378 0 0 1-1.95-1.24 5.377 5.377 0 0 1-1.24-1.95c-.265-.664-.457-1.48-.513-2.686-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.056-1.206.248-2.022.513-2.686a5.378 5.378 0 0 1 1.24-1.95 5.378 5.378 0 0 1 1.95-1.24c.664-.265 1.48-.457 2.686-.513 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.257 0-3.667.013-4.947.072-1.272.058-2.144.265-2.884.568a7.393 7.393 0 0 0-2.688 1.772 7.39 7.39 0 0 0-1.772 2.688c-.303.74-.51 1.612-.568 2.884-.059 1.28-.072 1.69-.072 4.947s.013 3.667.072 4.947c.058 1.272.265 2.144.568 2.884a7.39 7.39 0 0 0 1.772 2.688 7.392 7.392 0 0 0 2.688 1.772c.74.303 1.612.51 2.884.568 1.28.059 1.69.072 4.947.072s3.667-.013 4.947-.072c1.272-.058 2.144-.265 2.884-.568a7.392 7.392 0 0 0 2.688-1.772 7.39 7.39 0 0 0 1.772-2.688c.303-.74.51-1.612.568-2.884.059-1.28.072-1.69.072-4.947s-.013-3.667-.072-4.947c-.058-1.272-.265-2.144-.568-2.884a7.39 7.39 0 0 0-1.772-2.688 7.392 7.392 0 0 0-2.688-1.772c-.74-.303-1.612-.51-2.884-.568-1.28-.059-1.69-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.295 0-4.162-1.867-4.162-4.162s1.867-4.162 4.162-4.162 4.162 1.867 4.162 4.162-1.867 4.162-4.162 4.162zm6.406-11.845a1.44 1.44 0 1 1 0-2.881 1.44 1.44 0 0 1 0 2.881z"></path>
</svg>

    </div>
    <div class="cube">
      <span class="side front3">Instagram</span>
      <span class="side top3">Suryanshi.18</span>
    </div>
  </div>
</a>

<a href="https://www.buymeacoffee.com/suryanshi.18" target="_blank" rel="noopener noreferrer">
        <div className="button-icon4">
          <div className="icon">
            <svg viewBox="0 0 24 24" fill="#FFDD00">
              <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.206.056 2.022.248 2.686.513a5.377 5.377 0 0 1 1.95 1.24 5.378 5.378 0 0 1 1.24 1.95c.265.664.457 1.48.513 2.686.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.056 1.206-.248 2.022-.513 2.686a5.378 5.378 0 0 1-1.24 1.95 5.377 5.377 0 0 1-1.95 1.24c-.664.265-1.48.457-2.686.513-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.206-.056-2.022-.248-2.686-.513a5.378 5.378 0 0 1-1.95-1.24 5.377 5.377 0 0 1-1.24-1.95c-.265-.664-.457-1.48-.513-2.686-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.056-1.206.248-2.022.513-2.686a5.378 5.378 0 0 1 1.24-1.95 5.378 5.378 0 0 1 1.95-1.24c.664-.265 1.48-.457 2.686-.513 1.265-.058 1.645-.07 4.849-.07zm0-2.163c-3.257 0-3.667.013-4.947.072-1.272.058-2.144.265-2.884.568a7.393 7.393 0 0 0-2.688 1.772 7.39 7.39 0 0 0-1.772 2.688c-.303.74-.51 1.612-.568 2.884-.059 1.28-.072 1.69-.072 4.947s.013 3.667.072 4.947c.058 1.272.265 2.144.568 2.884a7.39 7.39 0 0 0 1.772 2.688 7.392 7.392 0 0 0 2.688 1.772c.74.303 1.612.51 2.884.568 1.28.059 1.69.072 4.947.072s3.667-.013 4.947-.072c1.272-.058 2.144-.265 2.884-.568a7.392 7.392 0 0 0 2.688-1.772 7.39 7.39 0 0 0 1.772-2.688c.303-.74.51-1.612.568-2.884.059-1.28.072-1.69.072-4.947s-.013-3.667-.072-4.947c-.058-1.272-.265-2.144-.568-2.884a7.39 7.39 0 0 0-1.772-2.688 7.392 7.392 0 0 0-2.688-1.772c-.74-.303-1.612-.51-2.884-.568-1.28-.059-1.69-.072-4.947-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.295 0-4.162-1.867-4.162-4.162s1.867-4.162 4.162-4.162 4.162 1.867 4.162 4.162-1.867 4.162-4.162 4.162zm6.406-11.845a1.44 1.44 0 1 1 0-2.881 1.44 1.44 0 0 1 0 2.881z"></path>
            </svg>
          </div>
          <div className="cube">
            <span className="side front4">Buy Me a Coffee</span>
            <span className="side top4">Suryanshi.18</span>
          </div>
        </div>
      </a>
      </center>
<br/>
<br/>
</div>
    );
};

export default Home;
