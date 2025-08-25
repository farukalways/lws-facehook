const LoginForm = () => {
  return (
    <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
      <div className="form-control">
        <label className="auth-label" for="email">
          Email
        </label>
        <input className="auth-input" name="email" type="email" id="email" />
      </div>
      <div className="form-control">
        <label className="auth-label" for="email">
          Password
        </label>
        <input
          className="auth-input"
          name="password"
          type="password"
          id="password"
        />
      </div>
      <button
        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
