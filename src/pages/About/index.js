import PostTemplate from "components/PostTemplate";
import coverImage from "assets/about_me_cover.png"
import styles from "./About.module.css"

const About = () => {
  return(
    <PostTemplate
      title="About"
      coverImage={coverImage}
    >
      <h3 className={styles.subtitle}>Hi, I am Lucas!</h3>

      <p className={styles.paragraph}>
        Well, I'm Lucas, I'm 31 years old, I live in São Paulo, Brazil, with my girlfriend, and I have a degree in Information Systems. Outside of work, I enjoy cycling and drawing quite a bit.
      </p>

      <p className={styles.paragraph}>
        I began my career in technology back in college, working as a tester, as QA. In my first job, I was mainly responsible for creating and reviewing software testing documents, such as performance testing strategy documents. Additionally, I started creating performance testing scripts.
      </p>

      <p className={styles.paragraph}>
        Working with those testing scripts it's when I saw an opportunity because since I started my studies, my goal was to become a programmer. While working as QA, I found that working with writing automated test scripts was a good way to keep myself closer to the code itself.
      </p>

      <p className={styles.paragraph}>
        After my first company, I joined Inmetrics. At Inmetrics, my focus was on creating, reviewing, and executing automated test scripts for Android and iOS applications using the Ruby language. With the experience I gained at Inmetrics, I felt comfortable enough to start looking for a programmer position. Since then, I've been working as back-end developer using technologies such as Ruby on Rails, RSpec, Docker, Git/Github, MySQL, Postman, CodeFresh, PostgreSQL, MongoDB, RabbitMQ, Redis and SCRUM and Kanban as methodologies.
      </p>
    </PostTemplate>
  )
}

export default About;