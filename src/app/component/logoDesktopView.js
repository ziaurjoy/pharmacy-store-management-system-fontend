import logo_s from "../style/assets/img/logo-s.png";
import logo from "../style/assets/img/logo.png";
import Image from "next/image";
export default function LogoDesktopView({ showLogo }) {
  return (
    <div className='logo desktop-view'>
      <a href='/'>
        <Image
          height={40}
          width={40}
          className={showLogo}
          src={logo_s}
          alt='logo'
        />
        <Image
          height={40}
          width={200}
          className='big-logo'
          src={logo}
          alt='logo'
        />
      </a>
    </div>
  );
}
