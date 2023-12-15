const dev = {
    baseURL: 'http://localhost:3000/',
  };
  
  const prod = {
    baseURL: 'https://production-url/',
  };
  
  const config = process.env.NODE_ENV === 'production' ? prod : dev;
  
  export default config;