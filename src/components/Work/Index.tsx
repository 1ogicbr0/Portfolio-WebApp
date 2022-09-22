import styles from "./Index.module.css";
import WorkComponent from "./WorkComponent";
import Typewriter from "typewriter-effect";
import ParticlesComponent from "./Particles";

const Work: React.FC<any> = (props) => {
  let HeadingTypeWrite = (
    <Typewriter
      options={{
        strings: ["Recent Work", "My Projects"],
        cursor: " |",
        autoStart: true,
        loop: true,
      }}
    />
  );

  return (
    <>
      <div className={styles.mainIndexWork} id={props.id}>
        <div className={styles.heading}>{HeadingTypeWrite}</div>
        <WorkComponent
          title="RealEstate - Ecommerence Single Page WebApp"
          desc1="A RealEstate website, where user can view the property and real estate."
          desc2="Agent can add property on rent or on sale."
          gitLink="https://github.com/1ogicbr0/React-RealEstate-Website"
          deployLink="https://realestate-9f939.web.app"
        />
        <WorkComponent
          title="Camping WebApp - NodeJs MongoDB ExpressJs"
          desc1="Camping Website that uses CRUD feature. Users can view campus"
          desc2="Adding Camp pictures and Adding review by campers"
          gitLink="https://github.com/1ogicbr0/YelpCamp-Website"
        />
        <WorkComponent
          title="Enigma Python Software - Cryptography"
          desc1="A python program use to encrypt the message using strong encryption"
          desc2=" method. Used in World War II"
          gitLink="https://github.com/1ogicbr0/Cryptography-Enigma-Software/blob/main/Report.pdf"
          exeFile="https://github.com/1ogicbr0/Cryptography-Enigma-Software/raw/main/Enigma.exe"
        />
        <WorkComponent 
          title="HackTheBox - Write ups" 
          desc1="Coming soon..." />
        <ParticlesComponent />
      </div>
    </>
  );
};

export default Work;
