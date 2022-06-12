import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark" id="header-nav">
    <div className="container-fluid">
      <a className="navbar-brand" href="home/"><img className="logo" src="Images/TheaterLogoFinal.png" alt="" width="30"
          height="24"/></a>
      <button id="nav" className="navbar-toggler" style={{backgroundColor:"#8b0000"}} type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" style={{backgroundColor:"dark-grey"}}></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item ">
            <a className="nav-link active" aria-current="page" href="home/" >Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="movies/" >Movies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="web-series/"  >Web Series</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="kids/" >Kids</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="tv/"  >TV</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="premium/"  >Premium</a>
          </li>
    
          <li className="nav-item">
            <a className="nav-link" href="contactus/"  >Contact Us</a>
          </li>
          <li>
            <div>
              <div className="dropdown" style={{position: "relative", display: "inline-block", paddingTop: "5px",paddingLeft: "15px"}}>
                  <button className="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton" style={{fontSize:"20px"}}>
                      Genres
                  </button>
                  <div className="dropdown-content" style={{color: "white"}}>
                      <a href="/">Popular</a>
                      <a href="/">Crime</a>
                      <a href="/">Suspense & Thriller</a>
                      <a href="/">Action</a>
                      <a href="/">Sci-Fi & Fantasy</a>
                      <a href="/">Documentary</a>
                      <a href="/">Horror</a>
                      <a href="/">Drama</a>
                      <a href="/">War & Politics</a>
                      <a href="/">Comedy</a>
                      <a href="/">Romance</a>
                      <a href="/">Anime</a>
                    </div>
              </div>
            </div>
          </li>
          <div style={{position: "relative", display: "inline-block", paddingTop: "5px", paddingLeft: "15px",}}>
            <li>
              <button  type="button" className="btn btn-light" >Logout</button>
            </li>
          </div>
        </ul>
        <form id="searchForm" className="d-flex">
          <input className="form-control me-2" type="text" id="searchText" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-danger" type="submit">Search</button>
        </form>
      </div>
    </div>
    </nav>
  )
}

export default Header