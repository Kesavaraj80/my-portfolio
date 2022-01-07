import "./About.css";
// import { SkillSection } from "./SkillSection";

// const skils = [html,css,js,react,redux,nodejs,mysql,mongodb];

export function About() {
  return (
    <section className="about_section">
      <div className="about_me_container">
        <h1 className="heading_1">About Me</h1>
        <p className="about_content">
          Hi Everyone, I am Kesavaraj M from Tiruppur, Tamilnadu, India.
          <br />
          My field of Interest's are building new Web Technologies and Products
          and also in areas related to UI/UX. <br />
          Whenever possible, I also apply my passion for developing products
          with Modern Javascript Frameworks like Node.js and React.js.
          <br /> I am looking forward to gain competency and exposure in Web
          development, React Native and Flutter.
        </p>
      </div>
      <div className="container">
        <h1>What I do?</h1>
        <div className="what_can_container">
          <div className="frontnend_container base">
            <h3>Frontend</h3>
            <p>
              I will develop UI With the help of ReactJs, HTML, CSS, Javascript,
              Material UI, Bootstrap and got some good exposure with REDUX
              toolkit
            </p>
          </div>
          <div className="backend_container base">
            <h3>Backend</h3>
            <p>
              For creating backend server i will use NodeJS with ExpressJS and
              also some Javascript Logics
            </p>
          </div>
          <div className="database_container base">
            <h3>Database</h3>
            <p>
              I'm familiar with couple of databases like Mongodb and mySQL. But
              i'll be using the Mongodb most of the times
            </p>
          </div>
        </div>
      </div>
      {/* <SkillSection /> */}
    </section>
    //
  );
}
