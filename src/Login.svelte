<h1>Login</h1>
<form pageql:authLogin={() => {}}>
  <label for="email">Email</label>
  <input required type="email" id="email" />

  <label for="password">Password</label>
  <input required type="password" id="password" />

  <label>
    <input type="checkbox" id="remember" />
    Remember me
  </label>

  <br />
  <button type="submit">Login</button>
</form>