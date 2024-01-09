import { Component } from "react";

class RegistrationForm extends Component{
    render(){
        return(
            <div>
                <h2>Student Registration Form</h2>
                <form>
                <div>
                <label htmlFor="FullName">FullName</label>
                <input type="text" name="fullName" id="txtFullName" />
                </div>
                
                <div>
                <label htmlFor="Email">Email</label>
                <input type="email" name="email" id="txtEmail" />
                </div>
                
                <div><label htmlFor="Password">Password</label>
                <input type="password" name="password" id="txtPassword" /></div>
                
                <div>
                <p htmlFor="Gender">Gender</p>
                <label htmlFor="gender"> Male</label>
                <input type="radio" name="gender" id="rdGender" />
                <label htmlFor="gender"> Female</label>
                <input type="radio" name="gender" id="rdGender" />
                </div>
                
                <div>
                <label>Interest</label><br/>
                <label htmlFor="interest">Sports</label>
                <input type="checkbox" name="interest" id="chkInterest" />
                <label htmlFor="interest">Music</label>
                <input type="checkbox" name="interest" id="chkInterest" />
                </div>
                
               <div>
               <label>Age</label> <br/>
                <input type="range" name="age" id="rngAge" /> <br/>
                <span>Age:18</span>
               </div>
                
                <div><label htmlFor="birthDate">Date of Birth</label> 
                <input type="date" name="birthDate" id="dtBirthDate" /> </div>

                <button>Register</button>
                </form>
            </div>
        )
    }
}

export default RegistrationForm