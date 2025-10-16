export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Garance. Tous droits réservés.</p>
          <p className="text-sm text-muted-foreground">Conçu et développé avec soin</p>
        </div>
      </div>
    </footer>
  )
}
