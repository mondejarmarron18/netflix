import { FormEvent, FC } from "react";
import { useNavigate } from "react-router-dom";
import EmailInput from "../../components/EmailInput";
import Header from "../../components/Header";

interface IProps {
  className?: string;
}

const Hero: FC<IProps> = ({ className }) => {
  const navigate = useNavigate();

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("dashboard");
  };

  return (
    <div
      className={`odd:flex flex-col bg-hero bg-cover h-full w-full bg-[rgba(0,0,0,0.7)] bg-blend-overlay ${className}`}
    >
      <Header />
      <div className="flex-1 flex flex-col justify-center items-center p-8 gap-3">
        <div className="max-w-[500px] text-white text-center flex flex-col gap-3">
          <h1 className="text-3xl sm:text-5xl font-medium">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="text-lg sm:text-2xl">
            Watch anywhere. Cancel anytime.
          </h2>
          <p className="text-base md:text-xl">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <EmailInput onSubmit={handleOnSubmit} />
      </div>
    </div>
  );
};

export default Hero;
