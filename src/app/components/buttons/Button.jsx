"use client";

const Button = ({
  className = "",
  type = "button",
  htmlType = "submit",
  onClick = () => {},
  children,
  disabled,
  ...props
}) => {
  return (
    <button
      className={`bg-custom-purple text-white rounded py-3 px-3 hover:text-white hover:border hover:border-custom-purple ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      htmltype={htmlType}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
