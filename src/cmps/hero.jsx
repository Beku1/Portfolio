

import { HeroBackground } from "./hero-cmps/particles"


export function Hero({links}){

   

    return (
        <>
           <div id="particles-container">
        <HeroBackground/>
        <div className="social-links">
        {links.map((link)=><div className="social-link" onClick={()=> window.open(link.link, "_blank")} key={link.link}>{link.icon}</div>)}
        </div>
  <div id="center">
  <p className="line-1 anim-typewriter-1"> Hi , I'm <span className="my-name">Beny Kursalin</span>. </p>
  <p className="line-2 anim-typewriter-2">  Full Stack Web Developer.</p>
  </div>
</div>
        </>
    )
}