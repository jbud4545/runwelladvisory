"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  ArrowLeft,
  Search,
  FileText,
  Target,
  CheckCircle,
  Clock,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

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

export default function AIReadinessAuditPage() {
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
              <Link href="/#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Work
              </Link>
              <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
      <section className="relative pt-32 pb-20 overflow-hidden noise-overlay">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Link 
                href="/services" 
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Services
              </Link>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="flex items-center gap-4 mb-6"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                1-2 weeks
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] max-w-4xl text-balance"
            >
              AI Readiness Audit
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              A deep dive into your workflows, tools, and bottlenecks. We identify the highest-impact AI opportunities and deliver a prioritized roadmap with ROI estimates.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-10"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                <Link href="https://calendly.com/jdhogerty/meeting-with-jimmy">
                  Book Your Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-secondary/30 noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              What You Get
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileText,
                title: "Complete Workflow Map",
                description: "A visual breakdown of every key process in your business — from lead generation to fulfillment — showing where time is wasted and where things break.",
              },
              {
                icon: Target,
                title: "Opportunity Scorecard",
                description: "Each automation opportunity scored by impact, complexity, and ROI. No guessing — you'll know exactly what to tackle first and why.",
              },
              {
                icon: Zap,
                title: "Quick Win Recommendations",
                description: "Immediate improvements your team can implement without us. Low-hanging fruit that delivers results while we plan bigger initiatives.",
              },
              {
                icon: Clock,
                title: "Time Recovery Estimates",
                description: "Detailed projections of hours saved per week/month for each proposed automation. Quantified impact you can take to your leadership.",
              },
              {
                icon: Search,
                title: "Tool Stack Analysis",
                description: "Assessment of your current tools — what's working, what's redundant, and what's costing you money. Recommendations for consolidation.",
              },
              {
                icon: CheckCircle,
                title: "Implementation Roadmap",
                description: "A phased plan with clear milestones, dependencies, and timelines. Not a vague strategy — a concrete path forward.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card/50 border-border h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 mb-4">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              How It Works
            </h2>
          </motion.div>
          
          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                duration: "60 minutes",
                description: "We start with a deep-dive conversation about your business — your goals, your pain points, your current tech stack, and what success looks like for you.",
              },
              {
                step: "02",
                title: "Workflow Interviews",
                duration: "2-3 sessions",
                description: "We interview key team members to understand how work actually gets done. Not the ideal process — the real one, with all its workarounds and frustrations.",
              },
              {
                step: "03",
                title: "Systems Analysis",
                duration: "Behind the scenes",
                description: "We audit your tools, integrations, and data flows. We identify bottlenecks, redundancies, and opportunities that aren't visible from the surface.",
              },
              {
                step: "04",
                title: "Roadmap Delivery",
                duration: "90-minute session",
                description: "We present our findings and recommendations in a working session. You'll walk away with a prioritized action plan and clear next steps.",
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <span className="font-heading text-4xl font-bold text-border">
                    {phase.step}
                  </span>
                </div>
                <div className="flex-1 pb-8 border-b border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {phase.title}
                    </h3>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full w-fit">
                      {phase.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-20 bg-secondary/30 noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {"This Is For You If..."}
              </h2>
              <ul className="space-y-4">
                {[
                  "You know AI could help but don't know where to start",
                  "You're running on 5+ tools that don't talk to each other",
                  "Your team spends hours on manual, repetitive work",
                  "You've been burned by consultants who deliver slide decks",
                  "You want a clear, actionable plan — not vague advice",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="bg-card border-border">
                <CardContent className="p-8">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    What Happens Next
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    After the audit, most clients move into a Focused Build Sprint to tackle the #1 opportunity we identified. But there&apos;s no pressure — the audit stands on its own as a valuable deliverable.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                      <Link href="https://calendly.com/jdhogerty/meeting-with-jimmy">
                        {`Let\u0027s Talk About Your Audit`}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Ready to See What&apos;s Possible?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free 30-minute call to discuss your business and see if an AI Readiness Audit is the right fit.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-10">
              <Link href="https://calendly.com/jdhogerty/meeting-with-jimmy">
                Book Your Free Call
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link href="/" className="font-heading text-lg font-semibold tracking-tight text-foreground">
              Runwell
            </Link>
            <p className="text-sm text-muted-foreground">
              {`© ${new Date().getFullYear()} Runwell. All rights reserved.`}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
