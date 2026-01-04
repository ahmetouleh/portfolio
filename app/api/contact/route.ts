import { NextRequest, NextResponse } from "next/server"
import { rateLimit } from "@/lib/rate-limit"

const DISCORD_WEBHOOK_URL =
  "https://discordapp.com/api/webhooks/1457157819664171122/dOUZU13W2hwSY4dJgSI9PtA34GD0yBkmNaQ7pjDvSU2XwxnsQSSulgu7a7hdFZZBdN3_"

export async function POST(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for")
    const ip = forwardedFor ? forwardedFor.split(",")[0] : "127.0.0.1"

    const { success } = rateLimit(ip)

    if (!success) {
      console.warn(`Rate limit exceeded for IP: ${ip}`)

      // Alert Discord about the abuse attempt
      await fetch(DISCORD_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `⚠️ **Alerte Sécurité** : L'IP \`${ip}\` a essayé de vous envoyer plus de 3 requêtes en moins de 10 minutes.`
        }),
      }).catch(err => console.error("Failed to send rate limit alert to Discord", err))

      return NextResponse.json(
        { error: "Trop de demandes. Veuillez réessayer dans 10 minutes." },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation des champs
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis" }, { status: 400 })
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 })
    }

    // Création de l'embed Discord
    const embed = {
      title: "📧 Nouveau message de contact",
      color: 0x8b5cf6,
      fields: [
        { name: "👤 Nom", value: name, inline: true },
        { name: "📮 Email", value: email, inline: true },
        { name: "📌 Sujet", value: subject, inline: false },
        { name: "💬 Message", value: message.length > 1024 ? message.substring(0, 1021) + "..." : message, inline: false },
      ],
      footer: { text: "Portfolio - Formulaire de contact" },
      timestamp: new Date().toISOString(),
    }

    // Envoi au webhook Discord
    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] }),
    })

    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi au webhook Discord")
    }

    return NextResponse.json({ success: true, message: "Message envoyé avec succès !" })
  } catch (error) {
    console.error("Erreur lors de l'envoi du message:", error)
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du message" },
      { status: 500 }
    )
  }
}
