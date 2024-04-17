// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Biography = ({imageUrl}) => {
  return (
    <div className='container biography'>
        <div className="banner">
            <img src={imageUrl} alt="aboutImage" />
        </div>
        <div className="banner">
            <p>Biography</p>
            <h3>Who we are</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quo architecto expedita distinctio ducimus porro? Libero et quibusdam enim iste eos similique,
                 asperiores impedit id, ab necessitatibus odio! Officia itaque ea dolor neque dolore adipisci 
                 accusamus repudiandae eligendi, minus eveniet aliquam provident hic illo, vitae doloribus repellendus
                  quo! Fuga, provident ipsa.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam eum voluptatum, velit rerum quasi illum, voluptas quae recusandae officiis neque quaerat
                 sit optio doloremque fuga exercitationem molestiae ipsa nostrum, quia nemo fugiat pariatur perferendis quibusdam?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, quidem.</p>   
            <p>Lorem, ipsum dolor.</p>  
        </div>
    </div>
  )
}

export default Biography