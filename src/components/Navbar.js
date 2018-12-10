import React, { useReducer } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Responsive, Sticky } from "semantic-ui-react";
import Palace from '../assets/palace.svg'

const styles = {
  container: {
    backgroundColor: "#066b98",
    height: '100%',
    paddingLeft: 100,
    paddingRight: 100,
    // position: 'fixed'
  },
  mobileContainer: {
    backgroundColor: "#066b98",
    height: '100%',
    paddingLeft: 10,
    paddingRight: 10
  },
  items: {
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

  logo: {
    display: 'inline-block',
    height: 20,
    marginRight: 10
  }
};

const initialState = { company: false, blog: false }

const Navbar = props => {
  const { brand } = props
  function reducer(state, action) {
    switch (action) {
      case "company":
        return { company: true, blog: false };
      case "blog":
        return { company: false, blog: true };
      default:
        return initialState;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  const menuItems = [
    {
      name: 'blog',
      active: state.blog,
      to: '/Blog',
      onClick: () => dispatch('blog'),
    },
    {
      name: 'company',
      active: state.company,
      to: '/OurCompany',
      onClick: () => dispatch('company'),
    },
    
  ]

  return (
    <Sticky>
    <div style={styles.container}>
      
      <Responsive as={Menu} minWidth={768} pointing secondary>
        <Menu.Item><img src={Palace} alt='logo'/></Menu.Item>
        <Menu.Item style={styles.items} position='left' active={false}>
          <NavLink to='/'>
            <h2 style={styles.brand} className='animated fadeIn' onClick={()=> dispatch(null)}>
              { brand }
            </h2>
          </NavLink>
        </Menu.Item>

        <Menu.Menu position='right'>
          {menuItems.map(item => (
            <Menu.Item key={item.name} style={styles.items} active={item.active}>
              <NavLink to={item.to} onClick={item.onClick}>
                <h1 style={styles.title} className='animated fadeIn'>
                  {item.name}
                </h1>
              </NavLink>
            </Menu.Item>
          ))}
        </Menu.Menu>

      </Responsive>
      </div>
      <div style={styles.mobileContainer}>
      <Responsive as={Menu} maxWidth={767} pointing secondary>
        {/* <Menu.Item><img src={Castle} height={20} alt=''/></Menu.Item> */}
        <Menu.Item style={styles.items} active={state.home}>
          <NavLink style={styles.links} to="/" onClick={() => dispatch("home")}>
            <img src={Palace} width={25} alt='palace'/>
          </NavLink>
        </Menu.Item>
        <Menu.Menu position='right'>
          {menuItems.map(item => (
            <Menu.Item key={item.name} style={styles.items} active={item.active}>
              <NavLink to={item.to} onClick={item.onClick}>
                <h1 style={styles.title} className='animated fadeIn'>
                  {item.name}
                </h1>
              </NavLink>
            </Menu.Item>
          ))}
        </Menu.Menu>
      </Responsive>
    </div>
    </Sticky>
  );
};

export default Navbar
