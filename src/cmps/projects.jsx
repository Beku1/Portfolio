import digitask from '../assets/img/digitask.png'
import hospidata from '../assets/img/hospidata.png'
import minesweeper from '../assets/img/minesweeper.png'

export function Projects() {
  const projects = [
    {
      name: 'DigiTask',
      github: 'https://github.com/Beku1/DigiTask',
      demo: 'https://digitask11.herokuapp.com/#/',
      description:
        'Digitask helps teams move work forward. Collaborate, manage projects, and reach new productivity peaks. Inspired by Trello',
      madeWith: [
        {
          title: 'Vue',
          label: 'vue',
          side: 'front',
        },
        {
          title: 'Node.js',
          label: 'node',
          side: 'back',
        },
        { title: 'Socket.io', label: 'socket', side: 'back' },
        { title: 'MongoDB', label: 'mongo', side: 'back' },
        { title: 'Express', label: 'express', side: 'back' },
      ],
      img: digitask,
    },
    {
      name: 'HospiData',
      github: 'https://github.com/Beku1/HospiData',
      demo: 'https://hospidata.herokuapp.com/',
      description:
        ' Health Center application system , Patients getting treatment from doctors for medical help.',
      madeWith: [
        {
          title: 'React',
          label: 'react',
          side: 'front',
        },
        {
          title: 'Node.js',
          label: 'node',
          side: 'back',
        },
        { title: 'Socket.io', label: 'socket', side: 'back' },
        { title: 'MongoDB', label: 'mongo', side: 'back' },
        { title: 'Express', label: 'express', side: 'back' },
      ],
      img: hospidata,
    },
    {
      name: 'Minesweeper',
      github: 'https://github.com/Beku1/Minesweeper',
      demo: 'https://beku1.github.io/Minesweeper/',
      description:
        'Minesweeper. My First Project I did in the Coding Academy Bootcamp.',
      madeWith: [
        {
          title: 'Javascript',
          label: 'javascript',
          side: 'front',
        },
        { title: 'HTML', label: 'html', side: 'front' },
        { title: 'CSS', label: 'css', side: 'front' },
      ],
      img: minesweeper,
    },
  ]

  function openNewTab(url) {
    window.open(url, '_blank').focus()
  }

  return (
    <div className="projects-content">
      <h1>My Projects</h1>
      <div className="line-sep"></div>

      <div className="projects-cards">
        {projects.map((project) => (
          <div className="project-card" key={project.name}>
            <img className="project-img" src={project.img} alt='project-image'/>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-skills-tab">
              {project.madeWith.map((madeWith) => (
                <span key={madeWith.label}
                  className={`project-skill ${madeWith.label} ${madeWith.side}`}
                >
                  {madeWith.title}
                </span>
              ))}
            </div>
            <div className="project-buttons">
              <button onClick={() => openNewTab(project.demo)}>Demo</button>
              <button onClick={() => openNewTab(project.github)}>GitHub</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
