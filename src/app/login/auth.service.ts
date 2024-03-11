import {BehaviorSubject} from "rxjs";

export class AuthService{

  loggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn = this.loggedIn.asObservable();
  private users = [
    {email:'test@test.com',password:"123456"},
    {email:'abc@test.com',password:"123456"},
  ]

  findUser(email: string, password: string) {
    for(const user of this.users){
      if(user.email === email && user.password === password){
        return user;
      }
    }
    return null;
  }
  login(email:string,password:string){
    const user = this.findUser(email,password)

    if(user){
      this.loggedIn.next(true);
      return true;
    }

    return false;
  }
}
