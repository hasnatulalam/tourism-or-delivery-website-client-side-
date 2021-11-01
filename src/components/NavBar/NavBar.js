import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const NavBar = () => {
    const { user, logOut } = useAuth();

    return (
        <div className='border-bottom'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top" fixed="top">
                <Container className='py-1'>
                <div className="d-flex">
                        <img src="https://i.ibb.co/fddSCHM/logo-sticky.png" style={{ height: '50px', width: '100px' }} alt="" />
                      
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <nav className="ms-lg-5 me-auto">
                            <div className='d-md-block d-lg-inline'>
                                <Link className="text-dark text-decoration-none me-4" to='/home'>Home</Link>
                            </div>
                            {user.email && <div className='d-md-block d-lg-inline'>
                                <Link className="text-dark text-decoration-none me-4" to='/myOrders'>My orders</Link>
                            </div>}
                            {user.email && <div className='d-md-block d-lg-inline'>
                                <Link className="text-dark text-decoration-none me-4" to='/managerOrders'>Manage all orders</Link>
                            </div>}
                            {user.email && <div className='d-md-block d-lg-inline'>
                                <Link className="text-dark text-decoration-none me-4" to='/addNewService'>Add a new Service</Link>
                            </div>}
                        </nav>
                        <hr className='d-md-block d-lg-none' />
                        <div>
                            <span>{user.displayName}</span>
                        </div>
                        {user.email ? <button onClick={logOut} className='btn btn-dark ms-3'>
                            Log out
                        </button> :
                            <button className='btn btn-dark ms-3'>
                                <Link className='text-light text-decoration-none' to='/login'>Login</Link>
                            </button>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;