import "./Exercise2.css";

function Exercise2() {
  return (
    <div class="login-container">
      <form class="login-form">
        <h2>Login</h2>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" />
        <label for="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Exercise2;
