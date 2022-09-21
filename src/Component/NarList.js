import { useState } from 'react'
import { links } from './MyLinkList'
import { Link } from 'react-router-dom'
import {ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'

const NarList = () => {

  const [heading, setHeading] = useState(""); //
  const [subHeading, setSubHeading] = useState(""); //

    return (
      <>
         {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left md:cursor-pointer group">

            <h1 className="py-7 flex justify-between items-center md:pr-0 pr-5 group" onClick={() => { heading !== link.name ? setHeading(link.name) : setHeading(""); setSubHeading("")}} >
              {link.name}
              <span className="text-xl md:hidden inline"> { heading === link.name ? <ChevronUpIcon className='w-7'/> : <ChevronDownIcon className='w-7'/>} </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2"> <ChevronDownIcon className='w-7'/> </span>
            </h1>

            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block" >

                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45" ></div>
                  </div>

                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublinks, index) => (
                      <div key={index} >
                        <h1 className="text-lg font-semibold"> {mysublinks.Head} </h1>
                        {mysublinks.sublink.map((slink, index) => (
                          <li className="text-sm text-gray-600 my-2.5" key={index}>
                            <Link to={slink.link} className="hover:text-blue-800" > {slink.name} </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Mobile menus */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`} >

            {/* sublinks */}

            {link.sublinks.map((slinks, index) => (
              <div key={index}>
                <div>
                  <h1 onClick={() => subHeading !== slinks.Head ? setSubHeading(slinks.Head) : setSubHeading("")} className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center" >
                    {slinks.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                        {subHeading === slinks.Head ? <ChevronUpIcon className='w-7' /> : <ChevronDownIcon className='w-7' />}
                    </span>
                  </h1>
                  <div className={`${ subHeading === slinks.Head ? "md:hidden" : "hidden" }`}>
                    {slinks.sublink.map((slink, index) => (
                      <li className="py-3 pl-14" key={index}>
                        <Link to={slink.link}> {slink.name} </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      </>
    )
  }
  
  export default NarList 
  

 

