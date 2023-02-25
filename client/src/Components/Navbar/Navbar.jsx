import React, { useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch} from 'react-redux'
import logo from '../../Assets/Stack.png'
import search from '../../Assets/Minimal-Magnifying-Glass.png'
import Avatar from '../../Components/Avatar/Avatar'
import Button from '../../Components/Button/Button'
import './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser'

export const Navbar = () => {
    const dispatch = useDispatch ();

    let User = useSelector((state) => (state.currentUserReducer)) ;

    useEffect (() => {
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    },[dispatch])
  return (
    <nav className='main-nav'>
        <div className='navbar'>
           <Link to='/' className='nav-item nav-logo'> 
                <img src={logo} alt="logo" />
           </Link>
           <Link to="/" className='nav-item nav-btn'>About</Link>
           <Link to="/" className='nav-item nav-btn'>Product</Link>
           <Link to="/" className='nav-item nav-btn'>For Teams</Link>

            <form>
                <input type="text" placeholder='Search...' />
                <img src={search} alt="search" width='20' className='search-icon'/>
            </form>

            {User === null ? 
                <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
                <>
                <Avatar backgroundColor="#009dff" px='50px' py='10px' borderRadius='25%'  color='white'><Link to='/User' style={{color:"white",textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar>
                <button className='nav-item nav-links'>Log Out</button>
                </>
            }
        </div>
    </nav>
    );
};
