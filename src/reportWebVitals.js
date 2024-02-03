import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry, true);
      getFID(onPerfEntry, true);
      getFCP(onPerfEntry, true);
      getLCP(onPerfEntry, true);
      getTTFB(onPerfEntry, true);
    });
  }
};

export default reportWebVitals;