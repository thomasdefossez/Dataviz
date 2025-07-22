"use client"

import { useState } from "react"
import { BarChart3, ChevronDown, ChevronLeft, ChevronRight, Download, X, Bell, Filter, GitCompare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample billing data
const billingData = [
  { month: "12/2023", value: 0, label: "12/2023" },
  { month: "01/2024", value: 499735, label: "01/2024" },
  { month: "02/2024", value: 501111, label: "02/2024" },
  { month: "03/2024", value: 484288, label: "03/2024" },
  { month: "04/2024", value: 387975, label: "04/2024" },
  { month: "05/2024", value: 445215, label: "05/2024" },
  { month: "06/2024", value: 280698, label: "06/2024" },
  { month: "07/2024", value: 483563, label: "07/2024" },
  { month: "08/2024", value: 43554, label: "08/2024" },
  { month: "09/2024", value: 0, label: "09/2024" },
  { month: "10/2024", value: 0, label: "10/2024" },
  { month: "11/2024", value: 0, label: "11/2024" },
  { month: "12/2024", value: 0, label: "12/2024" },
  { month: "01/2025", value: 0, label: "01/2025" },
]

const formatCurrency = (value: number) => {
  if (value === 0) return "0 €"
  return `${value.toLocaleString("fr-FR")} €`
}

interface MontantsFacturesPageProps {
  onNavigateBack: () => void
}

export default function MontantsFacturesPage({ onNavigateBack }: MontantsFacturesPageProps) {
  const [timelineValue, setTimelineValue] = useState([75])
  const maxValue = Math.max(...billingData.map((d) => d.value))

  const [sidebarState, setSidebarState] = useState({
    synthese: false,
    revenus: true,
    croissance: false,
    clients: false,
    retention: false,
    unitEconomics: false,
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
                <div className="py-1 text-blue-600 bg-blue-50 rounded px-2 -mx-2">Montants facturés</div>
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
              <span>Revenus</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">Montants facturés</span>
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
          {/* Timeline */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-gray-600">Période / Mois</span>
              <div className="flex items-center gap-8 text-sm text-gray-500">
                <span>2022</span>
                <span>2023</span>
                <span>2024</span>
                <span>2025</span>
              </div>
            </div>
            <div className="relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-600">Dec 23</span>
                <span className="text-sm text-gray-600">Jan 25</span>
              </div>
              <Slider value={timelineValue} onValueChange={setTimelineValue} max={100} step={1} className="w-full" />
              <div className="flex justify-end mt-1">
                <span className="text-sm font-medium text-gray-900">Today</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              <span className="text-sm text-gray-600">- en janvier 2025</span>
            </div>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <span>Montants facturés</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Montants facturés</DropdownMenuItem>
                  <DropdownMenuItem>Montants payés</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <span>Montant facturé par statut de facturation</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Par statut de facturation</DropdownMenuItem>
                  <DropdownMenuItem>Par client</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button size="sm" variant="ghost">
                <Download className="w-4 h-4" />
              </Button>

              <Button size="sm" variant="ghost" className="flex items-center gap-1">
                <GitCompare className="w-4 h-4" />
                <span className="text-sm">Comparer</span>
              </Button>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="h-96 relative">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-4">
                <span>600 K€</span>
                <span>500 K€</span>
                <span>400 K€</span>
                <span>300 K€</span>
                <span>200 K€</span>
                <span>100 K€</span>
                <span>0 €</span>
              </div>

              {/* Chart area */}
              <div className="ml-12 h-full flex items-end justify-between gap-2">
                {billingData.map((data, index) => {
                  const height = data.value === 0 ? 2 : (data.value / maxValue) * 300
                  return (
                    <div key={index} className="flex flex-col items-center gap-2 flex-1">
                      <div className="relative">
                        {data.value > 0 && (
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-700 font-medium whitespace-nowrap">
                            {formatCurrency(data.value)}
                          </div>
                        )}
                        <div
                          className="bg-blue-900 rounded-t-sm min-h-[2px]"
                          style={{
                            height: `${height}px`,
                            width: "32px",
                          }}
                        />
                      </div>
                      <span className="text-xs text-gray-500 transform -rotate-45 origin-center mt-2">
                        {data.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 mt-4">
              <div className="w-3 h-3 bg-blue-900 rounded-sm"></div>
              <span className="text-sm text-gray-600">Ouvert</span>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  <TableHead className="text-left font-medium text-gray-700 py-4 px-6 w-32"></TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">12/2023</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">01/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">02/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">03/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">04/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">05/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">06/2024</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-100">
                  <TableCell className="py-4 px-6 font-medium text-gray-900">Ouvert</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">0 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-blue-600 bg-blue-50 font-medium">
                    499 735 €
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">501 111 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">484 288 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">387 975 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">445 215 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">280</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6 font-medium text-gray-900">Total</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">0 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">499 735 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">501 111 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">484 288 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">387 975 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">445 215 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">280</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  )
}
