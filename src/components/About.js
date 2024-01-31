import React from 'react'

const About = () => {
  return (
    <div>
      <div className="about">
        <div className="about__contents">
          <h1 className="about__title">About US</h1><br/>
          <h1 className="about__description">Empowering Health and Wellness: Your Trusted Partner on the Path to Well-being </h1>
        </div>
      </div>

      <section className='about_section container'>
        <div className='row'>

          <div className='col-lg-6'>
            <img className='about__image1 animate animate--count animate--fast' src='https://az505806.vo.msecnd.net/cms/7a83aefd-0794-42b3-bd73-58b3a9641c09/081e777c-8fad-4e52-96d9-1e01889a317d-lg.jpg' alt='' />
          </div>
          <div className='col-lg-6'>
            <h1 className='about_section_heading'>Our Staff</h1>
            <p className='about_section_content'>Meet our dedicated team of pharmacists and healthcare professionals, committed to providing personalized care and expert advice to ensure your well-being.
            Our team comprises experienced pharmacists with a wealth of knowledge, ready to assist you with medication management, answer your queries, and offer valuable health insights.
            At VD RESEARCH CHEM, our staff combines friendliness with compassionate care. We believe in fostering a warm environment where you feel like family.
            Rest assured, our team is well-versed in medication management. We're here to guide you through your prescriptions, potential interactions, and any concerns you may have.
            <br/><br/><ul>
              <li>Community Involvement</li>
              <li>Multilingual Support</li>
              <li>Accessible and Approachable</li>
              <li>Team Committed to Your Health Journey</li>
            </ul>
            </p>
          </div>

        </div>

      </section>

      <section className='about_section container'>
        <div className='row'>
          <div className='col-lg-6'>
            <h1 className='about_section_heading'>Our History</h1>
            <p className='about_section_content'>Founded with a vision to revolutionize healthcare accessibility, VD RESEARCH CHEM emerged as a 
            beacon of wellness in 2020. With a rich history rooted in a commitment to community health, we embarked on a journey 
            to provide a seamless and personalized pharmaceutical experience. From our humble beginnings, we have grown into a trusted healthcare 
            partner, embracing cutting-edge technology and expert care. Over the years, we've expanded our services to cater to the diverse needs of 
            our community. Our website, launched in 2024, represents a milestone in our pursuit of delivering healthcare solutions 
            at your fingertips. It has become a hub of information, offering not only a vast array of pharmaceutical products but also valuable 
            resources for health and well-being. As we continue to evolve, our dedication to your health remains unwavering. Join us on this journey 
            towards a healthier tomorrow, where VD RESEARCH CHEM is not just a destination but a trusted guide in your pursuit of well-being
            </p>
          </div>
          <div className='col-lg-6'>
            <img className='about__image2 animate animate--count animate--fast' src='https://i.pinimg.com/originals/ee/a2/fb/eea2fbe8f36fb370d58dfd82b93236bd.jpg' alt='' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
