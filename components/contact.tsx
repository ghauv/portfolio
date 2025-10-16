import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-6 text-balance">
          Travaillons ensemble
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Je suis toujours intéressée par de nouveaux projets et collaborations. N'hésitez pas à me contacter pour
          discuter de vos idées.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Mail className="mr-2 h-4 w-4" />
            Envoyer un email
          </Button>
          <Button size="lg" variant="outline">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
