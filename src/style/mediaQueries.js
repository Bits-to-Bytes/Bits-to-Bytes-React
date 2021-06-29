const size = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "430px",
    tablet: "834px",
    laptop: "1280px",
    laptopL: "1440px",
    desktop: "2560px",
};
const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
};

export { device, size };
