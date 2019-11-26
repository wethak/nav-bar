import React from "react";
import "./nav.css";



function Nav(props) {
  return (
    <div className="nav-menu">
      <ul>
        {props.x.map(el => (
          <div>
            <li className="dropdown">{el.title}</li>
              <ul id="sub-element">
              {el.submenu
                ? el.submenu.map(element => <li>{element}</li>)
                : null}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Nav;

//
//   : el.title
// if (el.submenu) {
//   return el.title(el.submenu.map(<div> el </div>));
// } else {
//   return (
//     <div>
//       <h1>{el.title}</h1>
//     </div>
