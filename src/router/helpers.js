import Cookies from 'js-cookie'

function isAuthenticated() {
    
    const token = Cookies.get('token')
    
    return !!token 
  }

  export  { isAuthenticated };