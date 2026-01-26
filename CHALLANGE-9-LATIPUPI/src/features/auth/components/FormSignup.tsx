import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"

import {
  Field,
  FieldError,
  FieldGroup,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { useRegister } from "../hooks"


const formSchema = z.object({
  name: z
    .string("Name is required"),
  email: z
    .string("Email is required"),
  phone: z
    .string("Phone is required"),
  password: z
    .string("Password is required"),
  confirmPassword: z
    .string("Confirm Password is required"),
})

export function FormSignup() {
  const { mutate, isPending, error } = useRegister();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    mutate(data, {
      onError: () => {
        toast.error("Registration failed. Please check your details.");
      },
    });
  }

  if (error) {
    console.log(error, "error nih");
    toast.error(error?.response?.data?.errors[0]?.msg || "An unexpected error occurred. Please try again later." );
  }
  return (
    <>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    className="p-6 rounded-2xl border-[#D5D7DA]"
                    id="form-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Name"
                    autoComplete="off"
                    type="text"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="text-red-500" />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    className="p-6 rounded-2xl border-[#D5D7DA]"
                    id="form-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Email"
                    autoComplete="off"
                    type="email"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="text-red-500" />
                  )}
                </Field>
              )}
            />
            <Controller
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    className="p-6 rounded-2xl border-[#D5D7DA]"
                    id="form-phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="Number Phone"
                    autoComplete="off"
                    type="text"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="text-red-500" />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    className="p-6 rounded-2xl border-[#D5D7DA]"
                    id="form-password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Password"
                    autoComplete="off"
                    type="password"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="text-red-500"/>
                  )}
                </Field>
              )}
            />
            <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <Input
                    {...field}
                    className="p-6 rounded-2xl border-[#D5D7DA]"
                    id="form-confirm-password"
                    aria-invalid={fieldState.invalid}
                    placeholder="Confirm Password"
                    autoComplete="off"
                    type="password"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} className="text-red-500" />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
        <Field orientation="horizontal">
          <Button 
            type="submit" 
            form="form-rhf-demo"
            className="w-full p-6 rounded-2xl bg-[#C12116] text-white mt-5"
            disabled={isPending}>
            Register
          </Button>
        </Field>
    </>
  )
}
