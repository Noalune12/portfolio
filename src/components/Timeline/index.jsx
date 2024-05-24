import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './style.scss';


const WorkIcon = () => <></>;

export default function Timeline () {
  return (
    <div className="timeline">
        <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#f5f0e8', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  #f5f0e8' }}
    date="2024"
    iconStyle={{ background: '#867495', color: '#f5f0e8' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Formation Développeur Web</h3>
    <h4 className="vertical-timeline-element-subtitle">Openclassrooms, France</h4>
    <ul className="timeline-list">
        <li>Construction de site web responsive et dynamique (HTML, CSS, JS, React)</li>
        <li>Création d'Api et bases de données (NodeJS, Express, MongoDB)</li>
        <li>Optimisation de performances et SEO</li>
        <li>Gestion de projet web de A Z</li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#f5f0e8', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  #f5f0e8' }}
    date="2019 - 2024"
    iconStyle={{ background: '#867495', color: '#f5f0e8' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Chef de projets événementiel</h3>
    <h4 className="vertical-timeline-element-subtitle">Lyon, France</h4>
    <ul className="timeline-list">
        <li>Gestion et coordination des projets événementiels en lien avec les clients</li>
        <li>Création et développement de jeux et formations digitales (Articulate Sotryline)</li>
        <li>Gestion de site internet d'une agence d'événementiel (Wordpress)</li>
    </ul>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#f5f0e8', color: '#000000' }}
    contentArrowStyle={{ borderRight: '7px solid  #f5f0e8' }}
    date="2016 - 2019"
    iconStyle={{ background: '#867495', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Master Management et Commerce International</h3>
    <h4 className="vertical-timeline-element-subtitle">IAE Lyon 3, France et Université de Nagoya, Japon</h4>
    <ul className="timeline-list">
        <li>Gestion de projets</li>
        <li>Développement commercial international</li>
        <li>Entrepreunariat</li>
        <li>Communication</li>
    </ul>
  </VerticalTimelineElement>
</VerticalTimeline>
    
    </div>
  );
}
