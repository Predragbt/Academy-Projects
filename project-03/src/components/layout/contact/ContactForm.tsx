import { useState, useEffect } from "react";
import { ContactLanguageContentProps } from "../../../pages/Contact";

interface Props {
  data: ContactLanguageContentProps;
}

export const ContactForm = ({ data }: Props) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");
  const [formStatus, setFormStatus] = useState<"error" | "success" | null>(
    null
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormStatus(null);

    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;

      if (isSuccess) {
        setFormStatus("success");
        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setCountry("");
        setMessage("");
      } else {
        setFormStatus("error");
      }
    }, 1000);
  };

  useEffect(() => {
    if (formStatus === "success") {
      const hasInput = fullName || email || phoneNumber || message || country;
      if (hasInput) setFormStatus(null);
    }
  }, [fullName, email, phoneNumber, message, country, formStatus]);

  return (
    <form className="mr-24" onSubmit={handleSubmit}>
      {data.form.fields.map((field, index) => {
        const isLastField = index === data.form.fields.length - 1;

        return (
          <div key={index} className={`${isLastField ? "mb-4" : "mb-14"}`}>
            <label className="block text-[24px] text-[#FF6F0F] mb-2">
              {field.label}
            </label>

            {field.type === "select" && field.options ? (
              <select
                className="w-full h-[65px] bg-[#232323] text-white pl-4 hover:cursor-pointer outline-none"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option value="" disabled hidden>
                  {field.placeholder}
                </option>
                {field.options.map((option, optIndex) => (
                  <option
                    key={optIndex}
                    value={option}
                    className="bg-[#232323]"
                  >
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                placeholder={field.placeholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full h-[200px] bg-[#232323] text-white pl-4 py-2 outline-none"
                required
              />
            ) : (
              <input
                type={field.type} 
                placeholder={field.placeholder}
                className="w-full h-[65px] bg-[#232323] text-white pl-4 outline-none"
                value={
                  field.type === "text" && index === 0
                    ? fullName
                    : field.type === "email"
                    ? email
                    : field.type === "number"
                    ? phoneNumber
                    : ""
                }
                onChange={(e) => {
                  field.type === "text" && index === 0
                    ? setFullName(e.target.value)
                    : field.type === "email"
                    ? setEmail(e.target.value)
                    : field.type === "number"
                    ? setPhoneNumber(e.target.value)
                    : "";
                }}
                required
              />
            )}
          </div>
        );
      })}
      {formStatus && (
        <p
          className={`mt-4 ${
            formStatus === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {formStatus === "success"
            ? "Form submitted successfully!"
            : "Please fill in all fields correctly."}
        </p>
      )}
      <button
        type="submit"
        className="bg-[#FF6F0F] text-white py-2 px-4 w-full"
      >
        {data.form.submit_button.text}
      </button>
    </form>
  );
};
