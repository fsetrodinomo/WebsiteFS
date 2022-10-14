import Header from '../components/Header'
import { IoLogoGithub } from 'react-icons/io'



import './Code.css'

const Code = () => {
  return (
    <div className='code'>
      <Header />
      <section className='description' id="description">
        <button>
          <a href="https://github.com/fsetrodinomo/"> <IoLogoGithub className='gitlogo'  /></a>
        </button>
        <div class="container">
          <div className='wrapper'>
          </div>
          <div class="row">
            <h3>
              <p>
                Curious about my other projects?
                Currently I have different projects which I am working on.
                Below are the projects which I am working on:
              </p>
            </h3>

            <p>
              <br></br>

              - Python: Audio analyzer
              A dashboard for audio analysis and transcript MP3 files.
              <br></br>
              - React: TikTok clone
              A tik tok clone with a NOSQL database.
              <br></br>
              - Python: Streetfighter
              A clone of Streetfighter is a game created in PyGame.                         
              </p>
          </div>
        </div>
      </section >
    </div >

  )
}

export default Code