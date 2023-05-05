import TagManager from 'react-gtm-module';

const tagManagerArgs = {
  gtmId: 'G-XKGMLLE3CF',
};

export const initGTM = () => {
  TagManager.initialize(tagManagerArgs);
};

export const logPageView = () => {
  if (typeof window !== 'undefined' && !!window.dataLayer) {
    window.dataLayer.push({
      event: 'pageview',
      page: {
        url: window.location.pathname,
      },
    });
  }
};

declare global {
  interface Window {
    dataLayer: any;
  }
}