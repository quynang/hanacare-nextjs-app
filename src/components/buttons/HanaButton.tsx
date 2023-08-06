import { Button, ButtonProps } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';

const hanaButtonTheme: CustomFlowbiteTheme = {
button: {
  color: {
    primary: 'bg-red-500 hover:bg-red-600',
  },
},
};

interface HanaButtonProps extends ButtonProps {}

const HanaButton: React.FC<HanaButtonProps> = (props) => {
  return <Button theme={hanaButtonTheme} {...props} />;
};

export default HanaButton;
