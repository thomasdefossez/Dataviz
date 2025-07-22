"use client"

import { useState } from "react"
import { BarChart3, ChevronDown, ChevronLeft, ChevronRight, Download, X, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample client data
const clientsData = [
  {
    id: 1,
    name: "Thomas DELACROIX",
    initials: "TH",
    country: "🇫🇷",
    mrr: "49.50 €",
    mrrShare: "0.003 %",
    clientSince: "01/08/2024",
  },
  {
    id: 2,
    name: "Marie DUBOIS",
    initials: "MD",
    country: "🇫🇷",
    mrr: "65.50 €",
    mrrShare: "0.003 %",
    clientSince: "15/08/2024",
  },
  {
    id: 3,
    name: "Pierre MARTIN",
    initials: "PM",
    country: "🇫🇷",
    mrr: "34.50 €",
    mrrShare: "0.002 %",
    clientSince: "22/07/2024",
  },
  {
    id: 4,
    name: "Sophie BERNARD",
    initials: "SB",
    country: "🇫🇷",
    mrr: "78.50 €",
    mrrShare: "0.004 %",
    clientSince: "03/08/2024",
  },
  {
    id: 5,
    name: "Jean PETIT",
    initials: "JP",
    country: "🇫🇷",
    mrr: "29.50 €",
    mrrShare: "0.002 %",
    clientSince: "18/08/2024",
  },
  {
    id: 6,
    name: "Claire MOREAU",
    initials: "CM",
    country: "🇫🇷",
    mrr: "54.50 €",
    mrrShare: "0.003 %",
    clientSince: "11/08/2024",
  },
  {
    id: 7,
    name: "Antoine SIMON",
    initials: "AS",
    country: "🇫🇷",
    mrr: "42.50 €",
    mrrShare: "0.003 %",
    clientSince: "25/07/2024",
  },
  {
    id: 8,
    name: "Isabelle MICHEL",
    initials: "IM",
    country: "🇫🇷",
    mrr: "67.50 €",
    mrrShare: "0.004 %",
    clientSince: "07/08/2024",
  },
  {
    id: 9,
    name: "François LEROY",
    initials: "FL",
    country: "🇫🇷",
    mrr: "31.50 €",
    mrrShare: "0.002 %",
    clientSince: "14/08/2024",
  },
  {
    id: 10,
    name: "Nathalie ROUX",
    initials: "NR",
    country: "🇫🇷",
    mrr: "58.50 €",
    mrrShare: "0.003 %",
    clientSince: "29/07/2024",
  },
]

// Generate more sample data
const generateMoreClients = () => {
  const names = ["LAURENT", "GARCIA", "DAVID", "BERTRAND", "MOREL", "FOURNIER", "GIRARD", "BONNET", "DUPONT", "LAMBERT"]
  const firstNames = [
    "Alexandre",
    "Camille",
    "Julien",
    "Émilie",
    "Nicolas",
    "Sarah",
    "Maxime",
    "Laura",
    "Vincent",
    "Céline",
  ]
  const moreClients = []

  for (let i = 11; i <= 50; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)]
    const lastName = names[Math.floor(Math.random() * names.length)]
    const initials = firstName.charAt(0) + lastName.charAt(0)
    const mrr = (Math.random() * 80 + 20).toFixed(2)
    const mrrShare = "0.00" + Math.floor(Math.random() * 9 + 1)
    const day = Math.floor(Math.random() * 28 + 1)
      .toString()
      .padStart(2, "0")
    const month = Math.floor(Math.random() * 2 + 7)
      .toString()
      .padStart(2, "0") // July or August

    moreClients.push({
      id: i,
      name: `${firstName} ${lastName}`,
      initials,
      country: "🇫🇷",
      mrr: `${mrr} €`,
      mrrShare: `${mrrShare} %`,
      clientSince: `${day}/${month}/2024`,
    })
  }
  return moreClients
}

const allClients = [...clientsData, ...generateMoreClients()]

interface ClientsPageProps {
  onNavigateBack: () => void
}

