import React, { useContext } from 'react';
import { appContext } from './Layout';
import Link from 'next/link'

const Header = () => {
  const headerContext = useContext(appContext);
    return (
        <div className='menuArea'>
              <div className='row d-flex align-items-center'>
                  <div className='col-lg-4'>
                      <div className='logo-area'>
                          <img src="https://seia.internaltest.website/wp-content/uploads/2022/02/download.png" />
                      </div>
                  </div>
                  <div className='col-lg-8'>
                    <ul className='d-flex menuitem-area justify-content-end'>
                      {
                            headerContext.map( (menuItem)=>{
                            
                              return(
                                
                                <li key={menuItem.id}>
                                      <Link href={menuItem.link}>
                                          <a>{menuItem.title}</a>
                                      </Link> 
                                </li>
                                
                              )
                            })
                          }
                       </ul>
                    </div>
              </div>
        </div>
    );

};



export default Header;


