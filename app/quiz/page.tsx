"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { toast, useToast } from "@/hooks/use-toast"
import { insertOneUser } from "../server/user"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }).max(10, {message:"Username must be below 11 characters."}),
    answer1: z.string({required_error:
      "Please select an option."
    }),
    answer2: z.string({required_error:
      "Please select an option."
    }),
  })

export default function Quiz(){
  
    return (
        <>
        <ProfileForm/>
        </>

    )
}


  export function ProfileForm() {
    const {toast} = useToast();
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
    })

      // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    let isEducated=false;
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
    toast({title:"bitch"})
    if (values.answer1=="no" && values.answer2=="yes"){
      isEducated = true;
      toast({title: `Congratulations ${values.username}`,
        description: "You are educated on substance abuse",
    })}

    else {
    toast({
        title: `Thank you ${values.username}`,
        description: "Unfortunately you are not educated on substance abuse",})
    }

    insertOneUser(values.username,isEducated)

    } 

    return(
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage/>
              </FormItem>)}
            />

              <FormField
                	control={form.control}
                	name="answer1"
                	render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question 1</FormLabel>
                    <FormDescription>Is it true that drug abuse is solely due to bad decisions?</FormDescription>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="select an answer"/>
                        </SelectTrigger>
                      </FormControl> 
                      <SelectContent>
                        <SelectItem value="yes">yes</SelectItem>
                        <SelectItem value="no">no</SelectItem>
                      </SelectContent>
                    </Select>
                    </FormItem>)}/>


                <FormField
                	control={form.control}
                	name="answer2"
                	render={({ field }) => (
                  <FormItem>
                    <FormLabel>Question 2</FormLabel>
                    <FormDescription>There are more than two ways to abuse substances?</FormDescription>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="select an answer"/>
                        </SelectTrigger>
                      </FormControl> 
                      <SelectContent>
                        <SelectItem value="yes">yes</SelectItem>
                        <SelectItem value="no">no</SelectItem>
                      </SelectContent>
                    </Select>
                    </FormItem>)}/>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    )
  }
