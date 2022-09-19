import { Container } from "./style";
import img from "../../assets/img/img.jpg";
import ProfileButton from "../../components/ProfileButton";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
    
    return (
        <>
        <Container>
            <section className="description">
              <p>Oi, eu sou</p> 
            <TypeAnimation
                sequence={[
                    'Eduardo Motta Ishimura!',
                    1000,
                ]}
                speed={50}
                style={{ fontSize: '1em'}}
                wrapper="p"
                repeat={Infinity} 
            />
                <p className="stack">" Desenvolvedor Front-end Jr."</p>
            </section>
            <section className="profile">
                <img src={img} alt="profile_Picture"/>
            </section>
        <section className="button">
            <ProfileButton />
        </section>
        </Container>
        </>
    )
}

export default Main;