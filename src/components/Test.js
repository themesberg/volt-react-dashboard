import React from 'react';
...
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHome, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const tabs = [{
  route: "/home",
  icon: faHome,
  label: "Home"
},{
  route: "/search",
  icon: faSearch,
  label: "Search"
},{
  route: "/login",
  icon: faUserCircle,
  label: "Login"
}]

const Navigation = (props) => {
...
const Navigation = (props) => {
    return (
        <div>
          {/* Top Bar*/}
    <nav className="navbar navbar-expand-md navbar-light sticky-top" role="navigation">
           ....
          </nav>
         
          {/* Bottom Tab Navigator*/}
          <nav className="navbar fixed-bottom navbar-light" role="navigation">
            <Nav className="w-100">
              <div className=" d-flex flex-row justify-content-around w-100">
                {
                  tabs.map((tab, index) =>(
                    <NavItem key={`tab-${index}`}>
                      <NavLink to={tab.route} className="nav-link" activeClassName="active">
                        <div className="row d-flex flex-column justify-content-center align-items-center">
                          <FontAwesomeIcon size="lg" icon={tab.icon}/>
                          <div>{tab.label}</div>
                        </div>
                      </NavLink>
                    </NavItem>
                  ))
                }
              </div>
            </Nav>
          </nav>
        </div>
      )
    };