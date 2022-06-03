import React from 'react';
import './AboutUs.css';
import backgroundImg from '../src/books.jpeg';

export default function AboutUs() {
  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundImg})` }}>
        <h1 style={{ backgroundColor: 'antiquewhite' }} className="about-us-header">
          SAGE TEAM
        </h1>
        <div className="bios">
          <div className="bio-div">
            <img className="bios-image" src="/beth.png" />
            <p className="bio-text">
              <h3 className="bio-header">Beth 📙</h3>
              Beth Melesse is a software developer based in San Francisco Bay Area. One of her
              favorite childhood stories is the Giving Tree by Shel Silverstein.
            </p>
          </div>
          <div className="bio-div">
            <img className="bios-image" src="/delaney.png" />
            <p className="bio-text">
              <h3 className="bio-header">Delaney 📘</h3>
              Delaney Fogarty is a software engineer based in Portland Oregon. One of her favorite
              childhood stories is Goodnight Moon by Margaret Wise Brown.
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
            <img className="bios-image" src="/susan.png" />
            <p className="bio-text">
              <h3 className="bio-header">Susan 📗</h3>
              Susan Bird is a software engineer based in Portland Oregon. One of her favorite
              childhood stories is Charlottes Web by E.B. White.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
