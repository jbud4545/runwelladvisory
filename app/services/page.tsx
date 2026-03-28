"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Search,
  Hammer,
  Brain,
  TrendingUp,
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

const services = [
  {
    icon: Search,
    title: "AI Readiness Audit",
    description: "A deep dive into your workflows, tools, and bottlenecks. We identify the highest-impact AI opportunities and deliver a prioritized roadmap with ROI estimates.",
    timeline: "1-2 weeks",
    cta: "Curious where AI fits in your business?",
    href: "/services/ai-readiness-audit",
    recommended: true,
  },
  {
    icon: Hammer,
    title: "Workflow Automation Sprint",
    description: "We take your highest-impact automation opportunity and build a working, production-ready system. Real integrations, real automation, deployed and documented.",
    timeline: "3-5 weeks",
    cta: "Know what you need to automate?",
    href: "/services/workflow-automation",
    recommended: false,
  },
  {
    icon: Brain,
    title: "AI Integration Services",
    description: "Embed AI capabilities directly into your business processes. Document processing, conversational AI, content generation, and predictive analytics.",
    timeline: "Custom scope",
    cta: "Ready to bring AI into your workflows?",
    href: "/services/ai-integration",
    recommended: false,
  },
  {
    icon: TrendingUp,
    title: "Full AI Transformation",
    description: "End-to-end platform design and build. Replace your duct-taped tool stack with a unified, AI-powered system built for how your business actually works.",
    timeline: "6-12 weeks",
    cta: "Ready to rebuild from the ground up?",
    href: "/services/ai-transformation",
    recommended: false,
  },
]

export default function ServicesPage() {
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
              <Link href="/services" className="text-sm text-foreground font-medium transition-colors">
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
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] text-balance"
            >
              Services
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-xl text-muted-foreground leading-relaxed"
            >
              From quick audits to full platform builds, we offer flexible engagement options to match where you are in your AI journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={service.href}>
                  <Card className="bg-card border-border hover:border-primary/30 transition-all duration-300 group cursor-pointer">
                    <CardContent className="p-0">
                      <div className="grid lg:grid-cols-12 gap-6 p-8">
                        <div className="lg:col-span-1 flex items-start">
                          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                            <service.icon className="w-5 h-5 text-primary" />
                          </div>
                        </div>
                        
                        <div className="lg:col-span-7 space-y-3">
                          <div className="flex items-center gap-3">
                            <h2 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {service.title}
                            </h2>
                            {service.recommended && (
                              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                                Start Here
                              </span>
                            )}
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        
                        <div className="lg:col-span-3 flex flex-col justify-between gap-4">
                          <div className="space-y-1">
                            <p className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                              Timeline
                            </p>
                            <p className="text-sm font-medium text-foreground">
                              {service.timeline}
                            </p>
                          </div>
                          <p className="text-sm font-medium text-primary">
                            {service.cta}
                          </p>
                        </div>
                        
                        <div className="lg:col-span-1 flex items-center justify-end">
                          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Section */}
      <section className="py-20 bg-secondary/30 noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Most clients begin with an AI Readiness Audit. It&apos;s the fastest way to understand your opportunities and get a concrete action plan — without committing to a larger project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                <Link href="/services/ai-readiness-audit">
                  Learn About the Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base px-8">
                <Link href="https://calendly.com/jdhogerty/meeting-with-jimmy">
                  Book a Free Call
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
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
              Our Process
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Understand",
                description: "We start by deeply understanding your business, workflows, and pain points. No generic solutions — everything is tailored to how you actually operate.",
              },
              {
                step: "02",
                title: "Build",
                description: "We build working systems, not prototypes. Real integrations, real automation, deployed to production. Your team uses what we build on day one.",
              },
              {
                step: "03",
                title: "Evolve",
                description: "AI and automation aren't one-time projects. We help you continuously improve, expand, and optimize as your business grows.",
              },
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="space-y-4">
                  <span className="font-heading text-5xl font-bold text-border">
                    {phase.step}
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
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
              Ready to Talk?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {`Book a free 30-minute call. We'll discuss your business, explore opportunities, and figure out the best path forward — together.`}
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
