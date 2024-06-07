import React from 'react';
import { menuList } from '../../data/menuItems';
import { Link } from 'react-router-dom';

const GenerateMenuItems = ({location }) => {
  
    return (
        <ul className="main-menu__list">
          {menuList.map(menuItem => (
            <MenuItem key={menuItem.id} menuItem={menuItem} location={location} />
          ))}
        </ul>
      );
    }
    
    function MenuItem({ menuItem, location }) {
      const isActive = location.pathname === menuItem.path;
      const activeStyle = isActive ? { color: '#0d6efd' } : {color:'#696e76'};
      const hasSubmenu = menuItem.submenu && menuItem.submenu.length > 0;
      const dropdownClass = hasSubmenu ? 'dropdown' : '';

      return (
         <li className={`${dropdownClass} ${isActive ? 'current' : ''}`}>
          <Link to={menuItem.path} style={activeStyle}>{menuItem.name}</Link>
          {menuItem.submenu.length > 0 && (
            <ul>
              {menuItem.submenu.map(submenuItem => (
                <li key={submenuItem.id}>
                  { menuItem.name === 'Services'? <a href={submenuItem.path} style={activeStyle}>
                    {submenuItem.name}</a> : 
                 
                  <Link to={submenuItem.path} style={activeStyle}>{submenuItem.name}</Link>
              }
                </li>
              ))}
            </ul>
          )}
        </li>
      );
        };



export default GenerateMenuItems;