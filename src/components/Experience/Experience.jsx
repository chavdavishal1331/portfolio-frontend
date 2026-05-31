import "./Experience.css";
import { useApiList } from "../../hooks/useApiList";

function Experience() {
  const { items: experience, loading } = useApiList("/experience");

  if (loading) return null;
  if (experience.length === 0) return null;

  return (
    <section id="experience" className="experience">
      <div className="experience-title">
        <span>My Journey</span>
        <h2>Experience</h2>
      </div>

      <div className="timeline">
        {experience.map((item) => (
          <div className="timeline-item" key={item._id}>
            <div
              className="timeline-dot"
              style={{
                background: item.color,
                boxShadow: `0 0 20px ${item.color}`,
              }}
            ></div>
            <div className="timeline-content" style={{ "--company-color": item.color }}>
              <h3>{item.role}</h3>
              <h4 style={{ color: item.color }}>{item.company}</h4>
              <p className="experience-year">{item.year}</p>
              <span
                className="experience-duration"
                style={{
                  color: item.color,
                  borderColor: item.color,
                  backgroundColor: `${item.color}20`,
                }}
              >
                Duration: {item.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
