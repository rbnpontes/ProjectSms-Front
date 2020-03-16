let _authService : any = null;
export default class AuthService{
    public static get instance() : AuthService{
        if(_authService == null)
            _authService = new AuthService();
        return _authService;
    }
    public get authenticated(){
        return Boolean(localStorage.getItem('auth'));
    }
    public set authenticated(value : boolean){
        localStorage.setItem('auth', value ? '1' : '');
    }
}