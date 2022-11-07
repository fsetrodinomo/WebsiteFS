import Header from '../components/Header'
import './Project.css'
import { IoLogoGithub } from 'react-icons/io'

const Project = () => {
  return (
    <div className='project'>
      <Header/>
      <div className='row'>
        <div className='column'>
          <h1>Portfolio website </h1>
          <div className='card'>
            This project is my first project in React.
            While searching for the ideal language to develop my website in I discovered
            React. While building this project I taught a lot about
            routing and implement a 3D model.
            The loading time is still a issue I am working on.
            Feel free to ask about the 3D model.
          </div>
          <button>React</button>
        </div>
        <div className='column'>
          <h1>Scraping script: Job </h1>
          <div className='card'>
            In this project I used Python to scrape a job website.
            The package BeautifullSoup has been used to scrape the information.
            And a Lambda function made it possible to not only search
            in titles with the exact name but also when it is not directly mentioned.
            For example the job vacancy.
          </div>
          <button>Python</button>
        </div>
        <div className='column'>
          <h1>My anime tracker</h1>
          <div className='card'>
            This project is build in Vue.js.
            I build this project to discover Vue.js and learned
            how to use a API.
          </div>
          <button>Vue.js</button>
        </div>
        <div className='columnProgress'>
          <h1>Curious ?</h1>
          <div className='gitlogo'>
            <p>
              <button>
                <a href="https://github.com/fsetrodinomo/" target="_blank"> <IoLogoGithub className='gitlogo' /></a>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project