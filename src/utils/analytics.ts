import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-6KCXF15P48');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};