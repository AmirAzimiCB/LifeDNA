import Toaster from "../ui/Toaster";
import { useState, useEffect } from "react";
import EditItemQuantityButton from "./EditItemQuantityButton";

const CartUpdate = ({ item }) => {
  const [feedback, setFeedback] = useState({
    status: 0,
    message: "",
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setFeedback({
        ...feedback,
        status: 0,
        message: "",
      });
    }, 4000);
    return () => {
      clearTimeout(timer);
    };
  }, [feedback]);
  return (
    <>
      <div className="flex items-center rounded-full border border-[#CACACA]">
        <EditItemQuantityButton
          item={item}
          type="minus"
          handleError={(e) => {
            setFeedback({
              ...feedback,
              status: -1,
              message: e,
            });
          }}
        />
        <span className="w-fit px-3 text-sm">{item.quantity}</span>
        <EditItemQuantityButton
          item={item}
          type="plus"
          handleError={(e) => {
            setFeedback({
              ...feedback,
              status: -1,
              message: e,
            });
          }}
        />
      </div>
      <Toaster
        show={feedback.status}
        status={feedback.status}
        message={feedback.message}
      />
    </>
  );
};

export default CartUpdate;
