"use client";

import { Menu, SunMoonIcon, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full md:w-auto px-4">
      <div className="bg-background/80 backdrop-blur-md border border-border rounded-full shadow-lg px-6 py-4 flex items-center justify-between gap-6 whitespace-nowrap">
        <Avatar>
          <AvatarImage src="/logo.png" alt="Casal Labs" />
          <AvatarFallback>CL</AvatarFallback>
        </Avatar>

        <div className="hidden md:flex items-center gap-4 whitespace-nowrap">
          <a
            href="#services"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            Services
          </a>
          <a
            href="#offer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            Offer
          </a>
          <a
            href="#future"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            Future
          </a>
          <a
            href="#approach"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            Approach
          </a>
          <a
            href="#philosophy"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            Philosophy
          </a>
          <a
            href="#clients"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            Clients
          </a>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <SunMoonIcon className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full"
          >
            <SunMoonIcon className="w-4 h-4" />
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-card rounded-full transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-background/95 backdrop-blur-md border border-border rounded-2xl shadow-lg p-4 space-y-3">
          <a
            href="#services"
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#offer"
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Offer
          </a>
          <a
            href="#future"
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Future
          </a>
          <a
            href="#approach"
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Approach
          </a>
          <a
            href="#philosophy"
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Philosophy
          </a>
          <a
            href="#clients"
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Clients
          </a>
        </div>
      )}
    </nav>
  );
}
