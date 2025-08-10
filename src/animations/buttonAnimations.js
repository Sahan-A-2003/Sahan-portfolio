export const initMagnetoEffect = (magnetoRef, textRef) => {
  if (!magnetoRef.current || !textRef.current) return;

  const magneto = magnetoRef.current;
  const magnetoText = textRef.current;

  const activateMagneto = (event) => {
    let boundBox = magneto.getBoundingClientRect();
    const magnetoStrength = 40;
    const magnetoTextStrength = 90;
    const newX = (event.clientX - boundBox.left) / magneto.offsetWidth - 0.5;
    const newY = (event.clientY - boundBox.top) / magneto.offsetHeight - 0.5;

    window.gsap.to(magneto, {
      duration: 1,
      x: newX * magnetoStrength,
      y: newY * magnetoStrength,
      ease: "power4.out",
    });

    window.gsap.to(magnetoText, {
      duration: 1,
      x: newX * magnetoTextStrength,
      y: newY * magnetoTextStrength,
      ease: "power4.out",
    });
  };

  const resetMagneto = () => {
    window.gsap.to(magneto, {
      duration: 1,
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.3)",
    });

    window.gsap.to(magnetoText, {
      duration: 1,
      x: 0,
      y: 0,
      ease: "elastic.out(1, 0.3)",
    });
  };

  magneto.addEventListener("mousemove", activateMagneto);
  magneto.addEventListener("mouseleave", resetMagneto);

  // Cleanup on unmount
  return () => {
    magneto.removeEventListener("mousemove", activateMagneto);
    magneto.removeEventListener("mouseleave", resetMagneto);
  };
};
