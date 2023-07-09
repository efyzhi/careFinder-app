import { render, screen } from '@testing-library/react'
import NavBar from '../comps/NavBar'


describe('Navbar', () => [
    test('renders all navigation links', () => {
        render(<NavBar />;)

        const homeLink = screen.getByRole('link', { name: /home/i });
        const aboutLink = screen.getByRole('link', { name: /about/i });
        const findhospitalLink = screen.getByRole('link', { name: /find hospital/i });
        const loginLink = screen.getByRole('link', { name: /login/i });
        const signUpLink = screen.getByRole('link', { name: /sign up/i });

        expect(homeLink).toBeInTheDocument();
        expect(aboutLink).toBeInTheDocument();
        expect(findhospitalLink).toBeInTheDocument();
        expect(loginLink).toBeInTheDocument();
        expect(signUpLink).toBeInTheDocument();
        
    })
])