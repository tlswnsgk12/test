import { useState, useEffect } from "react";

const HiddenBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos === 0) {
      setIsHidden(false);
    } else if (currentScrollPos > prevScrollPos && !isHidden) {
      // Scrolling down
      setIsHidden(true);
    } else if (currentScrollPos < prevScrollPos && isHidden) {
      // Scrolling up
      setIsHidden(false);
    }

    // Update the previous scroll position
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHidden, prevScrollPos]);

  return (
    <div className={`hidden-div ${isHidden ? "hide" : "show"}`}>
      <div>FREE SHIPPING ON ORDERS OVER $50</div>
    </div>
  );
};
export default HiddenBar;
