import React from 'react';
import './About.css'; // Import the CSS for the About page

const About = () => {
  return (
    <div id="about" className="about-container">
      <h3>About Us 👀</h3>
      <div className="about-content">
        <div className="about-text">
            <p>
              Welcome to ALL NEWS, your ultimate destination for staying informed and connected with the world. We're dedicated to bringing you the latest news, headlines, and updates from around the globe, all in one convenient place. Whether you’re looking for breaking news, in-depth analyses, or just want to browse today’s top stories, we’ve got you covered.
              <br></br>
              Our Mission
              <br></br>
              At ALL NEWS, we believe in the power of information. Our mission is to provide fast, accurate, and unbiased news from trusted sources, ensuring you're always in the know. With our user-friendly platform, you can explore a diverse range of news categories, including politics, technology, entertainment, sports, business, health, and more.
              <br></br>
              What We Offer
              <br></br>

              Comprehensive Coverage: Access news stories from multiple sources to gain a well-rounded perspective.

              Live Updates: Stay ahead with real-time updates on breaking news and trending topics.

              E-Newspapers: Browse and read your favorite newspapers digitally, all in one place.

              Personalized Experience: Customize your feed to follow the topics and publications you care about most.

              With so much information available online, it can be overwhelming to find trustworthy and relevant news. At ALL NEWS, we've partnered with NewsAPI to curate credible stories from reliable publishers, so you can stay informed without the noise. Our platform is designed to save you time and make news consumption seamless.
              <br></br>
              Join Our Community
              <br></br>
              We're more than just a news website - we're a community of curious minds who value staying informed. Follow us on social media, subscribe to our newsletter, or simply bookmark our site to stay updated. Together, let's navigate the ever-changing world of news and knowledge.
              <br></br><br></br>
              Thank you for choosing ALL NEWS. We're excited to be your trusted news companion.
          </p>
        </div>
        <div className="about-image">
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4i-Vl63m6yHQc3UA2OctHkeYZLkTb0l3p_g&s" 
            alt="About Us" 
            className="img-fluid rounded" 
            />
        </div>

      </div>
    </div>
  );
};

export default About;
