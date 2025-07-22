"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  BarChart3,
  Users,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Settings,
  LogOut,
  Home,
  FileText,
  PieChart,
  Target,
  CreditCard,
} from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

// Import all page components
import ClientsPage from "./clients-page"
import MontantsFacturesPage from "./montants-factures-page"
import ReconnaissanceRevenuPage from "./reconnaissance-revenu-page"
import AnalyseCohortesPage from "./analyse-cohortes-page"
import ReportsPage from "./reports-page"
import PanierMoyenPage from "./panier-moyen-page"
import AdministrationPage from "./administration-page"
import MrrArrPage from "./mrr-arr-page"
import LoginPage from "./login-page"
import SignupPage from "./signup-page"
import LandingPage from "./landing-page"

// Sample data for charts
const revenueData = [
  { month: "Jan", revenue: 45000, customers: 120 },
  { month: "Fév", revenue: 52000, customers: 135 },
  { month: "Mar", revenue: 48000, customers: 128 },
  { month: "Avr", revenue: 61000, customers: 152 },
  { month: "Mai", revenue: 55000, customers: 145 },
  { month: "Jun", revenue: 67000, customers: 168 },
]

const churnData = [
  { month: "Jan", churn: 5.2 },
  { month: "Fév", churn: 4.8 },
  { month: "Mar", churn: 6.1 },
  { month: "Avr", churn: 4.3 },
  { month: "Mai", churn: 5.7 },
  { month: "Jun", churn: 4.1 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState("landing")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)

  const handleLogin = (email: string, password: string) => {
    // Simulate login
    setIsAuthenticated(true)
    setUser({ name: "John Doe", email })
    setCurrentPage("dashboard")
  }

  const handleSignup = (firstName: string, lastName: string, email: string, password: string) => {
    // Simulate signup
    setIsAuthenticated(true)
    setUser({ name: `${firstName} ${lastName}`, email })
    setCurrentPage("dashboard")
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
    setCurrentPage("landing")
  }

  const handleGetStarted = () => {
    setCurrentPage("signup")
  }

  const handleLoginRedirect = () => {
    setCurrentPage("login")
  }

  // Landing page
  if (currentPage === "landing") {
    return <LandingPage onGetStarted={handleGetStarted} onLogin={handleLoginRedirect} />
  }

  // Login page
  if (currentPage === "login") {
    return (
      <LoginPage
        onLogin={handleLogin}
        onSignupRedirect={() => setCurrentPage("signup")}
        onBackToLanding={() => setCurrentPage("landing")}
      />
    )
  }

  // Signup page
  if (currentPage === "signup") {
    return (
      <SignupPage
        onSignup={handleSignup}
        onLoginRedirect={() => setCurrentPage("login")}
        onBackToLanding={() => setCurrentPage("landing")}
      />
    )
  }

  // Protected dashboard - require authentication
  if (!isAuthenticated) {
    setCurrentPage("landing")
    return null
  }

  const menuItems = [
    { id: "dashboard", label: "Tableau de bord", icon: Home },
    { id: "clients", label: "Clients", icon: Users },
    { id: "montants-factures", label: "Montants & Factures", icon: CreditCard },
    { id: "reconnaissance-revenu", label: "Reconnaissance de revenus", icon: TrendingUp },
    { id: "analyse-cohortes", label: "Analyse de cohortes", icon: PieChart },
    { id: "reports", label: "Rapports", icon: FileText },
    { id: "panier-moyen", label: "Panier moyen", icon: Target },
    { id: "mrr-arr", label: "MRR & ARR", icon: BarChart3 },
    { id: "administration", label: "Administration", icon: Settings },
  ]

  const renderPage = () => {
    switch (currentPage) {
      case "clients":
        return <ClientsPage />
      case "montants-factures":
        return <MontantsFacturesPage />
      case "reconnaissance-revenu":
        return <ReconnaissanceRevenuPage />
      case "analyse-cohortes":
        return <AnalyseCohortesPage />
      case "reports":
        return <ReportsPage />
      case "panier-moyen":
        return <PanierMoyenPage />
      case "mrr-arr":
        return <MrrArrPage />
      case "administration":
        return <AdministrationPage />
      default:
        return (
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
              <p className="text-gray-600 mt-2">Vue d'ensemble de vos métriques SaaS</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-blue-900">MRR</CardTitle>
                  <DollarSign className="h-4 w-4 text-blue-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-blue-900">67 000 €</div>
                  <div className="flex items-center text-xs text-blue-700 mt-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +12.5% vs mois dernier
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-green-100">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-green-900">ARR</CardTitle>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-900">804 000 €</div>
                  <div className="flex items-center text-xs text-green-700 mt-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +18.2% vs année dernière
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-purple-100">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-purple-900">Clients actifs</CardTitle>
                  <Users className="h-4 w-4 text-purple-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-purple-900">168</div>
                  <div className="flex items-center text-xs text-purple-700 mt-1">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +23 ce mois
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50 to-orange-100">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-orange-900">Taux de churn</CardTitle>
                  <ArrowDownRight className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-orange-900">4.1%</div>
                  <div className="flex items-center text-xs text-orange-700 mt-1">
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                    -1.6% vs mois dernier
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Évolution du chiffre d'affaires</CardTitle>
                  <CardDescription>Revenus mensuels récurrents sur 6 mois</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#666" fontSize={12} />
                      <YAxis stroke="#666" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e0e0e0",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ fill: "#3b82f6", strokeWidth: 2, r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Taux de churn</CardTitle>
                  <CardDescription>Évolution mensuelle du taux de désabonnement</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={churnData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#666" fontSize={12} />
                      <YAxis stroke="#666" fontSize={12} />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "white",
                          border: "1px solid #e0e0e0",
                          borderRadius: "8px",
                          fontSize: "12px",
                        }}
                      />
                      <Bar dataKey="churn" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Activité récente</CardTitle>
                <CardDescription>Dernières actions sur votre compte</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "Nouveau client ajouté",
                      details: "TechCorp - Plan Premium",
                      time: "Il y a 2h",
                      type: "success",
                    },
                    {
                      action: "Paiement reçu",
                      details: "1,299€ - Abonnement annuel",
                      time: "Il y a 4h",
                      type: "success",
                    },
                    {
                      action: "Client désabonné",
                      details: "StartupXYZ - Plan Basic",
                      time: "Il y a 1j",
                      type: "warning",
                    },
                    { action: "Rapport généré", details: "Analyse mensuelle Q2", time: "Il y a 2j", type: "info" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          item.type === "success"
                            ? "bg-green-500"
                            : item.type === "warning"
                              ? "bg-orange-500"
                              : "bg-blue-500"
                        }`}
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{item.action}</p>
                        <p className="text-xs text-gray-600">{item.details}</p>
                      </div>
                      <span className="text-xs text-gray-500">{item.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50/30">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center px-6 py-4 border-b border-gray-200">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mr-3"></div>
            <h1 className="text-lg font-semibold text-gray-900">ChartMogul</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    currentPage === item.id
                      ? "bg-blue-50 text-blue-700 border-r-2 border-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <Icon className="mr-3 h-4 w-4" />
                  {item.label}
                </button>
              )
            })}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-3 mb-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-blue-100 text-blue-700 text-xs">
                  {user?.name
                    ?.split(" ")
                    .map((n) => n[0])
                    .join("") || "JD"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user?.name}</p>
                <p className="text-xs text-gray-500 truncate">{user?.email}</p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="outline" size="sm" className="w-full text-xs bg-transparent">
              <LogOut className="mr-2 h-3 w-3" />
              Se déconnecter
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        <main className="p-8">{renderPage()}</main>
      </div>
    </div>
  )
}
