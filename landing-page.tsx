"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Play,
  Star,
  CheckCircle,
  BarChart3,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Globe,
  Menu,
  X,
} from "lucide-react"

interface LandingPageProps {
  onGetStarted: () => void
  onLogin: () => void
}

export default function LandingPage({ onGetStarted, onLogin }: LandingPageProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "VP of Growth",
      company: "TechFlow",
      avatar: "/placeholder.svg?height=48&width=48&text=SC",
      quote: "ChartMogul a transformé notre compréhension du business. Les insights sont inestimables.",
      rating: 5,
    },
    {
      name: "Marcus Johnson",
      role: "CEO",
      company: "DataSync",
      avatar: "/placeholder.svg?height=48&width=48&text=MJ",
      quote: "Enfin un outil qui nous donne une visibilité temps réel sur notre MRR. Révolutionnaire !",
      rating: 5,
    },
    {
      name: "Elena Rodriguez",
      role: "Head of Finance",
      company: "CloudBase",
      avatar: "/placeholder.svg?height=48&width=48&text=ER",
      quote: "Les fonctionnalités de reconnaissance de revenus ont simplifié nos rapports financiers.",
      rating: 5,
    },
  ]

  const integrations = [
    { name: "Stripe", logo: "/placeholder.svg?height=40&width=40&text=S" },
    { name: "PayPal", logo: "/placeholder.svg?height=40&width=40&text=PP" },
    { name: "Recurly", logo: "/placeholder.svg?height=40&width=40&text=R" },
    { name: "Chargebee", logo: "/placeholder.svg?height=40&width=40&text=CB" },
    { name: "Paddle", logo: "/placeholder.svg?height=40&width=40&text=P" },
    { name: "Braintree", logo: "/placeholder.svg?height=40&width=40&text=BT" },
    { name: "Zuora", logo: "/placeholder.svg?height=40&width=40&text=Z" },
    { name: "Shopify", logo: "/placeholder.svg?height=40&width=40&text=SH" },
  ]

  const features = [
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Analytics de revenus",
      description: "Suivez votre MRR, ARR et croissance avec précision",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Insights clients",
      description: "Comprenez le comportement et cycle de vie client",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Métriques de croissance",
      description: "Surveillez le churn, rétention et expansion",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Données temps réel",
      description: "Mises à jour instantanées de vos métriques clés",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Sécurité des données",
      description: "Sécurité de niveau entreprise pour vos données",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Support global",
      description: "Multi-devises et support international",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mr-3"></div>
              <h1 className="text-lg font-semibold text-gray-900">ChartMogul</h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Fonctionnalités
              </a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Tarifs
              </a>
              <a href="#customers" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Clients
              </a>
              <a href="#resources" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Ressources
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" onClick={onLogin} className="text-sm font-medium">
                Se connecter
              </Button>
              <Button
                onClick={onGetStarted}
                className="text-sm font-medium bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg"
              >
                Commencer
              </Button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-32 bg-gradient-to-b from-gray-50/50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              Nouveau : Analytics IA intégrée
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Analytics SaaS
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                simple et puissant
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              Transformez vos données d'abonnement en insights actionnables. Conçu pour les équipes qui veulent
              comprendre et faire croître leur business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                onClick={onGetStarted}
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-base font-medium rounded-lg shadow-sm"
              >
                Essayer gratuitement
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="px-8 py-3 text-base font-medium border-gray-200 hover:border-gray-300 rounded-lg bg-transparent"
              >
                <Play className="mr-2 w-4 h-4" />
                Voir la démo
              </Button>
            </div>

            {/* Dashboard Preview */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-2">
                <div className="bg-gray-50 rounded-xl p-8">
                  <img
                    src="/placeholder.svg?height=500&width=800&text=Dashboard Preview"
                    alt="ChartMogul Dashboard"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-gray-500 text-sm mb-8">Utilisé par plus de 2 500 entreprises SaaS</p>
          <div className="flex justify-center items-center space-x-12 opacity-40">
            {["Typeform", "Buffer", "Mention", "Hotjar", "Livestorm"].map((company) => (
              <div key={company} className="text-lg font-semibold text-gray-600">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tout ce dont vous avez besoin</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une plateforme complète pour comprendre et optimiser votre business d'abonnement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-200 border-0 bg-white/60 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center mb-4 text-gray-700">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Deux produits, une vision</h2>
            <p className="text-lg text-gray-600">CRM et Analytics d'abonnement parfaitement intégrés</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 border-0 bg-gradient-to-br from-blue-50 to-blue-100/50">
              <CardContent className="p-0">
                <div className="mb-6">
                  <div className="w-full h-48 bg-white/60 rounded-xl flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=150&width=250&text=CRM Interface"
                      alt="CRM"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">CRM</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Gérez vos relations clients et votre pipeline de vente avec notre solution CRM intégrée.
                </p>
                <Button
                  variant="outline"
                  className="text-sm font-medium border-blue-200 hover:border-blue-300 bg-transparent"
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 bg-gradient-to-br from-purple-50 to-purple-100/50">
              <CardContent className="p-0">
                <div className="mb-6">
                  <div className="w-full h-48 bg-white/60 rounded-xl flex items-center justify-center">
                    <img
                      src="/placeholder.svg?height=150&width=250&text=Analytics Dashboard"
                      alt="Analytics"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics d'abonnement</h3>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                  Plongez dans vos métriques d'abonnement avec des analytics avancées et des rapports détaillés.
                </p>
                <Button
                  variant="outline"
                  className="text-sm font-medium border-purple-200 hover:border-purple-300 bg-transparent"
                >
                  En savoir plus
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Le centre commercial de toute votre équipe</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Donnez à chaque membre de l'équipe les insights nécessaires pour stimuler la croissance et prendre des
                décisions basées sur les données.
              </p>
              <div className="space-y-4">
                {["Collaboration temps réel", "Permissions basées sur les rôles", "Tableaux de bord personnalisés"].map(
                  (item, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <CheckCircle className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { role: "Ventes", color: "from-blue-100 to-blue-200", icon: "👩‍💼" },
                { role: "Marketing", color: "from-green-100 to-green-200", icon: "📊" },
                { role: "Finance", color: "from-purple-100 to-purple-200", icon: "💰" },
                { role: "Support", color: "from-orange-100 to-orange-200", icon: "🎧" },
              ].map((team, index) => (
                <Card key={index} className={`p-6 border-0 bg-gradient-to-br ${team.color}`}>
                  <CardContent className="p-0 text-center">
                    <div className="text-3xl mb-3">{team.icon}</div>
                    <h3 className="font-medium text-gray-900 text-sm">{team.role}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compatible avec vos outils</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            ChartMogul s'intègre avec tous les outils que vous utilisez déjà pour gérer votre business
          </p>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 items-center justify-items-center">
            {integrations.map((integration, index) => (
              <div key={index} className="flex flex-col items-center group cursor-pointer">
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-2 group-hover:bg-gray-100 transition-colors">
                  <img src={integration.logo || "/placeholder.svg"} alt={integration.name} className="w-6 h-6" />
                </div>
                <span className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Commencez avec ChartMogul</h2>
          <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
            Rejoignez des milliers d'entreprises SaaS qui font confiance à ChartMogul pour leurs analytics d'abonnement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={onGetStarted}
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-base font-medium rounded-lg"
            >
              Essai gratuit
            </Button>
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 px-8 py-3 text-base font-medium rounded-lg bg-transparent"
            >
              Réserver une démo
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="customers" className="py-24 bg-gray-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos clients adorent ChartMogul</h2>
            <p className="text-lg text-gray-600">Découvrez ce que nos clients disent de leur expérience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-lg transition-all duration-200 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{testimonial.name}</h4>
                      <p className="text-gray-500 text-xs">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-md mr-2"></div>
                <h3 className="text-lg font-semibold text-gray-900">ChartMogul</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                La plateforme d'analytics d'abonnement de référence pour les entreprises SaaS.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">
                  GitHub
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-4 text-sm">Produit</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Fonctionnalités
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Tarifs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Intégrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-4 text-sm">Entreprise</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    À propos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Carrières
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Presse
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-4 text-sm">Support</h4>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Centre d'aide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Statut
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900 transition-colors">
                    Confidentialité
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 text-center">
            <p className="text-gray-500 text-sm">&copy; 2024 ChartMogul. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
