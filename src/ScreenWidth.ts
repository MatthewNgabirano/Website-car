export const getScreenWidth = () => window.innerWidth;

export const isMobile = () => window.innerWidth <= 768;

export const isTablet = () =>
  window.innerWidth > 768 && window.innerWidth <= 992;
