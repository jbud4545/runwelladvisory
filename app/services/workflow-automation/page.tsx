"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  ArrowLeft,
  Hammer,
  Workflow,
  Bot,
  Database,
  CheckCircle,
  Plug,
  RefreshCw,
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

export default function WorkflowAutomationPage() {
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
                <Hammer className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                3-5 weeks
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] max-w-4xl text-balance"
            >
              Workflow Automation Sprint
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              We take your highest-impact automation opportunity and build a working, production-ready system. Real integrations. Real results. Deployed and ready to use.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-10"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                <Link href="https://calendly.com/jdhogerty/meeting-with-jimmy">
                  Start Your Sprint
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Build Section */}
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
              What We Build
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Every sprint focuses on one high-impact automation. Here are common examples:
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Workflow,
                title: "Process Automation",
                description: "Turn multi-step manual processes into automated workflows. Approval chains, status updates, notifications — all handled automatically.",
              },
              {
                icon: Bot,
                title: "AI-Powered Processing",
                description: "Use AI to extract data, summarize documents, categorize inputs, or generate responses. Intelligent automation that learns your patterns.",
              },
              {
                icon: Plug,
                title: "Tool Integrations",
                description: "Connect the tools you already use — CRM, email, Slack, project management. Data flows automatically where it needs to go.",
              },
              {
                icon: Database,
                title: "Data Pipelines",
                description: "Automated data collection, transformation, and reporting. No more manual exports or copy-paste between spreadsheets.",
              },
              {
                icon: RefreshCw,
                title: "Sync & Reconciliation",
                description: "Keep your systems in sync. When data changes in one place, it updates everywhere else. No drift, no conflicts.",
              },
              {
                icon: CheckCircle,
                title: "Quality Assurance",
                description: "Automated validation, error checking, and alerting. Catch problems before they become customer issues.",
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

      {/* How It Works Section */}
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
              Sprint Timeline
            </h2>
          </motion.div>
          
          <div className="space-y-8">
            {[
              {
                week: "Week 1",
                title: "Design & Architecture",
                description: "We define exactly what we're building, map the integration points, and design the system architecture. You approve the plan before we write any code.",
              },
              {
                week: "Week 2-3",
                title: "Core Build",
                description: "We build the automation system, integrations, and any custom interfaces. Regular check-ins keep you informed and allow for adjustments.",
              },
              {
                week: "Week 4",
                title: "Testing & Refinement",
                description: "We test with real data, fix edge cases, and refine the system based on feedback. We don't ship until it works reliably.",
              },
              {
                week: "Week 5",
                title: "Deployment & Training",
                description: "We deploy to production, document everything, and train your team. You'll know exactly how to use and maintain the system.",
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
                <div className="flex-shrink-0 w-24">
                  <span className="font-heading text-sm font-bold text-primary">
                    {phase.week}
                  </span>
                </div>
                <div className="flex-1 pb-8 border-b border-border">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Results Section */}
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
              Real Sprint Results
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: "97%",
                label: "Faster confirmation emails",
                context: "From 6 hours to 10 minutes",
              },
              {
                metric: "73%",
                label: "Reduction in bug resolution time",
                context: "With automated debug tooling",
              },
              {
                metric: "100+",
                label: "Hours/month saved",
                context: "Through automated data entry",
              },
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border">
                  <CardContent className="p-8 text-center">
                    <span className="block font-heading text-5xl font-bold text-primary mb-2">
                      {result.metric}
                    </span>
                    <span className="block text-foreground font-medium mb-1">
                      {result.label}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {result.context}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {"What's Included"}
              </h2>
              <ul className="space-y-4">
                {[
                  "Production-ready automation system",
                  "All integrations with your existing tools",
                  "Testing with real data and edge cases",
                  "Deployment to your infrastructure",
                  "Complete technical documentation",
                  "Team training session",
                  "30 days of post-launch support",
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
                    Prerequisites
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Most clients start with an AI Readiness Audit to identify the best automation opportunity. But if you already know what you need to build, we can jump straight into a sprint.
                  </p>
                  <div className="pt-4 border-t border-border">
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                      <Link href="https://calendly.com/jdhogerty/meeting-with-jimmy">
                        {`Let\u0027s Scope Your Sprint`}
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
              Ready to Automate?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {`Let's talk about your biggest automation opportunity and see if a sprint is the right fit.`}
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
