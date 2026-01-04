"use client"

import { useInView } from "@/hooks/use-in-view"
import { Mail, MapPin, Phone, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedTitle } from "@/components/animated-title"
import { useState, FormEvent } from "react"

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue")
      }

      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      // Réinitialiser le statut après 5 secondes
      setTimeout(() => {
        setSubmitStatus("idle")
      }, 5000)
    } catch (error) {
      setSubmitStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Une erreur est survenue")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-8" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <AnimatedTitle
          className={`text-5xl font-bold mb-16 transition-all duration-1000 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          Contact
        </AnimatedTitle>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 delay-200 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h3 className="text-2xl font-semibold mb-6">Restons en contact</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              N&apos;hésitez pas à me contacter pour discuter de vos projets, d&apos;opportunités professionnelles ou
              simplement pour échanger sur les technologies web.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Email</p>
                  <a
                    href="mailto:ahmetalib42@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    ahmetalib42@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Téléphone</p>
                  <a href="tel:+33629356673" className="text-muted-foreground hover:text-primary transition-colors">
                    +33 6 29 35 66 73
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium mb-1">Localisation</p>
                  <p className="text-muted-foreground">Saint-Etienne et alentours</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                  disabled={isSubmitting}
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Votre email"
                  required
                  disabled={isSubmitting}
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Sujet"
                  required
                  disabled={isSubmitting}
                  className="bg-card border-border focus:border-primary transition-colors"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  rows={6}
                  required
                  disabled={isSubmitting}
                  className="bg-card border-border focus:border-primary transition-colors resize-none"
                />
              </div>

              {submitStatus === "success" && (
                <div className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-500">
                  <CheckCircle2 className="w-5 h-5" />
                  <p className="text-sm">Message envoyé avec succès !</p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center gap-2 p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive">
                  <AlertCircle className="w-5 h-5" />
                  <p className="text-sm">{errorMessage || "Une erreur est survenue"}</p>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  "Envoyer le message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
