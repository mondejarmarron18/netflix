import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import path from "../../utils/path";

const Register = () => {
  const [viewPrivacyPolicy, setViewPrivacyPolicy] = useState(false);
  const { action, loading, error } = useUser();
  const navigate = useNavigate();
  const [user, setUser] = useState<Omit<TUser, "created">>({
    email: "",
    password: "",
  });

  const handleUser = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await action.signUp(user);

    if (error) navigate("/");
  };

  return (
    <div className="flex flex-col bg-hero h-full bg-black sm:bg-[rgba(0,0,0,.5)] bg-blend-overlay overflow-y-auto scrollbar-thin scrollbar-thumb-gray-900">
      <img
        src={`${path.public}/assets/images/logo.png`}
        alt=""
        className="h-6 sm:h-11 self-start m-5 sm:my-6 sm:m
        x-10"
      />
      <div className="flex flex-1 justify-center items-center">
        <form
          onSubmit={handleOnSubmit}
          className="flex flex-col gap-3 w-full max-w-[450px] p-5 sm:m-5 sm:p-12 bg-[rgba(0,0,0,.8)] rounded"
        >
          <div className="font-semibold mb-2 text-3xl text-white">
            Create an account
          </div>
          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded text-sm outline-none"
            name="email"
            onChange={handleUser}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded text-sm outline-none"
            name="password"
            onChange={handleUser}
          />
          <div className="text-primary text-sm">{error}</div>
          <button className="p-3 mt-7 bg-primary text-white font-semibold rounded cursor-pointer">
            {loading ? "Logging in..." : "Register"}
          </button>
          <div className="flex justify-end text-sm text-gray-400">
            <div>Need help?</div>
          </div>

          <div className="text-gray-400 text-sm mt-7">
            New to Netflix?{" "}
            <Link to="/login" className="text-white">
              Login
            </Link>
          </div>
          <div className="text-gray-400 text-xs">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <button
              className="text-blue-500"
              onClick={() => setViewPrivacyPolicy(!viewPrivacyPolicy)}
            >
              Learn more.
            </button>
          </div>
          {viewPrivacyPolicy && (
            <div className="text-gray-400 text-xs">
              The information collected by Google reCAPTCHA is subject to the
              Google{" "}
              <a
                href="https://policies.google.com/privacy"
                className="text-blue-500"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                className="text-blue-500"
              >
                Terms of Service
              </a>
              , and is used for providing, maintaining, and improving the
              reCAPTCHA service and for general security purposes (it is not
              used for personalized advertising by Google).
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
