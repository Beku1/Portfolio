import React, {  useRef } from 'react'

import { AboutMe } from '../cmps/about-me'
import { ContactMe } from '../cmps/contact-me'
import { Footer } from '../cmps/footer'

import { Hero } from '../cmps/hero'
import { NavBar } from '../cmps/navbar'
import { Projects } from '../cmps/projects'
import useOnScreen from '../hooks/use-on-screen'
import {FaGithub,FaLinkedin} from 'react-icons/fa'




export function HomePage() {



    const heroRef = useRef()
    const aboutMeRef = useRef()
    const projectsRef = useRef()
    const contactMeRef = useRef()

    const isHeroVis = useOnScreen(heroRef)
    const isAboutMeVis = useOnScreen(aboutMeRef)
    const isProjectsVis = useOnScreen(projectsRef)
    const isContactMeVis = useOnScreen(contactMeRef)



    const links = [
        {
            icon:<FaGithub/>,
            link:'https://github.com/Beku1',
            label:'Github'
        },
        {
            icon:<FaLinkedin/>,
            link:'https://www.linkedin.com/in/benykursalin/',
            label:'Linkedin'
        }
    ]

    

        return (
            <section className='portoflio-container'>
               <section className='hero-container '  id='home' ref={heroRef}>
                   <Hero links={links}/>
               </section>
               <section className='navbar-container'>
              <NavBar refs={[isHeroVis,isAboutMeVis,isProjectsVis,isContactMeVis]} />
              {/* <NavBar refs={[{home:isHeroVis},{'about-me':isAboutMeVis},{projects:isProjectsVis},{'contact-me':isContactMeVis}]} /> */}
               </section>
               <section className={`about-me-container ${isAboutMeVis?'active':''}`} id='about-me' ref={aboutMeRef} >
                
                   <AboutMe/>
               </section>
               <section className='projects-container' id='projects' ref={projectsRef}>
                   <Projects/>
               </section>
               <section className='contact-me-container' id='contact-me' ref={contactMeRef}> 
                <ContactMe/>
               </section>
               <Footer links={links}/>
            </section >
        )
    
}

