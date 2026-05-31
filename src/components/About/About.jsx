import { useEffect, useState } from "react";
import "./About.css";
import defaultProfile from "../../assets/images/profile.jpg";
import API from "../../api/axios";
import { getImageUrl } from "../../utils/imageUrl";
import { downloadFile } from "../../utils/downloadFile";

function About() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    API.get("/profile")
      .then(({ data }) => setProfile(data))
      .catch(() => {});
  }, []);

  const imageSrc = profile?.image
    ? getImageUrl(profile.image, profile.updatedAt)
    : defaultProfile;

  const handleDownload = () => {
    if (!profile?.resume) return;
    const name = profile.name
      ? `${profile.name.replace(/\s+/g, "_")}_Resume.pdf`
      : "Resume.pdf";
    downloadFile(getImageUrl(profile.resume), name);
  };

  return (
    <section id="about" className="about">
      <div className="about-title">
        <span>Get To Know</span>
        <h2>About Me</h2>
      </div>

      <div className="about-container">
        <div className="about-image">
          <div className="square square1"></div>
          <div className="square square2"></div>
          <div className="square square3"></div>
          <div className="profile-photo-wrap about-profile image-frame">
            <img
              key={profile?.updatedAt || "default-about"}
              src={imageSrc}
              alt="about"
            />
          </div>
        </div>

        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <h3>Experience</h3>
              <p>{profile?.experience || "8+ Months"}</p>
            </div>
            <div className="about-card">
              <h3>Projects</h3>
              <p>{profile?.projects || "2+ Completed"}</p>
            </div>
            <div className="about-card">
              <h3>Clients</h3>
              <p>{profile?.clients || "2+ Happy Clients"}</p>
            </div>
          </div>

          <p className="about-text">
            {profile?.description ||
              "I'm a passionate MERN Stack Developer with experience in building modern web applications using React.js, Node.js, Express.js, and MongoDB."}
          </p>

          {profile?.resume ? (
            <button type="button" className="about-btn" onClick={handleDownload}>
              Download Resume
            </button>
          ) : (
            <button type="button" className="about-btn" disabled>
              Download Resume
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;
