"use client";

import { useCallback, useState } from "react";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import useRegisterModal from "../../hooks/useRegisterModal";
import useLoginModal from "../../hooks/useLoginModal";
import { Input } from "@nextui-org/react";
import Modal from "./modal";
import Inputs from "../inputs/Input";
import Heading from "../headers/Heading";
import Button from "../Boutons/Buttons";
import { EyeFilledIcon } from "../icons/EyeFilledIcon ";
import { EyeSlashFilledIcon } from "../icons/EyeSlashFilledIcon ";

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    console.log(data.email);
    /*     const result = await signIn("credentials", {
      username: data.email,
      password: data.password,
      callbackUrl: "/",
    }).then((res) => {
      if (res?.status != 200) {
        router.push("/nextui");
       
      } else {
        router.push("/profile");
      }
    }); */

    signIn("credentials", {
      username: data.email,
      password: data.password,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("Logged in");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const onToggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Makoya"
        subtitle="Connectez-vous pour une expérience fluide"
      />
      <Inputs
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <div className="password_2 block pt-6 relative">
        <Inputs
          id="password"
          label="Password"
          type={isVisible ? "text" : "password"}
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <div
          className="icon_button absolute right-4 top-14"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </div>
      </div>
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      {/* <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn("google")}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn("github")}
      /> */}
      <div
        className="
      text-neutral-500 text-center mt-4 font-light grid grid:cols-2"
      >
        <div>
          <p>
            Avez-vous un compte client?
            <span
              onClick={onToggle}
              className="
              text-blue-600
              cursor-pointer 
              hover:underline
            "
            >
              {" "}
              Créer un compte client
            </span>
          </p>
        </div>
        <div>
          <p>
            Avez-vous un compte prestataire?
            <span
              onClick={onToggle}
              className="
              text-blue-600
              cursor-pointer 
              hover:underline
              
            "
            >
              {" "}
              Créer un compte prestataire
            </span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Bienvenue à vous"
      actionLabel="Connectez-vous"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
