"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  ArrowLeft,
  Layers,
  Brain,
  MessageSquare,
  FileSearch,
  Sparkles,
  CheckCircle,
  Cog,
  BarChart3,
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

export default function AIIntegrationPage() {
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
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                Custom scope
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] max-w-4xl text-balance"
            >
              AI Integration Services
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="mt-6 text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              Embed AI capabilities directly into your business processes. From intelligent document processing to conversational interfaces — we build AI that works for your specific use case.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-10"
            >
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
                <Link href="https://calendly.com/jdhogerty/meeting-with-jimmy">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI Capabilities Section */}
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
              AI Capabilities We Build
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We integrate leading AI models into custom solutions tailored to your workflows.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FileSearch,
                title: "Intelligent Document Processing",
                description: "Extract structured data from invoices, contracts, emails, and forms. AI reads and understands your documents so your team doesn't have to.",
              },
              {
                icon: MessageSquare,
                title: "Conversational AI",
                description: "Customer-facing chatbots, internal knowledge assistants, and voice interfaces. Natural language interactions that actually work.",
              },
              {
                icon: Sparkles,
                title: "Content Generation",
                description: "Automated drafts, summaries, and reports. AI that writes in your brand voice and follows your templates.",
              },
              {
                icon: BarChart3,
                title: "Predictive Analytics",
                description: "ML models that forecast demand, detect anomalies, and surface insights from your data. Decisions backed by data, not gut feel.",
              },
              {
                icon: Cog,
                title: "Process Intelligence",
                description: "AI that monitors your workflows, identifies bottlenecks, and suggests optimizations. Continuous improvement on autopilot.",
              },
              {
                icon: Layers,
                title: "Multi-Model Orchestration",
                description: "Complex AI workflows that combine multiple models and APIs. The right tool for each part of the job, orchestrated seamlessly.",
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

      {/* Use Cases Section */}
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
              Example Use Cases
            </h2>
          </motion.div>
          
          <div className="space-y-6">
            {[
              {
                title: "AI-Powered Sales Pipeline",
                description: "Call transcripts automatically parsed into structured CRM records. AI identifies key information, updates contact profiles, and drafts follow-up emails — all triggered by real events, not manual steps.",
                result: "3x sales capacity without adding headcount",
              },
              {
                title: "Intelligent Email Triage",
                description: "AI reads incoming emails, categorizes by urgency and type, extracts action items, and routes to the right team member. Priority items get flagged; routine requests get automated responses.",
                result: "90% reduction in email processing time",
              },
              {
                title: "Document Intelligence Hub",
                description: "Upload contracts, invoices, or reports and get structured data extracted instantly. AI understands context, handles variations, and learns from corrections.",
                result: "From hours of manual data entry to seconds",
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-6 items-start">
                      <div className="lg:col-span-2">
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                          {useCase.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {useCase.description}
                        </p>
                      </div>
                      <div className="lg:text-right">
                        <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                          {useCase.result}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
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
                Our Approach to AI
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  We don&apos;t chase AI hype. We build AI that solves specific business problems with measurable ROI.
                </p>
                <p>
                  That means starting with your workflow, not the technology. We identify where AI adds genuine value — then choose the right models and architectures to deliver it reliably.
                </p>
                <p>
                  Every AI system we build includes proper error handling, fallbacks, and human-in-the-loop options. Because in production, reliability beats sophistication.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Technologies We Work With
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "OpenAI GPT-4",
                  "Claude (Anthropic)",
                  "Gemini",
                  "Open-source LLMs",
                  "LangChain",
                  "Vector databases",
                  "Custom fine-tuning",
                  "Retrieval (RAG)",
                ].map((tech, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 noise-overlay">
        <div className="container relative z-10 mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-6">
              How We Scope AI Projects
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                AI integration projects vary widely in complexity. A simple document extraction workflow is different from a multi-model orchestration system.
              </p>
              <p>
                We typically recommend starting with an AI Readiness Audit to identify the highest-impact opportunity. From there, we can scope a focused sprint or a larger transformation project.
              </p>
            </div>
            
            <div className="mt-8 p-6 bg-card rounded-lg border border-border">
              <p className="text-muted-foreground mb-4">
                Every AI integration project is different. We scope and price based on your specific needs after a discovery call.
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="https://calendly.com/jdhogerty/meeting-with-jimmy">
                  {`Let\u0027s Discuss Your Use Case`}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
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
              Ready to Add AI to Your Workflow?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {`Let's discuss your specific use case and explore what's possible.`}
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
