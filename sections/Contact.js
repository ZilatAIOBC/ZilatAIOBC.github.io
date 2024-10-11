import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"

const Contact = () => {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();

    // Create FormData object from the form
    const formData = new FormData(event.target);

    // Extract individual fields
    const name = formData.get('name');
    const email = formData.get('email');
    const budget = formData.get('budget');
    const timeframe = formData.get('timeframe');
    const projectDetails = formData.get('projectDetails');

    // Create a formatted message
    const message = `
  Project Details: ${projectDetails}
  Time frame: ${timeframe}
  Budget: ${budget}
`;


    // Clear the existing FormData and add only name, email, and the formatted message
    const customFormData = new FormData();
    customFormData.append('name', name);
    customFormData.append('email', email);
    customFormData.append('message', message);
    customFormData.append("access_key", "6e3a9f53-ac53-4ec6-ac53-e679f6902f80");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: customFormData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>92-310-5513-669</h3>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Rawalpindi, Pakistan</h3>
                  <span>CB 1964 Noorani Mohallah Tench Bhatta, 46000</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>zilataiobc@gmail.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                {/* <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>zilataiobc@gmail.com</h3>
                  <span>Career at Nexus Digital Solutions</span>
                </div> */}
              </div>
              {/* <ul>
                <li className='icon'>
                  <BsFacebook size={25} />
                </li>
                <li className='icon'>
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
              </ul> */}
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>

              <form onSubmit={onSubmit}>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' name="name" />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' name="email" />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>your budget</span>
                    <input type='text' name="budget" />
                  </div>
                  <div className='inputs'>
                    <span>timeframe</span>
                    <input type='text' name="timeframe" />
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea name="projectDetails" cols='30' rows='10'></textarea>
                </div>
                <button className='button-primary' type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
