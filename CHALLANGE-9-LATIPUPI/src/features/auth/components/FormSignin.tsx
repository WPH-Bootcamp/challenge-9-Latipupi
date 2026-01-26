import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"
import { Checkbox } from "@/components/ui/checkbox"

import { Button } from "@/components/ui/button"

import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { useLogin } from "../hooks"


const formSchema = z.object({
  email: z
    .string("Email is required"),
  password: z
    .string("Password is required")
})

export function FormSignin() {
  const { mutate, isPending, error } = useLogin();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    mutate(data, {
      onError: () => {
        toast.error("Login failed. Please check your credentials.");
      },
    }); 
  }

  if (error) {
    toast.error("An unexpected error occurred. Please try again later.");
  }

  return (
    <>
        <form id="form-rhf-demo" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
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
                    <FieldError errors={[fieldState.error]} className="text-red-500" />
                  )}
                </Field>
              )}
            />
            <Field orientation="horizontal" data-invalid>
                <Checkbox
                id="terms-checkbox-invalid"
                name="terms-checkbox-invalid"
                aria-invalid
                />
                <FieldLabel htmlFor="terms-checkbox-invalid" >
                    Remeber me
                </FieldLabel>
            </Field>
          </FieldGroup>
        </form>
        <Field orientation="horizontal">
          <Button 
            type="submit" 
            form="form-rhf-demo"
            className="w-full p-6 rounded-2xl bg-[#C12116] text-white mt-5"
            disabled={isPending}
            >
            Login
          </Button>
        </Field>
    </>
  )
}
