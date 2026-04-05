import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/api/auth/signup", {
        username,
        email,
        password,
      });

      

      console.log(res.data);
      // ✅ Save userId (make sure backend returns _id in user object)
      if (res.data.user && res.data.user._id) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }
      alert("Signup successful!");
      window.location.href = `http://localhost:3001?token=${res.data.token}&userId=${res.data.user._id}&username=${res.data.user.username}`;

    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.error || "Signup failed");
    }
  };

  return (
    <form onSubmit={handleSignup}>
      <div className="signup-container">
          <div className="signuppage p-5">
        <h2>Create an Account</h2>
        <br></br>
        <label>Username :</label>
        <br></br>
        <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br></br>
      <br></br>
      <label>Email :</label><br></br>
      <input
        type="email"
        placeholder="Enter your Email id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br></br>
      <br></br>
      <label>Password : </label><br></br>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br></br>
      <br></br>
      <button type="submit" style={{backgroundColor:"green", padding: "7px"}}>Sign Up</button>

      <br></br>
      
      <p>Already have an account? <a href="/login">Login</a></p>

      </div>
      
   
      </div>
       </form>
      
  );
}

export default SignUp;
