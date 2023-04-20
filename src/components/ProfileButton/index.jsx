import { Button } from "./style";
import { Link } from "react-router-dom";

const ProfileButton = () => {
  return (
    <>
      <Button>
        <Link to="/aboutMe">Sobre Mim</Link>
      </Button>
    </>
  );
};

export default ProfileButton;
