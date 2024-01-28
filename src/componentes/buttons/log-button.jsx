import LogoGooglePequeno from "../../assets/google 16x16.png";
import LogoFacebookPequeno from "../../assets/facebook-16x6.png";

const isMobile = window.innerWidth <= 475;


function SocialLoginButton({ logo, text, hoverColor }) {
    return (
        <div className={`w-full border border-gray-200 py-2 px-3 flex gap-3 justify-center items-center hover:scale-105 duration-300 hover:text-white hover:bg-${hoverColor}`}>
            {isMobile && text === 'Entrar com o Facebook' ? (
                <img src={LogoFacebookPequeno} alt="Logo Rede Social" />
            ) : isMobile && text === 'Entrar com o Google' ? (
                <img src={LogoGooglePequeno} alt="Logo Rede Social" />
            ) : (
                <img src={logo} alt="Logo Rede Social" />
            )}
            <a href="#">{text}</a>
        </div>
    );
}

export default SocialLoginButton;
