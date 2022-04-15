import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from "../context/appContext";
import Logo from "./Logo";

const Navbar = () => {
    const { toggleSidebar } = useAppContext()
    return (
        <Wrapper>
            <div type='button' className="nav-center">
                <button className="toggle-btn" onClick={toggleSidebar}>
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h3 className="logo-text">Dashboard</h3>
                </div>
                <div className="btn-container">
                    <button type='button' className="btn" onClick={() => console.log('Show/Hide')}>
                        <FaUserCircle />
                        Mike
                        <FaCaretDown />
                    </button>
                    <div className="dropdown show-dropdown">
                        <button type='button' className="dropdown-btn" onClick={() => console.log('Logout')}>
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Navbar