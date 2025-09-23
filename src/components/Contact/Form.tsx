import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import Modal from "../UI/Modal";
import CheckIcon from "../../assets/check.svg?react";
import ErrorIcon from "../../assets/error.svg?react";
import FormActions from "./FormActions";
import { emailRegex } from "../../constants";

export default function Form() {
  const [isSent, setIsSent] = useState("");
  const [clicked, setClicked] = useState(false);
  const [isInvalidMessage, setIsInvalidMessage] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const form = useRef<HTMLFormElement>(null)!;

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setClicked(true);
    setIsInvalidMessage(false);
    setIsInvalidEmail(false);
    const formElement = form.current as HTMLFormElement;
    const formData = new FormData(formElement);
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    console.log(message);
    if (
      !message.trim().length ||
      !email.trim().length ||
      !emailRegex.test(email)
    ) {
      if (!message.trim().length) {
        setIsInvalidMessage(true);
      }
      if (!email.trim().length || !emailRegex.test(email)) {
        setIsInvalidEmail(true);
      }
      setClicked(false);
      return;
    }

    if (formElement) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formElement,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY
          }
        )
        .then(() => {
          setIsSent("success");
        })
        .catch((error) => {
          setIsSent("error");
          console.log("FAILED...", error.text);
        })
        .finally(() => setClicked(false));
    }
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="relative flex w-full flex-col gap-5"
    >
      <Input type="text" placeholder="Name" name="name" />
      <Input
        type="email"
        placeholder="Email"
        name="email"
        invalid={isInvalidEmail}
      />
      <Input type="text" placeholder="Subject" name="title" />
      <textarea
        className={`border-primary-black w-full rounded border-2 px-6 py-4 text-base/[125%] tracking-tight focus:text-zinc-800 ${isInvalidMessage ? "border-red-700 text-red-700 placeholder:text-red-700" : "border-primary-black text-zinc-800 placeholder:text-zinc-400"} transition-all duration-300`}
        id="message"
        name="message"
        placeholder="Write your message"
        rows={5}
        required
      ></textarea>
      <FormActions clicked={clicked} />
      <Modal open={isSent} onClose={() => setIsSent("")}>
        <div>
			{isSent === "success" && (
			  <>
				<div className="flex-center w-full">
				  <CheckIcon className="h-20 w-20" />
				</div>
				<p>Your message is sent!</p>
			  </>
			)}
			{isSent === "error" && (
			  <>
				<div className="flex-center w-full">
				  <ErrorIcon className="h-20 w-20" />
				</div>
				<p>Oops! Something went wrong. Please try again.</p>
			  </>
			)}
		</div>
      </Modal>
    </form>
  );
}
