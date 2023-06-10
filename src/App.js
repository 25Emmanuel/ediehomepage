import Nav from './Components/Nav'
import Input from './Components/Input'
import Service from './Components/Service'
import {HiPencilAlt} from 'react-icons/hi'
import {BsCodeSquare} from 'react-icons/bs'
import {MdStorage} from 'react-icons/md'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'
import Button from './Components/Button'
import Projects from './Components/Projects'
import Members from './Components/Members'
import Gatsby from './Components/Gatsby'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <main className="App">
        <Nav />
        <p className='intro'>Unhappy with your website?</p>
        <div className='intro2-textcontainer'>
          <p className='intro intro2'>We create beautiful and fast web services</p>
        </div>
        <div className='intropic-container'>
          <img src='images/introimg2.jpg' alt='intropic' className='introimg'/>
        </div>
        <div className='subintro-textcontainer'>
          <p className='subintro-text'>Story, emotion and purpose</p>
        </div>
        <div className='subintro-container'>
          <p className='subintro-paragraph'>We help transform your ideas into real world applications that will out perform your thoughest competition and help you achieve your strategic goals in short period of time.</p>
        </div>
        <Input />
        <div className='servicetext-container'>
          <p className='service-text'>We offer high demand services</p>
        </div>

        <div className='cards-container'>

          <div className='cards'>
            <div className='icon-container'>
              <HiPencilAlt />
            </div>
            <Service 
              containerClaz='services'
              containerHeading='UI/UX Design'
              textClass='ui-sectiontext'
            />
            <Button 
              buttonClass='button-uiux'
            />
          </div>
          <div className='frontend-card cards'>
            <div className='icon-container frontend-icon'>
              <BsCodeSquare />
            </div>
            <Service 
              containerClaz='services'
              containerHeading='Front End'
              textClass='ui-sectiontext frontend'
            />
            <Button 
              buttonClass='button-frontend'
            />
          </div>
          <div className='cards'>
            <div className='icon-container backend-icon'>
              <MdStorage />
            </div>
            <Service 
              containerClaz='services'
              containerHeading='Back End'
              textClass='ui-sectiontext'
            />
            <Button 
              buttonClass='button-uiux'
            />
          </div>
        </div>
        <div className='gallerytext-container'>
          <p className='gallery-text'>Good design means good business</p>
        </div>
        <div className='project-container'>
          <div className='box1'>

            <Projects 
              imageSrc='images/smarthome.jpg'
              subTitle='Full stack Application'
              title='Smart home dashboard'
            />
          </div>
          <div className='box2'>

            <Projects 
              imageSrc='images/onboard.png'
              subTitle='UI/UX Design'
              title='Onboard Application'
            />
          </div>
          <div className='box3'>

            <Projects 
              imageSrc='images/booking.png'
              subTitle='Mobile Application'
              title='Booking System'
            />
          </div>
          <div className='box4'>

            <Projects 
              imageSrc='images/juice-product.png'
              subTitle='Front End Application'
              title='Juice product homepage'
            />
          </div>
        </div>
        <div className='seemore-arrow'>
          <span className='seemore'>see more</span>
          <HiOutlineArrowNarrowRight />
        </div>
        <div className='team'>

          <div className='teamtext-container'>

            <p className='meettheteam'>Meet the team</p>
            <p className='teamintro-text'>We are chilled and a laidback team</p>
            <p className='teamintro-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='teamgallery-container'>
            <div className='team-gallery'>
              <Members 
                memberClass='member-one'
                memberImageSrc='images/person3.png'
              />
              <Members 
                memberClass='member-two'
                memberImageSrc='images/person1.png'
              />
              <Members 
                memberClass='member-three'
                memberImageSrc='images/person2.png'
              />
            </div>
          </div>
        </div>
        <div className='membersremark-container'>
        <p className='members-remark'>"Fast and outstanding results. Edie understands their customer's needs. They have a young and talented team."</p>
        </div>
        <Gatsby />
        <Footer />
      </main>
    </div>
  );
}

export default App;
