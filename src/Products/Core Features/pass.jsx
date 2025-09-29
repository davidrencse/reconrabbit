import React, { useEffect } from 'react';
import './pass.css';
import pisImage1 from '/src/assets/images/PIS.png';
import pisImage2 from '/src/assets/images/pis 2.png';

const pass = () => {
    useEffect(() => {
    const btns = document.querySelectorAll('.pis-btn');
    const slides = document.querySelectorAll('.pis-slide');
    const img = document.getElementById('pis-img');

    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
        // remove active from all
        slides.forEach(slide => slide.classList.remove('active'));
        btns.forEach(b => b.classList.remove('active'));

        // activate selected
        slides[i].classList.add('active');
        btn.classList.add('active');

        // switch image
        if (i === 0) {
            img.src = pisImage1;
        } else {
            img.src = pisImage2;
        }
        });
    });
    }, []);


  return (
    <section className="pis-section">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pis-video-bg"
      >
        <source src="/src/assets/video/minimal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="pis-overlay">
        <div className="pis-left">
          {/* Slide 1 */}
          <div className="pis-slide active">
            <h1>The Personal<br />Intelligence System</h1>
            <p>The on-demand<br />decision-making engine</p>
          </div>

          {/* Slide 2 */}
          <div className="pis-slide">
            <h1>Real-Time<br />Problem Solving</h1>
            <p>Smarter decisions,<br />less hesitation</p>
          </div>

          {/* Pagination buttons */}
          <div className="pis-pagination">
            <button className="pis-btn active">01</button>
            <span className="pis-line" />
            <button className="pis-btn">02</button>
          </div>
        </div>

        <div className="pis-visual">
            <img id="pis-img" src={pisImage1} alt="PIS Visual" className="pis-image" />
        </div>
      </div>
    </section>
  );
};

export default pass;
