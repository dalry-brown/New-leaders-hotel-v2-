import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import MoreVert from '@mui/icons-material/MoreVert';
import { useDropdownStore, usePageStore } from '../../store/basicStore';
import { useScreenSizeStore } from '../../store/basicStore'; // Import the screen size store
import navStyle from '../../styles/component-styles/universal-components/navbar.module.css';
import logo from '../../assets/logo.jpg';

interface NavbarProps {
  colorState: string;
}

const DropDownMenu: React.FC<{ dropdownRef: React.RefObject<HTMLUListElement> }> = ({ dropdownRef }) => {
  const { screenWidth } = useScreenSizeStore(); // Use the screen size store
  const { selectHome, selectAbout, selectRooms, selectContact } = usePageStore();
  const { closeDropdown } = useDropdownStore();

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //     console.log('hi');
      
  //   };

  //   window.addEventListener('resize', handleResize);

  //   // Initial setting of the screen width
  //   setScreenWidth(window.innerWidth);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [setScreenWidth]);

  

  return (
    <>
    {  (screenWidth > 800) ?  
      (<ul className={navStyle.dropDownList} ref={dropdownRef}>
          <Link className={navStyle.dropLink}
                      to="/login"
                      onClick={() => {
                        closeDropdown();
                    }}>
          <li>Login</li>
        </Link>
          <Link className={navStyle.dropLink}
                      to="/sign-up"
                      onClick={() => {
                        closeDropdown();
                    }}>
          <li>Sign up</li>
        </Link>
      </ul>) :
        (<ul className={navStyle.dropDownList} ref={dropdownRef}>
          <Link className={navStyle.dropLink}
            onClick={() => {
              selectHome();
              closeDropdown();
            }}
            to="/">
            <li>Home</li>
          </Link>
          <Link className={navStyle.dropLink} 
            onClick={() => {
              selectAbout();
              closeDropdown();
            }}
            to="/about">
            <li>About</li>
          </Link>
          <Link className={navStyle.dropLink} 
            onClick={() => {
              selectRooms();
              closeDropdown();
            }}
            to="/rooms-and-suites">
            <li>Rooms and Suites</li>
          </Link>
          <Link className={navStyle.dropLink} 
            onClick={() => {
              selectContact();
              closeDropdown();
            }}
            to="/contact">
            <li>Contact</li>
          </Link>
          <Link className={navStyle.dropLink}
                      to="/login"
                      onClick={() => {
                        closeDropdown();
                        closeDropdown();
                    }}>
            <li>Login</li>
          </Link>
          <Link className={navStyle.dropLink}
                      to="/sign-up"
                      onClick={() => {
                        closeDropdown();
                    }}>
            <li>Sign up</li>
          </Link>
        </ul>)
      }
      
    </>
  );
}

const Navbar: React.FC<NavbarProps> = () => {
  const { isOpen, toggleDropdown, closeDropdown } = useDropdownStore();
  const { homeSelected, aboutSelected, roomsSelected, contactSelected, selectHome, selectAbout, selectRooms, selectContact } = usePageStore();
  const { setScreenWidth } = useScreenSizeStore(); // Use the screen size store
  const [navBackground, setNavBackground] = useState<string>('transparent');
  const [navHeight, setNavHeight] = useState<string>('0');

  const triggerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleClickOutside = (event: MouseEvent) => {

    if (
      triggerRef.current && !triggerRef.current.contains(event.target as Node) &&
      dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
    ) {
      closeDropdown();
    }
  };
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Initial setting of the screen width
    setScreenWidth(window.innerWidth);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setScreenWidth]);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setNavBackground('#1E1E1E'); // Change to black
        setNavHeight('fit-content')
      } else {
        setNavBackground('transparent'); // Reset to transparent
        setNavHeight('0')
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={navStyle.nav}
      style={(homeSelected == false) ?
        {
          backgroundColor: '#1E1E1E',
          position: 'sticky' 
        } :
        {
          backgroundColor: navBackground,
          position: 'sticky',
          height: navHeight
      }}
    >
      <div className={navStyle.navContainer}>
        <section className={navStyle.logoContainer}>
          <Link to="/"><img src={logo} alt="New Leaders Hotel logo" /></Link>
        </section>
        <ul className={navStyle.navList}>
          <li>
            <Link
              to="/"
              style={homeSelected ? { fontWeight: 'bolder' } : { textDecoration: 'none' }}
              className='link'
              onClick={() => {
                selectHome();
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={aboutSelected ? { fontWeight: 'bolder' } : { textDecoration: 'none' }}
              className='link'
              onClick={() => {
                selectAbout();
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/rooms-and-suites"
              style={roomsSelected ? { fontWeight: 'bolder' } : { textDecoration: 'none' }}
              className='link'
              onClick={() => {
                selectRooms();
              }}
            >
              Rooms and Suites
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={contactSelected ? { fontWeight: 'bolder' } : { textDecoration: 'none' }}
              className='link'
              onClick={() => {
                selectContact();
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
        <section className={navStyle.rightContainer}>
        <Link className='link' to="/booking" style={{border: 'none'}}>
            <button className='bookButton' style={{ lineHeight: 0 }}>
              <div className="link" style={{border: 'none'}}>Book now</div>
            <div className={navStyle.icon}>
              <NorthEastIcon style={{ color: '#F3F5F6', fontSize: 24 }} />
            </div>
          </button>
          </Link>
          <menu className={navStyle.menu} onClick={toggleDropdown} ref={triggerRef}>
            <MoreVert style={{ color: '#F3F5F6', fontSize: 24 }} />
          </menu>
        </section>
        {isOpen && <DropDownMenu dropdownRef={dropdownRef} />}
      </div>
    </nav>
  );
};

export default Navbar;
