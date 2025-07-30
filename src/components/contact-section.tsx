import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { z } from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "../hooks/use-toast";
// import { insertContactSubmissionSchema } from "../shared/schema";
// import { apiRequest } from "../lib/queryClient";

type ContactFormData = z.infer<any>;

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      industry: "",
      message: "",
    },
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      // const response = await apiRequest("POST", "/api/contact", data);

      console.log("data : ", data);
      // return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitContactForm.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+2338800888",
    },
    {
      icon: Mail,
      label: "Email",
      value: "omensa.steel@yahoo.com",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Hansen Road, Accra,Korley Dudor,",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Fri: 8:00 AM - 5:00 PM GMT",
    },
  ];

  return (
    <section id="contact" className="dark-gray text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to discuss your industrial plumbing needs? Our experts are
              here to help you find the perfect solution.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="flex items-center">
                    <IconComponent className="text-omensa-red mr-4" size={24} />
                    <div>
                      <div className="font-semibold">{info.label}</div>
                      <div className="text-gray-300">{info.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <Card className="bg-gray-900">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Request a Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@company.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="0248800888"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="industry"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Industry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="mining">Mining</SelectItem>
                            <SelectItem value="water">
                              Water Treatment
                            </SelectItem>
                            <SelectItem value="oil">Oil & Gas</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Details</FormLabel>
                        <FormControl>
                          <Textarea
                            rows={4}
                            placeholder="Please describe your project requirements, quantities needed, and timeline..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={submitContactForm.isPending}
                    className="w-full omensa-red text-white py-4 px-6 font-semibold hover:bg-red-700 shadow-lg"
                  >
                    {submitContactForm.isPending
                      ? "Sending..."
                      : "Send Quote Request"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
