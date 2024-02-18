
import jwt from "jsonwebtoken";


function generateToken(username) {
    try {
    return jwt.sign({ username }, 'secret', {  expiresIn : '3d' });
        
    } catch (error) {
        console.error(error)
    }
  }
  export default generateToken;