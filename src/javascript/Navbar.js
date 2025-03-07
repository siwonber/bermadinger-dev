export const handleScroll = (menuOpen, setScrolling) => {
    const onScroll = () => {
      if (!menuOpen) {
        setScrolling(window.scrollY > 50);
      }
    };
  
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  };
  