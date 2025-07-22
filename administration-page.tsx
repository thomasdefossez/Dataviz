"use client"

import { useState } from "react"
import {
  BarChart3,
  ChevronDown,
  ChevronLeft,
  Bell,
  Settings,
  RefreshCw,
  Plus,
  Database,
  Calculator,
  LayoutDashboard,
  BellRing,
  Users,
  Code,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data for billing systems
const billingSystemsData = [
  {
    type: "CSV",
    name: "data_2024",
    status: "À jour",
    lastUpdate: "09/08/2024 (15h47)",
  },
]

interface AdministrationPageProps {
  onNavigateBack: () => void
}

export default function AdministrationPage({ onNavigateBack }: AdministrationPageProps) {
  const [activeTab, setActiveTab] = useState("sources")

  const [sidebarState, setSidebarState] = useState({
    synthese: false,
    revenus: false,
    croissance: false,
    clients: false,
    retention: false,
    unitEconomics: false,
    reports: false,
    administration: true,
  })

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo/Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              TB
            </div>
            <span className="font-semibold text-gray-900">Réglages</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <div
            className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
            onClick={onNavigateBack}
          >
            <BarChart3 className="w-4 h-4" />
            Analytics
          </div>

          {/* Synthèse Section */}
          <div className="space-y-1">
            <div
              className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => setSidebarState((prev) => ({ ...prev, synthese: !prev.synthese }))}
            >
              <span>Synthèse</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${sidebarState.synthese ? "rotate-180" : ""}`} />
            </div>
            {sidebarState.synthese && <div className="px-6 py-1 text-sm text-gray-600">Vue d'ensemble</div>}
          </div>

          {/* Revenus Section */}
          <div className="space-y-1">
            <div
              className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => setSidebarState((prev) => ({ ...prev, revenus: !prev.revenus }))}
            >
              <span>Revenus</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${sidebarState.revenus ? "rotate-180" : ""}`} />
            </div>
            {sidebarState.revenus && (
              <div className="px-6 space-y-1 text-sm text-gray-600">
                <div className="py-1 hover:text-blue-600 cursor-pointer">MRR - ARR</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">CMRR - CARR</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Reconnaissance du revenu</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Montants facturés</div>
              </div>
            )}
          </div>

          {/* Croissance Section */}
          <div className="space-y-1">
            <div
              className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => setSidebarState((prev) => ({ ...prev, croissance: !prev.croissance }))}
            >
              <span>Croissance</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${sidebarState.croissance ? "rotate-180" : ""}`} />
            </div>
            {sidebarState.croissance && (
              <div className="px-6 space-y-1 text-sm text-gray-600">
                <div className="py-1 hover:text-blue-600 cursor-pointer">Mouvements MRR-ARR</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Taux de croissance</div>
              </div>
            )}
          </div>

          {/* Clients Section */}
          <div className="space-y-1">
            <div
              className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => setSidebarState((prev) => ({ ...prev, clients: !prev.clients }))}
            >
              <span>Clients</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${sidebarState.clients ? "rotate-180" : ""}`} />
            </div>
            {sidebarState.clients && (
              <div className="px-6 space-y-1 text-sm text-gray-600">
                <div className="py-1 hover:text-blue-600 cursor-pointer">Mes clients</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Nombre d'abonnés actifs</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Croissance des abonnés</div>
              </div>
            )}
          </div>

          {/* Rétention Section */}
          <div className="space-y-1">
            <div
              className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => setSidebarState((prev) => ({ ...prev, retention: !prev.retention }))}
            >
              <span>Rétention</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${sidebarState.retention ? "rotate-180" : ""}`} />
            </div>
            {sidebarState.retention && (
              <div className="px-6 space-y-1 text-sm text-gray-600">
                <div className="py-1 hover:text-blue-600 cursor-pointer">Taux de churn</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Taux de rétention</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Analyse des cohortes</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Renouvellements</div>
              </div>
            )}
          </div>

          {/* Unit economics Section */}
          <div className="space-y-1">
            <div
              className="flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => setSidebarState((prev) => ({ ...prev, unitEconomics: !prev.unitEconomics }))}
            >
              <span>Unit economics</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${sidebarState.unitEconomics ? "rotate-180" : ""}`}
              />
            </div>
            {sidebarState.unitEconomics && (
              <div className="px-6 space-y-1 text-sm text-gray-600">
                <div className="py-1 hover:text-blue-600 cursor-pointer">Panier moyen & Valeur annuelle</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Coût d'Acquisition Client (CAC)</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Durée d'amortissement du CAC</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Lifetime Value (LTV)</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">LTV/CAC</div>
              </div>
            )}
          </div>

          {/* Reports Section */}
          <div className="space-y-1">
            <div className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer">
              <BarChart3 className="w-4 h-4" />
              Reports
            </div>
          </div>

          {/* Administration Section */}
          <div className="space-y-1">
            <div
              className="flex items-center justify-between px-3 py-2 text-sm text-white bg-blue-600 rounded-lg cursor-pointer"
              onClick={() => setSidebarState((prev) => ({ ...prev, administration: !prev.administration }))}
            >
              <span>Administration</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${sidebarState.administration ? "rotate-180" : ""}`}
              />
            </div>
            {sidebarState.administration && (
              <div className="px-6 space-y-1 text-sm text-gray-600">
                <div className="py-1 text-blue-600 bg-blue-50 rounded px-2 -mx-2">Sources de données</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Options de calcul</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Options du dashboard</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Préférences de notification</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Utilisateurs</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Développeurs</div>
              </div>
            )}
          </div>
        </nav>

        {/* Bottom section */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs">
              33%
            </div>
            <span>33%</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Bell className="w-4 h-4 text-gray-400" />
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-medium">
              TD
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ChevronLeft className="w-4 h-4" />
              <span className="text-gray-900 font-medium">Réglages</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <span>Besoin d'aide</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab Navigation */}
            <div className="bg-white border-b border-gray-200">
              <div className="px-6">
                <TabsList className="grid w-full grid-cols-6 bg-transparent h-auto p-0">
                  <TabsTrigger
                    value="sources"
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent bg-transparent"
                  >
                    <Database className="w-4 h-4" />
                    Sources de données
                  </TabsTrigger>
                  <TabsTrigger
                    value="calculation"
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent bg-transparent"
                  >
                    <Calculator className="w-4 h-4" />
                    Options de calcul
                  </TabsTrigger>
                  <TabsTrigger
                    value="dashboard"
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent bg-transparent"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Options du dashboard
                  </TabsTrigger>
                  <TabsTrigger
                    value="notifications"
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent bg-transparent"
                  >
                    <BellRing className="w-4 h-4" />
                    Préférences de notification
                  </TabsTrigger>
                  <TabsTrigger
                    value="users"
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent bg-transparent"
                  >
                    <Users className="w-4 h-4" />
                    Utilisateurs
                  </TabsTrigger>
                  <TabsTrigger
                    value="developers"
                    className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-gray-600 border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:bg-transparent bg-transparent"
                  >
                    <Code className="w-4 h-4" />
                    Développeurs
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              <TabsContent value="sources" className="mt-0 space-y-8">
                {/* Billing Systems Section */}
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-gray-900">Systèmes de facturation</h2>

                  <div className="bg-white rounded-lg border border-gray-200">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-b border-gray-200">
                          <TableHead className="text-left font-medium text-gray-700 py-4 px-6">Type</TableHead>
                          <TableHead className="text-left font-medium text-gray-700 py-4 px-6">
                            Nom de la source
                          </TableHead>
                          <TableHead className="text-left font-medium text-gray-700 py-4 px-6">Statut</TableHead>
                          <TableHead className="text-left font-medium text-gray-700 py-4 px-6">
                            Date de la dernière mise à jour
                          </TableHead>
                          <TableHead className="text-right font-medium text-gray-700 py-4 px-6"></TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {billingSystemsData.map((system, index) => (
                          <TableRow key={index} className="border-b border-gray-100">
                            <TableCell className="py-4 px-6 font-medium text-gray-900">{system.type}</TableCell>
                            <TableCell className="py-4 px-6 text-gray-900">{system.name}</TableCell>
                            <TableCell className="py-4 px-6">
                              <Badge className="bg-green-100 text-green-700 hover:bg-green-100">{system.status}</Badge>
                            </TableCell>
                            <TableCell className="py-4 px-6 text-gray-600">{system.lastUpdate}</TableCell>
                            <TableCell className="py-4 px-6">
                              <div className="flex items-center gap-2 justify-end">
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <RefreshCw className="w-4 h-4 text-gray-400" />
                                </Button>
                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                  <Settings className="w-4 h-4 text-gray-400" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Plus className="w-4 h-4" />
                    Connecter un nouveau système de facturation
                  </Button>
                </div>

                {/* CRM Section */}
                <div className="space-y-4">
                  <h2 className="text-lg font-semibold text-gray-900">CRM</h2>

                  <div className="bg-white rounded-lg border border-gray-200">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-b border-gray-200">
                          <TableHead className="text-left font-medium text-gray-700 py-4 px-6">Type</TableHead>
                          <TableHead className="text-left font-medium text-gray-700 py-4 px-6">
                            Nom de la source
                          </TableHead>
                          <TableHead className="text-left font-medium text-gray-700 py-4 px-6">Statut</TableHead>
                          <TableHead className="text-left font-medium text-gray-700 py-4 px-6">
                            Date de la dernière mise à jour
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell colSpan={4} className="py-12 text-center text-gray-500">
                            Add a source to get started
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>

                  <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                    <Plus className="w-4 h-4" />
                    Connecter un nouveau CRM
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="calculation" className="mt-0">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Options de calcul</h3>
                  <p className="text-gray-500">Configuration des paramètres de calcul des métriques</p>
                </div>
              </TabsContent>

              <TabsContent value="dashboard" className="mt-0">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Options du dashboard</h3>
                  <p className="text-gray-500">Personnalisation de l'affichage du tableau de bord</p>
                </div>
              </TabsContent>

              <TabsContent value="notifications" className="mt-0">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Préférences de notification</h3>
                  <p className="text-gray-500">Configuration des alertes et notifications</p>
                </div>
              </TabsContent>

              <TabsContent value="users" className="mt-0">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Utilisateurs</h3>
                  <p className="text-gray-500">Gestion des utilisateurs et des permissions</p>
                </div>
              </TabsContent>

              <TabsContent value="developers" className="mt-0">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Développeurs</h3>
                  <p className="text-gray-500">API et outils de développement</p>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
