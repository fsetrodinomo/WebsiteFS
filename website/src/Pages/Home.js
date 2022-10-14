import Header from '../components/Header'
import './Home.css'
import Marucs from  '../components/img/marucs.jpg'

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <div className='cover'>
      <img src={Marucs} alt=""/>
      </div>
  </div>
  )
}


export default Home