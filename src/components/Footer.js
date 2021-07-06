import React from 'react'

import '../App.css'

const Footer = () => {
    return (
      <div className="mainApp">
        <div className="grid text-white  p-12  flex items-center justify-center w-auto h-auto ">
            <div className="grid grid-cols-1 nb-5">
                <div style={{textAlign:'center',fontSize:'35px',padding:'8px'}}>Work with Strong.</div>
                <div style={{textAlign:'center',fontSize:'13px',padding:'8px'}}>Find out how Strong can help you tackle your most challenging data science and machine learning projects.</div>
                <div style={{textAlign:'center',marginTop:'15px'}}><button className="buttonStyle">GET IN TOUCH</button></div>
            </div>
        </div>
        <div className="grid grid-cols-4 mt-5 text-white pb-20">
            <a href="#">
                <div style={{textAlign:'center',fontSize:'25px'}}>Strong</div>
            </a>
            <div className="section">
                <a href="#">
                   <span className="sectionItems" >SOLUTIONS</span>
                </a>
                < br />
                <a href="#">
                    <span className="sectionItems" >PLATFORMS</span>
                </a>
                < br />
                <a href="#">
                    <span className="sectionItems" >EXPERTISE</span>
                </a>
                < br />
                <a href="#">
                    <span className="sectionItems" >BLOG</span>
                </a>
                < br />
                
            </div>
            <div className="section">
                <a href="#">
                    <span className="sectionItems" >ABOUT US</span>
                </a>
                < br />
                <a href="#">
                    <span className="sectionItems" >CAREERS</span>
                </a>
                < br />
                <a href="#">
                    <span className="sectionItems" >CONTACT US</span>
                </a>
                < br />
                <a href="#">
                    <span className="sectionItems" >PRETRAINED.AI</span>
                </a>
                < br />
   
            </div>
            <div style={{textAlign:'center',fontSize:'10px'}}>
                <p style={{padding:'3px'}}>© 2021 STRONG ANALYTICS LLC</p>
                <p style={{padding:'3px'}}>CHICAGO, IL, USA</p>
            </div>
        </div>
      </div>
    )
}

export default Footer
