import React from 'react'
import { Link } from "react-router-dom";
import { FaExternalLinkAlt,FaGithub } from 'react-icons/fa';


function Footer() {
  return (
    <footer className='Footer'>
        <div className='FooterInner'>
            <div className='Section'>
                    <Link to="/" className='Logo'>NASA <span>&#123;</span> API <span>&#125;</span></Link>
                
            </div>
            <div className='Section'>
                    <p> lluding versions of Lorem Ipsum.</p>
            </div>

            <div className='logoContainers'>
                    <FaExternalLinkAlt/>
                    <FaGithub/>
            </div>

        
       

        </div>
       
    </footer>
  )
}

export default Footer