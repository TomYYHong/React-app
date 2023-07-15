import React, { Children } from "react";

interface Props {
  children: String;
  onClick: () => void;
  //optional, can set color not in constructer
  color?: string;
  //only can set color in one of below
  //color: 'primary' | 'secondary' | 'danger';
}

const Button = ({ children, onClick, color }: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
