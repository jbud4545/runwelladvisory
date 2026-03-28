"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  ArrowRight,
  ArrowDown,
  Search,
  Hammer,
  TrendingUp,
  Clock,
  Users,
  Zap,
  Mail,
  ChevronRight,
  Link2,
  Sparkles,
  LayoutDashboard,
  Target,
  RefreshCw,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { SplineScene } from "@/components/ui/spline-scene"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-heading text-xl font-semibold tracking-tight text-foreground">
              Runwell
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Services
              </Link>
              <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Work
              </Link>
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </div>
            
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="https://calendly.com/jdhogerty/meeting-with-jimmy">Book a Call</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden noise-overlay">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10 mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.h1
                className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.1] text-balance"
                variants={fadeInUp}
              >
                Your team does the work.
                <br />
                <span className="text-primary">We build the systems that multiply it.</span>
              </motion.h1>

              <motion.p
                className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                variants={fadeInUp}
              >
                {"We help growing businesses replace manual workflows with AI systems that scale — without hiring an engineering team."}
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col sm:flex-row gap-4"
                variants={fadeInUp}
              >
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                  <Link href="https://calendly.com/jdhogerty/meeting-with-jimmy">
                    Book a Free Strategy Call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground text-base">
                  <Link href="#work">
                    See Our Work
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>

              <motion.p
                className="mt-12 text-sm text-muted-foreground border-l-2 border-primary/50 pl-4"
                variants={fadeInUp}
              >
                {"Less busywork. Fewer tools. AI systems that actually work."}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[500px] hidden lg:block"
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 lg:py-32 bg-secondary/30 noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-16">
              Sound Familiar?
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "You're running your business on 10+ tools that don't talk to each other",
                description: "Slack for comms, Gmail for clients, spreadsheets for tracking, Asana for tasks, and a prayer that nothing falls through the cracks.",
              },
              {
                title: "Your team spends hours on work that should take minutes",
                description: "Manual data entry. Copy-pasting between apps. Chasing updates. Compiling reports by hand. It's costing you more than you think.",
              },
              {
                title: "You know AI could help — but you don't know where to start",
                description: "You've played with ChatGPT. You've seen the demos. But translating that into something that actually runs your business? That's a different problem.",
              },
              {
                title: "You've looked into AI solutions but everything feels too vague or too expensive",
                description: "You don't need a strategy deck or a six-figure enterprise platform. You need someone who understands your business and builds working systems that fit.",
              },
            ].map((pain, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-border hover:border-primary/30 transition-colors h-full">
                  <CardContent className="p-8">
                    <span className="inline-block text-primary font-heading text-sm font-medium mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-4 leading-snug">
                      {pain.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pain.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 lg:py-32 noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-16"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How We Work
            </h2>
            <p className="text-lg text-muted-foreground">
              A clear path from chaos to clarity — no jargon, no mystery.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-4">
            {[
              {
                icon: Search,
                step: "01",
                title: "Understand",
                description: "We dive deep into your workflows, tools, and pain points. We map where time is being wasted, where things break, and where AI can make the biggest impact — then deliver a prioritized roadmap.",
              },
              {
                icon: Hammer,
                step: "02",
                title: "Build",
                description: "We pick the highest-impact opportunities and build working systems — real integrations, real automation, real infrastructure. Not prototypes. Not demos. Production systems your team uses on day one.",
              },
              {
                icon: TrendingUp,
                step: "03",
                title: "Evolve",
                description: "We expand to additional workflows, optimize what's running, and provide ongoing engineering support as your business grows. The system gets smarter over time.",
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="lg:pr-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20">
                      <phase.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-heading text-5xl font-bold text-border">
                      {phase.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                
                {index < 2 && (
                  <div className="hidden lg:block absolute top-6 right-0 w-8">
                    <ChevronRight className="w-6 h-6 text-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-24 lg:py-32 bg-secondary/30 noise-overlay overflow-hidden">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              What We Build
            </span>
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              One Studio. Every AI Capability Your Business Needs.
            </h2>
            <p className="text-lg text-muted-foreground">
              Every business is different. Some need a single automation that saves 10 hours a week. Others need an entire platform rebuilt from scratch. {"Here's the range of what we deliver — your engagement is scoped to exactly what you need."}
            </p>
          </motion.div>
          
          {/* Capability Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Workflow Automation",
                description: "Turn manual, repetitive processes into automated systems that run on their own — triggered by real events, not human memory.",
                icon: Zap,
                tools: ["Slack", "Gmail", "Zapier", "n8n", "Inngest"],
              },
              {
                title: "Tool & Platform Integration",
                description: "Connect the tools you already use into a unified system where data flows automatically and nothing falls through the cracks.",
                icon: Link2,
                tools: ["HubSpot", "Salesforce", "Asana", "Notion", "Stripe"],
              },
              {
                title: "AI-Powered Pipelines",
                description: "Use LLMs and AI to extract, classify, summarize, and act on unstructured data — call transcripts, emails, documents, PDFs.",
                icon: Sparkles,
                tools: ["OpenAI", "Claude", "Gemini", "Custom prompts"],
              },
              {
                title: "Internal Tools & Dashboards",
                description: "Custom-built internal platforms that replace spreadsheet chaos with real tools your team actually wants to use.",
                icon: LayoutDashboard,
                tools: ["Next.js", "React", "PostgreSQL", "Prisma"],
              },
              {
                title: "CRM & Sales Automation",
                description: "Automate your sales pipeline — from lead capture to follow-up emails to deal stage movement — so your team sells instead of doing data entry.",
                icon: Target,
                tools: ["HubSpot", "Pipedrive", "Slack", "Zapier"],
              },
              {
                title: "Background Jobs & Scheduled Systems",
                description: "Set-it-and-forget-it systems that sync data, generate reports, send alerts, and maintain your operations on autopilot.",
                icon: RefreshCw,
                tools: ["Cron jobs", "Inngest", "Webhooks", "APIs"],
              },
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="bg-card/50 border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-full group">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-secondary border border-border mb-5 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300">
                      <capability.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {capability.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {capability.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-1 text-xs text-muted-foreground/70 bg-secondary/50 rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results & Case Studies Section */}
      <section id="work" className="py-24 lg:py-32 noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              {"What We've Built"}
            </h2>
          </motion.div>
          
          {/* Results Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mb-20 py-12 border-y border-border"
          >
            {[
              { metric: "97%", label: "Faster confirmation emails", sublabel: "6 hours → 10 minutes" },
              { metric: "3x", label: "Sales capacity", sublabel: "Without adding headcount" },
              { metric: "85%", label: "Completion rate", sublabel: "Up from 48% in 30 days" },
              { metric: "100+", label: "Hours/month recovered", sublabel: "Through automation" },
            ].map((stat, index) => (
              <div key={index} className="text-center lg:text-left">
                <span className="block font-heading text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.metric}
                </span>
                <span className="block text-foreground font-medium mb-1">
                  {stat.label}
                </span>
                <span className="block text-sm text-muted-foreground">
                  {stat.sublabel}
                </span>
              </div>
            ))}
          </motion.div>
          
          {/* Featured Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Card className="bg-card border-border border-2 border-primary/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-5">
                  <div className="lg:col-span-3 p-8 lg:p-12 space-y-6">
                    <span className="inline-block text-xs uppercase tracking-wider text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                      Featured Story
                    </span>
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                      How a 15-Person Agency Got 100+ Hours Back Every Month
                    </h3>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        <span className="text-foreground font-medium">Before:</span> A growing Austin-based digital marketing agency with teams across ads, SEO, and web development — drowning in Slack threads, scattered emails, and manual task tracking across 5 different tools.
                      </p>
                      <p>
                        <span className="text-foreground font-medium">After:</span> One unified platform that automatically ingests communications, manages tasks, handles contracts, and runs background automations for every team. No more context switching. No more lost threads.
                      </p>
                    </div>
                    
                    <Link 
                      href="#" 
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                    >
                      Read the full story
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  <div className="lg:col-span-2 bg-gradient-to-br from-primary/10 to-secondary/50 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="space-y-6">
                      <div>
                        <span className="block font-heading text-5xl lg:text-6xl font-bold text-primary">100+</span>
                        <span className="block text-foreground font-medium mt-1">hours saved per month</span>
                      </div>
                      <div className="h-px bg-border" />
                      <div>
                        <span className="block font-heading text-3xl font-bold text-foreground">5 → 1</span>
                        <span className="block text-muted-foreground mt-1">tools consolidated into one platform</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Secondary Case Studies */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-card border-border h-full">
                <CardContent className="p-8 space-y-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground leading-tight">
                    From 6-Hour Emails to 10-Minute Automation — and 3x More Sales Capacity
                  </h3>
                  
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <p>
                      <span className="text-foreground font-medium">Before:</span> Sales reps at an edtech company manually taking call notes, hand-entering data into their CRM, and assembling confirmation emails from scratch after every consultation.
                    </p>
                    <p>
                      <span className="text-foreground font-medium">After:</span> Call transcripts automatically parsed by AI into structured profiles, synced to the CRM, posted to Slack, and used to generate ready-to-send emails — all triggered by real events, not manual steps.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-border flex items-end justify-between">
                    <div className="flex items-baseline gap-4">
                      <div>
                        <span className="block font-heading text-2xl font-bold text-primary">3x</span>
                        <span className="block text-xs text-muted-foreground">sales capacity</span>
                      </div>
                      <div>
                        <span className="block font-heading text-2xl font-bold text-primary">32%</span>
                        <span className="block text-xs text-muted-foreground">faster to purchase</span>
                      </div>
                    </div>
                    <Link 
                      href="#" 
                      className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-primary transition-colors group"
                    >
                      Read the full story
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-card border-border h-full">
                <CardContent className="p-8 space-y-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground leading-tight">
                    {"48% to 85% Completion — How We Fixed a Broken Onboarding Flow"}
                  </h3>
                  
                  <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                    <p>
                      <span className="text-foreground font-medium">Before:</span> New mentors at an edtech nonprofit were dropping off halfway through onboarding. Too many steps, confusing navigation, and no clear path forward.
                    </p>
                    <p>
                      <span className="text-foreground font-medium">After:</span> A redesigned flow that guides mentors through each step with clear progress indicators, smart defaults, and contextual help — turning a frustrating process into a seamless experience.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-border flex items-end justify-between">
                    <div className="flex items-baseline gap-4">
                      <div>
                        <span className="block font-heading text-2xl font-bold text-primary">85%</span>
                        <span className="block text-xs text-muted-foreground">completion rate</span>
                      </div>
                      <div>
                        <span className="block font-heading text-2xl font-bold text-primary">65%</span>
                        <span className="block text-xs text-muted-foreground">faster task completion</span>
                      </div>
                    </div>
                    <Link 
                      href="#" 
                      className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-primary transition-colors group"
                    >
                      Read the full story
                      <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="about" className="py-24 lg:py-32 noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {"You shouldn't have to choose between a consultant who understands your business but can't build anything, and a developer who can build but doesn't understand why it matters."}
                </p>
                <p>
                  {"This studio exists because those were the only two options. We bring both: the business instinct that comes from years in B2B sales — running discovery calls, managing pipelines, understanding how operations actually work — and the engineering skill to design, build, and ship production systems from scratch."}
                </p>
                <p>
                  {"That means your first conversation isn't about what tech stack to use. It's about what's slowing your business down, what's costing you time, and where the biggest leverage is. Then we go build it."}
                </p>
              </div>

              <div className="pt-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="https://calendly.com/jdhogerty/meeting-with-jimmy">
                    Book a free strategy call
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[500px] hidden lg:block"
            >
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 lg:py-32 bg-secondary/30 noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              How We Can Work Together
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "AI Readiness Audit",
                description: "A deep dive into your workflows, tools, and bottlenecks. We identify the highest-impact AI opportunities and deliver a prioritized roadmap with ROI estimates. The best starting point if you're not sure where to begin.",
                timeline: "1-2 weeks",
                href: "/services/ai-readiness-audit",
              },
              {
                title: "Workflow Automation Sprint",
                description: "We take the #1 opportunity and build a working, production-ready system — real integrations, real automation, deployed and documented with team training included.",
                timeline: "3-5 weeks",
                href: "/services/workflow-automation",
              },
              {
                title: "Full AI Transformation",
                description: "End-to-end platform design and build. Replace your duct-taped tool stack with a unified, AI-powered system built for how your business actually works.",
                timeline: "6-12 weeks",
                href: "/services/ai-transformation",
              },
              {
                title: "AI Integration Services",
                description: "Embed AI capabilities directly into your business processes. Document processing, conversational AI, content generation, and predictive analytics.",
                timeline: "Custom scope",
                href: "/services/ai-integration",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border hover:border-primary/30 transition-colors h-full group">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-heading text-xl font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {service.timeline}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link 
                      href={service.href} 
                      className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors group-hover:text-primary"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12">
              Frequently Asked Questions
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Is my business too small for AI?",
                  answer: "The $1M-$10M range is actually the sweet spot. You're big enough to have real operational pain, but small enough that a targeted automation can transform how you work. We're not building enterprise AI — we're solving the specific problems slowing your business down.",
                },
                {
                  question: "What if we've been burned by consultants before?",
                  answer: "We don't deliver PowerPoints. Every engagement produces working systems that your team uses immediately. We build in your environment, with your tools, on your data. If it doesn't work, you'll know in weeks, not months.",
                },
                {
                  question: "How long until we see results?",
                  answer: "Most clients see measurable impact within 30 days of the first build sprint. The AI Readiness Audit alone often reveals quick wins your team can act on immediately.",
                },
                {
                  question: "Do we need to hire developers after you leave?",
                  answer: "No. Everything we build is designed for non-technical teams to use and maintain. We document thoroughly and train your team. And our retainer option means we're always available if you need ongoing engineering support.",
                },
                {
                  question: "What technologies do you use?",
                  answer: "We work with modern, proven tools — TypeScript, Next.js, Node.js, PostgreSQL, and leading AI/LLM platforms. But we choose the stack based on your needs, not our preferences. We also integrate with the tools you already use: Slack, Gmail, HubSpot, Salesforce, Stripe, Zapier, and more.",
                },
                {
                  question: "What industries do you work with?",
                  answer: "We're industry-agnostic. If you have manual workflows and a growing business, we can help. Our clients have included marketing agencies, edtech companies, real estate platforms, and professional services firms.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border border-border rounded-lg px-6 bg-card/50">
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="book" className="py-24 lg:py-32 bg-card noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Stop working in your business. Start building systems that work for you.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              {"Book a free 30-minute strategy call. We'll map your biggest automation opportunities and show you exactly where to start."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-10">
                <Link href="https://calendly.com/jdhogerty/meeting-with-jimmy">
                  Book Your Free Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground">
              Or email us at{" "}
              <a href="mailto:hello@runwelladvisory.com" className="text-primary hover:underline">
                hello@runwelladvisory.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-border noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
            <div className="space-y-4">
              <Link href="/" className="font-heading text-xl font-semibold tracking-tight text-foreground">
                Runwell Advisory, LLC
              </Link>
              <p className="text-sm text-muted-foreground">
                San Francisco, CA
              </p>
            </div>
            
            <div className="flex flex-wrap gap-8 lg:gap-16">
              <div className="space-y-4">
                <nav className="flex flex-col gap-3">
                  <Link href="/services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </Link>
                  <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Work
                  </Link>
                  <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                  <Link href="https://calendly.com/jdhogerty/meeting-with-jimmy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </nav>
              </div>
              
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              {`© ${new Date().getFullYear()} Runwell. All rights reserved.`}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
