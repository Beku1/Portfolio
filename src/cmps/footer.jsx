

export function Footer({links}){


    

    return(
        <div className='footer'>
            <div className='footer-links'>
{links.map(link=><div className='footer-link' onClick={()=> window.open(link.link, "_blank")} label={link.label} key={link.label}>{link.icon}</div>)} 
</div>
<div className='footer-text'>Created By Beny Kursalin 2022 © </div>
        </div>
    )

}