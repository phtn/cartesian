import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";
import { Image, Menu, Responsive } from "semantic-ui-react";
import Palace from '../assets/palace.svg'
import MenuIcon from '../assets/menu.svg'



const styles = {
  container: {
    backgroundColor: "#066b98",
    height: '100%',
    paddingLeft: 100,
    paddingRight: 100
  },
  items: {
    // textTransform: "uppercase",
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 300,
    letterSpacing: 1,
  },
  brand: {
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '1.8em',
    fontWeight: 300,
    color: '#ccc',
    textTransform: 'uppercase'
  },
  title: {
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '1.3em',
    color: '#ccc',
  },

  links: {
    color: "#ccc !important"
  },
  logo: {
    display: 'inline-block',
    height: 20,
    marginRight: 10
  }
};



const MenuBar =  () => {

  function reducer(state, action) {
    switch (action) {
      case "about":
        return { about: true, blog: false };
      case "blog":
        return { about: false, blog: true };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, { about: false, blog: false });

  const menuItems = [
    {
      name: 'blog',
      active: state.blog,
      to: '/Blog',
      onClick: () => dispatch('blog'),
    },
    {
      name: 'company',
      active: state.about,
      to: '/OurCompany',
      onClick: () => dispatch('company'),
    },
    
  ]

  return (
    <div style={styles.container}>

      <Responsive as={Menu} minWidth={768} pointing secondary>
        <Menu.Item><img src={Palace} alt='logo'/></Menu.Item>
        <Menu.Item style={styles.items} position='left' active={false}>
          <NavLink style={styles.links} to='/'>
            <h2 style={styles.brand} className='animated fadeIn'>
              Keystone Media
            </h2>
          </NavLink>
        </Menu.Item>

        <Menu.Menu position='right'>
          {menuItems.map(item => (
            <Menu.Item key={item.name} style={styles.items} active={item.active}>
              <NavLink style={styles.links} to={item.to} onClick={item.onClick}>
                <h1 style={styles.title} className='animated fadeIn'>
                  {item.name}
                </h1>
              </NavLink>
            </Menu.Item>
          ))}
        </Menu.Menu>

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
