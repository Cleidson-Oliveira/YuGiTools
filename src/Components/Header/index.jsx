import { Link } from "react-router-dom";
import { Wrapper, Logo, Menu } from "./styles";
import BG from "../../Images/logo.png";

export default function Header () {
    return (
        <Wrapper>
            <Logo bg={BG}/>
            <Menu>
                <li><Link to="/">Consultar cards</Link></li>
                <li><Link to="/calculator">Calculadora</Link></li>
            </Menu>
        </Wrapper>
    )
}