import Header from '../components/Header'
import './Aboutme.css'

const Aboutme = () => {
  return (
    <div className='aboutme'>
      <Header/>
      <div>
        <section className='personal' id="personal">
            <h3>Hey guys</h3>
            <h1>My name is Fauve</h1>
            <p>I am a junior developing currently learning React. 
                Beside that i like to learn about Spline.
            </p>
        </section>
      </div>
    </div>
  )
}

export default Aboutme