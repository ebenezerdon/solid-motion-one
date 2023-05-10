import logo from './logo.svg'
import styles from './App.module.css'

const App = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>Todo app with SolidJS. Animate list items</p>
        <a class={styles.link} href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer">
          Learn Solid
        </a>
      </header>
    </div>
  )
}

export default App
