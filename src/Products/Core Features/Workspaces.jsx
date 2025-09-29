"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Calendar } from "@/components/ui/calendar";

/*────────────────────────── GLOBAL STYLES ──────────────────────────*/
const StyleProvider = ({ children }) => (
  <>
    <style>{`
      :root { 
        --muted-foreground: 240 3.7% 65.9%;
        --chart-1: 192 70% 50%; /* teal */
        --chart-2: 262 80% 58%; /* violet */
      }
      .recharts-default-tooltip {
        background: #09090b !important;
        border: 1px solid #27272a !important;
        border-radius: 0.5rem !important;
      }
      .recharts-tooltip-label { color: #a1a1aa !important; }
    `}</style>
    {children}
  </>
);

/*────────────────────────── UI MOCKS ──────────────────────────*/
// These are simplified mock components for demonstration.
// In your project, you'd use the actual shadcn/ui components.
const Btn = (p) => (
  <button
    {...p}
    className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors border hover:bg-accent hover:text-accent-foreground ${
      p.size === "icon" ? "h-10 w-10" : "h-10 px-4 py-2"
    } ${p.className}`}
  />
);
const Card = (p) => <div {...p} className={`rounded-xl border bg-neutral-900/50 backdrop-blur-sm ${p.className}`} />;
const CardHeader = (p) => <div {...p} className={`p-6 ${p.className}`} />;
const CardTitle = (p) => <h3 {...p} className={`font-semibold ${p.className}`} />;
const CardContent = (p) => <div {...p} className={`p-6 pt-0 ${p.className}`} />;
const Dialog = ({ children }) => <div>{children}</div>;
const DialogContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
    <div {...props} className={`relative z-10 w-full max-w-lg rounded-xl border border-neutral-700 bg-neutral-900/80 p-6 text-white shadow-lg ${className}`} />
  </div>
));
const DialogHeader = (p) => <div {...p} className={`flex flex-col space-y-2 text-center ${p.className}`} />;
const DialogTitle = (p) => <h2 {...p} className={`text-lg font-semibold ${p.className}`} />;
const DialogDesc = (p) => <p {...p} className={`text-sm text-neutral-400 ${p.className}`} />;

/*────────────────────────── CHARTS ──────────────────────────*/
const areaChartData = [
  { month: "Jan", notifications: 186 }, { month: "Feb", notifications: 102 },
  { month: "Mar", notifications: 237 }, { month: "Apr", notifications: 273 },
  { month: "May", notifications: 273 }, { month: "Jun", notifications: 400 },
];

const AreaChartCard = ({ modal }) => (
  <ResponsiveContainer width="100%" height={modal ? 240 : 192}>
    <AreaChart data={areaChartData} margin={{ top: 10, right: 10, left: 10 }}>
      <defs>
        <linearGradient id="cFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#fff" stopOpacity={0.8} /><stop offset="95%" stopColor="#fff" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      {modal && <>
        <CartesianGrid stroke="hsl(var(--muted-foreground))" strokeOpacity={0.2} />
        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }} />
      </>}
      <Tooltip cursor={{ stroke: "#fff", strokeWidth: 1, strokeDasharray: "3 3" }} />
      <Area dataKey="notifications" stroke="#fff" strokeWidth={2} fill="url(#cFill)" type="natural" />
    </AreaChart>
  </ResponsiveContainer>
);
const barChartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop:  73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
];

const BarChartCard = ({ modal }) => (
  <ResponsiveContainer width="100%" height={modal ? 240 : 192}>
    <BarChart data={barChartData} margin={{ top: 10, right: 10, left: 10 }}>
      <CartesianGrid
        vertical={false}
        stroke="hsl(var(--muted-foreground))"
        strokeOpacity={0.2}
      />
      <XAxis
        dataKey="month"
        tickLine={false}
        tickMargin={10}
        axisLine={false}
        tickFormatter={(v) => v.slice(0, 3)}
        tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
      />
      <Tooltip cursor={{ fill: "hsla(var(--muted-foreground),0.2)" }} />
      <Bar
        dataKey="desktop"
        fill="#ffffff"        // white bar
        radius={[4, 4, 0, 0]}
      />
      <Bar
        dataKey="mobile"
        fill="#9ca3af"        // grey bar
        radius={[4, 4, 0, 0]}
      />
    </BarChart>
  </ResponsiveContainer>
);
/*────────────────────────── CALENDAR ──────────────────────────*/
const CalendarRange = () => {
  const [range, setRange] = useState({ from: new Date(2025, 5, 9), to: new Date(2025, 5, 26) });
  return (
    <div className="h-full flex items-start justify-center pt-1">
      <div style={{ transform: "scale(0.65)", transformOrigin: "top center" }}>
        <Calendar mode="range" defaultMonth={range.from} selected={range} onSelect={setRange} numberOfMonths={1} className="rounded-lg border shadow-sm bg-neutral-900 text-white" />
      </div>
    </div>
  );
};

/*────────────────────────── APP ──────────────────────────*/
const Workspaces = () => {
  const [active, setActive] = useState(null);

  const cards = [
    { id: 1, title: "Set to Conquer", areaChart: true, detail: "Dedicated digital environments for everything related to your goals." },
    { id: 2, title: "Designed to Adapt", calendar: true, detail: "Workspaces adapt instantly, reconfiguring tools so you never waste time." },
    { id: 3, title: "Crafted with Intention", barChart: true, detail: "Every area of your life deserves its own space and focused zone for information." },
  ];

  return (
    <StyleProvider>
      <div className="relative min-h-screen bg-black text-white">
        <video className="fixed inset-0 min-h-full min-w-full object-cover opacity-20" autoPlay muted loop playsInline src="https://cdn.pixabay.com/video/2024/05/27/211597_large.mp4" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black to-black" />
        <div className="relative z-20 pt-[160px] pb-24 flex flex-col items-center px-4 sm:px-8">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-12 max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold">Speed Defies Gravity</h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-400">
              Workspaces provide instant access to resources like emails and notifications.
              <a href="#" className="ml-2 font-semibold text-white hover:text-neutral-300 group">
                <br></br> Make the shift{" "}
                <ArrowRight className="inline-block h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </p>
          </motion.div>

          <div className="grid gap-8 max-w-7xl w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((c, i) => (
              <motion.div key={c.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}>
                <Card onClick={() => setActive(c)} className="group overflow-hidden hover:border-neutral-600 hover:shadow-2xl transition-all border-neutral-800 cursor-pointer h-full flex flex-col">
                  <CardHeader className="h-[300px] overflow-hidden flex-shrink-0">
                    {c.areaChart ? <AreaChartCard /> : c.calendar ? <CalendarRange /> : c.barChart ? <BarChartCard /> : null}
                  </CardHeader>
                  <CardContent className="flex justify-between items-end flex-grow">
                    <CardTitle className="text-xl">{c.title}</CardTitle>
                    <Btn size="icon" className="border-neutral-700 group-hover:bg-neutral-800"> <Plus className="h-5 w-5" /> </Btn>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {active && (
            <motion.div className="fixed inset-0 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} onClick={() => setActive(null)}>
              <Dialog open>
                <DialogContent onClick={(e) => e.stopPropagation()}>
                  <motion.div initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }} transition={{ duration: 0.3 }}>
                    <DialogHeader>
                      <div className="w-full h-60 mb-4 flex items-center justify-center bg-black/20 rounded-lg">
                        {active.areaChart ? <AreaChartCard modal /> : active.calendar ? <CalendarRange /> : active.barChart ? <BarChartCard modal /> : null}
                      </div>
                      <DialogTitle className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">{active.title}</DialogTitle>
                      <DialogDesc>{active.detail}</DialogDesc>
                    </DialogHeader>
                    <Btn onClick={() => setActive(null)} variant="ghost" className="w-full mt-6">Close</Btn>
                  </motion.div>
                </DialogContent>
              </Dialog>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </StyleProvider>
  );
};

export default Workspaces;
