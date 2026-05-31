import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFirebase,
  SiMysql,
} from "react-icons/si";

const iconMap = {
  FaHtml5: <FaHtml5 />,
  FaCss3Alt: <FaCss3Alt />,
  FaJs: <FaJs />,
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  FaGitAlt: <FaGitAlt />,
  FaPython: <FaPython />,
  FaJava: <FaJava />,
  SiMongodb: <SiMongodb />,
  SiExpress: <SiExpress />,
  SiBootstrap: <SiBootstrap />,
  SiTailwindcss: <SiTailwindcss />,
  SiNextdotjs: <SiNextdotjs />,
  SiTypescript: <SiTypescript />,
  SiFirebase: <SiFirebase />,
  SiMysql: <SiMysql />,
};

export function getSkillIcon(name) {
  return iconMap[name] || <FaJs />;
}
