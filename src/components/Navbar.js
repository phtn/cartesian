import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Responsive } from "semantic-ui-react";
import Palace from '../assets/palace.svg'
import MenuIcon from '../assets/menu.svg'



const styles = {
  container: {
    backgroundColor: "rgb(128, 224, 208)"
  },
  items: {
    textTransform: "uppercase",
    fontFamily: "Abel, sans-serif",
    fontWeight: "bolder",
    letterSpacing: 2,
  },
  links: {
    color: "#444 !important"
  }
};



const MenuBar =  () => {

  function reducer(state, action) {
    switch (action) {
      case "home":
        return { home: true, web: false };
      case "web":
        return { home: false, web: true };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, { home: true, web: false });

  const menuItems = [
    {
      name: 'home',
      position: 'left',
      active: state.home,
      to: '/',
      onClick: () => dispatch('home'),
      src: Palace,
    },
    {
      name: 'web',
      position: 'right',
      active: state.web,
      to: '/web',
      onClick: () => dispatch('web'),
      src: MenuIcon,
    },
  ]

  return (
    <div style={styles.container}>

      <Responsive as={Menu} minWidth={768} pointing secondary>
        {menuItems.map(item => (
          <Menu.Item key={item.name} style={styles.items} position={item.position} active={item.active}>
            <NavLink style={styles.links} to={item.to} onClick={item.onClick}>
              <img src={item.src} width={30} alt={item.name}/>
            </NavLink>
          </Menu.Item>
        ))}
      </Responsive>

      <Responsive as={Menu} maxWidth={767} pointing secondary>
        {/* <Menu.Item><img src={Castle} height={20} alt=''/></Menu.Item> */}
        <Menu.Item style={styles.items} active={state.home}>
          <NavLink style={styles.links} to="/" onClick={() => dispatch("home")}>
            <img src={Palace} width={25} alt='palace'/>
          </NavLink>
        </Menu.Item>
        <Menu.Item position="right" style={styles.items} active={state.web}>
          <NavLink style={styles.links} to="/web" onClick={() => dispatch("web")}>
            <img src={MenuIcon} width={25} alt='MenuIcon'/>
          </NavLink>
        </Menu.Item>
      </Responsive>
    </div>
  );
};

export default MenuBar
