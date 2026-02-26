"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission — replace with your actual endpoint
    await new Promise((resolve) => setTimeout(resolve, 1200))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="font-serif text-2xl text-foreground">Thank You</h3>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          We{"'"}ve received your inquiry and will be in touch within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div className="space-y-2">
        <Label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name</Label>
        <Input
          id="firstName"
          name="firstName"
          required
          placeholder="John"
          className="rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground/60"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</Label>
        <Input
          id="lastName"
          name="lastName"
          required
          placeholder="Doe"
          className="rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground/60"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@example.com"
          className="rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground/60"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(310) 555-0100"
          className="rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground/60"
        />
      </div>
      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="service" className="text-sm font-medium text-foreground">Service of Interest</Label>
        <Select name="service" required>
          <SelectTrigger id="service" className="rounded-xl border-border bg-card text-foreground">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bookkeeping">Monthly Bookkeeping</SelectItem>
            <SelectItem value="property-management">Property Management Accounting</SelectItem>
            <SelectItem value="house-flippers">House Flippers Accounting</SelectItem>
            <SelectItem value="cfo-advisory">CFO Advisory</SelectItem>
            <SelectItem value="catch-up">Catch-Up & Cleanup</SelectItem>
            <SelectItem value="tax-preparation">Tax Preparation & Compliance</SelectItem>
            <SelectItem value="financial-reporting">Financial Reporting</SelectItem>
            <SelectItem value="landlords">Landlord Accounting</SelectItem>
            <SelectItem value="audit-prep">Year-End & Audit Prep</SelectItem>
            <SelectItem value="other">Other / Multiple Services</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2 sm:col-span-2">
        <Label htmlFor="message" className="text-sm font-medium text-foreground">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Tell us about your business and how we can help..."
          className="rounded-xl border-border bg-card text-foreground placeholder:text-muted-foreground/60 resize-none"
        />
      </div>
      <div className="sm:col-span-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          size="lg"
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto px-8"
        >
          {isSubmitting ? "Sending..." : "Contact Us"}
          {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </form>
  )
}
