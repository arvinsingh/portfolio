/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/abstract.jpg";

const imageAltText = "Abstract image of a wave";


/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Data Science student studying at Swansea University. I have a passion for all things artifical intellgience and machine learning. I am always looking for new and exciting projects to work on.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Exploratory data analysis",
  "Machine learning",
  "Deep learning",
  "Statistical analysis",
  "Data visualization",
  "Natural language processing",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about using artificial intelligence to help people solve problems, learn new things, and have fun. I enjoy working on challenging and diverse projects that require creativity, collaboration, and curiosity. I also like to share my knowledge and insights with others through engaging and informative conversations. One of my favorite quotes is: \
  “The most powerful tool we have as developers is automation.” - Scott Hanselman. \
  I hope this gives you a glimpse of who I am and what I do. :)";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
