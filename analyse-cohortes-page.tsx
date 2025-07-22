"use client"

import { useState } from "react"
import { BarChart3, ChevronDown, ChevronLeft, ChevronRight, Download, X, Bell, Filter, GitCompare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Sample cohort data
const cohortData = [
  {
    month: "Jan 24",
    values: [100, 97, 106, 90, 108, 85, 93, 31, 31, 31, 31, 31, 31],
  },
  {
    month: "Feb 24",
    values: [100, 86, 94, 83, 76, 90, 56, 56, 56, 56, 56, 56, null],
  },
  {
    month: "Mar 24",
    values: [100, 94, 119, 81, 90, 64, 64, 64, 64, 64, 64, null, null],
  },
  {
    month: "Apr 24",
    values: [100, 93, 93, 91, 86, 86, 86, 86, 86, 86, null, null, null],
  },
  {
    month: "May 24",
    values: [100, 94, 94, 86, 86, 86, 86, 86, 86, null, null, null, null],
  },
  {
    month: "Jun 24",
    values: [100, 100, 80, 80, 80, 80, 80, 80, null, null, null, null, null],
  },
  {
    month: "Jul 24",
    values: [100, 90, 90, 90, 90, 90, 90, null, null, null, null, null, null],
  },
  {
    month: "Aug 24",
    values: [100, 100, 100, 100, 100, 100, null, null, null, null, null, null, null],
  },
  {
    month: "Sep 24",
    values: [null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    month: "Oct 24",
    values: [null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    month: "Nov 24",
    values: [null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    month: "Dec 24",
    values: [null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
  {
    month: "Jan 25",
    values: [null, null, null, null, null, null, null, null, null, null, null, null, null],
  },
]

// Function to get color intensity based on retention rate
const getRetentionColor = (value: number | null) => {
  if (value === null) return "bg-gray-100"
  if (value >= 100) return "bg-blue-600 text-white"
  if (value >= 90) return "bg-blue-500 text-white"
  if (value >= 80) return "bg-blue-400 text-white"
  if (value >= 70) return "bg-blue-300"
  if (value >= 60) return "bg-blue-200"
  if (value >= 50) return "bg-blue-100"
  return "bg-gray-100"
}

interface AnalyseCohortesPageProps {
  onNavigateBack: () => void
}

export default function AnalyseCohortesPage({ onNavigateBack }: AnalyseCohortesPageProps) {
  const [timelineValue, setTimelineValue] = useState([75])
  const [activeTab, setActiveTab] = useState("retention") // "retention" or "churn"

  const [sidebarState, setSidebarState] = useState({
    synthese: false,
    revenus: false,
    croissance: false,
    clients: false,
    retention: true,
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
                <div className="py-1 text-blue-600 bg-blue-50 rounded px-2 -mx-2">Analyse des cohortes</div>
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
              <span>Rétention</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gray-900 font-medium">Analyse des cohortes</span>
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

              {/* Retention/Churn Toggle */}
              <div className="flex items-center gap-2">
                <button
                  className={`px-3 py-1 text-sm rounded ${
                    activeTab === "retention"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600"
                  }`}
                  onClick={() => setActiveTab("retention")}
                >
                  Taux de rétention
                </button>
                <button
                  className={`px-3 py-1 text-sm rounded ${
                    activeTab === "churn"
                      ? "bg-blue-600 text-white"
                      : "text-gray-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600"
                  }`}
                  onClick={() => setActiveTab("churn")}
                >
                  Taux de churn
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <span>Taux de rétention net</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Taux de rétention net</DropdownMenuItem>
                  <DropdownMenuItem>Taux de rétention brut</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <span>Comparé au premier mois</span>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Comparé au premier mois</DropdownMenuItem>
                  <DropdownMenuItem>Comparé au mois précédent</DropdownMenuItem>
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

          {/* Cohort Analysis Table */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-gray-200">
                    <TableHead className="text-left font-medium text-gray-700 py-4 px-6 w-24 sticky left-0 bg-white z-10"></TableHead>
                    <TableHead className="text-center font-medium text-gray-700 py-4 px-4 min-w-20">Mois 0</TableHead>
                    <TableHead className="text-center font-medium text-gray-700 py-4 px-4 min-w-20">Mois 1</TableHead>
                    <TableHead className="text-center font-medium text-gray-700 py-4 px-4 min-w-20">Mois 2</TableHead>
                    <TableHead className="text-center font-medium text-gray-700 py-4 px-4 min-w-20">Mois 3</TableHead>
                    <TableHead className="text-center font-medium text-gray-700 py-4 px-4 min-w-20">Mois 4</TableHead>
                    <TableHead className="text-center font-medium text-gray-700 py-4 px-4 min-w-20">Mois 5</TableHead>
                    <TableHead className="text-center font-medium text-gray-700 py-4 px-4 min-w-20">Mois 6</TableHead>
                    <TableHead className="text-center font-medium text-gray-700 py-4 px-4 min-w-20">Mois 7</TableHead>
                    <TableHead className="text-center font-medium text-gray-700 py-4 px-4 min-w-20">Mois 8</TableHead>
                    <TableHead className="text-center font-medium text-gray-700 py-4 px-4 min-w-20">Mois 9</TableHead>
                    <TableHead className="text-center font-medium text-gray-700 py-4 px-4 min-w-20">Mois 10</TableHead>
                    <TableHead className="text-center font-medium text-gray-700 py-4 px-4 min-w-20">Mois 11</TableHead>
                    <TableHead className="text-center font-medium text-gray-700 py-4 px-4 min-w-20">Mois 12</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cohortData.map((cohort, rowIndex) => (
                    <TableRow key={rowIndex} className="border-b border-gray-100">
                      <TableCell className="py-3 px-6 font-medium text-gray-900 sticky left-0 bg-white z-10">
                        {cohort.month}
                      </TableCell>
                      {cohort.values.map((value, colIndex) => (
                        <TableCell key={colIndex} className="py-3 px-4 text-center">
                          {value === null ? (
                            <span className="text-gray-400">-</span>
                          ) : (
                            <div
                              className={`inline-block px-2 py-1 rounded text-sm font-medium min-w-12 ${getRetentionColor(
                                value,
                              )}`}
                            >
                              {value}%
                            </div>
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
