import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Input from "./Input";
import Modal from "../UI/Modal";
import CheckIcon from "../../assets/check.svg?react";
import ErrorIcon from "../../assets/error.svg?react";
import FormActions from "./FormActions";
import { emailRegex } from "../../constants";
import { STATUS, type Status } from "../../types/status";

export default function Form() {
  const [sentStatus, setSentStatus] = useState<Status | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isInvalidMessage, setIsInvalidMessage] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(false);
  const form: React.RefObject<HTMLFormElement | null> =
    useRef<HTMLFormElement>(null);

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsClicked(true);
    setIsInvalidMessage(false);
    setIsInvalidEmail(false);

    if (!form.current) return;
    const formElement: HTMLFormElement = form.current;
    const formData: FormData = new FormData(formElement);
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

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
      setIsClicked(false);
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
          setSentStatus(STATUS.SUCCESS);
        })
        .catch((error) => {
          setSentStatus(STATUS.ERROR);
          console.log("FAILED...", error.text);
        })
        .finally(() => setIsClicked(false));
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
      <FormActions isClicked={isClicked} />
      <Modal open={!!sentStatus} onClose={() => setSentStatus(null)}>
        <div>
          {sentStatus === STATUS.SUCCESS && (
            <>
              <div className="flex-center w-full">
                <CheckIcon className="h-20 w-20" />
              </div>
              <p>Your message is sent!</p>
            </>
          )}
          {sentStatus === STATUS.ERROR && (
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
