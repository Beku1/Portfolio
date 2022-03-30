

export function NavBar({refs}){

    
    const routes = [{route:'#home',label:'Home',id:'home'},{route:'#about-me',label:'About Me',id:'about-me'},{route:'#projects',label:'Projects',id:'projects'},{route:'#contact-me',label:'Contact Me',id:'contact-me'}]



    return (
        <nav className="nav-bar">
           
          {routes.map((route,idx)=><a href={route.route} className={`route ${(idx>0&&refs[idx]&&!refs[idx-1])||(idx===0&&refs[idx])?'active':''}`}key={route.id}>{route.label}</a>)}
        </nav>
    )
}