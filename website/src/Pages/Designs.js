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
                        <h3>
                            <p>
                                Designs
                            </p>
                        </h3>
                        <p>
                            <i></i>
                            Currently the only designs I created
                            is my website and a blog design.
                            I just want to share it to give a impression
                            what type of designs I created until now.
                            The blog design supposed to be a personal travel
                            blog. Fun fact: Yes I've been to Dubai all by myself ;)
                            <br></br>
                       </p>
                       <cover>
                         
                       <img src={citytips1} alt="" width="500px" height="300px"/>
                      
                       <img src={citytips2} alt="" width="500px" height="300px"/>
                      
                        </cover>



                    </div>

                </div>
            </section >
        </div >


    )
}

export default Designs