import React from "react";
import styles from './styles.module.scss';
import Wrapper from '../wrapper';
import myProfile from '../../assets/images/profile.jpg';

const About = () => (
  <section>
    <Wrapper tag={"img"}>
      <div className={styles.profile}>
        <img src={myProfile} alt=""></img>
      </div>
    </Wrapper>
    <Wrapper tag={"p"}>
      <div className={styles.profileTxt}>
        <span>Experienced Full Stack Web Engineer B.Sc. </span>
        <span> adept in all stages of web development.</span>
        <span>
          Knowledgeable in user interface, testing and debugging processes.
        </span>
        <span>
          Able to effectively self - manage during independent projects, as well
          as collaborate in a team setting.
        </span>
      </div>
    </Wrapper>
  </section>
);

export default React.memo(About);
