let _authService : any = null;
let _auth = true;

export default class AuthService{
    public static get instance() : AuthService{
        if(_authService == null)
            _authService = new AuthService();
        return _authService;
    }
    public get authenticated(){
        return _auth;
    }
    
}