"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Building2,
  GitBranch,
  Shield,
  CheckCircle,
  Rocket,
  Users,
  Clock,
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

export default function AITransformationPage() {
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
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                6-12 weeks
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] max-w-4xl text-balance"
            >
              Full AI Transformation
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              End-to-end platform design and build. Replace your duct-taped tool stack with a unified, AI-powered system built for how your business actually works.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-10"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                <Link href="https://calendly.com/jdhogerty/meeting-with-jimmy">
                  Start Your Transformation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What This Looks Like Section */}
      <section className="py-20 bg-secondary/30 noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Transformation Looks Like
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We replace fragmented tools and manual processes with a unified system designed around your business.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-muted-foreground" />
                Before
              </h3>
              <ul className="space-y-4">
                {[
                  "10+ tools that don't talk to each other",
                  "Manual data entry across multiple systems",
                  "Information scattered across emails, Slack, and spreadsheets",
                  "No single source of truth",
                  "Hours spent chasing updates and compiling reports",
                  "Processes that break when key people are out",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                After
              </h3>
              <ul className="space-y-4">
                {[
                  "One unified platform built for your workflows",
                  "Data flows automatically between systems",
                  "All communications captured and organized",
                  "Real-time dashboards and instant reporting",
                  "AI handles routine decisions and data processing",
                  "Documented processes that anyone can follow",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-foreground">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
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
              What We Build
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Building2,
                title: "Custom Business Platform",
                description: "A unified application that brings together all your key workflows — project management, client communication, task tracking, reporting — in one place.",
              },
              {
                icon: GitBranch,
                title: "Automated Workflows",
                description: "End-to-end process automation that handles handoffs, notifications, approvals, and data updates automatically. Work flows without manual intervention.",
              },
              {
                icon: Shield,
                title: "Integration Hub",
                description: "Seamless connections to the external tools you still need — CRM, email, Slack, accounting software. Data syncs automatically; nothing falls through the cracks.",
              },
              {
                icon: Rocket,
                title: "AI-Powered Intelligence",
                description: "Intelligent features built into your workflows — document processing, content generation, smart categorization, predictive insights. AI that works for you.",
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
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-6">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-secondary/30 noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-12">
              Transformation in Action
            </h2>
            
            <Card className="bg-card border-border overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-10 space-y-6">
                    <h3 className="font-heading text-2xl font-semibold text-foreground">
                      Unified Platform for a Digital Marketing Agency
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                          The Situation
                        </span>
                        <p className="mt-2 text-muted-foreground leading-relaxed">
                          A 15-person agency drowning in Slack threads, scattered emails, and manual task tracking. Work was falling through the cracks. Nobody had visibility into project status.
                        </p>
                      </div>
                      
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                          What We Built
                        </span>
                        <p className="mt-2 text-muted-foreground leading-relaxed">
                          A unified internal platform that ingests Slack messages, Gmail threads, and call transcripts automatically. A complete task management system to replace Asana. Contract workflows and automated background jobs for every team.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/5 p-8 lg:p-10 flex flex-col justify-between">
                    <div className="space-y-6">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                          Results
                        </span>
                        <div className="mt-4 space-y-4">
                          <div className="flex items-center gap-4">
                            <span className="font-heading text-4xl font-bold text-primary">100+</span>
                            <span className="text-foreground">hours/month eliminated</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="font-heading text-4xl font-bold text-primary">5</span>
                            <span className="text-foreground">tools consolidated into one</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                        Tech Stack
                      </span>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {["TypeScript", "Next.js", "PostgreSQL", "Prisma", "Inngest"].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-background border border-border rounded-full text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
              Transformation Timeline
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Clock,
                phase: "Weeks 1-2",
                title: "Discovery & Architecture",
                description: "Deep dive into your workflows. System design and architecture. You approve before we build.",
              },
              {
                icon: Rocket,
                phase: "Weeks 3-6",
                title: "Core Platform Build",
                description: "We build the unified platform, core workflows, and essential integrations. Regular demos keep you informed.",
              },
              {
                icon: GitBranch,
                phase: "Weeks 7-10",
                title: "Integration & AI",
                description: "Connect external tools. Add AI capabilities. Build out secondary workflows and automations.",
              },
              {
                icon: Users,
                phase: "Weeks 11-12",
                title: "Launch & Training",
                description: "Full deployment. Team training. Documentation. 30-day support period to ensure smooth transition.",
              },
            ].map((phase, index) => (
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
                      <phase.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-primary mb-2 block">
                      {phase.phase}
                    </span>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
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
                What a Transformation Looks Like
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Full transformation projects are significant investments — in time, attention, and budget. But so is the cost of running your business on broken systems.
                </p>
                <p>
                  Consider: How much are you spending on tools that overlap? How many hours does your team lose to manual work? What opportunities slip away because you can&apos;t move fast enough?
                </p>
                <p>
                  We&apos;ve seen transformation projects pay for themselves within months through recovered time, consolidated tools, and increased capacity.
                </p>
              </div>
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
                    Every Project Includes
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {[
                      "Custom platform development",
                      "All integrations and automations",
                      "AI capabilities",
                      "Full documentation",
                      "Team training",
                      "Post-launch support",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We scope and price every project individually after a detailed discovery process — no cookie-cutter packages.
                  </p>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                    <Link href="https://calendly.com/jdhogerty/meeting-with-jimmy">
                      {`Let\u0027s Talk About Your Transformation`}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {`Let's discuss your business and see if a full transformation is the right fit.`}
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
