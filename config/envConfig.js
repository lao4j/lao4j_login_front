const isPro = Object.is(process.env.NODE_ENV, 'production')
 
console.log(process.env.NODE_ENV)
 
export const baseURL = isPro ? 'wwww.xxx.com/' : 'http://localhost:8081'
