import React from 'react'
import Header from '../components/Header'
import './Designs.css'
import citytips1 from '../components/img/citytips1.png'
import citytips2 from '../components/img/citytips2.png'



const Designs = () => {
    return (
        <div className='designs'>
            <Header />
            <section className='personal' id="personal">
                <div class="container">
                    <div class="row">
                        <h2>
                            <p>
                                Designs                                <br></br>
                            </p>
                        </h2>
                        <p>
                            <br></br>
                            <i>I am clearly not a designer although I thought it
                                would be fun to share a old design.
                               <br></br>
                                The only designs I created
                            is my website and a personal travel blog design.
                          
                            Fun fact: Yes I've been to Dubai all by myself ;)
                            </i>                       </p>
                       <img src={citytips1} alt="" width="500px" height="300px"/>
                        <img src={citytips2} alt="" width="500px" height="300px"/>
                    </div>

                </div>
            </section >
        </div >


    )
}

export default Designs