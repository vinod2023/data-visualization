import React from 'react';
import {Link} from 'react-router-dom';


function Navigation() {
    return (
        <div className="topnav">
          <Link to="/" >Home</Link>
          <Link to="/table" >Table</Link>
          <Link to="/linechat" >LineChat</Link>
          <Link to="/barchat" >BarChat</Link>
          <Link to="/doughnut" >DoughnutChat</Link>
      </div>
    )
}

export default Navigation
