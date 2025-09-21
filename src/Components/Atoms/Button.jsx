/* eslint-disable react/prop-types */
function Button({ btnClass, ariaLabel, onClick, children }) {
    return (
        <button className={btnClass} aria-label={ariaLabel}  onClick={onClick}>
          {children}
        </button>
    );
}

export default Button;