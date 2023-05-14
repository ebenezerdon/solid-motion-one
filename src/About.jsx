import { Motion } from '@motionone/solid'
import styles from './App.module.css'

const About = () => {
  return (
    <Motion animate={{ opacity: [0, 1] }}>
      <h1 class={styles.About}>About us!</h1>
    </Motion>
  )
}

export default About
