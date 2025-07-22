"use client"

import { useState } from "react"
import { BarChart3, ChevronDown, ChevronLeft, ChevronRight, Download, X, Bell, Filter, Edit3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample MRR data
const mrrData = [
  {
    date: "31/01/2025",
    mrr: 200153,
    target: 201061,
    comparison: 0,
    variation: -241,
    growthRate: -0.1,
  },
  {
    date: "28/02/2025",
    mrr: 199910,
    target: 201061,
    comparison: -1,
    variation: -243,
    growthRate: -0.1,
  },
  {
    date: "31/03/2025",
    mrr: 199822,
    target: 201061,
    comparison: -1,
    variation: -88,
    growthRate: 0,
  },
  {
    date: "30/04/2025",
    mrr: 199643,
    target: 201061,
    comparison: -1,
    variation: -178,
    growthRate: -0.1,
  },
  {
    date: "31/05/2025",
    mrr: 199430,
    target: 201061,
    comparison: -1,
    variation: -214,
    growthRate: -0.1,
  },
  {
    date: "30/06/2025",
    mrr: 199408,
    target: 201061,
    comparison: -1,
    variation: -21,
    growthRate: 0,
  },
  {
    date: "31/07/2025",
    mrr: 199364,
    target: 201061,
    comparison: -1,
    variation: -44,
    growthRate: 0,
  },
]

// Chart data points for visualization
const chartPoints = [
  { x: 60, y: 45, value: 200153 },
  { x: 120, y: 47, value: 199910 },
  { x: 180, y: 48, value: 199822 },
  { x: 240, y: 50, value: 199643 },
  { x: 300, y: 52, value: 199430 },
  { x: 360, y: 53, value: 199408 },
  { x: 420, y: 54, value: 199364 },
]

const formatCurrency = (value: number) => {
  return `${value.toLocaleString("fr-FR")} €`
}

const formatPercentage = (value: number) => {
  return `${value > 0 ? "+" : ""}${value}%`
}

interface MrrArrPageProps {
  onNavigateBack: () => void
}

export default function MrrArrPage({ onNavigateBack }: MrrArrPageProps) {
  const [timelineValue, setTimelineValue] = useState([75])

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
                <div className="py-1 text-blue-600 bg-blue-50 rounded px-2 -mx-2">MRR - ARR</div>
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
              <span className="text-gray-900 font-medium">MRR - ARR</span>
            </div>
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <span>MRR</span>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>MRR</DropdownMenuItem>
                  <DropdownMenuItem>ARR</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button size="sm" variant="ghost">
                <Download className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="bg-blue-600 text-white hover:bg-blue-700">
                <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
              </Button>
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
          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <Filter className="w-4 h-4" />
                Filtrer
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                Décomposer
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                <span>Select comparison</span>
              </Button>
            </div>
          </div>

          {/* Key Metric */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-gray-900">199 364 €</span>
            <span className="text-sm text-gray-500">au 31/07/2025</span>
            <Badge variant="destructive" className="text-xs">
              -0.1 % / mois
            </Badge>
          </div>

          {/* Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="h-80 relative">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-4">
                <span>250 K€</span>
                <span>200 K€</span>
                <span>150 K€</span>
                <span>100 K€</span>
                <span>50 K€</span>
                <span>0 €</span>
              </div>

              {/* Chart area */}
              <div className="ml-12 h-full relative">
                <svg className="w-full h-full" viewBox="0 0 500 300">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <line key={i} x1="0" y1={i * 50} x2="500" y2={i * 50} stroke="#f3f4f6" strokeWidth="1" />
                  ))}

                  {/* Vertical line at current date */}
                  <line x1="180" y1="0" x2="180" y2="300" stroke="#e5e7eb" strokeWidth="1" strokeDasharray="4,4" />

                  {/* Data line */}
                  <polyline
                    points={chartPoints.map((p) => `${p.x},${p.y}`).join(" ")}
                    fill="none"
                    stroke="#1e40af"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Data points */}
                  {chartPoints.map((point, i) => (
                    <circle key={i} cx={point.x} cy={point.y} r="5" fill="#1e40af" />
                  ))}

                  {/* Highlighted point */}
                  <circle cx="180" cy="48" r="8" fill="#1e40af" stroke="white" strokeWidth="2" />

                  {/* Data label */}
                  <g>
                    <rect x="140" y="20" width="80" height="25" fill="white" stroke="#e5e7eb" rx="4" />
                    <text x="150" y="32" className="text-xs fill-gray-600">
                      31/03/2025
                    </text>
                    <text x="150" y="42" className="text-xs fill-blue-600 font-semibold">
                      199 822 €
                    </text>
                  </g>
                </svg>
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-12 right-0 flex justify-between text-xs text-gray-500">
                <span>31/01/2025</span>
                <span>28/02/2025</span>
                <span>31/03/2025</span>
                <span>30/04/2025</span>
                <span>31/05/2025</span>
                <span>30/06/2025</span>
                <span>31/07/2025</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 mt-4">
              <div className="w-3 h-3 bg-blue-900 rounded-sm"></div>
              <span className="text-sm text-gray-600">MRR</span>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">31/01/2025</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">28/02/2025</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">31/03/2025</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">30/04/2025</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">31/05/2025</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">30/06/2025</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">31/07/2025</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-100">
                  <TableCell className="py-4 px-4 text-center">
                    <div className="font-medium text-gray-900">MRR</div>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">
                    {formatCurrency(mrrData[0].mrr)}
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">
                    {formatCurrency(mrrData[1].mrr)}
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center text-blue-600 bg-blue-50 font-medium">
                    {formatCurrency(mrrData[2].mrr)}
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">
                    {formatCurrency(mrrData[3].mrr)}
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">
                    {formatCurrency(mrrData[4].mrr)}
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">
                    {formatCurrency(mrrData[5].mrr)}
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">
                    {formatCurrency(mrrData[6].mrr)}
                  </TableCell>
                </TableRow>

                <TableRow className="border-b border-gray-100">
                  <TableCell className="py-4 px-4 text-center">
                    <div className="flex items-center gap-2 justify-center">
                      <Badge className="bg-orange-500 text-white text-xs">Nouvel objectif</Badge>
                      <Edit3 className="w-3 h-3 text-gray-400" />
                    </div>
                  </TableCell>
                  {mrrData.map((data, index) => (
                    <TableCell key={index} className="py-4 px-4 text-center text-gray-900 font-medium">
                      {formatCurrency(data.target)}
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow className="border-b border-gray-100">
                  <TableCell className="py-4 px-4 text-center">
                    <div className="flex items-center gap-2 justify-center">
                      <Edit3 className="w-3 h-3 text-gray-400" />
                      <span className="text-sm text-gray-700">Comparaison</span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className="bg-green-500 text-white text-xs">0 %</Badge>
                  </TableCell>
                  {mrrData.slice(1).map((data, index) => (
                    <TableCell key={index} className="py-4 px-4 text-center">
                      <Badge className="bg-red-500 text-white text-xs">{data.comparison}%</Badge>
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow className="border-b border-gray-100">
                  <TableCell className="py-4 px-4 text-center font-medium text-gray-900">Variation du MRR</TableCell>
                  {mrrData.map((data, index) => (
                    <TableCell key={index} className="py-4 px-4 text-center">
                      <Badge className="bg-red-500 text-white text-xs">{data.variation} €</Badge>
                    </TableCell>
                  ))}
                </TableRow>

                <TableRow>
                  <TableCell className="py-4 px-4 text-center font-medium text-gray-900">
                    Taux de croissance du MRR
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className="bg-red-500 text-white text-xs">{formatPercentage(mrrData[0].growthRate)}</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className="bg-red-500 text-white text-xs">{formatPercentage(mrrData[1].growthRate)}</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className="bg-green-500 text-white text-xs">{formatPercentage(mrrData[2].growthRate)}</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className="bg-red-500 text-white text-xs">{formatPercentage(mrrData[3].growthRate)}</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className="bg-red-500 text-white text-xs">{formatPercentage(mrrData[4].growthRate)}</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className="bg-green-500 text-white text-xs">{formatPercentage(mrrData[5].growthRate)}</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className="bg-green-500 text-white text-xs">{formatPercentage(mrrData[6].growthRate)}</Badge>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </main>
      </div>
    </div>
  )
}
