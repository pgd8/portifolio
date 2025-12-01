document.addEventListener("mousemove", (e) => {
  const flutter = document.querySelector(".flutter-logo");
  const dart = document.querySelector(".dart-logo");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  flutter.style.transform = `translate(${x * 60}px, ${y * 60}px)`;
  dart.style.transform = `translate(${-x * 60}px, ${-y * 60}px)`;
});
