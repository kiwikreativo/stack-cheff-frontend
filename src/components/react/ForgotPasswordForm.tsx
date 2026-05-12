import { useState } from "react";

export default function ForgotPasswordForm() {
  const [step, setStep] = useState<"reset" | "confirm">("reset");
  const [formData, setFormData] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    setCode(value);
    setError("");
  };

  const handleResetSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.email || !formData.newPassword || !formData.confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (formData.newPassword.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Move to confirmation step
    setStep("confirm");
  };

  const handleCodeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (code.length !== 4) {
      setError("Please enter the 4-digit code");
      return;
    }

    console.log("Password reset confirmed with code:", code);
    // Handle verification here
  };

  const handleBackToReset = () => {
    setStep("reset");
    setCode("");
    setError("");
  };

  return (
    <div
      className="flex flex-col justify-center items-center bg-[rgba(199,221,235,0.8)] text-[#333] mt-[15px] p-3 xs:p-4 sm:p-8 min-h-screen w-full"
    >
      <a
        href="/login"
        className="self-start mb-4 mt-5 xs:mb-6 sm:mb-8 sm:ml-[35%] md:ml-[35%] lg:ml-[35%] ml-0 xs:ml-0 text-[#333] text-sm xs:text-base no-underline"
        style={{ textDecoration: "none", color: "#0a2540" }}
      >
        <i className="fa-solid fa-arrow-left text-black"></i> Back to login
      </a>
      <div
        className="bg-[rgba(199,221,235,0.3)] py-5 xs:p-5 sm:p-8 shadow-md w-full h-auto xs:w-[25rem] sm:w-[35rem] md:w-[32rem] lg:w-[32rem] max-w-[20rem] xs:max-w-[24rem] sm:max-w-[32rem]"
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
              <i className="fa-solid fa-key" style={{ fontSize: "1.5rem" }}></i>
            </span>
            <h1 className="mb-0 font-bold text-2xl xs:text-3xl sm:text-4xl text-[#0a2540]">
              Reset Password
            </h1>
          </div>

          {step === "reset" ? (
            <>
              <span className="block mb-4 xs:mb-5 text-base xs:text-lg">
                Enter your email and create a new password.
              </span>

              <form onSubmit={handleResetSubmit} className="flex flex-col gap-3 xs:gap-4">
                {/* Email Field */}
                <div className="email relative">
                  <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a2540] text-xl"
                    style={{ top: "30%" }}
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
                  />
                </div>

                {/* New Password Field */}
                <div className="new-password mt-4 relative">
                  <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a2540] text-xl"
                    style={{ top: "30%" }}
                  >
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <label
                    htmlFor="newPassword"
                    className="block uppercase mb-1 xs:mb-2 mt-2 text-xs sm:text-sm"
                  >
                    New Password
                  </label>
                  <input
                    id="newPassword"
                    name="newPassword"
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="form-input flex w-full rounded-lg text-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 border-glass-border bg-white/50 focus:bg-white h-12 xs:h-12 sm:h-14 placeholder:text-[#0a2540]/30 pl-10 xs:pl-12 text-sm sm:text-base font-medium transition-all"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>

                {/* Confirm Password Field */}
                <div className="confirm-password mt-4 relative">
                  <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#0a2540] text-xl"
                    style={{ top: "30%" }}
                  >
                    <i className="fa-solid fa-lock"></i>
                  </span>
                  <label
                    htmlFor="confirmPassword"
                    className="block uppercase mb-1 xs:mb-2 mt-2 text-xs sm:text-sm"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="form-input flex w-full rounded-lg text-[#0a2540] focus:ring-2 focus:ring-[#0a2540]/20 border-glass-border bg-white/50 focus:bg-white h-12 xs:h-12 sm:h-14 placeholder:text-[#0a2540]/30 pl-10 xs:pl-12 text-sm sm:text-base font-medium transition-all"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}

                <button
                  type="submit"
                  className="font-bold mt-4 w-full bg-[#0a2540] text-white py-3 xs:py-4 px-3 xs:px-4 rounded-xl cursor-pointer border-none text-base sm:text-lg"
                  style={{ borderRadius: "10px" }}
                >
                  Confirm Password <i className="fa-solid fa-check ml-2 xs:ml-3 text-xl"></i>
                </button>
              </form>
            </>
          ) : (
            <>
              <span className="block mb-4 xs:mb-5 text-base xs:text-lg text-center">
                We sent a code to <strong>{formData.email}</strong>
              </span>
              <span className="block mb-4 xs:mb-5 text-sm text-[#0a2540]/70">
                Enter the 4-digit code to reset your password.
              </span>

              <form onSubmit={handleCodeSubmit} className="flex flex-col items-center">
                {/* 4-Digit Code Input */}
                <div className="flex gap-3 xs:gap-4 mb-6">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={code[0] || ""}
                    onChange={(e) => {
                      const newCode = code.split("");
                      newCode[0] = e.target.value.replace(/\D/g, "").slice(-1);
                      setCode(newCode.join(""));
                    }}
                    className="w-12 h-14 xs:w-14 xs:h-16 text-center text-2xl font-bold rounded-lg border-2 border-[#0a2540]/20 bg-white focus:bg-white focus:border-[#0a2540] transition-all"
                    style={{ borderColor: code[0] ? "#0a2540" : "rgba(10,37,64,0.2)" }}
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={code[1] || ""}
                    onChange={(e) => {
                      const newCode = code.split("");
                      newCode[1] = e.target.value.replace(/\D/g, "").slice(-1);
                      setCode(newCode.join(""));
                    }}
                    className="w-12 h-14 xs:w-14 xs:h-16 text-center text-2xl font-bold rounded-lg border-2 border-[#0a2540]/20 bg-white focus:bg-white focus:border-[#0a2540] transition-all"
                    style={{ borderColor: code[1] ? "#0a2540" : "rgba(10,37,64,0.2)" }}
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={code[2] || ""}
                    onChange={(e) => {
                      const newCode = code.split("");
                      newCode[2] = e.target.value.replace(/\D/g, "").slice(-1);
                      setCode(newCode.join(""));
                    }}
                    className="w-12 h-14 xs:w-14 xs:h-16 text-center text-2xl font-bold rounded-lg border-2 border-[#0a2540]/20 bg-white focus:bg-white focus:border-[#0a2540] transition-all"
                    style={{ borderColor: code[2] ? "#0a2540" : "rgba(10,37,64,0.2)" }}
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={code[3] || ""}
                    onChange={(e) => {
                      const newCode = code.split("");
                      newCode[3] = e.target.value.replace(/\D/g, "").slice(-1);
                      setCode(newCode.join(""));
                    }}
                    className="w-12 h-14 xs:w-14 xs:h-16 text-center text-2xl font-bold rounded-lg border-2 border-[#0a2540]/20 bg-white focus:bg-white focus:border-[#0a2540] transition-all"
                    style={{ borderColor: code[3] ? "#0a2540" : "rgba(10,37,64,0.2)" }}
                  />
                </div>

                {error && (
                  <p className="text-red-500 text-sm text-center mb-4">{error}</p>
                )}

                <button
                  type="submit"
                  className="font-bold w-full bg-[#0a2540] text-white py-3 xs:py-4 px-3 xs:px-4 rounded-xl cursor-pointer border-none text-base sm:text-lg"
                  style={{ borderRadius: "10px" }}
                >
                  Verify Code <i className="fa-solid fa-shield-check ml-2 xs:ml-3 text-xl"></i>
                </button>

                <button
                  type="button"
                  onClick={handleBackToReset}
                  className="mt-4 text-[#0a2540]/70 text-sm hover:text-[#0a2540] transition-colors"
                >
                  <i className="fa-solid fa-arrow-left mr-2"></i>
                  Back to reset password
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-[#0a2540]/70 text-xs sm:text-sm">
                  Didn't receive the code?
                  <button
                    type="button"
                    className="ml-1 text-[#0a2540] font-black bg-transparent border-none cursor-pointer"
                    style={{ color: "#0a2540" }}
                  >
                    Resend
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}