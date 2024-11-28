import { useState } from "react";
import { ButtonComponent } from "../../common/Button";
import { ContactLanguageContentProps } from "../../../types/ContactTypes";

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

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
    country: "",
  });

  const validateField = (field: string, value: string): string => {
    if (field === "fullName") {
      if (!value.trim()) return "Full name is required.";
    } else if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) return "Email is required.";
      if (!emailRegex.test(value)) return "Enter a valid email address.";
    } else if (field === "phoneNumber") {
      const phoneRegex = /^[0-9]+$/;
      if (!value.trim()) return "Phone number is required.";
      if (!phoneRegex.test(value)) return "Enter a valid phone number.";
    } else if (field === "message") {
      if (!value.trim()) return "Message cannot be empty.";
      if (value.length < 10) return "Message must be at least 10 characters.";
    } else if (field === "country") {
      if (!value.trim()) return "Please select a country.";
    }
    return "";
  };

  const handleInputChange = (
    field: string,
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setValue(value);
    setFormStatus(null); // Reset form status on input change
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors = {
      fullName: validateField("fullName", fullName),
      email: validateField("email", email),
      phoneNumber: validateField("phoneNumber", phoneNumber),
      message: validateField("message", message),
      country: validateField("country", country),
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) {
      setFormStatus("error");
      return;
    }

    setFormStatus("success");

    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
    setCountry("");
  };

  return (
    <form className="mr-24" onSubmit={handleSubmit}>
      {data.form.fields.map((field, index) => {
        const isLastField = index === data.form.fields.length - 1;

        return (
          <div key={index} className={`${isLastField ? "mb-4" : "mb-14"}`}>
            <label className="block text-[24px] text-[#FF6F0F] mb-2">
              {field.label}
            </label>

            {/* Country Field */}
            {field.type === "select" && field.options ? (
              <>
                <select
                  className="w-full h-[65px] bg-[#232323] text-white pl-4 hover:cursor-pointer outline-none"
                  value={country}
                  onChange={(e) => handleInputChange("country", e.target.value, setCountry)}
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
                {errors.country && (
                  <p className="text-red-500 mt-2">{errors.country}</p>
                )}
              </>
            ) : /* Textarea Field */
            field.type === "textarea" ? (
              <>
                <textarea
                  placeholder={field.placeholder}
                  value={message}
                  onChange={(e) => handleInputChange("message", e.target.value, setMessage)}
                  className="w-full h-[200px] bg-[#232323] text-white pl-4 py-2 outline-none"
                />
                {errors.message && (
                  <p className="text-red-500 mt-2">{errors.message}</p>
                )}
              </>
            ) : (
              /* Name, Email, and Phone Fields */
              <>
                <input
                  type="text"
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
                      ? handleInputChange("fullName", e.target.value, setFullName)
                      : field.type === "email"
                      ? handleInputChange("email", e.target.value, setEmail)
                      : field.type === "number"
                      ? handleInputChange("phoneNumber", e.target.value, setPhoneNumber)
                      : "";
                  }}
                />
                {field.type === "text" && index === 0 && errors.fullName && (
                  <p className="text-red-500 mt-2">{errors.fullName}</p>
                )}
                {field.type === "email" && errors.email && (
                  <p className="text-red-500 mt-2">{errors.email}</p>
                )}
                {field.type === "number" && errors.phoneNumber && (
                  <p className="text-red-500 mt-2">{errors.phoneNumber}</p>
                )}
              </>
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
      <ButtonComponent
        text={data.form.submit_button.text}
        type="submit"
        width="w-full"
      />
    </form>
  );
};
