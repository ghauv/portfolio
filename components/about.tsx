export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight text-foreground mb-4">Meet Garance</h2>
        </div>

        <div className="space-y-8 text-lg leading-relaxed">
          <p className="text-foreground">
            Je suis une designer et développeuse passionnée par la création d'expériences numériques qui allient
            esthétique et fonctionnalité. Mon approche unique combine une sensibilité design aiguisée avec des
            compétences techniques solides en développement fullstack.
          </p>

          <p className="text-muted-foreground">
            Mon parcours m'a permis de travailler sur des projets variés, de la conception d'interfaces pour des grandes
            marques comme LVMH et Decathlon, au développement de solutions e-commerce pour Satisfy Running. J'ai
            également eu l'opportunité de porter plusieurs casquettes, notamment celle de Product Manager, ce qui m'a
            donné une vision holistique du cycle de développement produit.
          </p>

          <div className="pt-8">
            <h3 className="text-2xl font-medium text-foreground mb-4">My Working Style</h3>
            <p className="text-muted-foreground">
              Je privilégie une approche collaborative et itérative, où la recherche utilisateur guide chaque décision
              de design. Je crois fermement que les meilleures solutions émergent de la combinaison d'une compréhension
              profonde des besoins utilisateurs et d'une exécution technique impeccable. Mon objectif est toujours de
              créer des produits qui ne sont pas seulement beaux, mais aussi intuitifs et performants.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
