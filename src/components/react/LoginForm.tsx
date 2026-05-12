import { useState } from "react";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
  };

  return (
    <div
      className="flex flex-col justify-center items-center bg-[rgba(199,221,235,0.8)] text-[#333] mt-[15px] p-3 xs:p-4 sm:p-8 min-h-screen w-full"
    >
      <a
        href="/"
        className="self-start mb-4 mt-5 xs:mb-6 sm:mb-8 sm:ml-[35%] md:ml-[35%] lg:ml-[35%] ml-0 xs:ml-0 text-[#333] text-sm xs:text-base no-underline"
        style={{ textDecoration: "none", color: "#0a2540" }}
      >
        <i className="fa-solid fa-arrow-left text-black"></i> Back to main
      </a>
      <div
        className="bg-[rgba(199,221,235,0.3)] py-5 xs:p-5 sm:p-8 shadow-md w-full h-auto h-[42rem] xs:w-[25rem] sm:w-[35rem] md:w-[32rem] lg:w-[32rem] max-w-[20rem] xs:max-w-[24rem] sm:max-w-[32rem]"
        style={{
          boxShadow: "-2px 3px 37px -7px rgba(0,0,0,0.75)",
          WebkitBoxShadow: "-2px 3px 37px -7px rgba(0,0,0,0.75)",
          MozBoxShadow: "-2px 3px 37px -7px rgba(0,0,0,0.75)",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          justifySelf: "center",
          alignSelf: "center",
        }}
      >
        <div
          className="content"
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "column",
            justifySelf: "center",
            alignSelf: "center",
          }}
        >
          <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
            <span
              className="py-2 px-2 text-xl xs:py-2 px-1 xs:px-2 flex items-center justify-center bg-[#0a2540] text-white rounded-xl"
              style={{ padding: "0.5rem" }}
            >
              <i className="fa-solid fa-utensils" style={{ fontSize: "1.5rem" }}></i>
            </span>
            <h1 className="mb-0 font-bold text-2xl xs:text-3xl sm:text-4xl text-[#0a2540]">
              Stack Cheff
            </h1>
          </div>
          <span className="block mb-4 xs:mb-5 text-center xs:text-lg">
            Welcome back! Please enter your credentials.
          </span>

          <button
            type="button"
            className="mb-4 xs:mb-5 font-bold w-full bg-white text-[#0a2540] py-3 xs:py-4 px-3 xs:px-4 rounded-lg border-none cursor-pointer whitespace-nowrap text-base xs:text-lg"
            style={{ borderRadius: "10px" }}
          >
            <i className="fa-brands fa-github mr-2 xs:mr-3 text-xl"></i>
            Continue with Github
          </button>

          <div className="flex flex-row items-center gap-2 mb-3 xs:mb-4">
            <div className="flex-1">
              <hr />
            </div>
            <p className="text-xs sm:text-sm uppercase whitespace-nowrap">
              Or continue with email
            </p>
            <div className="flex-1">
              <hr />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2 xs:gap-3">
            {/* Email Field */}
            <div className="email relative">
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a2540] text-xl"
                style={{ top: "67%" }}
              >
                <i className="fa-regular fa-envelope"></i>
              </span>
              <label
                htmlFor="email"
                className="block uppercase mb-1 xs:mb-2 mt-2 text-xs sm:text-sm"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input flex w-full rounded-lg text-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 border-glass-border bg-white/50 focus:bg-white h-12 xs:h-12 sm:h-14 placeholder:text-[#0a2540]/30 pl-10 xs:pl-12 text-sm sm:text-base font-medium transition-all"
                placeholder="chef@stack.io"
                type="email"
                required
              />
            </div>

            {/* Password Field */}
            <div className="password mt-5 relative">
              <span
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a2540] text-xl"
                style={{ top: "67%" }}
              >
                <i className="fa-solid fa-lock"></i>
              </span>
              <div className="row flex justify-between">
                <div className="col-6">
                  <label
                    htmlFor="password"
                    className="block uppercase mt-2 text-xs sm:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="col-6">
                  <a
                    href="#"
                    className="block text-right mt-3 mb-2 text-sm xs:text-sm no-underline text-[#0a2540]/70"
                    style={{ textDecoration: "none", color: "#0a2540" }}
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <input
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input flex w-full rounded-lg text-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 border-glass-border bg-white/50 focus:bg-white h-12 xs:h-12 sm:h-14 placeholder:text-[#0a2540]/30 pl-10 xs:pl-12 text-sm sm:text-base font-medium transition-all"
                placeholder="••••••••"
                type="password"
                required
              />
            </div>

            <button
              type="submit"
              className="font-bold mt-5 xs:mt-3 w-full bg-[#0a2540] text-white py-3 xs:py-3 sm:py-4 px-3 xs:px-4 rounded-xl cursor-pointer border-none text-base sm:text-lg"
              style={{ borderRadius: "10px" }}
            >
              Sign in to Kitchen <i className="fa-solid fa-utensils ml-2 xs:ml-3 text-xl"></i>
            </button>
          </form>

          <div className="mt-3 xs:mt-4 text-center">
            <p className="text-[#0a2540]/70 font-medium text-xs sm:text-sm">
              Don't have an account?
              <a
                className="ml-1 text-[#0a2540] font-black no-underline"
                href="/register"
                style={{ textDecoration: "none", color: "#0a2540" }}
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}