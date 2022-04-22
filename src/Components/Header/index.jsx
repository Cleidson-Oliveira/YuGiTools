import { Wrapper, Logo } from "./styles";
import BG from "../../Images/logo.png"

export default function Header () {
    return (
        <Wrapper>
            <Logo bg={BG}/>
        </Wrapper>
    )
}