export default function ClientsPage({ onNavigateBack }: ClientsPageProps) {
  const [showMrrPoint, setShowMrrPoint] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20
  const totalPages = Math.ceil(allClients.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentClients = allClients.slice(startIndex, endIndex)

  const [sidebarState, setSidebarState] = useState({
    synthese: false,
    revenus: false,
    croissance: false,
    clients: true,
    retention: false,
    unitEconomics: false,
  })

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar - Same as dashboard but with Mes clients highlighted */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
        {/* Logo/Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
              TB
            </div>
            <span className="font-semibold text-gray-900">Analytics</span>
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
                <div className="py-1 flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                  CMRR - CARR
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                    NEW
                  </Badge>
                </div>
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
                <div className="py-1 text-blue-600 bg-blue-50 rounded px-2 -mx-2">Mes clients</div>
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
                <div className="py-1 flex items-center gap-2 hover:text-blue-600 cursor-pointer">
                  Renouvellements
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                    NEW
                  </Badge>
                </div>
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
              <span>Clients</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">Mes clients</span>
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <span>Besoin d'aide</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Import Banner */}
        <div className="bg-blue-50 border-b border-blue-200 px-6 py-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-800">
              Dernière mise à jour de vos données de facturation le 09/08/2024.
            </span>
            <div className="flex items-center gap-2">
              <Button size="sm" variant="outline" className="text-blue-700 border-blue-300 bg-transparent">
                Importer
              </Button>
              <Button size="sm" variant="ghost">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <div className="text-sm text-gray-600">Clients actifs</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">18 985 clients</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="text-sm text-gray-600">Total</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">31 041 clients</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="text-sm text-gray-600">Churn annuel</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">199 clients</div>
              </CardContent>
            </Card>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Switch
                    checked={showMrrPoint}
                    onCheckedChange={setShowMrrPoint}
                    className="data-[state=checked]:bg-blue-600"
                  />
                  <span className="text-sm text-gray-700">Afficher le point de MRR</span>
                </div>
                <div className="text-sm text-blue-600 font-medium">MRR</div>
                <div className="text-sm text-gray-500">ARR</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Tous mes clients</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Tous mes clients</DropdownMenuItem>
                    <DropdownMenuItem>Clients actifs</DropdownMenuItem>
                    <DropdownMenuItem>Clients inactifs</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>

          {/* Clients Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  <TableHead className="text-left font-medium text-gray-700 py-4 px-6">Clients actifs</TableHead>
                  <TableHead className="text-left font-medium text-gray-700 py-4 px-6">Pays</TableHead>
                  <TableHead className="text-left font-medium text-gray-700 py-4 px-6">MRR actuel</TableHead>
                  <TableHead className="text-left font-medium text-gray-700 py-4 px-6">Part du MRR</TableHead>
                  <TableHead className="text-left font-medium text-gray-700 py-4 px-6">Client depuis</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentClients.map((client) => (
                  <TableRow key={client.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <TableCell className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 text-sm font-medium">
                          {client.initials}
                        </div>
                        <span className="text-gray-900 font-medium">{client.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 px-6">
                      <span className="text-lg">{client.country}</span>
                    </TableCell>
                    <TableCell className="py-4 px-6">
                      <span className="text-gray-900 font-medium">{client.mrr}</span>
                    </TableCell>
                    <TableCell className="py-4 px-6">
                      <span className="text-blue-600 font-medium">{client.mrrShare}</span>
                    </TableCell>
                    <TableCell className="py-4 px-6">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-600">{client.clientSince}</span>
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0">
                          <Download className="w-3 h-3 text-gray-400" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 py-4 border-t border-gray-200">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={currentPage === page ? "default" : "outline"}
                  size="sm"
                  onClick={() => setCurrentPage(page)}
                  className={currentPage === page ? "bg-blue-600 text-white" : ""}
                >
                  {page}
                </Button>
              ))}

              <span className="text-sm text-gray-500 mx-2">...</span>

              <Button variant="outline" size="sm" onClick={() => setCurrentPage(totalPages)}>
                {totalPages}
              </Button>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
