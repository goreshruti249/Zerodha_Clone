import { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/api/auth/login", {
        email,
        password,
      });

      console.log(res.data);

      // Save token in localStorage (so you can use it later for protected routes)
      localStorage.setItem("token", res.data.token);
      // ✅ Save token + userId

      if (res.data.user) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
      }

      alert("Login successful!");
      window.location.href = `http://localhost:3001?token=${res.data.token}&userId=${res.data.user._id}&username=${res.data.user.username}`;
 // redirect after login
    } catch (err) {
      console.error(err.response?.data);
      alert(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="login-container">
        <div className="login p-4 ">
          <h2>Login</h2>
          <br></br>
          <label>Email : </label>
          <br></br>
          <input
            type="email"
            placeholder="Enter your Email id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br><br></br>
          <label>Password :</label>
          <br></br>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br></br><br></br>
          <button type="submit" className="btn btn-success">Login</button>
          <br></br>

        </div >
      </div>

    </form>

  );
}

export default Login;
