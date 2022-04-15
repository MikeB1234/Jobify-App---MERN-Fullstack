import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import links from '../utils/links'

const SmallSidebar = () => {
    return (
        <Wrapper>
            <div className='sidebar-container show-sidebar'>
                <div className='content'>
                    <button className='close-btn' onClick={() => console.log('toggle')}>
                        <FaTimes />
                    </button>
                    <header>
                        <Logo />
                    </header>
                    <div className='nav-links'>
                        links
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default SmallSidebar