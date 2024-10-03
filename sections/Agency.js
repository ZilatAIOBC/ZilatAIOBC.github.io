import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Turning your business ideas into smart digital products since 2001' />
              <p className='desc-p'>Nexus Digital Solutions is more than just a software services provider – we are your partners in digital innovation and success.</p>
              <TitleSm title='Our mission' />
              <p className='desc-p'>To empower businesses through cutting-edge software solutions, fostering growth and digital transformation in an ever-evolving technological landscape.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>To be the go-to agency for businesses seeking innovative, reliable, and impactful software services, recognized globally for our expertise, integrity, and client-centric approach.</p>
            </div>
          </div>
          <ul style={{color:"rgba(255, 255, 255, 0.5)"}}>
            <li><b style={{color:"#fff"}}>Excellence:</b> We pursue the highest standards in everything we do, from code quality to client communication.</li>
            <li><b style={{color:"#fff"}}>Innovation:</b> We constantly push the boundaries of what's possible, embracing new technologies and methodologies to deliver forward-thinking solutions.</li>
            <li><b style={{color:"#fff"}}>Collaboration:</b> We believe in the power of teamwork, both within our agency and in partnership with our clients.</li>
            <li><b style={{color:"#fff"}}>Integrity:</b> We operate with transparency and honesty, building trust-based relationships that stand the test of time.</li>
            <li><b style={{color:"#fff"}}>Client Success:</b> Your success is our success. We're committed to delivering solutions that drive real business results.</li>
          </ul>
          <section className='hero-sec' style={{textAlign:"left"}}>
        <div className='container'>
          <div className='heading-title'>

            <p>At Nexus Digital Solutions, our team of passionate experts brings together diverse skills in AI, web and mobile development, UI/UX design, branding, and digital marketing. This unique combination allows us to offer a comprehensive suite of services designed to meet all your digital needs. Our approach combines technical expertise with creative problem-solving, ensuring that every project we undertake not only meets but exceeds expectations.
              <br></br>
              Choose Nexus Digital Solutions for a partner that understands your unique challenges and is dedicated to helping you achieve your digital ambitions. Let's innovate together and create digital experiences that make a lasting impact.
            </p>
        </div>
        </div>
      </section>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
