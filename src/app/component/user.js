import Image from "next/image";
import user from "../style/assets/img/user.png";

export default function User() {
  return (
    <div className='user'>
      <Image className='img-fluid' src={user} alt='' />
      <h4>HOLOPZD ANBEPZD</h4>
      <p>
        <span className='dot'></span> admin
      </p>
    </div>
  );
}
