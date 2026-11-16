import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  HeartPulse,
  Lock,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  MapPin,
  Stethoscope,
  User,
} from "lucide-react";
import logoImg from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  clinicContacts,
  clinicEmail,
  footerLinks,
  mainPhone,
  navLinks,
  urgentPhone,
  whatsappPhone,
} from "@/data/clinic";

export function AppointmentButton({
  children = "Book appointment",
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <Button
      asChild
      className={`bg-accent text-accent-foreground font-bold shadow-none transition-colors hover:bg-accent/90 ${className}`}
    >
      <Link to="/appointments">
        <CalendarDays className="size-4" />
        {children}
      </Link>
    </Button>
  );
}

export function PatientLoginModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [tab, setTab] = useState<"patient" | "staff">("patient");
  const [identifier, setIdentifier] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl p-6 sm:p-8">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-3 grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary">
            <User size={28} />
          </div>
          <DialogTitle className="font-display text-2xl font-bold text-foreground">
            {tab === "patient" ? "Patient Portal Login" : "Doctor & Clinical Staff"}
          </DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground mt-1">
            {tab === "patient"
              ? "Access your digital case prescriptions, treatment progress, and medicine courier status."
              : "Doctor & OPD coordinator administrative authentication."}
          </DialogDescription>
        </DialogHeader>

        {/* Tab Switcher */}
        <div className="mt-3 grid grid-cols-2 gap-2 rounded-xl border border-slate-200 bg-slate-100 p-1 text-xs font-semibold">
          <button
            type="button"
            onClick={() => {
              setTab("patient");
              setSubmitted(false);
            }}
            className={`rounded-lg py-2 transition-colors ${
              tab === "patient"
                ? "bg-white text-primary shadow-xs font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Patient Portal
          </button>
          <button
            type="button"
            onClick={() => {
              setTab("staff");
              setSubmitted(false);
            }}
            className={`rounded-lg py-2 transition-colors ${
              tab === "staff"
                ? "bg-white text-primary shadow-xs font-bold"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            Doctor / Staff
          </button>
        </div>

        {submitted ? (
          <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
            <div className="mx-auto grid size-11 place-items-center rounded-full bg-emerald-500 text-white shadow-xs">
              <Check size={22} />
            </div>
            <h4 className="mt-3 font-display text-base font-bold text-foreground">
              Verification Code Sent
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              A 6-digit OTP has been sent to <strong>{identifier}</strong>.
            </p>
            <div className="mt-4 space-y-3">
              <Input
                placeholder="Enter 6-digit OTP"
                maxLength={6}
                className="text-center text-lg tracking-widest h-11"
              />
              <Button
                onClick={() => onOpenChange(false)}
                className="w-full bg-primary text-white font-bold"
              >
                Verify &amp; Enter Portal
              </Button>
            </div>
          </div>
        ) : (
          <form
            className="mt-5 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label className="block text-xs font-semibold text-foreground">
              {tab === "patient"
                ? "Registered Mobile Number or Patient ID *"
                : "Staff Official Email / ID *"}
              <Input
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder={tab === "patient" ? "+91 98765 43210" : "doctor@rajeevclinic.com"}
                className="mt-1.5 h-11 rounded-lg"
              />
            </label>

            {tab === "staff" && (
              <label className="block text-xs font-semibold text-foreground">
                Staff Password *
                <Input
                  required
                  type="password"
                  placeholder="••••••••"
                  className="mt-1.5 h-11 rounded-lg"
                />
              </label>
            )}

            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground font-bold hover:bg-accent/90 h-11 shadow-xs"
            >
              Continue to Portal <ArrowRight className="size-4 ml-1.5" />
            </Button>

            <div className="text-center text-[11px] text-muted-foreground pt-3 border-t border-border/70">
              New patient? Access is automatically granted after booking your first appointment.
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function SiteHeader() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <PatientLoginModal open={loginOpen} onOpenChange={setLoginOpen} />

      {/* Unified Connected Header Block in Solid White */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-xs">
        {/* Tier 1: Main Header (Logo + Urgent Helpline + Equal Action Buttons) */}
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6">
          {/* Logo brand link */}
          <Link
            to="/"
            className="group flex shrink-0 items-center py-0.5"
            aria-label="Dr. Rajeev's The Family Clinic home"
          >
            <img
              src={logoImg}
              alt="Dr. Rajeev's The Family Clinic Logo"
              className="h-12 sm:h-14 md:h-[56px] w-auto object-contain"
              width="230"
              height="56"
            />
          </Link>

          {/* Desktop Right Action Area: Equal Sized Buttons (h-10 px-4) */}
          <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-2.5">
            {/* Urgent OPD Badge */}
            <a
              href={`tel:${urgentPhone.replaceAll(" ", "")}`}
              className="hidden xl:inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50/70 px-3 py-2 text-xs font-bold text-accent hover:bg-red-50 transition-colors"
            >
              <HeartPulse size={14} className="animate-pulse" />
              <span>Urgent OPD: {urgentPhone}</span>
            </a>

            {/* Login Button */}
            <Button
              variant="outline"
              onClick={() => setLoginOpen(true)}
              className="h-10 px-4 border-slate-200 bg-white text-slate-800 hover:bg-slate-100 font-bold text-xs sm:text-[13px] gap-1.5 transition-colors shadow-none rounded-lg"
            >
              <User className="size-4 text-slate-600" />
              <span>Login</span>
            </Button>

            {/* Shop Medicine */}
            <Button
              asChild
              variant="outline"
              className="h-10 px-4 whitespace-nowrap border-slate-200 bg-white hover:bg-slate-100 text-slate-800 text-xs sm:text-[13px] font-bold gap-1.5 transition-colors shadow-none rounded-lg"
            >
              <a href="https://shop.rajeevclinic.com" target="_blank" rel="noreferrer">
                <ShoppingBag className="size-4 text-primary" />
                <span>Shop medicine</span>
              </a>
            </Button>

            {/* Book Appointment CTA */}
            <AppointmentButton className="whitespace-nowrap h-10 px-4 text-xs sm:text-[13px] font-bold transition-colors shadow-none rounded-lg" />
          </div>

          {/* Mobile Actions & Sheet Trigger: Equal Heights (h-9) */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLoginOpen(true)}
              className="border-slate-200 bg-white text-slate-800 hover:bg-slate-100 font-bold text-xs h-9 px-3 gap-1 transition-colors rounded-lg shadow-none"
            >
              <User size={13} />
              Login
            </Button>

            <AppointmentButton className="inline-flex text-xs h-9 px-3 rounded-lg shadow-none" />

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open navigation" className="h-9 w-9 border-slate-200 rounded-lg hover:bg-slate-100">
                  <Menu className="size-4 text-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="flex w-[min(90vw,380px)] flex-col overflow-y-auto">
                <SheetHeader className="border-b border-border pb-4 text-left">
                  <SheetTitle className="flex items-center gap-2">
                    <img
                      src={logoImg}
                      alt="Dr. Rajeev's The Family Clinic"
                      className="h-11 w-auto object-contain"
                    />
                  </SheetTitle>
                  <p className="text-xs text-muted-foreground mt-1">
                    Complete Care for your Family · Multi-City OPD
                  </p>
                </SheetHeader>

                <div className="pt-3 pb-1">
                  <Button
                    variant="outline"
                    onClick={() => setLoginOpen(true)}
                    className="w-full justify-center gap-2 border-slate-200 text-slate-800 hover:bg-slate-100 font-bold text-xs h-10 rounded-lg transition-colors shadow-none"
                  >
                    <User size={15} />
                    Patient / Staff Login
                  </Button>
                </div>

                <nav className="flex flex-col py-3" aria-label="Mobile navigation">
                  {navLinks.map((item) => (
                    <SheetClose asChild key={item.to}>
                      <Link
                        to={item.to}
                        className="border-b border-slate-100 py-3 text-base font-bold text-slate-800 transition-colors hover:text-primary"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <a
                    href="https://shop.rajeevclinic.com"
                    target="_blank"
                    rel="noreferrer"
                    className="border-b border-slate-100 py-3 text-base font-bold text-slate-800 flex items-center justify-between"
                  >
                    <span>Shop medicine</span>
                    <ShoppingBag size={18} className="text-primary" />
                  </a>
                  <SheetClose asChild>
                    <Link
                      to="/she-child-care"
                      className="border-b border-slate-100 py-3 text-base font-bold text-slate-800"
                    >
                      She &amp; Child Care
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/autism-book"
                      className="border-b border-slate-100 py-3 text-base font-bold text-slate-800"
                    >
                      Autism Care Book
                    </Link>
                  </SheetClose>
                </nav>

                <div className="mt-auto space-y-4 pt-4 border-t border-border">
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600">
                    <p className="font-semibold text-slate-900">OPD Helpline:</p>
                    <p className="mt-1 flex items-center gap-1.5 text-primary font-bold">
                      <Phone size={13} /> {mainPhone}
                    </p>
                    <p className="mt-1 flex items-center gap-1.5 text-accent font-bold">
                      <HeartPulse size={13} /> {urgentPhone} (Urgent)
                    </p>
                  </div>
                  <SheetClose asChild>
                    <AppointmentButton className="w-full text-xs h-10 rounded-lg shadow-none" />
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Tier 2: Sub Header (Dedicated Navigation Menu in Solid White) */}
        <div className="hidden lg:block border-t border-slate-100 bg-white">
          <div className="mx-auto flex max-w-7xl items-center justify-center px-4 sm:px-6">
            <nav className="flex w-full items-center justify-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 py-2.5" aria-label="Sub header navigation">
              {navLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-lg px-3.5 py-1.5 text-sm xl:text-[15px] font-bold text-slate-800 transition-colors hover:bg-slate-100 hover:text-primary whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary-dark text-primary-foreground border-t border-primary/20">
      {/* Upper Footer Highlights */}
      <div className="border-b border-primary-foreground/10 bg-primary-dark/80 py-8">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/20 text-primary">
              <ShieldCheck size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold">15+ Years Trust</p>
              <p className="text-xs text-primary-foreground/70">Verified homeopathic care</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/20 text-primary">
              <MapPin size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold">4 Major Cities</p>
              <p className="text-xs text-primary-foreground/70">Ranchi, Patna, Kolkata, Delhi</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/20 text-primary">
              <Clock3 size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold">All 7 Days Open</p>
              <p className="text-xs text-primary-foreground/70">10:00 AM - 8:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent/20 text-accent">
              <HeartPulse size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold">Prompt Consultation</p>
              <p className="text-xs text-primary-foreground/70">In-Clinic &amp; OPD Support</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-12 md:px-8 md:pb-10">
        <div className="grid gap-10 border-b border-primary-foreground/15 pb-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* Logo & About Card */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <div className="inline-flex rounded-xl bg-white p-2.5 shadow-md">
                <img
                  src={logoImg}
                  alt="Dr. Rajeev's The Family Clinic"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="max-w-sm text-sm leading-6 text-primary-foreground/80">
              Personalized homeopathic healthcare with modern clinical attention. Providing comprehensive in-clinic OPD consultations across Ranchi, Patna, Kolkata, and Delhi.
            </p>
            <div className="space-y-1 text-xs text-primary-foreground/70">
              <p className="font-semibold text-primary-foreground">ABHI HOMEO HALL</p>
              <p>Specialized Family Medicine &amp; Child Health</p>
              <a
                href={`mailto:${clinicEmail}`}
                className="mt-2 inline-block text-sm font-medium text-primary hover:underline"
              >
                {clinicEmail}
              </a>
            </div>
          </div>

          {/* OPD Clinics */}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Our OPD Clinics
            </h2>
            <div className="mt-4 space-y-3">
              {clinicContacts.map((clinic) => (
                <div key={clinic.city} className="border-b border-primary-foreground/10 pb-2">
                  <p className="text-sm font-semibold">{clinic.city} Center</p>
                  <a
                    href={`tel:${clinic.phone.replaceAll(" ", "")}`}
                    className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-primary-foreground/75 hover:text-primary"
                  >
                    <Phone size={11} /> {clinic.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Specialties */}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Specialties
            </h2>
            <div className="mt-4 flex flex-col space-y-2.5 text-xs text-primary-foreground/75">
              <Link to="/she-child-care" className="hover:text-primary-foreground transition-colors">
                She &amp; Child Care
              </Link>
              <Link to="/autism-book" className="hover:text-primary-foreground transition-colors">
                Autism Care Guidance
              </Link>
              <Link to="/conditions" className="hover:text-primary-foreground transition-colors">
                Chronic Skin &amp; Hair Care
              </Link>
              <Link to="/conditions" className="hover:text-primary-foreground transition-colors">
                Respiratory &amp; Allergy
              </Link>
              <Link to="/conditions" className="hover:text-primary-foreground transition-colors">
                Hormonal &amp; Thyroid
              </Link>
              <Link to="/appointments" className="hover:text-primary-foreground transition-colors">
                In-Clinic OPD Care
              </Link>
            </div>
          </div>

          {/* Navigation & Policies */}
          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-primary">
              Patient Care
            </h2>
            <div className="mt-4 flex flex-col space-y-2 text-xs text-primary-foreground/75">
              {footerLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="hover:text-primary-foreground transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="flex flex-col justify-between gap-4 pt-6 text-xs text-primary-foreground/65 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Dr. Rajeev's The Family Clinic. All rights reserved.
          </span>
          <span>
            Multi-City In-Clinic OPD Care &amp; Dedicated Homeopathy
          </span>
        </div>
      </div>
    </footer>
  );
}

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-slate-200 bg-white/95 p-2 shadow-lg backdrop-blur-md md:hidden">
      <a
        href={`tel:${mainPhone.replaceAll(" ", "")}`}
        className="flex min-h-12 flex-col items-center justify-center gap-1 text-[11px] font-bold text-slate-800 hover:text-primary transition-colors"
      >
        <Phone size={17} className="text-primary" />
        Call OPD
      </a>
      <a
        href={`https://wa.me/${whatsappPhone}`}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-12 flex-col items-center justify-center gap-1 text-[11px] font-bold text-slate-800 hover:text-emerald-600 transition-colors"
      >
        <MessageCircle size={17} className="text-emerald-600" />
        WhatsApp
      </a>
      <Link
        to="/appointments"
        className="flex min-h-12 flex-col items-center justify-center gap-1 text-[11px] font-bold text-accent hover:text-accent/80 transition-colors"
      >
        <CalendarDays size={17} />
        Book Visit
      </Link>
    </div>
  );
}

export function FloatingSocialActions() {
  return (
    <aside
      aria-label="Quick contact & social links"
      className="fixed bottom-20 right-4 md:bottom-6 md:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Instagram Floating Original Brand Button */}
      <a
        href="https://www.instagram.com/drrajeevclinic/"
        target="_blank"
        rel="noreferrer"
        className="group relative flex size-12 md:size-13 items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white shadow-lg shadow-pink-500/25 transition-all duration-300 hover:scale-110 active:scale-95 ring-2 ring-white/90"
        aria-label="Follow Dr. Rajeev's Clinic on Instagram"
      >
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-900/90 px-2.5 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-xs group-hover:block animate-in fade-in">
          Follow on Instagram
        </span>
        <svg viewBox="0 0 24 24" className="size-6 md:size-7 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>

      {/* WhatsApp Floating Original Brand Button */}
      <a
        href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hello Dr. Rajeev's Clinic, I would like to inquire about consultation and OPD timings.")}`}
        target="_blank"
        rel="noreferrer"
        className="group relative flex size-12 md:size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-500/30 transition-all duration-300 hover:scale-110 active:scale-95 ring-3 ring-white/95"
        aria-label="Chat with Dr. Rajeev's Clinic on WhatsApp"
      >
        <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-slate-900/90 px-2.5 py-1 text-xs font-semibold text-white shadow-md backdrop-blur-xs group-hover:block animate-in fade-in">
          Chat on WhatsApp
        </span>
        <svg viewBox="0 0 24 24" className="size-6 md:size-7 fill-white" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.64c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.17.17 1.61.1.49-.07 1.47-.6 1.68-1.19.21-.58.21-1.08.14-1.19-.06-.1-.22-.17-.47-.3z" />
        </svg>
      </a>
    </aside>
  );
}

export const FloatingWhatsApp = FloatingSocialActions;

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground pb-16 md:pb-0">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <MobileActionBar />
      <FloatingSocialActions />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mb-10 max-w-2xl ${
        align === "center" ? "mx-auto text-center" : "text-left"
      }`}
    >
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          <Sparkles className="size-3.5 text-primary" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export function EyebrowLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80 hover:underline"
    >
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}

export function AvailabilityNote() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-semibold text-slate-700">
      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
      <Clock3 size={14} className="text-slate-600" />
      Mon–Sun · 10:00 AM–8:00 PM (OPD Open)
    </div>
  );
}
