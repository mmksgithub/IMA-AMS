// material-ui
import { useTheme } from '@mui/material/styles';
import logoImage from '../assets/images/ima-ams-logo.jpg'; // Import your logo image

// ==============================|| LOGO COMPONENT ||============================== //

const Logo = () => {
  const theme = useTheme();

  return (<>
   <img src={logoImage} alt="Your Logo" style={{ width: '85px', maxWidth: '100px' , marginTop:"-14px", marginLeft:"-16px", height:"75px"}} />

   <h2>IMA - AMS</h2>
   </>
  );
};

export default Logo;
