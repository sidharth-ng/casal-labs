"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Workflow, Network, Layers, Brain, Route, ArrowRightLeft, Zap, TrendingUp } from "lucide-react"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Floating Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-32 w-96 h-96 bg-linear-to-br from-blue-800 via-blue-800/30 to-transparent rounded-full blur-3xl opacity-40 glow-orb" />
          <div
            className="absolute bottom-0 left-20 w-96 h-96 bg-linear-to-tr from-blue-800/25 to-blue-800/10 rounded-full blur-3xl opacity-70 glow-orb"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute bottom-0 right-96 w-72 h-72 bg-linear-to-tl from-blue-800/25 to-transparent rounded-full blur-3xl opacity-30 glow-orb"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="space-y-8 max-w-3xl text-center mx-auto">
            <div className="inline-block">
              <span className="text-sm font-semibold text-blue-800 uppercase tracking-widest px-4 py-2 bg-blue-800/10 rounded-full">
                AI Automation & Quantum Systems
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
              Building the next layer of intelligent systems.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed max-w-2xl mx-auto">
              Scalable AI automation today. Quantum-AI systems for tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-blue-800 text-white hover:bg-blue-800/90" asChild>
                <a href="https://wa.me/7337074117" target="_blank" rel="noopener noreferrer">
                  Work with us <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="border-t border-border py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm font-semibold text-blue-800 uppercase tracking-wide">What we do</p>
                <h2 className="text-4xl md:text-5xl font-bold text-balance">
                  AI-powered workflows that automate core business operations.
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  These workflows replace manual processes, reduce operational load, and create systems that run quietly
                  in the background.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Today, we sell applied automation.</span>
                  <br />
                  Behind the scenes, we're engineering something much deeper.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 bg-blue-800/10 rounded-lg flex items-center justify-center">
                <Workflow className="w-6 h-6 text-blue-800" />
              </div>
              <div className="space-y-1">
                <h3 className="text-foreground">
                  <div className="font-bold">Process automation</div>
                  <div className="font-normal text-muted-foreground">Intelligent workflow design</div>
                </h3>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 bg-blue-800/10 rounded-lg flex items-center justify-center">
                <Network className="w-6 h-6 text-blue-800" />
              </div>
              <div className="space-y-1">
                <h3 className="text-foreground">
                  <div className="font-bold">System integration</div>
                  <div className="font-normal text-muted-foreground">Seamless data flow</div>
                </h3>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 bg-blue-800/10 rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6 text-blue-800" />
              </div>
              <div className="space-y-1">
                <h3 className="text-foreground">
                  <div className="font-bold">Scalable architecture</div>
                  <div className="font-normal text-muted-foreground">Future-ready foundations</div>
                </h3>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 bg-blue-800/10 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-blue-800" />
              </div>
              <div className="space-y-1">
                <h3 className="text-foreground">
                  <div className="font-bold">AI integration</div>
                  <div className="font-normal text-muted-foreground">Intelligent decision making</div>
                </h3>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Offering Section */}
      <section id="offer" className="border-t border-border py-20 md:py-32 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-blue-800 uppercase tracking-wide">What we offer today</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Production-ready AI workflows for businesses that want leverage.
            </h2>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              We design and deploy production-ready AI workflows for businesses that want leverage, not tools.
            </p>

            <div>
              <h3 className="font-semibold text-lg mb-6 text-foreground">Key Capabilities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-blue-800/10 border border-blue-800/20 rounded-xl p-4 flex items-center gap-3 hover:bg-blue-800/15 hover:border-blue-800/30 transition-colors">
                  <Route className="w-6 h-6 text-blue-800 shrink-0" />
                  <span className="text-sm font-medium text-foreground">Decision routing</span>
                </div>

                <div className="bg-blue-800/10 border border-blue-800/20 rounded-xl p-4 flex items-center gap-3 hover:bg-blue-800/15 hover:border-blue-800/30 transition-colors">
                  <ArrowRightLeft className="w-6 h-6 text-blue-800 shrink-0" />
                  <span className="text-sm font-medium text-foreground">Data movement and transformation</span>
                </div>

                <div className="bg-blue-800/10 border border-blue-800/20 rounded-xl p-4 flex items-center gap-3 hover:bg-blue-800/15 hover:border-blue-800/30 transition-colors">
                  <Zap className="w-6 h-6 text-blue-800 shrink-0" />
                  <span className="text-sm font-medium text-foreground">Automated execution across systems</span>
                </div>

                <div className="bg-blue-800/10 border border-blue-800/20 rounded-xl p-4 flex items-center gap-3 hover:bg-blue-800/15 hover:border-blue-800/30 transition-colors">
                  <TrendingUp className="w-6 h-6 text-blue-800 shrink-0" />
                  <span className="text-sm font-medium text-foreground">Continuous optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="future" className="border-t border-border py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-blue-800 uppercase tracking-wide">Where we're headed</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Quantum-AI based system architectures.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Casal Labs is actively working on quantum-AI based system architectures.
              </p>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">This work focuses on:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-blue-800 font-bold">→</span>
                    <span>Parallel decision modeling</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-blue-800 font-bold">→</span>
                    <span>Probabilistic execution paths</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-blue-800 font-bold">→</span>
                    <span>High-complexity system optimization</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-blue-800 font-bold">→</span>
                    <span>Automation that adapts under uncertainty</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-800/10 border border-blue-800/30 rounded-2xl p-8 space-y-6 mt-2">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg text-foreground">Coming in 1.5-2 Years</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  These capabilities are not yet public. They are being developed as part of a long-term roadmap and
                  will be revealed over the next 1.5 to 2 years.
                </p>
              </div>

              <div className="pt-4 border-t border-blue-800/20 space-y-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">What we build today</span> is designed to evolve into
                  that future. Your systems won't break when complexity increases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section id="approach" className="border-t border-border py-20 md:py-32 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-blue-800 uppercase tracking-wide">Why this approach</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Systems that compound over time.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                By building workflows with future compute models in mind, we avoid rebuilding from scratch later.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This allows our clients to grow into more autonomous operations without changing foundations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="border-t border-border py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-blue-800 uppercase tracking-wide">Our philosophy</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">The future of software is fewer decisions.</h2>
          </div>

          <div className="space-y-8 max-w-3xl">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Casal Labs is building toward a world where businesses run on intelligent systems that sense, decide, and
              execute with minimal human input.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">AI workflows</span> are the first layer.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-blue-800 rounded-full mt-2 shrink-0" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">Quantum-AI systems</span> are the direction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section id="clients" className="border-t border-border py-20 md:py-32 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 space-y-12">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-blue-800 uppercase tracking-wide">Who we work with</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              We work with founders and teams who think long-term.
            </h2>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="max-w-2xl space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-blue-800 font-bold text-lg">→</span>
                  <p className="text-sm text-muted-foreground">Think long-term and value systems over shortcuts</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-blue-800 font-bold text-lg">→</span>
                  <p className="text-sm text-muted-foreground">Want automation that scales with complexity</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-blue-800 font-bold text-lg">→</span>
                  <p className="text-sm text-muted-foreground">Building something serious that compounds over time</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed pt-4">
                <span className="font-semibold text-foreground">
                  If you're building something serious, we're aligned.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="border-t border-border py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-b from-blue-800/10 to-transparent pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-blue-800/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-6 text-center space-y-8 relative z-10">
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-blue-800 uppercase tracking-wide">Start with the foundation</p>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Work with Casal Labs today through our AI automation workflows.
            </h2>
            <p className="text-xl text-muted-foreground">
              Grow into the next generation of intelligent systems as they emerge.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="gap-2 bg-blue-800 text-white hover:bg-blue-800/90" asChild>
              <a href="https://wa.me/7337074117" target="_blank" rel="noopener noreferrer">
                Get started <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-8 border-t border-border">
            Casal Labs is building applied automation today and quantum-AI systems for tomorrow.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-bold text-blue-800">Casal Labs</div>
            <div className="flex gap-8 text-sm text-muted-foreground">
              <a href="#services" className="hover:text-foreground transition">
                Services
              </a>
              <a href="#offer" className="hover:text-foreground transition">
                Offer
              </a>
              <a href="#future" className="hover:text-foreground transition">
                Future
              </a>
              <a href="#approach" className="hover:text-foreground transition">
                Approach
              </a>
              <a href="#philosophy" className="hover:text-foreground transition">
                Philosophy
              </a>
              <a href="#clients" className="hover:text-foreground transition">
                Clients
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
