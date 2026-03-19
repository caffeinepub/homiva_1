import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { NavState } from "../App";

interface InvestorPageProps {
  navigate: (state: NavState) => void;
}

const QUARTERS = [
  { year: 1, quarter: "Q1", orders: 348, revenue: 314685, profit: -1065315 },
  { year: 1, quarter: "Q2", orders: 463, revenue: 418846, profit: -961154 },
  { year: 1, quarter: "Q3", orders: 617, revenue: 557484, profit: -822516 },
  { year: 1, quarter: "Q4", orders: 821, revenue: 742011, profit: -637989 },
  { year: 2, quarter: "Q1", orders: 1092, revenue: 987616, profit: -392384 },
  { year: 2, quarter: "Q2", orders: 1454, revenue: 1314517, profit: -65483 },
  { year: 2, quarter: "Q3", orders: 1935, revenue: 1749623, profit: 369623 },
  { year: 2, quarter: "Q4", orders: 2575, revenue: 2328748, profit: 948748 },
  { year: 3, quarter: "Q1", orders: 3428, revenue: 3099563, profit: 1719563 },
  { year: 3, quarter: "Q2", orders: 4562, revenue: 4125519, profit: 2745519 },
  { year: 3, quarter: "Q3", orders: 6072, revenue: 5491065, profit: 4111065 },
  { year: 3, quarter: "Q4", orders: 8082, revenue: 7308608, profit: 5928608 },
];

const CHART_DATA = QUARTERS.map((q) => ({
  name: `Y${q.year} ${q.quarter}`,
  Revenue: Math.round(q.revenue / 1000),
  Profit: Math.round(q.profit / 1000),
  Orders: q.orders,
}));

const SETUP_COSTS = [
  {
    category: "Technology (App + Backend + Admin + UI + Testing + Payments)",
    cost: "₹1,10,000",
  },
  {
    category: "Training Center Setup (Deposit + Furniture + Equipment)",
    cost: "₹4,20,000",
  },
  { category: "Legal & Compliance", cost: "₹70,000" },
  { category: "Branding & Launch Marketing", cost: "₹1,00,000" },
];

const MONTHLY_OPS = [
  { category: "Trainer Salary (4 trainers @ ₹25,000)", cost: "₹1,00,000" },
  { category: "Training Centre Rent", cost: "₹15,000" },
  {
    category: "Operations Team (Manager + Support + Marketing + Supervisor)",
    cost: "₹1,55,000",
  },
  {
    category: "Technology Maintenance (Server + App + Tools)",
    cost: "₹50,000",
  },
  { category: "Marketing (Digital + Local)", cost: "₹70,000" },
  {
    category: "Other Operational Costs (Electricity + Internet + Transport)",
    cost: "₹70,000",
  },
];

const GMV_DATA = [
  { service: "Home Care", bookings: 50, avgPrice: "₹400", gmv: "₹20,000" },
  { service: "Baby Care", bookings: 20, avgPrice: "₹17,000", gmv: "₹3,40,000" },
  { service: "Elder Care", bookings: 22, avgPrice: "₹6,000", gmv: "₹1,32,000" },
  { service: "Veterinary", bookings: 25, avgPrice: "₹300", gmv: "₹7,500" },
];

