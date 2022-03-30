
import Particles from "react-tsparticles";

export function HeroBackground(){

      
      const style = {"position":'relative',"width":'100vw',"height":'100vh'}



      return (
        <Particles
        id="tsparticles"
        style={style}

        options={{"fps_limit":60,"fullScreen":false,"interactivity":{"detectsOn":"canvas","events":{"onClick":{"enable":true,"mode":"push"},"onHover":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"push":{"particles_nb":4},"repulse":{"distance":200,"duration":0.4}}},"particles":{"color":{"value":"#ffffff"},"links":{"color":"#ffffff","distance":150,"enable":true,"opacity":0.4,"width":1},"move":{"bounce":false,"direction":"none","enable":true,"outMode":"out","random":false,"speed":2,"straight":false},"number":{"density":{"enable":false,"area":800},"value":40},"opacity":{"value":0.5},"shape":{"type":"circle"},"size":{"random":true,"value":5}},"detectRetina":false}}
      />
      )

}
// options={{"fps_limit":60,"interactivity":{"detectsOn":"#tsparticles","events":{"onClick":{"enable":true,"mode":"push"},"onHover":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"push":{"particles_nb":4},"repulse":{"distance":200,"duration":0.4}}},"particles":{"color":{"value":"#ffffff"},"links":{"color":"#ffffff","distance":150,"enable":true,"opacity":0.4,"width":1},"move":{"bounce":false,"direction":"none","enable":true,"outMode":"out","random":false,"speed":2,"straight":false},"number":{"density":{"enable":false,"area":800},"value":40},"opacity":{"value":0.5},"shape":{"type":"circle"},"size":{"random":true,"value":5}},"detectRetina":false}}