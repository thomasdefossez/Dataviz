"use client"

import { useState } from "react"
import { BarChart3, ChevronDown, ChevronLeft, ChevronRight, Download, X, Bell, Filter, GitCompare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample revenue recognition data
const revenueData = [
  {
    month: "01/2024",
    subscriptionRevenue: 188053,
    oneTimeRevenue: 0,
    total: 188053,
    label: "01/2024",
  },
  {
    month: "02/2024",
    subscriptionRevenue: 236059,
    oneTimeRevenue: 0,
    total: 236059,
    label: "02/2024",
  },
  {
    month: "03/2024",
    subscriptionRevenue: 316645,
    oneTimeRevenue: 0,
    total: 316645,
    label: "03/2024",
  },
  {
    month: "04/2024",
    subscriptionRevenue: 301946,
    oneTimeRevenue: 0,
    total: 301946,
    label: "04/2024",
  },
  {
    month: "05/2024",
    subscriptionRevenue: 370406,
    oneTimeRevenue: 0,
    total: 370406,
    label: "05/2024",
  },
  {
    month: "06/2024",
    subscriptionRevenue: 313852,
    oneTimeRevenue: 0,
    total: 313852,
    label: "06/2024",
  },
  {
    month: "07/2024",
    subscriptionRevenue: 368748,
    oneTimeRevenue: 0,
    total: 368748,
    label: "07/2024",
  },
  {
    month: "08/2024",
    subscriptionRevenue: 203291,
    oneTimeRevenue: 0,
    total: 203291,
    label: "08/2024",
  },
  {
    month: "09/2024",
    subscriptionRevenue: 154223,
    oneTimeRevenue: 0,
    total: 154223,
    label: "09/2024",
  },
  {
    month: "10/2024",
    subscriptionRevenue: 123108,
    oneTimeRevenue: 0,
    total: 123108,
    label: "10/2024",
  },
  {
    month: "11/2024",
    subscriptionRevenue: 117626,
    oneTimeRevenue: 0,
    total: 117626,
    label: "11/2024",
  },
  {
    month: "12/2024",
    subscriptionRevenue: 129999,
    oneTimeRevenue: 0,
    total: 129999,
    label: "12/2024",
  },
  {
    month: "01/2025",
    subscriptionRevenue: 94509,
    oneTimeRevenue: 0,
    total: 94509,
    label: "01/2025",
  },
]

// Sample table data
const tableData = [
  {
    month: "01/2024",
    fae: "0 €",
    faeVariation: "0 €",
    pca: "311 682 €",
    pcaVariation: "311 682 €",
    subscriptionRevenue: "182 791 €",
    oneTimeRevenue: "262 €",
    total: "188 053 €",
  },
  {
    month: "02/2024",
    fae: "0 €",
    faeVariation: "0 €",
    pca: "576 734 €",
    pcaVariation: "265 052 €",
    subscriptionRevenue: "235 871 €",
    oneTimeRevenue: "188 €",
    total: "236 059 €",
  },
  {
    month: "03/2024",
    fae: "0 €",
    faeVariation: "0 €",
    pca: "744 377 €",
    pcaVariation: "167 643 €",
    subscriptionRevenue: "315 976 €",
    oneTimeRevenue: "669 €",
    total: "316 645 €",
  },
  {
    month: "04/2024",
    fae: "0 €",
    faeVariation: "0 €",
    pca: "830 406 €",
    pcaVariation: "86 029 €",
    subscriptionRevenue: "301 649 €",
    oneTimeRevenue: "297 €",
    total: "301 946 €",
  },
  {
    month: "05/2024",
    fae: "0 €",
    faeVariation: "0 €",
    pca: "905 215 €",
    pcaVariation: "74 809 €",
    subscriptionRevenue: "370 406 €",
    oneTimeRevenue: "0 €",
    total: "370 406 €",
  },
  {
    month: "06/2024",
    fae: "0 €",
    faeVariation: "0 €",
    pca: "872 061 €",
    pcaVariation: "-33 154 €",
    subscriptionRevenue: "313 852 €",
    oneTimeRevenue: "0 €",
    total: "313 852 €",
  },
  {
    month: "07/2024",
    fae: "0 €",
    faeVariation: "0 €",
    pca: "986",
    pcaVariation: "114",
    subscriptionRevenue: "368",
    oneTimeRevenue: "",
    total: "368",
  },
]

const formatCurrency = (value: number) => {
  if (value === 0) return "0 €"
  return `${value.toLocaleString("fr-FR")} €`
}

interface ReconnaissanceRevenuPageProps {
  onNavigateBack: () => void
}

export default function ReconnaissanceRevenuPage({ onNavigateBack }: ReconnaissanceRevenuPageProps) {
  const [timelineValue, setTimelineValue] = useState([75])
  const maxValue = Math.max(...revenueData.map((d) => d.total))

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
                <div className="py-1 text-blue-600 bg-blue-50 rounded px-2 -mx-2">Reconnaissance du revenu</div>
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
              <span className="text-gray-900 font-medium">Reconnaissance du revenu</span>
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
                <span className="text-sm text-gray-600">Jan 24</span>
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
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-gray-900">94 509 €</span>
                <span className="text-sm text-gray-500">en janvier 2025</span>
                <Badge variant="destructive" className="text-xs">
                  -5.6 % / mois
                </Badge>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <span>Revenus par type</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Revenus par type</DropdownMenuItem>
                  <DropdownMenuItem>Revenus par client</DropdownMenuItem>
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
                <span>450 K€</span>
                <span>400 K€</span>
                <span>350 K€</span>
                <span>300 K€</span>
                <span>250 K€</span>
                <span>200 K€</span>
                <span>150 K€</span>
                <span>100 K€</span>
                <span>50 K€</span>
                <span>0 €</span>
              </div>

              {/* Chart area */}
              <div className="ml-12 h-full flex items-end justify-between gap-1">
                {revenueData.map((data, index) => {
                  const subscriptionHeight =
                    data.subscriptionRevenue === 0 ? 2 : (data.subscriptionRevenue / maxValue) * 300
                  const oneTimeHeight = data.oneTimeRevenue === 0 ? 0 : (data.oneTimeRevenue / maxValue) * 300
                  return (
                    <div key={index} className="flex flex-col items-center gap-2 flex-1">
                      <div className="relative flex flex-col">
                        {data.total > 0 && (
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-700 font-medium whitespace-nowrap">
                            {formatCurrency(data.total)}
                          </div>
                        )}
                        {/* One-time revenue (light blue, on top) */}
                        {oneTimeHeight > 0 && (
                          <div
                            className="bg-blue-400 rounded-t-sm"
                            style={{
                              height: `${oneTimeHeight}px`,
                              width: "24px",
                            }}
                          />
                        )}
                        {/* Subscription revenue (dark blue, bottom) */}
                        <div
                          className="bg-blue-900 min-h-[2px]"
                          style={{
                            height: `${subscriptionHeight}px`,
                            width: "24px",
                            borderTopLeftRadius: oneTimeHeight > 0 ? "0" : "2px",
                            borderTopRightRadius: oneTimeHeight > 0 ? "0" : "2px",
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
            <div className="flex items-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-900 rounded-sm"></div>
                <span className="text-sm text-gray-600">Revenus liés aux abonnements</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
                <span className="text-sm text-gray-600">Revenus ponctuels</span>
              </div>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  <TableHead className="text-left font-medium text-gray-700 py-4 px-6 w-64"></TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">01/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">02/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">03/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">04/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">05/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">06/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">07/2024</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-100">
                  <TableCell className="py-4 px-6 font-medium text-gray-900">
                    Montant des factures à établir (FAE)
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">0 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">0 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">0 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">0 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">0 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">0 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">0 €</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-100">
                  <TableCell className="py-4 px-6 font-medium text-gray-900">Variation des FAE</TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      0 €
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      0 €
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      0 €
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      0 €
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      0 €
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      0 €
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      0 €
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-100">
                  <TableCell className="py-4 px-6 font-medium text-gray-900">
                    Montant des produits constatés d'avance...
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">311 682 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">576 734 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">744 377 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">830 406 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">905 215 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">872 061 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">986</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-100">
                  <TableCell className="py-4 px-6 font-medium text-gray-900">Variation des PCA</TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      311 682 €
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      265 052 €
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      167 643 €
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      86 029 €
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      74 809 €
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge variant="destructive" className="bg-red-100 text-red-700">
                      -33 154 €
                    </Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      114
                    </Badge>
                  </TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-100">
                  <TableCell className="py-4 px-6 font-medium text-gray-900">Revenus liés aux abonnements</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">182 791 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">235 871 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">315 976 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">301 649 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">370 406 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">313 852 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">368</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-100">
                  <TableCell className="py-4 px-6 font-medium text-gray-900">Revenus ponctuels</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">262 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">188 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">669 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">297 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">0 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900">0 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900"></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-6 font-medium text-gray-900">Revenus - Total</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">188 053 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">236 059 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">316 645 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">301 946 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">370 406 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">313 852 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">368</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  )
}
