const cardImgWrappers = document.querySelectorAll(".card-img-wrapper");

cardImgWrappers.forEach((wrapper) => {
  const link = wrapper.querySelector(".card-link");
  const img = wrapper.querySelector("img");

  const handleHover = () => {
    if (link && img) {
      link.style.display = "block";
      img.style.opacity = "0.7";
    }
  };

  const handleLeave = () => {
    if (link && img) {
      link.style.display = "none";
      img.style.opacity = "1";
    }
  };

  wrapper.addEventListener("mouseenter", handleHover);
  wrapper.addEventListener("mouseleave", handleLeave);
  wrapper.addEventListener("touchstart", handleHover);
  wrapper.addEventListener("touchend", handleLeave);
});
