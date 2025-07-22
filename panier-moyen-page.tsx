"use client"

import { useState } from "react"
import {
  BarChart3,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Download,
  X,
  Bell,
  Filter,
  GitCompare,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample data for average basket value over time
const basketData = [
  { date: "31/01/2024", value: 12.2, change: -0.92, changePercent: -7 },
  { date: "29/02/2024", value: 12.4, change: 0, changePercent: 0 },
  { date: "31/03/2024", value: 14.2, change: 1.94, changePercent: 15.8 },
  { date: "30/04/2024", value: 12.1, change: -2.12, changePercent: -15 },
  { date: "31/05/2024", value: 13.3, change: 1.2, changePercent: 9.9 },
  { date: "30/06/2024", value: 10.6, change: -2.69, changePercent: -20.3 },
  { date: "31/07/2024", value: 10.6, change: 0, changePercent: 0 },
  { date: "31/08/2024", value: 10.6, change: 0, changePercent: 0 },
  { date: "30/09/2024", value: 10.6, change: 0, changePercent: 0 },
  { date: "31/10/2024", value: 10.6, change: 0, changePercent: 0 },
  { date: "30/11/2024", value: 10.6, change: 0, changePercent: 0 },
  { date: "31/12/2024", value: 10.6, change: 0, changePercent: 0 },
  { date: "31/01/2025", value: 10.6, change: 0, changePercent: 0 },
]

// Chart data points for the line chart
const chartPoints = [
  { x: 50, y: 60, value: 12.2 },
  { x: 100, y: 58, value: 12.4 },
  { x: 150, y: 45, value: 14.2 },
  { x: 200, y: 62, value: 12.1 },
  { x: 250, y: 50, value: 13.3 },
  { x: 300, y: 75, value: 10.6 },
  { x: 350, y: 75, value: 10.6 },
  { x: 400, y: 75, value: 10.6 },
  { x: 450, y: 75, value: 10.6 },
  { x: 500, y: 75, value: 10.6 },
  { x: 550, y: 75, value: 10.6 },
  { x: 600, y: 75, value: 10.6 },
  { x: 650, y: 75, value: 10.6 },
]

interface PanierMoyenPageProps {
  onNavigateBack: () => void
}

export default function PanierMoyenPage({ onNavigateBack }: PanierMoyenPageProps) {
  const [timelineValue, setTimelineValue] = useState([75])

  const [sidebarState, setSidebarState] = useState({
    synthese: false,
    revenus: false,
    croissance: false,
    clients: false,
    retention: false,
    unitEconomics: true,
  })

  const getChangeColor = (change: number) => {
    if (change > 0) return "bg-green-500 text-white"
    if (change < 0) return "bg-red-500 text-white"
    return "bg-green-500 text-white"
  }

  const getChangePercentColor = (percent: number) => {
    if (percent > 0) return "bg-green-500 text-white"
    if (percent < 0) return "bg-red-500 text-white"
    return "bg-green-500 text-white"
  }

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
                <div className="py-1 text-blue-600 bg-blue-50 rounded px-2 -mx-2">Panier moyen & Valeur annuelle</div>
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
              <span>Unit economics</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">Panier moyen & Valeur annuelle moyenne</span>
              <HelpCircle className="w-4 h-4 text-gray-400" />
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
                <span className="text-sm text-gray-600">Jul 25</span>
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
              <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                Décomposer
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <span>Panier moyen</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Panier moyen</DropdownMenuItem>
                  <DropdownMenuItem>Valeur annuelle moyenne</DropdownMenuItem>
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

          {/* Key Metric */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold text-gray-900">10.6 €</span>
            <span className="text-sm text-gray-500">au 31/07/2025</span>
            <Badge variant="destructive" className="text-xs">
              -0.7 % / mois
            </Badge>
          </div>

          {/* Select comparison checkbox */}
          <div className="mb-6">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" className="rounded" />
              Select comparison
            </label>
          </div>

          {/* Line Chart */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="h-96 relative">
              {/* Y-axis labels */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-4">
                <span>18 €</span>
                <span>16 €</span>
                <span>14 €</span>
                <span>12 €</span>
                <span>10 €</span>
                <span>8 €</span>
                <span>6 €</span>
                <span>4 €</span>
                <span>2 €</span>
                <span>0 €</span>
              </div>

              {/* Chart area */}
              <div className="ml-12 h-full relative">
                <svg className="w-full h-full" viewBox="0 0 700 400">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <line key={i} x1="0" y1={i * 40} x2="700" y2={i * 40} stroke="#f3f4f6" strokeWidth="1" />
                  ))}

                  {/* Line chart */}
                  <polyline
                    points={chartPoints.map((p) => `${p.x},${p.y}`).join(" ")}
                    fill="none"
                    stroke="#1e40af"
                    strokeWidth="2"
                  />

                  {/* Data points */}
                  {chartPoints.map((point, i) => (
                    <circle key={i} cx={point.x} cy={point.y} r="4" fill="#1e40af" />
                  ))}
                </svg>
              </div>

              {/* X-axis labels */}
              <div className="absolute bottom-0 left-12 right-0 flex justify-between text-xs text-gray-500 mt-2">
                <span>31/01/2024</span>
                <span>29/02/2024</span>
                <span>31/03/2024</span>
                <span>30/04/2024</span>
                <span>31/05/2024</span>
                <span>30/06/2024</span>
                <span>31/07/2024</span>
                <span>31/08/2024</span>
                <span>30/09/2024</span>
                <span>31/10/2024</span>
                <span>30/11/2024</span>
                <span>31/12/2024</span>
                <span>31/01/2025</span>
              </div>
            </div>

            {/* Legend */}
            <div className="flex items-center gap-2 mt-4">
              <div className="w-3 h-3 bg-blue-900 rounded-full"></div>
              <span className="text-sm text-gray-600">Panier moyen</span>
            </div>
          </div>

          {/* Data Table */}
          <div className="bg-white rounded-lg border border-gray-200">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-gray-200">
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">31/01/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">31/05/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">30/06/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">31/07/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">09/08/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">30/09/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">31/10/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">30/11/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">31/12/2024</TableHead>
                  <TableHead className="text-center font-medium text-gray-700 py-4 px-4">31/01/2025</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="border-b border-gray-100">
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">12.2 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">14.2 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">12.1 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">13.3 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">10.6 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">10.6 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">10.6 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">10.6 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">10.6 €</TableCell>
                  <TableCell className="py-4 px-4 text-center text-gray-900 font-medium">10.6 €</TableCell>
                </TableRow>
                <TableRow className="border-b border-gray-100">
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangeColor(-0.92)}`}>-0.92 €</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangeColor(1.94)}`}>1.94 €</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangeColor(-2.12)}`}>-2.12 €</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangeColor(1.2)}`}>1.2 €</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangeColor(-2.69)}`}>-2.69 €</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangeColor(0)}`}>0 €</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangeColor(0)}`}>0 €</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangeColor(0)}`}>0 €</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangeColor(0)}`}>0 €</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangeColor(0)}`}>0 €</Badge>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangePercentColor(-7)}`}>-7%</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangePercentColor(15.8)}`}>15.8%</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangePercentColor(-15)}`}>-15%</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangePercentColor(9.9)}`}>9.9%</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangePercentColor(-20.3)}`}>-20.3%</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangePercentColor(0)}`}>0%</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangePercentColor(0)}`}>0%</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangePercentColor(0)}`}>0%</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangePercentColor(0)}`}>0%</Badge>
                  </TableCell>
                  <TableCell className="py-4 px-4 text-center">
                    <Badge className={`text-xs ${getChangePercentColor(0)}`}>0%</Badge>
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
