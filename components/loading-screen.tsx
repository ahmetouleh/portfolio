"use client"

import { useEffect, useState } from "react"

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [letterAAnimation, setLetterAAnimation] = useState(false)
  const [letterBAnimation, setLetterBAnimation] = useState(false)
  const [decorativeElements, setDecorativeElements] = useState(false)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    // Attendre que la page soit complètement chargée
    const handleLoad = () => {
      setIsLoaded(true)
    }

    // Vérifier si la page est déjà chargée
    if (document.readyState === "complete") {
      // Délai minimum pour une belle animation même si tout est déjà chargé
      setTimeout(() => {
        setIsLoaded(true)
      }, 800)
    } else {
      window.addEventListener("load", handleLoad)
      // Délai de sécurité au cas où l'événement load ne se déclenche pas
      const fallbackTimer = setTimeout(() => {
        setIsLoaded(true)
      }, 2000)

      return () => {
        window.removeEventListener("load", handleLoad)
        clearTimeout(fallbackTimer)
      }
    }
  }, [])

  useEffect(() => {
    if (isLoaded) {
      // Animation de la lettre A
      const timerA = setTimeout(() => {
        setLetterAAnimation(true)
      }, 100)

      // Animation de la lettre B
      const timerB = setTimeout(() => {
        setLetterBAnimation(true)
      }, 400)

      // Éléments décoratifs
      const timerDeco = setTimeout(() => {
        setDecorativeElements(true)
      }, 600)

      // Commencer le fade out après que tout soit animé
      const timerFadeOut = setTimeout(() => {
        setIsFadingOut(true)
      }, 1800)

      // Masquer complètement l'écran de chargement après le fade out
      const timerHide = setTimeout(() => {
        setIsVisible(false)
      }, 2500)

      return () => {
        clearTimeout(timerA)
        clearTimeout(timerB)
        clearTimeout(timerDeco)
        clearTimeout(timerFadeOut)
        clearTimeout(timerHide)
      }
    }
  }, [isLoaded])

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden transition-opacity duration-1000 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Fond subtil avec gradient très léger */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/2 to-background" />

      {/* Grille très subtile en arrière-plan */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Conteneur principal des lettres */}
      <div className="relative z-10 flex items-center justify-center gap-8 md:gap-16 mb-20">
        {/* Lettre A */}
        <div
          className={`relative ${letterAAnimation ? "animate-letter-a-entrance" : "opacity-0"}`}
        >
          <div className="relative">
            {/* Glow très subtil */}
            <div className="absolute inset-0 blur-2xl bg-primary/10" />
            
            {/* Lettre A principale - visible et claire */}
            <div className="relative text-[120px] md:text-[180px] lg:text-[240px] font-black text-primary leading-none select-none">
              <span className="relative inline-block">
                A
              </span>
            </div>

            {/* Petits éléments décoratifs autour de A */}
            {decorativeElements && (
              <>
                <div className="absolute -top-4 -left-4 w-3 h-3 rounded-full bg-primary/60 animate-decorative-float" style={{ animationDelay: "0s" }} />
                <div className="absolute -bottom-2 -right-6 w-2 h-2 rounded-full bg-primary/50 animate-decorative-float" style={{ animationDelay: "0.2s" }} />
                <div className="absolute top-1/2 -right-8 w-2.5 h-2.5 rounded-full bg-primary/40 animate-decorative-float" style={{ animationDelay: "0.4s" }} />
              </>
            )}
          </div>
        </div>

        {/* Lettre B */}
        <div
          className={`relative ${letterBAnimation ? "animate-letter-b-entrance" : "opacity-0"}`}
        >
          <div className="relative">
            {/* Glow très subtil */}
            <div className="absolute inset-0 blur-2xl bg-primary/10" />
            
            {/* Lettre B principale - visible et claire */}
            <div className="relative text-[120px] md:text-[180px] lg:text-[240px] font-black text-primary leading-none select-none">
              <span className="relative inline-block">
                B
              </span>
            </div>

            {/* Petits éléments décoratifs autour de B */}
            {decorativeElements && (
              <>
                <div className="absolute -top-4 -right-4 w-3 h-3 rounded-full bg-primary/60 animate-decorative-float" style={{ animationDelay: "0.1s" }} />
                <div className="absolute -bottom-2 -left-6 w-2 h-2 rounded-full bg-primary/50 animate-decorative-float" style={{ animationDelay: "0.3s" }} />
                <div className="absolute top-1/2 -left-8 w-2.5 h-2.5 rounded-full bg-primary/40 animate-decorative-float" style={{ animationDelay: "0.5s" }} />
              </>
            )}
          </div>
        </div>
      </div>

      {/* Logo de chargement moderne en bas */}
      <div className={`absolute bottom-16 flex items-center justify-center ${isLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
        <div className="relative">
          {/* Spinner moderne avec gradient */}
          <div className="w-14 h-14 border-[3px] border-primary/20 border-t-primary rounded-full animate-spin" />
          {/* Cercle intérieur animé */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-primary/30 border-r-primary/60 rounded-full animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.8s" }} />
          {/* Point central avec glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
        </div>
      </div>

      {/* Overlay de fade out élégant */}
      <div
        className={`absolute inset-0 bg-background transition-opacity duration-1000 ease-in-out ${
          isFadingOut ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  )
}