export default function InvestorPage({ navigate }: InvestorPageProps) {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-pink-700 to-pink-900 text-white py-12 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 80%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <button
          type="button"
          onClick={() => navigate({ page: "home" })}
          className="flex items-center gap-1.5 text-pink-200 hover:text-white text-sm mb-6 transition-colors"
          data-ocid="investor.link"
        >
          <ArrowLeft size={16} /> Back to Home
        </button>
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex w-16 h-16 rounded-2xl bg-white/10 items-center justify-center mb-4">
            <TrendingUp className="text-violet-300" size={36} />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
            Investor Overview
          </h1>
          <p className="text-pink-200 text-base leading-relaxed max-w-xl mx-auto">
            HOMIVA – Hyper-local home care platform with a clear path to
            profitability. 21% commission model with ₹62.2L capital required for
            Year 1.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { label: "Total Year-1 Capital", value: "₹62.2L" },
              { label: "Monthly GMV (Initial)", value: "₹4.99L" },
              { label: "Commission Rate", value: "21%" },
              { label: "Break-even", value: "Y2 Q3" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/10 rounded-2xl px-5 py-3 text-center min-w-[120px]"
                data-ocid="investor.card"
              >
                <div className="text-2xl font-extrabold text-violet-300">
                  {stat.value}
                </div>
                <div className="text-xs text-pink-200 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        {/* Setup costs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl border-0 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">🏗️</span> Initial Investment Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Category</TableHead>
                    <TableHead className="font-semibold text-right">
                      Cost
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {SETUP_COSTS.map((row) => (
                    <TableRow key={row.category}>
                      <TableCell className="text-sm text-gray-700">
                        {row.category}
                      </TableCell>
                      <TableCell className="text-right font-mono font-semibold text-pink-700">
                        {row.cost}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-pink-50 font-bold">
                    <TableCell className="font-extrabold text-pink-900">
                      Total Initial Investment
                    </TableCell>
                    <TableCell className="text-right font-extrabold font-mono text-pink-900">
                      ₹7,00,000
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        {/* Monthly ops */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl border-0 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">📅</span> Monthly Operational Cost
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Category</TableHead>
                    <TableHead className="font-semibold text-right">
                      Monthly Cost
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {MONTHLY_OPS.map((row) => (
                    <TableRow key={row.category}>
                      <TableCell className="text-sm text-gray-700">
                        {row.category}
                      </TableCell>
                      <TableCell className="text-right font-mono font-semibold text-pink-700">
                        {row.cost}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-pink-50">
                    <TableCell className="font-extrabold text-pink-900">
                      Total Monthly Cost
                    </TableCell>
                    <TableCell className="text-right font-extrabold font-mono text-pink-900">
                      ₹4,60,000
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4 rounded-xl bg-violet-50 border border-violet-100 p-4 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-xl font-extrabold text-violet-600">
                    ₹55,20,000
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    12-Month Ops Cost
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-extrabold text-pink-700">
                    ₹62,20,000
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    Total Year-1 Capital
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* GMV & Revenue Model */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl border-0 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">💰</span> Monthly GMV & Revenue Model
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Service</TableHead>
                    <TableHead className="text-right">Bookings</TableHead>
                    <TableHead className="text-right">Avg Price</TableHead>
                    <TableHead className="text-right">GMV</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {GMV_DATA.map((row) => (
                    <TableRow key={row.service}>
                      <TableCell className="text-sm text-gray-700 font-medium">
                        {row.service}
                      </TableCell>
                      <TableCell className="text-right text-sm">
                        {row.bookings}
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm">
                        {row.avgPrice}
                      </TableCell>
                      <TableCell className="text-right font-mono font-semibold text-pink-700">
                        {row.gmv}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="bg-pink-50">
                    <TableCell
                      colSpan={3}
                      className="font-extrabold text-pink-900"
                    >
                      Total GMV / month
                    </TableCell>
                    <TableCell className="text-right font-extrabold font-mono text-pink-900">
                      ₹4,99,500
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <div className="mt-4 rounded-xl bg-pink-50 border border-pink-100 p-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500 mb-0.5">
                    Platform Commission
                  </div>
                  <div className="text-3xl font-extrabold text-pink-700">
                    21%
                  </div>
                </div>
                <div className="text-2xl text-gray-300">×</div>
                <div>
                  <div className="text-sm text-gray-500 mb-0.5">
                    Monthly GMV
                  </div>
                  <div className="text-3xl font-extrabold text-gray-800">
                    ₹4,99,500
                  </div>
                </div>
                <div className="text-2xl text-gray-300">=</div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-0.5">
                    Platform Revenue
                  </div>
                  <div className="text-3xl font-extrabold text-violet-500">
                    ₹1,04,895
                  </div>
                  <div className="text-xs text-gray-400">per month</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Revenue Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl border-0 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">📈</span> Revenue & Profit Growth (3
                Years)
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 pb-4">
              <ResponsiveContainer width="100%" height={280}>
                <BarChart
                  data={CHART_DATA}
                  margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis
                    tickFormatter={(v) => `₹${v}K`}
                    tick={{ fontSize: 10 }}
                  />
                  <Tooltip
                    formatter={(value: number, name: string) => [
                      `₹${(value * 1000).toLocaleString("en-IN")}`,
                      name,
                    ]}
                  />
                  <Legend />
                  <Bar dataKey="Revenue" fill="#db2777" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Profit" fill="#7c3aed" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <ResponsiveContainer width="100%" height={180} className="mt-4">
                <LineChart
                  data={CHART_DATA}
                  margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Orders"
                    stroke="#db2777"
                    strokeWidth={2}
                    dot={{ r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quarterly table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="rounded-2xl border-0 shadow-md">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <span className="text-2xl">📊</span> Quarterly Financial
                Projections
              </CardTitle>
            </CardHeader>
            <CardContent className="px-2 pb-4 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead>Year</TableHead>
                    <TableHead>Quarter</TableHead>
                    <TableHead className="text-right">Orders</TableHead>
                    <TableHead className="text-right">Revenue</TableHead>
                    <TableHead className="text-right">Profit / Loss</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {QUARTERS.map((row, i) => (
                    <TableRow
                      key={`${row.year}-${row.quarter}`}
                      className={
                        row.profit >= 0
                          ? "hover:bg-green-50"
                          : "hover:bg-red-50"
                      }
                      data-ocid={`investor.item.${i + 1}`}
                    >
                      <TableCell className="font-semibold text-gray-700">
                        Year {row.year}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className="text-xs font-bold"
                          style={{
                            borderColor:
                              row.year === 1
                                ? "#0d9488"
                                : row.year === 2
                                  ? "#f97316"
                                  : "#7c3aed",
                            color:
                              row.year === 1
                                ? "#0d9488"
                                : row.year === 2
                                  ? "#f97316"
                                  : "#7c3aed",
                          }}
                        >
                          {row.quarter}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm">
                        {row.orders.toLocaleString("en-IN")}
                      </TableCell>
                      <TableCell className="text-right font-mono text-sm">
                        ₹{row.revenue.toLocaleString("en-IN")}
                      </TableCell>
                      <TableCell
                        className={`text-right font-mono text-sm font-bold ${
                          row.profit >= 0 ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {row.profit >= 0 ? "+" : ""}₹
                        {row.profit.toLocaleString("en-IN")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </motion.div>

        {/* CTA */}
        <div className="rounded-2xl bg-gradient-to-br from-pink-600 to-pink-800 text-white p-8 text-center">
          <div className="text-3xl mb-3">🚀</div>
          <h3 className="text-2xl font-bold mb-2">
            Ready to Partner with HOMIVA?
          </h3>
          <p className="text-pink-200 text-sm mb-6 max-w-md mx-auto">
            Join us in transforming home care services across urban India.
            HOMIVA targets break-even by Year 2 Q3 with strong growth
            trajectory.
          </p>
          <button
            type="button"
            onClick={() => navigate({ page: "home" })}
            className="bg-violet-500 hover:bg-violet-600 text-white font-bold rounded-full px-8 py-3 transition-colors"
            data-ocid="investor.primary_button"
          >
            Explore HOMIVA Services
          </button>
        </div>
      </div>
    </div>
  );
}
