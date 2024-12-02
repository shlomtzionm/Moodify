import LoginIcon from '@mui/icons-material/Login';
import IconButton from '@mui/material/IconButton';

type LoginButtonProps={
    handleLogin:()=>void
}

export const LoginButton: React.FC<LoginButtonProps> = ({handleLogin}) => {
  return (<div>
      <IconButton onClick={handleLogin}>
        <LoginIcon />
      </IconButton>
  </div>);
};
