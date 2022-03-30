

import profile from '../assets/img/profile.png'

export function AboutMe(){


    // const mySkills = [{'HTML'},{'CSS'},'Javascript','React.js','Node.js','Vue','Express','MongoDB','Socket.io','Firebase']

    const mySkills = [{
        title:'HTML',
        label:'html',
        side:'front'
    },
    {
        title:'CSS',
        label:'css',
        side:'front'
    },
    {
        title:'Javascript',
        label:'javascript',
        side:'front back'
    },
    
    {
        title:'React.js',
        label:'react',
        side:'front'
    },
   
    {
        title:'Vue',
        label:'vue',
        side:'front'
    },
  
    {
        title:'FireBase',
        label:'firebase',
        side:'back'
    }, {
        title:'Node.js',
        label:'node',
        side:'back'
    },  {
        title:'Express',
        label:'express',
        side:'back'
    },
    {
        title:'MongoDB',
        label:'mongo',
        side:'back'
    },
    {
        title:'Socket.io',
        label:'socket',
        side:'back'
    },
]

 

      return (
      <div className="about-me-content">
          <div className={`about-me-text `}>
            <h1>About Me</h1>
            <div className='line-sep'></div>
            <img className='profile-img' src={profile}/>
           <p> 
    <span>My name is <span className='full-name'>Beny Kursalin</span>,</span> <br/>
    <span>I'm 25 years old, Finnished <span className='coding-academy' onClick={()=> window.open('https://www.coding-academy.org/index.php', "_blank")}><span>C</span>oding <span>A</span>cademy <span>B</span>ootcamp </span>and i'm incredibily passionate about coding.</span><br/>
    <span>I mainly focus on Full-Stack web development.</span><br/>
    <span>I try to consistently learn new technologies and acquire new skills, and implement them in my code.</span><br/>
    <span>I am a fast learner and a team player, and would classify myself as an independent and organized person.</span><br/>
    <span>I approach each problem as a learning experience and I use that experience to ensure </span><br/>
    <span>that all of my code is written in the best way possible, in both efficiency and functionality.</span>

    </p>
     </div>
     <div className="about-me-skills">
        <h1>My Skills</h1>
        <div className="about-me-all-skills">

        {mySkills.map(skill=><span className={`about-me-spec-skill ${skill.label} ${skill.side}`} key={skill.label}>{skill.title}</span> )}
        </div>
     </div>
     <div></div>
      </div>
      )

}