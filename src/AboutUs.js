import React from 'react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <>
      <div style={{ backgroundImage: 'url(/books.jpeg)' }}>
        <h1 style={{ backgroundColor: 'antiquewhite' }} className="about-us-header">
          READING APP TEAM
        </h1>
        <div className="bios">
          <div className="bio-div">
            <img className="bios-image" src="/jeff.jpg" />
            <p className="bio-text">
              <h3 className="bio-header">Beth 📙</h3>
              Jeff Allison is a software developer based in Portland Oregon. One of his favorite
              childhood stories is Jabberwocky by Lewis Carroll.
            </p>
          </div>
          <div className="bio-div">
            <img className="bios-image" src="/jeff.jpg" />
            <p className="bio-text">
              <h3 className="bio-header">Delaney 📘</h3>
              Jeff Allison is a software developer based in Portland Oregon. One of his favorite
              childhood stories is Jabberwocky by Lewis Carroll.
            </p>
          </div>
          <div className="bio-div">
            <img className="bios-image" src="/jabberwocky.jpeg" />
            <p className="bio-text">
              <h3 className="bio-header">Jeff 📕</h3>
              Jeff Allison is a software developer in Portland Oregon.
              <br></br>A favorite childhood story of his is Jabberwocky by Lewis Carroll.
            </p>
          </div>
          <div className="bio-div">
            <img className="bios-image" src="/jeff.jpg" />
            <p className="bio-text">
              <h3 className="bio-header">Susan 📗</h3>
              Susan bio
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
