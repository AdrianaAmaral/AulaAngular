import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 // user: Observable<firebase.User>;
  authError: any;
  
  
  constructor(public firebaseAuth: AngularFireAuth) {
  //this.user = firebaseAuth.authState;
    
  }

  loginWithEmail(email:string, senha:string){
  let thisService = this;
  thisService.authError = null;
  this.firebaseAuth.signInWithEmailAndPassword(email,senha)
  .then(() =>{
    alert("usuário logado")
  }
  ).catch((error)=>{
  console.log(error.message);
  alert("usuario ou senha inexistente")
  thisService.authError = error;
      
  })
  }
}



