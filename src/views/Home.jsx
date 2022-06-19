import { Logo } from "../components/logo/Logo"
import { Container, Nav } from "./Home"

export const Home = () => {
    
   return (
    <Container>
        <Logo />
        <Nav>
            <ul className="link-menu">
                <li>Home</li>
            </ul>
            <ul className="link-social">
                <li>link</li>
                <li>link</li>
            </ul>
        </Nav>
    </Container>
   )
}
