import { Presence } from '@motionone/solid'
import { Motion } from '@motionone/solid'
import { createSignal } from 'solid-js'
import styles from './App.module.css'

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = createSignal(false)

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen())
  }

  return (
    <Motion animate={{ opacity: [0, 1] }} class={styles.Home}>
      <h1>Hello Motion One!</h1>
      <button class={styles.openButton} onClick={() => toggleModal()}>
        {modalIsOpen() ? 'Close Modal' : 'Open Modal'}
      </button>

      <Presence>
        <Show when={modalIsOpen()}>
          <Motion.div
            class={styles.Modal}
            animate={{ scale: [0, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5, ease: 'ease-in-out' }}
            exit={{
              scale: 0,
              opacity: 0,
              transition: {
                duration: 2,
                ease: 'ease-in',
              },
            }}
          >
            <div>
              <h1>Hello World!</h1>
            </div>
          </Motion.div>
        </Show>
      </Presence>
    </Motion>
  )
}

export default Home
