import "./Skills.css";
import { getSkillIcon } from "../../utils/skillIcons";
import { useApiList } from "../../hooks/useApiList";

function Skills() {
  const { items: skills, loading } = useApiList("/skills");

  if (loading) return null;
  if (skills.length === 0) return null;

  return (
    <section id="skills" className="skills">
      <div className="skills-title">
        <span>My Expertise</span>
        <h2>Skills</h2>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <div
            className="skill-card"
            key={skill._id}
            style={{ "--skill-color": skill.color }}
          >
            <div
              className="skill-circle"
              style={{
                background: `conic-gradient(${skill.color} ${skill.percentage * 3.6}deg, #1f2937 0deg)`,
              }}
            >
              <div className="inner-circle">
                <div className="skill-icon" style={{ color: skill.color }}>
                  {getSkillIcon(skill.icon)}
                </div>
              </div>
            </div>
            <h3>{skill.name}</h3>
            <span className="skill-percent" style={{ color: skill.color }}>
              {skill.percentage}%
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
