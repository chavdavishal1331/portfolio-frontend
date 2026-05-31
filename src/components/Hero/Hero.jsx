import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import { useProfile } from "../../hooks/useProfile";
import ProfileImage from "../ProfileImage";
import { getImageUrl } from "../../utils/imageUrl";
import { downloadFile } from "../../utils/downloadFile";

const defaultRoles = [
  "MERN Stack Developer",
  2000,
  "Full Stack Developer",
  2000,
  "React Developer",
  2000,
];

function Hero() {
  const { profile, ready } = useProfile();

  const roles =
    profile?.roles?.length > 0
      ? profile.roles.flatMap((r) => [r, 2000])
      : defaultRoles;

  const handleDownload = () => {
    if (!profile?.resume) return;
    const name = profile.name
      ? `${profile.name.replace(/\s+/g, "_")}_Resume.pdf`
      : "Resume.pdf";
    downloadFile(getImageUrl(profile.resume, profile.updatedAt), name);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <span className="hello">Hello, I'm</span>
        <h1 className="hero-name">{profile?.name || "Vishal Chavda"}</h1>

        <TypeAnimation
          sequence={roles}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="hero-role"
        />

        <p>
          {profile?.shortBio ||
            "Passionate Full Stack Developer specializing in React.js, Node.js, Express.js, and MongoDB. I enjoy building modern, scalable, and responsive web applications."}
        </p>

        <div className="hero-buttons">
          <a href="#contact" className="primary-btn">Hire Me</a>
          {profile?.resume ? (
            <button type="button" className="outline-btn" onClick={handleDownload}>
              Download CV
            </button>
          ) : (
            <button type="button" className="outline-btn" disabled>
              Download CV
            </button>
          )}
        </div>
      </div>

      <div className="hero-right">
        <div className="purple-circle"></div>
        <div className="purple-ring"></div>
        <div className="dots-pattern"></div>
        <div className="profile-photo-wrap hero-profile">
          <ProfileImage
            profile={profile}
            ready={ready}
            className="hero-profile-img"
            alt="profile"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
