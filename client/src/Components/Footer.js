import React from 'react'

import { FaExternalLinkAlt,FaGithub } from 'react-icons/fa';
import { SiNasa } from 'react-icons/si';

function Footer() {
  return (
    <footer className='Footer'>
        <div className='FooterInner'>
            <div className='Section'>
                    <p className='Logo'>NASA <span>&#123;</span> API <span>&#125;</span></p>
                
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