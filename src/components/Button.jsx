const Button = ({ children, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`px-5 py-2 rounded-full border border-blue-950 bg-yellow-200 text-blue-950 text-xl font-medium cursor-pointer ${className}`}>
      {children}
    </button>
  );
};

export default Button;
