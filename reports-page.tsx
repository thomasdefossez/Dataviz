"use client"

import { useState } from "react"
import {
  BarChart3,
  ChevronDown,
  ChevronLeft,
  X,
  Bell,
  Filter,
  Plus,
  ImageIcon,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Available metrics organized by category
const availableMetrics = {
  Analytics: {
    Revenus: ["MRR - ARR", "CMRR - CARR", "Reconnaissance du revenu", "Montants facturés"],
    Croissance: ["Mouvements MRR-ARR", "Taux de croissance"],
    Clients: ["Nombre d'abonnés actifs", "Croissance des abonnés"],
    Rétention: ["Taux de churn", "Taux de rétention", "Analyse des cohortes", "Renouvellements"],
    "Unit economics": [
      "Panier moyen & Valeur annuelle moyenne",
      "Coût d'Acquisition Client (CAC)",
      "Durée d'amortissement du CAC",
      "Lifetime Value (LTV)",
      "LTV/CAC",
      "Taux de conversion des essais gratuits",
      "SaaS Quick Ratio",
    ],
  },
  Forecast: {
    Prévisions: ["Prévisions MRR", "Prévisions ARR", "Prévisions clients"],
  },
}

// Sample chart data for demonstration
const sampleChartData = [
  { month: "01/2025", subscription: 94509, oneTime: 0, total: 94509 },
  { month: "02/2025", subscription: 65150, oneTime: 0, total: 65150 },
  { month: "03/2025", subscription: 55939, oneTime: 0, total: 55939 },
  { month: "04/2025", subscription: 39573, oneTime: 0, total: 39573 },
  { month: "05/2025", subscription: 27147, oneTime: 0, total: 27147 },
  { month: "06/2025", subscription: 20441, oneTime: 0, total: 20441 },
  { month: "07/2025", subscription: 2792, oneTime: 0, total: 2792 },
]

interface ReportSection {
  id: string
  type: "metric" | "text" | "image"
  metric?: string
  title?: string
  content?: string
}

interface ReportsPageProps {
  onNavigateBack: () => void
}

export default function ReportsPage({ onNavigateBack }: ReportsPageProps) {
  const [timelineValue, setTimelineValue] = useState([75])
  const [selectedMetric, setSelectedMetric] = useState<string>("")
  const [activeTab, setActiveTab] = useState("Analytics")
  const [periodType, setPeriodType] = useState("glissante") // "glissante" or "fixe"
  const [reportSections, setReportSections] = useState<ReportSection[]>([])
  const [showMetricSelector, setShowMetricSelector] = useState(false)

  const [sidebarState, setSidebarState] = useState({
    synthese: false,
    revenus: false,
    croissance: false,
    clients: false,
    retention: false,
    unitEconomics: false,
    reports: true,
  })

  const addSection = (metric: string) => {
    const newSection: ReportSection = {
      id: Date.now().toString(),
      type: "metric",
      metric: metric,
      title: metric,
    }
    setReportSections([...reportSections, newSection])
    setSelectedMetric(metric)
    setShowMetricSelector(false)
  }

  const maxValue = Math.max(...sampleChartData.map((d) => d.total))

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
            <span className="font-semibold text-gray-900">Reports</span>
          </div>
        </div>

        {/* Favorites */}
        <div className="p-4 border-b border-gray-200">
          <span className="text-sm text-gray-500">Favoris</span>
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

          {/* Reports Section */}
          <div className="space-y-1">
            <div
              className="flex items-center justify-between px-3 py-2 text-sm text-white bg-blue-600 rounded-lg cursor-pointer"
              onClick={() => setSidebarState((prev) => ({ ...prev, reports: !prev.reports }))}
            >
              <span>Reports</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${sidebarState.reports ? "rotate-180" : ""}`} />
            </div>
            {sidebarState.reports && (
              <div className="px-6 space-y-1 text-sm text-gray-600">
                <div className="py-1 hover:text-blue-600 cursor-pointer">Rapport d'acquisition</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Rapport CMO</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Rapport CRO</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Rapport CMO</div>
                <div className="py-1 text-blue-600 bg-blue-50 rounded px-2 -mx-2">Nouveau rapport vide</div>
                <div className="py-1 hover:text-blue-600 cursor-pointer">Nouveau rapport vide</div>
              </div>
            )}
          </div>

          {/* Shared with me */}
          <div className="pt-4">
            <span className="text-sm text-gray-500 px-3">Partagés avec moi</span>
          </div>
        </nav>

        {/* New Report Button */}
        <div className="p-4 border-t border-gray-200">
          <Button className="w-full flex items-center gap-2 bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50">
            <Plus className="w-4 h-4" />
            Nouveau rapport
          </Button>
        </div>

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
            <div className="flex items-center gap-4">
              <ChevronLeft className="w-4 h-4 text-gray-600" />
              <span className="text-lg font-medium text-gray-900">Nouveau rapport vide</span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent">
                  <span>100%</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
                <Button variant="outline" size="sm">
                  Mode page
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent">
                  <span>Personnaliser</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Vous uniquement (privé)</span>
              <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent">
                <span>Partager</span>
                <ChevronDown className="w-3 h-3" />
              </Button>
              <Button variant="ghost" size="sm">
                Enregistré à l'instant
              </Button>
              <Button size="sm">Enregistrer</Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6 bg-white">
          <div className="max-w-4xl mx-auto">
            {/* Report Title */}
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Button variant="ghost" size="sm">
                  <ImageIcon className="w-4 h-4" />
                </Button>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm">
                    <Type className="w-4 h-4" />
                  </Button>
                  <span className="text-sm text-gray-500">H1</span>
                  <span className="text-sm text-gray-500">H2</span>
                  <span className="text-sm text-gray-500">H3</span>
                </div>
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="sm">
                    <AlignLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <AlignCenter className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <AlignRight className="w-4 h-4" />
                  </Button>
                </div>
                <Button variant="ghost" size="sm">
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Nouveau rapport vide</h1>
            </div>

            {/* Report Sections */}
            {reportSections.length === 0 ? (
              /* Empty State */
              <div className="text-center py-12">
                <div className="mb-4">
                  <DropdownMenu open={showMetricSelector} onOpenChange={setShowMetricSelector}>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                        <span>Sélectionnez une métrique</span>
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-96 p-0">
                      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="Analytics">Analytics</TabsTrigger>
                          <TabsTrigger value="Forecast">Forecast</TabsTrigger>
                        </TabsList>
                        <TabsContent value={activeTab} className="p-4">
                          <div className="grid grid-cols-2 gap-6">
                            {Object.entries(availableMetrics[activeTab as keyof typeof availableMetrics]).map(
                              ([category, metrics]) => (
                                <div key={category}>
                                  <h4 className="font-medium text-gray-900 mb-2">{category}</h4>
                                  <div className="space-y-1">
                                    {metrics.map((metric) => (
                                      <button
                                        key={metric}
                                        className="block w-full text-left px-2 py-1 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded"
                                        onClick={() => addSection(metric)}
                                      >
                                        {metric}
                                        {metric === "CMRR - CARR" && (
                                          <Badge variant="secondary" className="ml-2 text-xs bg-blue-100 text-blue-700">
                                            NEW
                                          </Badge>
                                        )}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              ),
                            )}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <Button variant="outline" size="sm">
                  Enregistrer
                </Button>
                <div className="mt-8 h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Contenu du rapport</span>
                </div>
              </div>
            ) : (
              /* Report with Sections */
              <div className="space-y-8">
                {reportSections.map((section) => (
                  <div key={section.id} className="border border-gray-200 rounded-lg p-6">
                    {section.type === "metric" && section.metric === "Reconnaissance du revenu" && (
                      <div>
                        {/* Section Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-2">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                                  <span>{section.metric}</span>
                                  <ChevronDown className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuItem>Reconnaissance du revenu</DropdownMenuItem>
                                <DropdownMenuItem>MRR - ARR</DropdownMenuItem>
                                <DropdownMenuItem>Montants facturés</DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                          <Button size="sm">Enregistrer</Button>
                        </div>

                        {/* Period Controls */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <button
                              className={`px-3 py-1 text-sm rounded ${
                                periodType === "glissante"
                                  ? "bg-blue-600 text-white"
                                  : "text-gray-600 hover:text-blue-600"
                              }`}
                              onClick={() => setPeriodType("glissante")}
                            >
                              Période glissante
                            </button>
                            <button
                              className={`px-3 py-1 text-sm rounded ${
                                periodType === "fixe" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-blue-600"
                              }`}
                              onClick={() => setPeriodType("fixe")}
                            >
                              Période fixe
                            </button>
                          </div>
                        </div>

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
                              <span className="text-sm text-gray-600">Jan 25</span>
                              <span className="text-sm text-gray-600">Jul 25</span>
                            </div>
                            <Slider
                              value={timelineValue}
                              onValueChange={setTimelineValue}
                              max={100}
                              step={1}
                              className="w-full"
                            />
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
                            <Button size="sm" variant="ghost" className="flex items-center gap-1">
                              <span className="text-sm">Comparer</span>
                            </Button>
                          </div>
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
                        </div>

                        {/* Key Metric */}
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-2xl font-bold text-gray-900">2 792 €</span>
                          <span className="text-sm text-gray-500">en juillet 2025</span>
                          <Badge variant="destructive" className="text-xs">
                            -44.4 % / mois
                          </Badge>
                        </div>

                        {/* Chart */}
                        <div className="h-96 relative mb-6">
                          {/* Y-axis labels */}
                          <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pr-4">
                            <span>120 K€</span>
                            <span>100 K€</span>
                            <span>80 K€</span>
                            <span>60 K€</span>
                            <span>40 K€</span>
                            <span>20 K€</span>
                            <span>0 €</span>
                          </div>

                          {/* Chart area */}
                          <div className="ml-12 h-full flex items-end justify-between gap-2">
                            {sampleChartData.map((data, index) => {
                              const height = data.total === 0 ? 2 : (data.total / maxValue) * 300
                              return (
                                <div key={index} className="flex flex-col items-center gap-2 flex-1">
                                  <div className="relative">
                                    {data.total > 0 && (
                                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-700 font-medium whitespace-nowrap">
                                        {data.total.toLocaleString("fr-FR")} €
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
                                    {data.month}
                                  </span>
                                </div>
                              )
                            })}
                          </div>
                        </div>

                        {/* Legend */}
                        <div className="flex items-center gap-6">
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
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Add Section Button */}
            <div className="mt-8 text-center">
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-transparent"
                onClick={() => setShowMetricSelector(true)}
              >
                <Plus className="w-4 h-4" />
                Ajouter une section
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
