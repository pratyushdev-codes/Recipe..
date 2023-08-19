import React, { Component } from 'react'
export class Navbar extends Component {
  render() {
    return (
        <div>
          {/* <style>
            {`
            nav{
              width: 900px;
              margin-top:10px
              justify-content:center;
              
            }
            `}
          </style> */}
      {/* <nav className="navbar nav-underline fixed-top navbar-expand-md navbar-light bg-*  "> */}
      {/* <nav className="navbar nav-underline bg-body-tertiary navbar-expand-lg bg-faded navbar-trasparent"> */}
      <nav className="navbar nav-underline fixed-top navbar-expand-md navbar-light bg-light rounded">
        <div className="container-fluid mx-auto">
          {/* <a className="navbar-brand" href="/">
            <img src="/" alt="Logo" className="d-inline-block  mx-4" width="265" height="62" />
          </a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto ">
              <li className="nav-item mx-3"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="/business">About</a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="/entertainment"></a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="/entertainment"></a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="/general"></a></li>
              <li className="nav-item mx-2"><a className="nav-link" href="/health"></a></li>
              <br/>
            </ul>
            
          </div>
        
        </div>
         
      </nav>
      <div class="align-items-center d-flex">      
             <img src="./Images/bg.jpg" alt="image" className="image" class="img-fluid" />
      </div>

       </div>

    );
  }
}
export default Navbar;