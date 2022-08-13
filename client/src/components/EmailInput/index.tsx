import { ChangeEvent, FocusEvent, FC, FormEvent, useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";

interface IProps {
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const EmailInput: FC<IProps> = ({ onSubmit, onChange }) => {
  const [isEmpty, setIsEmpty] = useState(true);

  const handleOnFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (e.type === "blur" && e.target.value === "") return setIsEmpty(true);

    setIsEmpty(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      className={`flex max-w-[500px] md:max-w-[700px] flex-col gap-3 md:flex-row md:gap-0 items-center w-full text-white`}
    >
      <div className="relative w-full">
        <label
          htmlFor="email"
          className={`absolute left-3 md:left-5 text-gray-500 z-10 font-medium transition-all ${
            isEmpty ? "top-4 md:top-5 text-base" : "top-1 md:top-2 text-xs"
          }`}
        >
          Email Address
        </label>
        <input
          name="email"
          type="email"
          className="text-black outline-none  w-full px-3 py-4 rounded-sm md:px-5 md:py-5 md:rounded-r-none"
          onChange={onChange}
          onFocus={handleOnFocus}
          onBlur={handleOnFocus}
        />
      </div>
      <button className="flex whitespace-nowrap gap-2 rounded-sm items-center bg-primary w-fit py-3 px-4 md:px-5 md:py-4 border-2 border-primary md:text-xl md:rounded-l-none">
        Get Stated
        <MdOutlineArrowForwardIos className="text-white h-3 w-3 md:h-4 md:w-4" />
      </button>
    </form>
  );
};

export default EmailInput;
