import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'

const Error = () => (
    <Wrapper className='full-page'>
        <div>
            <img src={img} alt='not-found' className='full-page' />
            <h3>Ohh! Page Not Found</h3>
            <p>We cant seem to find the page you're looking for</p>
            <Link to="/">Back Home</Link>
        </div>
    </Wrapper>
)

export default Error