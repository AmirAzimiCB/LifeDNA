const CartHeader = ({ handleClose }) => {
  return (
    <header className="flex items-center justify-between py-6 p-4">
      <h2 className="text-lg font-semibold">YOUR CART</h2>
      <button
        type="button"
        title="close cart"
        onClick={handleClose}
        className="inline-flex w-11 h-11 rounded-lg items-center justify-center"
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 22 22"
          fill="none"
          className="transition-transform hover:scale-110"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L11 11M11 11L21 21M11 11L1 21M11 11L21 1"
            stroke="currentColor"
          />
        </svg>
      </button>
    </header>
  );
};

export default CartHeader;
