export const handleMouseDown = e => {
  e.preventDefault();
  const startY = e.clientY;
  const thumbStartY = thumb.current.getBoundingClientRect().top;

  const handleMouseMove = e => {
    const deltaY = e.clientY - startY;
    const thumbY = Math.min(
      scrollbar.current.offsetHeight - thumb.current.offsetHeight,
      Math.max(
        0,
        thumbStartY + deltaY - scrollbar.current.getBoundingClientRect().top
      )
    );
    const scrollPercent =
      thumbY / (scrollbar.current.offsetHeight - thumb.current.offsetHeight);
    const scrollY =
      scrollPercent * (document.body.scrollHeight - window.innerHeight);

    window.scrollTo(0, scrollY);
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
};
