import AuthLayout from "@/layouts/AuthLayout";
import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import loginImage from "@/assets/images/signup.png";

// import { Image } from "@/components/Image";
// import { GoalIcon } from "lucide-react";
import { Image } from "@/components/Image";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

function Otp() {
  const navigate = useNavigate();
  const inputsRef = useRef([]);
  const [timeLeft, setTimeLeft] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setCanResend(true);
      return;
    }

    if (!canResend) {
      const timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft, canResend]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value;

    if (value && index < 5) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otp = inputsRef.current.map((input) => input.value).join("");
    console.log("Entered OTP:", otp);

    navigate("/pricing"); // ✅ using React Router
  };

  const handleResendOtp = (e) => {
    e.preventDefault();
    if (!canResend) return;

    setTimeLeft(30);
    setCanResend(false);

    console.log("Resending OTP...");
  };

  return (
    <AuthLayout
      imageSrc={loginImage}
      imageAlt="Login background"
      overlayTitle="Smart Call Automation 
for Modern Teams"
      overlaySubtitle="Teldrip Connect automates calling, logs business interactions, and delivers actionable insights—all seamlessly integrated with your favorite workflow tools for effortless communication and productivity."
    >
      <form className="signup-form" onSubmit={handleSubmit}>
        <h3 className="text-center font-medium text-black text-xl mb-5">
          Email Verification
        </h3>

        <div className="mt-3">
          <label className="block text-primary-500 mb-2 font-medium text-sm">
            Enter OTP
          </label>
          <div className="flex gap-2 text-center">
            {[...Array(6)].map((_, i) => (
              <Input
                key={i}
                type="text"
                className="text-center"
                placeholder="-"
                maxLength={1}
                ref={(el) => (inputsRef.current[i] = el)}
                onChange={(e) => handleChange(e, i)}
                onKeyDown={(e) => handleKeyDown(e, i)}
              />
            ))}
          </div>

          <div className="mt-2 block text-primary-500 pb-5 font-medium text-sm">
            {canResend ? (
              <Link to="#" onClick={handleResendOtp}>
                Resend OTP
              </Link>
            ) : (
              <p className="" style={{ color: "#8071DD", fontSize: "1rem" }}>
                Resend OTP in {timeLeft} seconds
              </p>
            )}
          </div>
        </div>
        <Button label={"Submit"} />
        <p className="mt-2   text-center text-sm text-primary-400">
          <Link to="/account-setup" className="text-primary">
            Submit
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}

export default Otp;
