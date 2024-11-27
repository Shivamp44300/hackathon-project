function Button({ backgroundColor, hoverColor, border, color, children }) {
  return (
    <button
      className={`${backgroundColor} rounded-lg py-2 px-8 outline-0 border-collapse text-white ${hoverColor} ${border} ${color}`}
    >
      {children}
    </button>
  );
}

export default Button;
