import { useMemo, useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowDownRight,
  ArrowRight,
  Atom,
  Award,
  BookOpen,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Dna,
  ExternalLink,
  FileText,
  Filter,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  HeartPulse,
  Leaf,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Microscope,
  Phone,
  PhoneCall,
  Quote,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Stethoscope,
  Users,
  X,
  Zap,
} from "lucide-react";
import doctorPortrait from "@/assets/clinic-doctor-portrait.jpg";
import logoImg from "@/assets/logo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  AppointmentForm,
  ClinicCard,
  ConditionCard,
  GoogleLogoIcon,
  ReviewCard,
} from "@/components/clinic-widgets";
import { AvailabilityNote, EyebrowLink, SectionHeading, SiteFrame } from "@/components/site-shell";
import {
  clinicContacts,
  clinicEmail,
  faqs,
  mainPhone,
  urgentPhone,
  whatsappPhone,
} from "@/data/clinic";
import {
  conditionCategories,
  conditions,
  featuredConditions,
  getCondition,
} from "@/data/conditions";
import { posts, reviews, stories } from "@/data/content";

const wrap = "mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8";
const section = "py-16 sm:py-24";

function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-slate-50 via-white to-white py-14 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className={`${wrap} relative max-w-5xl`}>
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
          <Sparkles className="size-3.5 text-accent" />
          {eyebrow}
        </div>
        <h1 className="max-w-4xl font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl lg:leading-[1.15]">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      </div>
    </section>
  );
}

function PrimaryLink({
  to,
  children,
  variant = "default",
}: {
  to: string;
  children: ReactNode;
  variant?: "default" | "outline";
}) {
  return (
    <Button
      asChild
      variant={variant}
      className={
        variant === "default"
          ? "bg-accent text-accent-foreground font-bold shadow-none hover:bg-accent/90 transition-colors"
          : "border-slate-300 bg-white text-slate-800 hover:bg-slate-100 font-semibold transition-colors"
      }
    >
      <Link to={to}>{children}</Link>
    </Button>
  );
}

function ContactStrip() {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-muted-foreground">
      <span className="inline-flex items-center gap-1.5 text-foreground">
        <MapPin size={14} className="text-primary shrink-0" />
        <span>OPD Centers: Ranchi · Patna · Kolkata · Delhi</span>
      </span>
      <span className="hidden sm:inline text-border">|</span>
      <a
        href={`tel:${mainPhone.replaceAll(" ", "")}`}
        className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80"
      >
        <Phone size={14} className="shrink-0" />
        <span>{mainPhone}</span>
      </a>
      <span className="hidden sm:inline text-border">|</span>
      <span className="inline-flex items-center gap-1 text-accent font-semibold">
        <HeartPulse size={14} className="shrink-0" />
        <span>Urgent: {urgentPhone}</span>
      </span>
    </div>
  );
}

function QuickAction({
  icon: Icon,
  title,
  detail,
  to,
  badge,
  isAccent = false,
  external = false,
}: {
  icon: typeof CalendarDays;
  title: string;
  detail: string;
  to: string;
  badge?: string;
  isAccent?: boolean;
  external?: boolean;
}) {
  const contents = (
    <div className="flex w-full items-center gap-4 sm:gap-5">
      <span
        className={`grid size-14 shrink-0 place-items-center rounded-2xl transition-all shadow-xs ${
          isAccent
            ? "bg-accent/15 text-accent group-hover:bg-accent group-hover:text-white"
            : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white"
        }`}
      >
        <Icon size={26} />
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="block text-base font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </span>
          {badge && (
            <span className="rounded-md bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
              {badge}
            </span>
          )}
        </div>
        <span className="mt-1.5 block text-xs sm:text-sm text-muted-foreground leading-snug">
          {detail}
        </span>
      </div>
      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-600 transition-colors group-hover:bg-primary group-hover:text-white">
        <ArrowRight size={15} />
      </span>
    </div>
  );

  const containerClass =
    "group flex min-h-24 w-full items-center rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg transform-gpu cursor-pointer";

  return external ? (
    <a href={to} target="_blank" rel="noreferrer" className={containerClass}>
      {contents}
    </a>
  ) : (
    <Link to={to} className={containerClass}>
      {contents}
    </Link>
  );
}

function Feature({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof ShieldCheck;
  title: string;
  text: string;
}) {
  return (
    <article className="group relative rounded-xl border border-border bg-card p-6 shadow-xs transition-all hover:border-primary/40 hover:shadow-md">
      <div className="absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
      <span className="grid size-12 place-items-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon size={22} />
      </span>
      <h3 className="mt-5 font-display text-lg font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </article>
  );
}

function StoryCard(story: (typeof stories)[number]) {
  const [showMilestones, setShowMilestones] = useState(false);

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:shadow-xl hover:border-primary/40">
      {/* Top Accent Strip */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-primary/80 to-accent" />

      {/* Image Container with Badges */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={story.image}
          alt={story.title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Top Badges */}
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          <span className="rounded-full bg-white/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-bold text-slate-800 shadow-xs">
            {story.category}
          </span>
          <span className="rounded-full bg-slate-900/80 backdrop-blur-xs px-2.5 py-1 text-[11px] font-medium text-white shadow-xs">
            {story.city}
          </span>
        </div>

        {/* Bottom Image Overlay Badges */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
          <span className="inline-flex items-center gap-1.5 rounded-md bg-black/60 backdrop-blur-xs px-2.5 py-1 text-[11px] font-medium">
            <Clock3 size={13} className="text-amber-400" />
            {story.duration}
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-emerald-600/90 backdrop-blur-xs px-2 py-1 text-[10px] font-bold">
            <ShieldCheck size={13} />
            Verified Case
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex flex-1 flex-col p-6">
        {/* Patient Identifier */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <h4 className="font-display text-sm font-bold text-foreground">{story.patientName}</h4>
            <p className="text-[11px] text-muted-foreground">
              {story.condition} · {story.age}
            </p>
          </div>
          <div className="flex items-center gap-0.5 text-amber-500">
            {Array.from({ length: story.rating || 5 }).map((_, i) => (
              <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>

        {/* Case Title */}
        <h3 className="mt-3.5 font-display text-lg font-bold text-foreground leading-snug">
          {story.title}
        </h3>

        {/* Before vs After Outcome Pill Box */}
        <div className="mt-4 space-y-2 rounded-2xl bg-slate-50/80 border border-slate-200/70 p-3.5 text-xs">
          <div className="flex items-start gap-2">
            <span className="mt-0.5 shrink-0 rounded-full bg-red-100 px-1.5 py-0.5 text-[10px] font-bold text-red-700">
              Before
            </span>
            <p className="text-slate-600 leading-relaxed text-[11px]">{story.beforeCondition}</p>
          </div>
          <div className="border-t border-slate-200/60 pt-2 flex items-start gap-2">
            <span className="mt-0.5 shrink-0 rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-800">
              Outcome
            </span>
            <p className="text-slate-800 font-medium leading-relaxed text-[11px]">
              {story.afterOutcome}
            </p>
          </div>
        </div>

        {/* Patient Testimonial Quote */}
        <div className="mt-4 relative rounded-2xl bg-primary/[0.03] border border-primary/10 p-3.5">
          <Quote className="size-4 text-primary/30 mb-1" />
          <p className="italic text-xs text-slate-700 leading-relaxed">"{story.quote}"</p>
        </div>

        {/* Clinical Approach Note */}
        <div className="mt-3.5 flex items-start gap-2 text-[11px] text-muted-foreground">
          <Stethoscope size={14} className="mt-0.5 shrink-0 text-primary" />
          <span>
            <strong>Protocol:</strong> {story.clinicalApproach}
          </span>
        </div>

        {/* Collapsible Milestones */}
        {story.milestones && story.milestones.length > 0 && (
          <div className="mt-3 border-t border-slate-100 pt-3">
            <button
              type="button"
              onClick={() => setShowMilestones(!showMilestones)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline cursor-pointer"
            >
              <span>{showMilestones ? "Hide Recovery Timeline" : "View Recovery Timeline"}</span>
              <ChevronRight
                size={13}
                className={`transition-transform duration-200 ${showMilestones ? "rotate-90" : ""}`}
              />
            </button>

            {showMilestones && (
              <ul className="mt-2.5 space-y-1.5 border-l-2 border-primary/30 pl-3 text-[11px] text-slate-600 animate-in fade-in duration-200">
                {story.milestones.map((m: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <Check size={13} className="shrink-0 text-emerald-600 mt-0.5" />
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Card Footer Button */}
        <div className="mt-auto pt-5">
          <Button
            asChild
            className="h-10 w-full rounded-xl bg-accent text-xs font-bold text-white shadow-none hover:bg-accent/90"
          >
            <Link to="/appointments">
              Book Consultation <ArrowRight size={14} className="ml-1.5" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
}

function PostCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all hover:scale-[1.02] hover:border-primary/50 hover:shadow-lg">
      {post.image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute top-3 left-3">
            <span className="rounded-md border border-white/70 bg-white/95 px-2.5 py-1 text-[11px] font-bold text-primary shadow-xs">
              {post.category}
            </span>
          </div>
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        {!post.image && (
          <span className="inline-block w-fit rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700 mb-3">
            {post.category}
          </span>
        )}
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
          <span>{post.date}</span>
          {post.readTime && (
            <>
              <span>•</span>
              <span>{post.readTime}</span>
            </>
          )}
        </div>
        <h3 className="font-display text-lg font-bold leading-snug text-foreground group-hover:text-primary transition-colors">
          <Link to="/blog/$slug" params={{ slug: post.slug }}>
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.summary}</p>
        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline"
        >
          Read article{" "}
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}

function FaqList() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={faq.question} value={`faq-${index}`}>
          <AccordionTrigger className="text-left font-display font-bold text-foreground">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export function HomePage() {
  const featured = useMemo(() => {
    const list = featuredConditions
      .map((name) =>
        conditions.find((condition) => condition.name === name || condition.slug === name),
      )
      .filter((condition): condition is (typeof conditions)[number] => condition !== undefined);
    if (list.length < 8) {
      const remaining = conditions.filter((c) => !list.some((item) => item.slug === c.slug));
      return [...list, ...remaining].slice(0, 8);
    }
    return list;
  }, []);

  return (
    <SiteFrame>
      {/* Modern Hospital Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div
          className={`${wrap} grid min-h-[580px] items-center gap-12 py-14 lg:grid-cols-[1.1fr_.9fr] lg:py-20`}
        >
          {/* Hero Left Content */}
          <div className="relative z-10 max-w-2xl soft-enter">
            {/* Logo Brand Tag */}
            <div className="mb-6 inline-flex max-w-full flex-wrap items-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-semibold text-slate-800 shadow-xs">
              <span className="flex h-2.5 w-2.5 shrink-0 rounded-full bg-accent animate-pulse" />
              <span>Dr. Rajeev's · The Family Clinic</span>
              <span className="hidden sm:inline text-muted-foreground">·</span>
              <span className="hidden sm:inline text-accent font-bold">
                Complete Care for your Family
              </span>
            </div>

            <h1 className="font-display text-3xl font-extrabold leading-[1.15] text-foreground sm:text-5xl lg:text-6xl">
              Advanced Clinical Care For Your Entire Family
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Individualized homeopathic care for chronic and acute conditions, led by senior
              practitioners with 15+ years of trust. Consult at our OPD centers across Ranchi,
              Patna, Kolkata, and Delhi.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryLink to="/appointments">
                <CalendarDays className="size-4" />
                Book OPD Appointment
              </PrimaryLink>

              <Button
                asChild
                variant="outline"
                className="border-slate-300 bg-white hover:bg-slate-100 text-slate-800 font-semibold transition-colors"
              >
                <Link to="/about">
                  <Stethoscope className="size-4 text-primary" />
                  Clinical Methodology
                </Link>
              </Button>

              <Button asChild variant="ghost" className="text-accent font-bold hover:bg-accent/10">
                <a href={`tel:${urgentPhone.replaceAll(" ", "")}`}>
                  <Phone className="size-4" />
                  Urgent Helpline
                </a>
              </Button>
            </div>

            <div className="mt-8 border-t border-border pt-6">
              <ContactStrip />
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4 border-t border-border/80 pt-6">
              <div>
                <span className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-foreground">
                  4.9★
                </span>
                <span className="mt-1 block text-[11px] sm:text-xs font-medium text-muted-foreground">
                  3,500+ Reviews
                </span>
              </div>
              <div>
                <span className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-primary">
                  15+ Yrs
                </span>
                <span className="mt-1 block text-[11px] sm:text-xs font-medium text-muted-foreground">
                  Experience
                </span>
              </div>
              <div>
                <span className="font-display text-xl sm:text-2xl lg:text-3xl font-black text-accent">
                  4 OPDs
                </span>
                <span className="mt-1 block text-[11px] sm:text-xs font-medium text-muted-foreground">
                  4 Metro Cities
                </span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual: Framed Clinic Card with Doctor */}
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/15 via-accent/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-card p-3 shadow-2xl">
              <div className="relative overflow-hidden rounded-xl bg-slate-900">
                <img
                  src={doctorPortrait}
                  alt="Dr. Rajeev at The Family Clinic"
                  className="aspect-[4/3] w-full object-cover object-center"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <p className="font-display text-lg font-bold">Dr. Rajeev Kumar</p>
                    <p className="text-xs text-white/80">
                      B.H.M.S., M.D. (Homeopathy) · Chief Consultant
                    </p>
                  </div>
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold shadow-md">
                    OPD Active
                  </span>
                </div>
              </div>

              {/* Floating Verified Badge */}
              <div className="mt-3 flex flex-wrap items-center justify-between gap-1.5 px-2 py-1 text-xs">
                <span className="flex items-center gap-1.5 font-bold text-primary">
                  <ShieldCheck size={16} /> Certified Clinical Protocols
                </span>
                <span className="text-slate-500 font-medium">ABHI Homeo Hall Dispensary</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Care Directory */}
      <section className={section}>
        <div className={wrap}>
          <SectionHeading
            eyebrow="Specialties & Directory"
            title="Conditions & Care Directory"
            description="Explore our evidence-guided holistic treatment protocols for common acute and chronic disorders across every family age group."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((condition) => (
              <ConditionCard
                key={condition.slug}
                name={condition.name}
                slug={condition.slug}
                category={condition.category}
                image={condition.image}
                summary={condition.summary}
                tags={condition.tags}
              />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              asChild
              variant="outline"
              className="border-slate-300 bg-white text-slate-800 hover:bg-slate-100 font-bold transition-colors"
            >
              <Link to="/conditions">
                Explore All 30+ Conditions A–Z <ArrowRight className="size-4 ml-1.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hospital Clinical Pillars - Dark Theme */}
      <section className="border-y border-white/10 bg-[#071727] py-16 text-white sm:py-24">
        <div className={wrap}>
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="space-y-5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-xs">
                Clinical Philosophy
              </span>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-white">
                Hospital Care That Starts With Listening
              </h2>
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base lg:text-lg">
                Every patient's constitution and disease manifestation is unique. We provide
                comprehensive time to understand your pathology, medical history, and emotional
                well-being to formulate precise, root-cause homeopathic treatments.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  asChild
                  className="bg-accent text-white font-bold hover:bg-accent/90 shadow-md"
                >
                  <Link to="/appointments">
                    Book Consultation <ArrowRight className="size-4 ml-1.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/15"
                >
                  <Link to="/about">
                    <Stethoscope className="size-4 mr-1.5" />
                    Clinical Methodology
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right 2x2 Metric Grid */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-2xl border border-white/10 bg-[#0c1f36]/80 p-6 sm:p-7 backdrop-blur-sm transition-all hover:border-white/25 shadow-lg">
                <p className="font-display text-3xl sm:text-4xl font-black text-accent">15+</p>
                <p className="mt-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Years of Dedicated Practice
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0c1f36]/80 p-6 sm:p-7 backdrop-blur-sm transition-all hover:border-white/25 shadow-lg">
                <p className="font-display text-3xl sm:text-4xl font-black text-white">4</p>
                <p className="mt-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Active City OPD Centers
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0c1f36]/80 p-6 sm:p-7 backdrop-blur-sm transition-all hover:border-white/25 shadow-lg">
                <p className="font-display text-3xl sm:text-4xl font-black text-accent">100+</p>
                <p className="mt-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Free Community Medical Camps
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-[#0c1f36]/80 p-6 sm:p-7 backdrop-blur-sm transition-all hover:border-white/25 shadow-lg">
                <p className="font-display text-3xl sm:text-4xl font-black text-white">10,000+</p>
                <p className="mt-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Families Restored to Health
                </p>
              </div>
            </div>
          </div>

          {/* 4 Clinical Pillars beneath */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10 pt-12">
            {[
              {
                icon: HeartHandshake,
                title: "Personalized Medical Intake",
                text: "In-depth consultation covering symptom chronology, previous clinical reports, and family history.",
              },
              {
                icon: ShieldCheck,
                title: "Gentle, Non-Toxic Remedies",
                text: "Zero-side-effect potentized remedies designed to support the body's natural restorative balance.",
              },
              {
                icon: Stethoscope,
                title: "15+ Years Medical Experience",
                text: "Guided by senior clinicians with extensive experience managing chronic skin, respiratory, and pediatric disorders.",
              },
              {
                icon: Building2,
                title: "Four City Clinic Network",
                text: "Consult in-person at our modern clinics in Ranchi, Patna, Kolkata, and Delhi with on-site dispensary.",
              },
            ].map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-6 text-white backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <span className="grid size-12 place-items-center rounded-xl bg-accent/20 text-accent">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                    {pillar.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Patient Care Pathway & Doctors - Solid White Background */}
      <section className="border-y border-slate-200/80 bg-white py-16 sm:py-24">
        <div className={wrap}>
          <SectionHeading
            eyebrow="Care Protocol"
            title="A Structured 4-Step Care Journey"
            description="From initial case analysis to continuous recovery tracking, our clinical workflow ensures you are never alone."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                title: "Detailed Case Intake",
                text: "Share your medical records, symptom history, and current medicines with our clinical desk.",
              },
              {
                n: "02",
                title: "Doctor Clinical Review",
                text: "Dr. Rajeev or senior associates conduct a thorough in-person OPD consultation.",
              },
              {
                n: "03",
                title: "Tailored Remedy Regimen",
                text: "Receive personalized prescriptions and genuine medicines prepared by ABHI Homeo Hall.",
              },
              {
                n: "04",
                title: "Monitored Follow-Up",
                text: "Scheduled check-ins to monitor symptom reduction and adjust remedies as healing progresses.",
              },
            ].map((step) => (
              <article
                key={step.n}
                className="group relative rounded-xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs transition-colors hover:border-primary/50 hover:bg-white"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-black text-primary group-hover:text-accent transition-colors">
                    {step.n}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-primary/40 group-hover:bg-accent transition-colors" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>

          {/* 3 Consulting Doctors and Qualifications inside Care Protocol */}
          <div className="mt-16 border-t border-slate-200/80 pt-14">
            <div className="mb-10 text-center max-w-2xl mx-auto">
              <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                <Stethoscope className="size-3.5 text-accent" />
                Senior Medical Board
              </span>
              <h3 className="font-display text-2xl font-black text-slate-900 sm:text-3xl">
                Consulting Doctors Leading Your Care
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Experienced clinical homeopaths conducting comprehensive patient intake,
                constitutional prescription, and ongoing recovery monitoring.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: "Dr. Rajeev Kumar",
                  qualifications: "B.H.M.S., M.D. (Homeopathy)",
                  role: "Chief Medical Director & Senior Consultant",
                  specialty: "Chronic Disease Pathology & Constitutional Homeopathy",
                  experience: "15+ Years Clinical Practice",
                  image: doctorPortrait,
                  badge: "Medical Director",
                },
                {
                  name: "Dr. Ananya Sharma",
                  qualifications: "B.H.M.S., PGD (Pediatrics & Gynecology)",
                  role: "Senior Consultant – She & Child Care",
                  specialty: "Maternal Health, PCOD/PCOS & Pediatric Wellness",
                  experience: "12+ Years Clinical Practice",
                  image:
                    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&h=600&q=80",
                  badge: "Senior Consultant",
                },
                {
                  name: "Dr. Alok Verma",
                  qualifications: "B.H.M.S., M.D. (Hom.), Reg. NIH",
                  role: "Senior Consultant – Chronic Pathology",
                  specialty: "Respiratory Allergies, Dermatological Care & Dispensary",
                  experience: "14+ Years Clinical Practice",
                  image:
                    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=500&h=600&q=80",
                  badge: "Senior Consultant",
                },
              ].map((dr) => (
                <article
                  key={dr.name}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 shadow-sm transition-all hover:border-primary/50 hover:bg-white hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <img
                      src={dr.image}
                      alt={`${dr.name} - ${dr.qualifications}`}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <span className="rounded-md border border-white/60 bg-white/90 backdrop-blur-xs px-2.5 py-1 text-[11px] font-bold text-primary shadow-xs">
                        {dr.badge}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h4 className="font-display text-lg font-bold text-slate-900 leading-snug">
                      {dr.name}
                    </h4>
                    <div className="mt-1.5 flex items-center gap-1.5 flex-wrap">
                      <span className="inline-block rounded-md border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary">
                        {dr.qualifications}
                      </span>
                    </div>
                    <p className="mt-2.5 text-xs font-semibold text-slate-800">{dr.role}</p>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">{dr.specialty}</p>
                    <div className="mt-auto pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600 font-medium">
                      <span className="flex items-center gap-1 text-accent font-semibold">
                        <Award size={13} /> {dr.experience}
                      </span>
                      <span className="text-[11px] text-slate-500">
                        Ranchi · Patna · Kolkata · Delhi
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Spotlights: She & Child Care + Autism Guidance */}
      <section className="border-y border-border bg-gradient-to-r from-primary-dark via-primary-dark to-slate-900 py-16 text-primary-foreground sm:py-20">
        <div className={`${wrap} grid gap-10 lg:grid-cols-2 items-center`}>
          <div className="space-y-5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Specialized Programs
            </span>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              Dedicated She &amp; Child Care and Autism Support
            </h2>
            <p className="text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
              Dr. Rajeev's clinic has pioneered specialized holistic clinical protocols tailored for
              women's reproductive health, pediatric allergies, and developmental support for
              children with autism spectrum conditions.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                asChild
                className="bg-accent text-accent-foreground font-bold hover:bg-accent/90 shadow-md"
              >
                <Link to="/she-child-care">
                  She &amp; Child Care Details <ArrowRight className="size-4 ml-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary-foreground/30 bg-white/10 text-white hover:bg-white/20"
              >
                <Link to="/autism-book">
                  <BookOpen className="size-4 mr-1.5" />
                  Autism Care Book
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <p className="font-display text-4xl font-black text-accent">98%</p>
              <p className="mt-2 text-xs font-semibold text-primary-foreground/80 uppercase tracking-wider">
                PCOD &amp; Hormonal Care
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <p className="font-display text-4xl font-black text-white">5,000+</p>
              <p className="mt-2 text-xs font-semibold text-primary-foreground/80 uppercase tracking-wider">
                Pediatric Cases Treated
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <p className="font-display text-4xl font-black text-accent">100%</p>
              <p className="mt-2 text-xs font-semibold text-primary-foreground/80 uppercase tracking-wider">
                Safe &amp; Non-Hormonal
              </p>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <p className="font-display text-4xl font-black text-white">Zero</p>
              <p className="mt-2 text-xs font-semibold text-primary-foreground/80 uppercase tracking-wider">
                Adverse Drug Side-Effects
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OPD Clinics Network - Solid White Background with Hover Scale Cards */}
      <section className="border-y border-slate-200/80 bg-white py-16 sm:py-24">
        <div className={wrap}>
          <SectionHeading
            eyebrow="Our Clinic Network"
            title="Four Modern OPD Centers"
            description="Visit Dr. Rajeev's clinics across Ranchi, Patna, Kolkata, and Delhi for in-person consultation, physical examination, and dispensary pickup."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clinicContacts.map((clinic) => (
              <ClinicCard key={clinic.city} clinic={clinic} />
            ))}
          </div>
        </div>
      </section>

      {/* Verified Patient Feedback - Auto Sliding Marquee on Blue Background */}
      <section className="border-y border-white/10 bg-gradient-to-b from-[#092B52] via-[#0E427E] to-[#082445] py-16 sm:py-24 overflow-hidden text-white">
        <div className={wrap}>
          <div className="mb-10 max-w-2xl mx-auto text-center">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 border border-white/30 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-xs">
              <Sparkles className="size-3.5 text-amber-300" />
              Patient Voices
            </span>
            <h2 className="font-display text-3xl font-black text-white sm:text-4xl">
              Google Reviews From Across India
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
              Genuine recovery experiences and 5-star ratings from patients treated across our
              Ranchi, Patna, Kolkata, and Delhi clinics.
            </p>
          </div>

          {/* Google Rating Overview Badge */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-5 py-2.5 shadow-md text-white">
              <GoogleLogoIcon className="size-5" />
              <span className="font-display text-sm font-bold text-white">
                Google Rating <span className="text-yellow-400 font-black">4.9 / 5.0</span>
              </span>
              <div className="flex gap-0.5 text-yellow-400">
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
                <Star size={15} fill="currentColor" />
              </div>
              <span className="text-xs text-slate-200 font-medium">
                (3,500+ Verified Patient Reviews)
              </span>
            </div>
          </div>
        </div>

        {/* Continuous Auto Sliding Track from Right to Left */}
        <div className="w-full overflow-hidden py-3">
          <div className="animate-marquee-left flex gap-6">
            {/* Set 1 */}
            {reviews.map((review, i) => (
              <div
                key={`rev-1-${review.name}-${i}`}
                className="w-[280px] xs:w-[330px] sm:w-[380px] shrink-0"
              >
                <ReviewCard review={review} />
              </div>
            ))}
            {/* Set 2 for seamless infinite looping */}
            {reviews.map((review, i) => (
              <div
                key={`rev-2-${review.name}-${i}`}
                className="w-[280px] xs:w-[330px] sm:w-[380px] shrink-0"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3 text-sm font-bold text-[#0E427E] shadow-lg hover:bg-slate-100 hover:shadow-xl transition-all"
            href="https://www.google.com/search?q=Dr.+Rajeev%27s+Homeopathy+Clinic+reviews"
            target="_blank"
            rel="noreferrer"
          >
            <GoogleLogoIcon className="size-4" />
            <span>Read All 3,500+ Reviews on Google</span>
            <ExternalLink size={14} className="opacity-70" />
          </a>
        </div>
      </section>

      {/* Educational Insights Section - Directly after Patient Voices */}
      <section className="border-b border-slate-200/80 bg-white py-16 sm:py-24">
        <div className={wrap}>
          {/* Centered Heading */}
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
              <Sparkles className="size-3.5 text-accent" />
              Clinical Knowledge &amp; Guidance
            </span>
            <h2 className="font-display text-3xl font-black text-slate-900 sm:text-4xl lg:text-5xl">
              Educational Insights
            </h2>
            <p className="mt-3.5 text-sm leading-relaxed text-slate-600 sm:text-base">
              Explore evidence-guided articles, homeopathic health perspectives, and practical
              wellness advice from Dr. Rajeev's clinical desk.
            </p>
          </div>

          {/* Three Blog Cards with Images */}
          <div className="grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:scale-[1.02] hover:border-primary/50 hover:shadow-xl"
              >
                {/* Blog Image with Hover Zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="rounded-md border border-white/70 bg-white/95 px-2.5 py-1 text-[11px] font-bold text-primary shadow-xs">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-2">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-primary transition-colors leading-snug">
                    <Link to="/blog/$slug" params={{ slug: post.slug }}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 line-clamp-3 leading-relaxed flex-1">
                    {post.summary}
                  </p>
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <Link
                      to="/blog/$slug"
                      params={{ slug: post.slug }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-accent transition-colors"
                    >
                      Read Clinical Article{" "}
                      <ArrowRight
                        size={13}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Centered Button Linking to Blog Page */}
          <div className="mt-12 text-center">
            <Button
              asChild
              className="h-11 px-7 bg-primary text-white font-bold hover:bg-primary/90 rounded-xl transition-colors shadow-none text-xs sm:text-sm"
            >
              <Link to="/blog">
                Explore All Clinical Insights &amp; Articles{" "}
                <ArrowRight className="size-4 ml-1.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Interactive 1-Step Appointment Booking Form */}
      <section className={section}>
        <div className={wrap}>
          <SectionHeading
            align="center"
            eyebrow="Direct OPD Intake"
            title="Request An Appointment"
            description="Fill out the confidential consultation form. Our case coordinator will reach out to schedule your preferred clinic OPD slot."
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.25fr_.75fr] items-start">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-md sm:p-10">
              <AppointmentForm compact />
            </div>

            <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <span className="grid size-12 place-items-center rounded-xl bg-primary text-white shadow-xs">
                  <HeartHandshake size={24} />
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
                  Dedicated Case Coordinator
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Unsure which consultation mode or clinic is right for your case? Our patient desk
                  is here to guide you through preparation, case records, and timely appointment
                  booking.
                </p>
              </div>

              <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4 text-xs">
                <p className="font-bold text-foreground">How Case Coordination Works:</p>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                    <span>Pre-consultation case history &amp; medical reports review</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                    <span>Assistance choosing the nearest clinic OPD slot</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                    <span>Priority queue token with direct doctor time</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-primary" />
                    <span>ABHI Homeo Hall genuine medicine dispatch guidance</span>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-white p-4 shadow-xs">
                <p className="text-xs font-semibold uppercase text-muted-foreground">
                  Urgent OPD Helpline
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={`tel:${urgentPhone.replaceAll(" ", "")}`}
                    className="inline-flex items-center gap-2 font-display text-xl font-bold text-accent hover:underline"
                  >
                    <Phone size={18} />
                    {urgentPhone}
                  </a>
                  <a
                    href={`https://wa.me/${whatsappPhone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700 hover:bg-emerald-100 transition-colors"
                  >
                    <MessageCircle size={14} /> WhatsApp Desk
                  </a>
                </div>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  Immediate triage for acute flare-ups and priority routing.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-white p-4 shadow-xs">
                <p className="text-xs font-semibold uppercase text-muted-foreground">
                  Operating Timings
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-bold text-foreground">
                  <Clock3 size={15} className="text-primary" />
                  Mon–Sun · 10:00 AM – 8:00 PM
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground">
                  All 4 centers open 7 days a week.
                </p>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs font-medium text-primary flex items-center gap-2">
                <ShieldCheck size={16} className="shrink-0 text-primary" />
                <span>100% Confidential Patient Care &amp; Direct Physician Triage</span>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}

export function AboutPage() {
  return (
    <SiteFrame>
      {/* Modern Hospital Brand Hero for About Page */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-14 sm:py-20 lg:py-24 border-b border-slate-200">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

        <div
          className={`${wrap} relative z-10 grid gap-12 lg:grid-cols-[1.15fr_.85fr] items-center`}
        >
          {/* Left Content Column */}
          <div className="max-w-2xl">
            {/* Animated Brand Pill */}
            <div className="inline-flex max-w-full flex-wrap items-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-primary/20 bg-primary/5 px-3 sm:px-4 py-1.5 text-xs font-bold text-primary shadow-2xs">
              <span className="flex size-2 shrink-0 rounded-full bg-accent animate-pulse" />
              <span>ESTD. 2003</span>
              <span className="hidden xs:inline text-muted-foreground/60">·</span>
              <span className="hidden xs:inline">RANCHI &amp; DELHI</span>
              <span className="text-muted-foreground/60">·</span>
              <span className="text-accent font-extrabold">15+ YEARS HEALING</span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.12]">
              About <span className="text-primary">ABHI HOMEO HALL</span>{" "}
              <br className="hidden sm:inline" />
              &amp; <span className="text-accent">Dr. Rajeev Kumar</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              A one and a half decade legacy of non-toxic classical homeopathic healing, rooted in
              compassion, modern diagnostics, and deep-seated family values.
            </p>

            {/* Core Feature Badges */}
            <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3 text-xs font-bold text-slate-700">
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 shadow-2xs">
                <ShieldCheck className="size-4 text-primary" /> Classical Hahnemannian Protocols
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 shadow-2xs">
                <HeartPulse className="size-4 text-accent" /> ₹100 Affordable OPD Pledge
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 shadow-2xs">
                <Building2 className="size-4 text-primary" /> In-House Pathology &amp; Dispensary
              </span>
            </div>

            {/* Quick Action CTA Strip */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryLink to="/appointments">
                <CalendarDays className="size-4" />
                Book In-Clinic OPD (₹100)
              </PrimaryLink>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 bg-white text-slate-800 hover:bg-slate-100 font-bold transition-colors"
              >
                <a href={`tel:${urgentPhone.replaceAll(" ", "")}`}>
                  <Phone className="size-4 text-accent mr-1.5" />
                  Urgent Helpline
                </a>
              </Button>
            </div>
          </div>

          {/* Right Visual Composite Card */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            {/* Decorative Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/15 to-accent/15 blur-xl -z-10" />

            {/* Main Visual Card */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-2xl bg-slate-900">
                <img
                  src={doctorPortrait}
                  alt="Dr. Rajeev Kumar - Chief Homeopathic Consultant at ABHI Homeo Hall"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold shadow-md">
                    Chief Consultant &amp; Founder
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold">Dr. Rajeev Kumar</h3>
                  <p className="text-xs text-white/85">B.H.M.S. (KNH Bhagalpur) · M.D. (Hom.)</p>
                </div>
              </div>

              {/* Bottom Quick Trust Grid */}
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5">
                  <p className="font-bold text-foreground">Main Road, Ranchi</p>
                  <p className="text-[11px] text-muted-foreground">1,200 sq. ft. Standalone OPD</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-slate-50 p-2.5">
                  <p className="font-bold text-accent">Free Thursday OPD</p>
                  <p className="text-[11px] text-muted-foreground">Sai Baba Seva for Needy</p>
                </div>
              </div>
            </div>

            {/* Floating Top Rating Card */}
            <div className="absolute top-2 right-2 sm:-top-4 sm:-right-4 rounded-2xl border border-slate-200 bg-white/95 p-3 sm:p-3.5 shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="flex text-amber-500">
                  <Star size={16} fill="currentColor" />
                </span>
                <span className="font-display text-sm font-bold text-foreground">
                  10,000+ Families
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground mt-0.5">
                Restored Across Ranchi &amp; Delhi
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Key Pillars Metric Strip */}
      <section className="border-b border-slate-200 bg-white py-10 shadow-2xs">
        <div className={wrap}>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 sm:p-6 text-center transition-all hover:bg-white hover:shadow-md">
              <p className="font-display text-2xl sm:text-4xl font-extrabold text-primary">
                15+ Years
              </p>
              <p className="mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Trusted Practice in Ranchi &amp; Delhi
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 sm:p-6 text-center transition-all hover:bg-white hover:shadow-md">
              <p className="font-display text-2xl sm:text-4xl font-extrabold text-accent">
                ₹100 Only
              </p>
              <p className="mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Affordable Consultation For All
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 sm:p-6 text-center transition-all hover:bg-white hover:shadow-md">
              <p className="font-display text-2xl sm:text-4xl font-extrabold text-primary">
                1,200+ Sq Ft
              </p>
              <p className="mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Clinic, In-House Pathology &amp; Pharmacy
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 sm:p-6 text-center transition-all hover:bg-white hover:shadow-md">
              <p className="font-display text-2xl sm:text-4xl font-extrabold text-accent">
                10,000+
              </p>
              <p className="mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Restored Families &amp; Free Thursday OPD
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About ABHI HOMEO HALL Section */}
      <section className={section}>
        <div className={`${wrap} grid gap-12 lg:grid-cols-[1.1fr_.9fr] items-center`}>
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
              <Building2 size={15} /> Clinical Institution
            </span>
            <h2 className="font-display text-3xl font-bold sm:text-4xl text-foreground leading-tight">
              About ABHI HOMEO HALL
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              <strong>ABHI HOMEO HALL</strong> is a one and half decade old renowned clinic that
              offers the best quality, non-toxic and highly effective treatment in Ranchi and Delhi.
              Our treatment is based on the rich and traditional classical homeopathic knowledge and
              usage of advanced technology.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              We have a team of dedicated homeopaths who work to provide efficient service that
              brings healing power to the patients. Our aim is to spread the homoeopathic treatment
              to numerous patients suffering from a broad range of diseases and to achieve success
              in patient care by using classical homeopathy under the brand{" "}
              <strong>ABHI HOMEO HALL</strong>.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              We offer excellent patient care, best service and strive to improve every patient’s
              health vigorously. We also provide the best medical treatment by our experienced
              doctors which are based on modern scientific research.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs font-bold text-foreground">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span>100% Non-Toxic &amp; Gentle Healing</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs font-bold text-foreground">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span>Genuine German-Made Potencies</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs font-bold text-foreground">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span>Own In-House Pathology Center</span>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-xs font-bold text-foreground">
                <CheckCircle2 size={16} className="text-primary shrink-0" />
                <span>Modern Scientific Research Base</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&h=600&q=80"
                  alt="ABHI Homeo Hall Clinical Consultation & Dispensary"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-bold">
                    Main Road, Ranchi &amp; Delhi
                  </span>
                  <h3 className="mt-1 font-display text-lg font-bold">
                    ABHI Homoeo Healthcare &amp; Dispensary
                  </h3>
                  <p className="text-xs text-white/80">
                    1,200 sq. ft. Standalone Clinical Center with Pathology
                  </p>
                </div>
              </div>
              <div className="p-6 sm:p-8 space-y-4">
                <h4 className="font-display text-base font-bold text-foreground">
                  Our Patient Care Pledge
                </h4>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  "We strive to improve every patient’s vitality vigorously. We provide the best
                  medical treatment by our experienced doctors, combining classical Hahnemannian
                  case review with modern scientific research."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Dr. Rajeev Kumar Section */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <div className={wrap}>
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] items-start">
            {/* Left Doctor Portrait & Quote */}
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-xl">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-900">
                  <img
                    src={doctorPortrait}
                    alt="Dr. Rajeev Kumar - Chief Homeopathic Consultant"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold">
                      Chief Medical Director
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-bold">Dr. Rajeev Kumar</h3>
                    <p className="text-xs text-white/85">
                      B.H.M.S. (KNH Bhagalpur, 2004) · M.D. (Hom.)
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary">
                    <GraduationCap size={16} />
                    <span>Academic &amp; Clinical Credentials</span>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    Bachelor of Homoeopathic Medicine and Surgery (B.H.M.S.), KNH Medical College
                    &amp; Hospital, Bhagalpur (2004). Over 15+ years of constitutional clinical
                    mastery.
                  </p>
                </div>
              </div>

              {/* Personal Origin Quote Card */}
              <div className="relative rounded-2xl border border-primary/20 bg-primary/5 p-6 shadow-xs">
                <Quote size={28} className="text-primary/40 mb-2" />
                <p className="text-sm italic font-medium leading-relaxed text-slate-800">
                  "My father, Late Kamleshwar Prasad was a social worker and a village mukhiya. Our
                  values were our assets. There was little in the name of savings. I came to Ranchi
                  with just ₹5,000. Rest is history."
                </p>
                <p className="mt-3 text-xs font-bold text-primary uppercase tracking-wider">
                  — Dr. Rajeev Kumar
                </p>
              </div>
            </div>

            {/* Right Biography Content */}
            <div className="space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3.5 py-1 text-xs font-bold text-accent">
                  <HeartPulse size={15} /> The Visionary &amp; Healer
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-foreground leading-tight">
                  About Dr. Rajeev Kumar
                </h2>
                <p className="mt-2 text-base font-semibold text-primary">
                  The Reputed Homeopath of Ranchi Who Turned Restricted Dreams into Living Reality
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                <p>
                  He is not the one who believes in building castles in the air. His dreams were
                  restricted, but with his tremendous courage of conviction coupled with an
                  innovative streak, he has translated those restricted dreams into reality. Meet
                  Dr. Rajeev Kumar, the reputed Homeopath of Ranchi, who needs no introduction for
                  the city dwellers.
                </p>
                <p>
                  Born in a middle-class family in Gopalganj, Bihar, to a social worker father, Dr.
                  Rajeev Kumar is one such persona who has scripted a success story that is worthy
                  of emulating. He stands standalone in the crowd of commercialized healthcare as a
                  doctor created through the sheer dint of arduous labor.
                </p>
                <p>
                  In pursuit of success, Dr. Kumar started off with Abhi Homoeo Hall in 2003 as a
                  homeopathy medicines distributor in a one-room rented house. However, the yearning
                  to become a doctor and serve patients kept bugging him. Soon he left the medicine
                  business to his uncle, Dr. Amreshwar Prasad (also a homeopath), and traveled to
                  Bhagalpur to study homeopathic medicine at KNH Medical College.
                </p>
                <p>
                  Along with studies, the medico constantly shuttled between Bhagalpur and Ranchi to
                  manage the business. Once it got going in Ranchi, his brothers came forward and
                  helped immensely in managing business affairs. Initially, destiny was unfavorable:
                  banks were apprehensive and loan applications fell upon deaf ears. Yet with
                  steadfast perseverance, in 2012 after his degree he finally settled down to take
                  things into his control, securing bank backing and becoming the largest seller and
                  distributor of authentic German-made medicines in the region.
                </p>
                <p>
                  Dr. Kumar expanded Abhi Homoeo Hall at the Main Road location to 1,200 square feet
                  to accommodate <strong>Abhi Homoeo Healthcare</strong> — a one-of-its-kind clinic
                  armed with its own pathology center and pharmacy. The swanky interior and
                  exteriors coupled with quality, dependable service has won the trust of patients
                  who throng to the center from far and wide.
                </p>
              </div>

              {/* Consultation Fee & Social Ethos Highlight */}
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      The Social Healthcare Promise
                    </span>
                    <h3 className="font-display text-2xl font-bold text-accent">
                      A Meager ₹100 Consultation Fee
                    </h3>
                  </div>
                  <span className="rounded-full bg-accent/10 px-3.5 py-1.5 text-xs font-bold text-accent">
                    Accessible to All
                  </span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  So what is the fee one may wonder? "It’s a meager ₹100," he utters gently,
                  contented and happy for keeping his treatment affordable for all sections of
                  society:
                </p>
                <blockquote className="mt-3 border-l-4 border-primary pl-4 text-sm italic text-foreground">
                  "I could have gone for an MBBS. But I chose homeopathy. Unlike allopath where a
                  doctor has to specialize in a particular line of medicine, in homeopathy a doctor
                  is the master of all diseases. For me, Homeopathy is synonymous with social work.
                  You provide succor to patients suffering from all kinds of disease and still
                  charge nothing compared to allopathic doctors."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philanthropy, Community Awareness & Thursday Seva Section */}
      <section className={section}>
        <div className={wrap}>
          <SectionHeading
            align="center"
            eyebrow="Generational Philanthropy"
            title="Service to Humanity Is in Our Blood"
            description="Inherited from ancestors who donated land for post-independence healthcare, carried forward today through selfless community service."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-primary/50 transition-colors">
              <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <HandHeart size={24} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                Sai Baba Seva: Free Thursday OPD
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A devoted follower of Sai Baba, Dr. Rajeev sees patients completely for free every
                Thursday. He holds weekly free health camps and medicine distribution at temple
                sites across Ranchi. For the poor, he condones fees and medicine prices entirely.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-primary/50 transition-colors">
              <span className="grid size-12 place-items-center rounded-xl bg-accent/10 text-accent">
                <Users size={24} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                Community Awareness Drives
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Dr. Rajeev and like-minded advocates run awareness drives across Ranchi's rural and
                urban habitats, explaining how homeopathy eliminates the root of disease safely
                without surgery or toxic side-effects.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-xs hover:border-primary/50 transition-colors">
              <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <Award size={24} />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                Ancestral Land Gift Heritage
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Philanthropy and service to the nation is in the family genes. In the
                post-independence era, Dr. Rajeev's grandfather gifted ancestral land to the Bihar
                Government to establish a homeopathy hospital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Foundation & The 30-Bed Hospital Vision */}
      <section className="border-t border-slate-200 bg-slate-900 py-16 sm:py-24 text-white">
        <div className={wrap}>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
                Family &amp; The Future
              </span>
              <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl leading-tight text-white">
                Strength Built on Family &amp; Conviction
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Born in a family of three sisters and two brothers, Dr. Rajeev still believes that
                his joint family and close-knit circle has been his potion of growth:
              </p>
              <blockquote className="border-l-4 border-accent pl-4 text-base italic text-slate-200">
                "If you don’t have a strong family, you cannot grow. In my initial days it was my
                cousins and uncles who helped me. My medicine hall and clinic are named on the
                initials of my two cousins."
              </blockquote>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Dr. Rajeev is joined in life and clinical vision by his wife,{" "}
                <strong>Dr. Mridula Kumari (B.H.M.S.)</strong>. Together, they are working towards
                establishing Eastern Zone’s first private 30-bed homeopathy hospital.
              </p>
              <p className="text-sm text-slate-400">
                His elder son, <strong>Kushagra Kamlesh</strong>, emulates him with the stethoscope,
                exploring the wonder of remedies alongside his younger son <strong>Kaustubh</strong>
                .
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10 backdrop-blur-md shadow-2xl space-y-6">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-2xl bg-accent text-white shadow-md">
                  <Sparkles size={24} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">The Success Mantra</h3>
                  <p className="text-xs text-slate-400">Dr. Rajeev Kumar's Life Philosophy</p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <p className="font-display text-xl sm:text-2xl font-bold leading-snug text-white italic">
                  "Never falter with challenges. They only make you stronger. Take them head on and
                  success will kiss your feet."
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-white/10 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <span className="flex size-2 rounded-full bg-accent" />
                  <span>Named after family: ABHI represents the initials of beloved cousins</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex size-2 rounded-full bg-accent" />
                  <span>30-Bed Dedicated Homeopathic Hospital envisioned for Eastern India</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex size-2 rounded-full bg-accent" />
                  <span>
                    Regional chain of Abhi Homoeo Family Clinics across Eastern &amp; Northern India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Milestone Journey */}
      <section className={section}>
        <div className={wrap}>
          <SectionHeading
            align="center"
            eyebrow="Milestones"
            title="The Journey of Perseverance &amp; Growth"
            description="From a single rented room in 2003 with ₹5,000 to an esteemed multi-city clinical institution."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-shadow">
              <span className="font-display text-3xl font-black text-primary">2003</span>
              <h3 className="mt-2 font-display text-base font-bold text-foreground">
                The ₹5,000 Beginning
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Arrived in Ranchi from Gopalganj. Started Abhi Homoeo Hall as a medicine distributor
                in a one-room rented space.
              </p>
            </div>

            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-shadow">
              <span className="font-display text-3xl font-black text-accent">2004</span>
              <h3 className="mt-2 font-display text-base font-bold text-foreground">BHMS Degree</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Graduated from KNH College, Bhagalpur. Overcame financial and bank loan hurdles
                through sheer grit and family support.
              </p>
            </div>

            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-shadow">
              <span className="font-display text-3xl font-black text-primary">2012</span>
              <h3 className="mt-2 font-display text-base font-bold text-foreground">
                1,200 Sq. Ft. Facility
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Inaugurated Abhi Homoeo Healthcare with pathology and pharmacy, becoming the
                region's largest German medicine distributor.
              </p>
            </div>

            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-shadow">
              <span className="font-display text-3xl font-black text-accent">Today</span>
              <h3 className="mt-2 font-display text-base font-bold text-foreground">
                4 City OPDs &amp; Hospital
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Serving 10,000+ families across Ranchi, Patna, Kolkata, and Delhi with ₹100 OPD and
                a 30-bed hospital underway.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <PrimaryLink to="/appointments">
              <CalendarDays className="size-4" />
              Schedule In-Clinic Consultation (₹100 OPD)
            </PrimaryLink>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}

export function ConditionsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [letter, setLetter] = useState("All");

  const availableLetters = useMemo(() => {
    const set = new Set<string>();
    conditions.forEach((c) => {
      set.add(c.name.charAt(0).toUpperCase());
    });
    return set;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return conditions.filter((condition) => {
      const matchesQuery =
        q === "" ||
        condition.name.toLowerCase().includes(q) ||
        (condition.summary && condition.summary.toLowerCase().includes(q)) ||
        (condition.shortSummary && condition.shortSummary.toLowerCase().includes(q)) ||
        condition.category.toLowerCase().includes(q) ||
        (condition.tags && condition.tags.some((t) => t.toLowerCase().includes(q)));
      const matchesCategory = category === "All" || condition.category === category;
      const matchesLetter = letter === "All" || condition.name.toUpperCase().startsWith(letter);
      return matchesQuery && matchesCategory && matchesLetter;
    });
  }, [query, category, letter]);

  const departmentCards = [
    {
      title: "She & Child Care",
      desc: "Autism support, recurrent tonsils, adenoids & childhood allergies",
      categoryName: "Child care",
      count: conditions.filter((c) => c.category === "Child care").length,
      icon: HeartPulse,
      badge: "Pediatric Clinic",
    },
    {
      title: "Dermatology & Skin",
      desc: "Chronic eczema, psoriasis, vitiligo, warts & non-steroidal healing",
      categoryName: "Skin",
      count: conditions.filter((c) => c.category === "Skin").length,
      icon: Sparkles,
      badge: "Non-Steroid",
    },
    {
      title: "Pulmonology & Allergy",
      desc: "Bronchial asthma, allergic rhinitis, sinusitis & lung desensitization",
      categoryName: "Breathing",
      count: conditions.filter((c) => c.category === "Breathing").length,
      icon: Activity,
      badge: "Inhaler Tapering",
    },
    {
      title: "Women's & Hormonal Health",
      desc: "PCOD/PCOS, thyroid metabolism, endometriosis & natural cycles",
      categoryName: "Women's health",
      count: conditions.filter(
        (c) => c.category === "Women's health" || c.category === "Hormonal health",
      ).length,
      icon: Dna,
      badge: "Hormone Harmony",
    },
    {
      title: "Joints & Rheumatology",
      desc: "Knee osteoarthritis, cervical spondylosis & cartilage nourishment",
      categoryName: "Joint health",
      count: conditions.filter((c) => c.category === "Joint health").length,
      icon: ShieldCheck,
      badge: "Mobility Relief",
    },
    {
      title: "Hair & Scalp Health",
      desc: "Alopecia areata regrowth, telogen hair fall & seborrheic dandruff",
      categoryName: "Hair",
      count: conditions.filter((c) => c.category === "Hair").length,
      icon: Leaf,
      badge: "Follicular Care",
    },
  ];

  return (
    <SiteFrame>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-slate-50 via-white to-white py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className={`${wrap} relative`}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm">
              <span className="size-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
              <span>Clinical Directory</span>
              <span className="text-muted-foreground/60">·</span>
              <span>30+ Conditions</span>
              <span className="hidden sm:inline text-muted-foreground/60">·</span>
              <span className="hidden sm:inline">Root-Cause Homeopathy</span>
            </div>
            <h1 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl lg:leading-[1.15]">
              Conditions &amp; Specialized Care Directory A–Z
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore evidence-informed homeopathic protocols, symptom patterns, and root-cause
              constitutional care developed over 15+ years across our Ranchi, Patna, Kolkata, and
              Delhi clinics.
            </p>

            {/* 4 Feature Badges Ribbon */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                <Leaf size={14} className="text-emerald-600" />
                <span>100% Non-Steroidal</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                <HeartHandshake size={14} className="text-primary" />
                <span>Safe for All Ages</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                <Zap size={14} className="text-amber-500" />
                <span>Constitutional Similimum</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                <Building2 size={14} className="text-accent" />
                <span>₹100 OPD Consultation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Clinical Specialty Departments Quick Strip */}
      <section className="border-b border-border bg-slate-50/70 py-12 sm:py-16">
        <div className={wrap}>
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm">
                <Building2 size={13} className="text-primary" />
                Specialty OPD Desks
              </div>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground">
                Explore by Clinical Department
              </h2>
            </div>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Click any department below to jump directly to its specialized treatment protocols.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departmentCards.map((dept) => {
              const Icon = dept.icon;
              const isSelected = category === dept.categoryName;
              return (
                <button
                  key={dept.title}
                  type="button"
                  onClick={() => {
                    setCategory(isSelected ? "All" : dept.categoryName);
                    setLetter("All");
                  }}
                  className={`group flex flex-col justify-between rounded-2xl border p-5 text-left transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "border-primary bg-primary/[0.04] shadow-md ring-2 ring-primary/20"
                      : "border-slate-200 bg-white shadow-xs hover:border-primary/50 hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`grid size-10 place-items-center rounded-xl transition-colors ${
                          isSelected
                            ? "bg-primary text-white"
                            : "bg-slate-100 text-slate-700 group-hover:bg-primary/10 group-hover:text-primary"
                        }`}
                      >
                        <Icon size={20} />
                      </span>
                      <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[10px] font-bold text-slate-600">
                        {dept.badge}
                      </span>
                    </div>
                    <h3 className="mt-4 font-display text-base font-bold text-foreground group-hover:text-primary transition-colors">
                      {dept.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {dept.desc}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-bold text-primary">
                    <span>{dept.count} Documented Conditions</span>
                    <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Browse <ArrowRight size={12} />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Search, Filter & Directory Grid */}
      <section className={section}>
        <div className={wrap}>
          {/* Search, Active Stats, and Clear */}
          <div className="rounded-3xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              {/* Search Box */}
              <div className="relative flex-1 max-w-lg">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search condition (e.g. Eczema, PCOD, Asthma, Kidney)..."
                  className="pl-10 pr-9 h-12 rounded-xl bg-slate-50/60 border-slate-200 text-sm focus:bg-white"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    aria-label="Clear search"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Status and Active Filter Chips */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">
                  Showing <strong>{filtered.length}</strong> of {conditions.length} conditions
                </span>

                {(category !== "All" || letter !== "All" || query !== "") && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setQuery("");
                      setCategory("All");
                      setLetter("All");
                    }}
                    className="h-9 rounded-xl border-slate-200 text-xs font-bold text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    <X size={13} className="mr-1" /> Reset All Filters
                  </Button>
                )}
              </div>
            </div>

            {/* Category Filter Pills Bar */}
            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4">
              <span className="text-xs font-bold text-muted-foreground mr-1">Department:</span>
              {conditionCategories.map((item) => {
                const count =
                  item === "All"
                    ? conditions.length
                    : conditions.filter((c) => c.category === item).length;
                const isSelected = category === item;
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setCategory(item)}
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-primary text-white shadow-xs"
                        : "border border-slate-200 bg-slate-50/50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span>{item}</span>
                    <span
                      className={`rounded-full px-1.5 py-0.2 text-[10px] ${
                        isSelected ? "bg-white/20 text-white" : "bg-slate-200/80 text-slate-600"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Alphabetical A-Z Bar */}
            <div className="mt-4 flex flex-wrap items-center gap-1 border-t border-slate-100 pt-4">
              <span className="text-xs font-bold text-muted-foreground mr-2">Alphabetical:</span>
              <button
                type="button"
                onClick={() => setLetter("All")}
                className={`h-8 rounded-lg px-2.5 text-xs font-bold transition-colors cursor-pointer ${
                  letter === "All" ? "bg-accent text-white" : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                All
              </button>
              {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((l) => {
                const isAvailable = availableLetters.has(l);
                const isSelected = letter === l;
                return (
                  <button
                    key={l}
                    type="button"
                    disabled={!isAvailable}
                    onClick={() => setLetter(l)}
                    className={`size-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-accent text-white shadow-xs"
                        : isAvailable
                          ? "text-slate-700 hover:bg-slate-100 hover:text-foreground"
                          : "text-slate-300 opacity-40 cursor-not-allowed"
                    }`}
                  >
                    {l}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Condition Cards Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <ConditionCard
                key={item.slug}
                name={item.name}
                slug={item.slug}
                category={item.category}
                image={item.image}
                summary={item.summary}
                tags={item.tags}
              />
            ))}
          </div>

          {/* Empty Search State */}
          {filtered.length === 0 && (
            <div className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
              <Search size={40} className="mx-auto text-slate-400" />
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                No matching conditions found
              </h3>
              <p className="mt-1 text-xs text-muted-foreground max-w-md mx-auto">
                We couldn't find any condition matching "{query}". Dr. Rajeev treats a broader range
                of complex and unlisted chronic disorders.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Button
                  onClick={() => {
                    setQuery("");
                    setCategory("All");
                    setLetter("All");
                  }}
                  className="rounded-xl bg-primary text-xs font-bold text-white"
                >
                  Clear Filters &amp; View All
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-xl border-slate-200 text-xs font-bold text-slate-700"
                >
                  <a
                    href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(`Hello Dr. Rajeev's Clinic Desk, I could not find my condition (${query}) on your website. Can you advise if your clinic treats this?`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={14} className="mr-1.5" /> Inquire on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. How We Treat Chronic Conditions - 4-Step Clinical Protocol */}
      <section className="border-t border-border bg-slate-50/70 py-16 sm:py-20">
        <div className={wrap}>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm">
              <Stethoscope className="size-3.5 text-primary" />
              Clinical Protocol
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
              How We Treat Chronic Conditions
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A structured, evidence-informed methodology designed to eradicate disease roots rather
              than simply suppress surface symptoms.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary font-display font-bold text-sm">
                01
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Constitutional Intake
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                30–45 minute consultation exploring physical symptoms, mental triggers, thermal
                affinities, and chronological disease history.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent font-display font-bold text-sm">
                02
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Individual Similimum
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Applying the Law of Similars to identify the exact constitutional remedy that
                stimulates your vital immune healing force.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 font-display font-bold text-sm">
                03
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Pure German Dilutions
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Medicines prepared under strict pharmacopoeia standards at ABHI Homeo Hall, ensuring
                zero heavy metals or adulterants.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xs">
              <span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-blue-600 font-display font-bold text-sm">
                04
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Relapse Prevention
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Periodic follow-ups and dietetic adjustments ensure the biological vitality is
                sustained, avoiding lifelong medication dependence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Frequently Asked Questions on Treatment */}
      <section className="border-t border-border bg-white py-16 sm:py-20">
        <div className={`${wrap} max-w-4xl`}>
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
              <BookOpen className="size-3.5 text-primary" />
              Frequently Asked Questions
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
              Common Questions About Our Treatments
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Clear clinical guidance for patients exploring homeopathic care for the first time.
            </p>
          </div>

          <div className="mt-10">
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="item-1" className="rounded-xl border border-border px-5 py-1">
                <AccordionTrigger className="text-left font-display text-base font-bold text-foreground hover:no-underline">
                  Can homeopathic remedies be taken safely alongside allopathic medications?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Yes, absolutely. Homeopathic remedies act on the vital regulatory force and do not
                  interfere pharmacokinetically with conventional allopathic pharmaceuticals. We
                  advise maintaining a 30-minute interval between medicines. Patients should never
                  abruptly stop life-essential allopathic medications (such as anti-hypertensives or
                  insulin) without direct physician supervision.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="rounded-xl border border-border px-5 py-1">
                <AccordionTrigger className="text-left font-display text-base font-bold text-foreground hover:no-underline">
                  How quickly do homeopathic treatments produce noticeable improvement?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  For acute illnesses (such as sudden colds, diarrhea, or acute fever), homeopathic
                  remedies often act within minutes to hours. For long-standing chronic conditions
                  (such as 5-year eczema, PCOD, or bronchial asthma), substantial clinical relief
                  typically develops within 4 to 8 weeks, with complete disease eradication achieved
                  over a few months of tailored care.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="rounded-xl border border-border px-5 py-1">
                <AccordionTrigger className="text-left font-display text-base font-bold text-foreground hover:no-underline">
                  Are Dr. Rajeev's treatments safe for newborn infants and pregnant women?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Yes, homoeopathy is one of the safest medical systems in the world. Remedies are
                  prepared through serial dilution and potentization, meaning they carry zero
                  chemical toxicity, zero teratogenic hazards, and zero risk of organ toxicity. Our
                  She &amp; Child Care department specializes in gentle protocols for expectant
                  mothers and pediatric patients.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="rounded-xl border border-border px-5 py-1">
                <AccordionTrigger className="text-left font-display text-base font-bold text-foreground hover:no-underline">
                  What if my diagnosed medical condition is not listed in this directory?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Homeopathy treats the <em>individual who is diseased</em>, rather than just
                  treating a disease label. Even if your specific diagnosis is not listed in this
                  A–Z directory, our senior doctors evaluate your totality of symptoms and formulate
                  a custom similimum remedy. Contact our care desk via WhatsApp or phone to discuss
                  your case.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* 6. Immediate Consultation Call-to-Action Strip */}
      <section className="border-t border-border bg-slate-900 py-14 text-white">
        <div className={wrap}>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="inline-block rounded-md bg-accent/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                In-Clinic &amp; Online Consultation
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                Ready to Consult Our Senior Homeopaths?
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Book an OPD slot at Ranchi, Patna, Kolkata, or Delhi, or request express medicine
                courier.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="h-11 rounded-xl bg-accent px-5 text-xs font-bold text-white shadow-none hover:bg-accent/90"
              >
                <Link to="/appointments">
                  Schedule In-Clinic OPD <ArrowRight size={14} className="ml-1.5" />
                </Link>
              </Button>
              <Button
                asChild
                className="h-11 rounded-xl bg-emerald-600 px-5 text-xs font-bold text-white shadow-none hover:bg-emerald-700"
              >
                <a
                  href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hello Dr. Rajeev's Clinic, I would like to schedule a consultation regarding my health concerns.")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={15} className="mr-2" /> WhatsApp Care Desk
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-xl border-slate-700 bg-slate-800 text-xs font-bold text-white shadow-none hover:bg-slate-700"
              >
                <a href={`tel:${urgentPhone.replaceAll(" ", "")}`}>
                  <Phone size={14} className="mr-2 text-accent" /> Urgent Triage
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}

export function ConditionDetailPage({ slug }: { slug: string }) {
  const condition = getCondition(slug);

  if (!condition) {
    return (
      <SiteFrame>
        <PageIntro
          eyebrow="Specialty Directory"
          title="Condition Information Not Found"
          description="The clinical topic you requested could not be found."
        />
        <div className={`${wrap} py-12 text-center`}>
          <Button asChild>
            <Link to="/conditions">Return to Conditions Directory</Link>
          </Button>
        </div>
      </SiteFrame>
    );
  }

  return (
    <SiteFrame>
      <PageIntro
        eyebrow={`${condition.category} Specialty`}
        title={condition.name}
        description={condition.shortSummary || condition.summary}
      />
      <section className={section}>
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1.2fr_.8fr] items-start`}>
          <article className="space-y-8">
            <section className="rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border pb-4">
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Clinical Overview
                </h2>
                {condition.tags && condition.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {condition.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {condition.overview || condition.summary}
              </p>
            </section>

            <section className="rounded-xl border border-border bg-card p-6 shadow-xs">
              <h2 className="font-display text-xl font-bold text-foreground">
                Consultation Preparation
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Please have your previous diagnostic reports, current prescriptions, and an
                approximate timeline of your symptoms ready. Never discontinue ongoing critical
                prescription medications without consulting your primary doctor.
              </p>
            </section>

            <section className="rounded-xl border border-border bg-card p-6 shadow-xs">
              <h2 className="font-display text-xl font-bold text-foreground">
                The Homeopathic Advantage
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Our approach emphasizes gentle constitutional remedies prepared under strict
                pharmacopoeia protocols at ABHI HOMEO HALL. Remedies stimulate natural healing
                without toxic side effects or habit-forming dependencies.
              </p>
            </section>
          </article>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h2 className="font-display text-xl font-bold text-foreground">
              Schedule Consultation
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Discuss <strong>{condition.name}</strong> directly with Dr. Rajeev or our clinical
              board.
            </p>
            <div className="pt-2">
              <PrimaryLink to="/appointments">
                <CalendarDays className="size-4" />
                Book Appointment
              </PrimaryLink>
            </div>
            <div className="border-t border-border pt-4">
              <p className="text-xs text-muted-foreground">Prefer direct phone triage?</p>
              <a
                href={`tel:${mainPhone.replaceAll(" ", "")}`}
                className="mt-1 flex items-center gap-1.5 text-sm font-bold text-primary hover:underline"
              >
                <Phone size={14} /> Call {mainPhone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </SiteFrame>
  );
}

export function HomeopathyPage() {
  return (
    <SiteFrame>
      {/* Modern Science & Principles Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white py-14 sm:py-20 lg:py-24 border-b border-slate-200">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

        <div
          className={`${wrap} relative z-10 grid gap-12 lg:grid-cols-[1.15fr_.85fr] items-center`}
        >
          <div className="max-w-2xl">
            <div className="inline-flex max-w-full flex-wrap items-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-primary/20 bg-primary/5 px-3 sm:px-4 py-1.5 text-xs font-bold text-primary shadow-2xs">
              <span className="flex size-2 shrink-0 rounded-full bg-accent animate-pulse" />
              <span>THE SCIENCE OF HEALING</span>
              <span className="hidden sm:inline text-muted-foreground/60">·</span>
              <span className="hidden sm:inline">SIMILIA SIMILIBUS CURENTUR</span>
              <span className="text-muted-foreground/60">·</span>
              <span className="text-accent font-extrabold">2ND MOST USED WORLDWIDE</span>
            </div>

            <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.12]">
              The Science &amp; Art of <br />
              <span className="text-primary">Classical Homoeopathy</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
              A self-contained system of natural therapy that gently supports the body's natural
              regenerative endeavors by raising the body's <strong>'Vital Force'</strong> —
              empowering it to overcome disease without adverse side-effects.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3 text-xs font-bold text-slate-700">
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 shadow-2xs">
                <ShieldCheck className="size-4 text-primary" /> 100% Non-Toxic &amp; Non-Addictive
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 shadow-2xs">
                <HeartPulse className="size-4 text-accent" /> Safe for Infants &amp; Pregnancy
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 shadow-2xs">
                <Atom className="size-4 text-primary" /> Micro-Dose Hormesis Science
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryLink to="/appointments">
                <CalendarDays className="size-4" />
                Book Consultation (₹100 OPD)
              </PrimaryLink>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 bg-white text-slate-800 hover:bg-slate-100 font-bold transition-colors"
              >
                <a href={`tel:${urgentPhone.replaceAll(" ", "")}`}>
                  <Phone className="size-4 text-accent mr-1.5" />
                  Urgent Helpline
                </a>
              </Button>
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-primary/15 to-accent/15 blur-xl -z-10" />
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&h=600&q=80"
                  alt="Classical Homeopathic Potentized Remedies"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="rounded-full bg-primary px-3 py-1 text-xs font-bold">
                    Natural Pharmacology
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold">Ultra-Diluted Potencies</h3>
                  <p className="text-xs text-white/80">
                    Zero toxic side-effects · Natural bio-energetic resonance
                  </p>
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
                <p className="text-xs font-bold text-primary uppercase tracking-wider">
                  Hahnemannian Law
                </p>
                <p className="mt-1 font-display text-base font-bold text-foreground italic">
                  "Similia Similibus Curentur" — Like Cures Like
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  A substance that produces specific symptoms in a healthy person can safely cure
                  similar symptoms in a sick person when potentized.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. What is Homoeopathy? */}
      <section className={section}>
        <div className={wrap}>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold text-primary">
                <BookOpen size={15} /> Origins &amp; Meaning
              </span>
              <h2 className="font-display text-3xl font-bold sm:text-4xl text-foreground leading-tight">
                What is Homoeopathy?
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                Homoeopathy — this truly tongue-twisting term, stemming from the Greek, stands for a
                self-contained system of therapy which gently supports the natural, regenerative
                healing endeavors of the organism by raising the body's{" "}
                <strong>'Vital Force'</strong> to such an extent that the body overcomes the disease
                process and gets back to its normal, healthy self without causing any adverse
                side-effects.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                The name Homoeopathy comes from the Greek word <em>"homios"</em> which means{" "}
                <strong>"like"</strong> and the word <em>"pathos"</em> meaning{" "}
                <strong>"suffering"</strong>. It simply means treating like with like.
              </p>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 space-y-3">
                <h4 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <Clock3 size={18} className="text-primary" /> Historical Foundations
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  In the 4th century B.C., <strong>Hippocrates</strong>, the father of modern
                  medicine, observed that large amounts of certain natural substances can produce
                  symptoms in healthy people resembling those caused by disease, while smaller doses
                  of these same substances relieve those symptoms.
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  In the 1790s, <strong>Dr. Samuel Hahnemann</strong>, a German physician and father
                  of Homoeopathy, amplified this concept and proposed the universal law of{" "}
                  <em>"Similia similibus curentur"</em> ("Like cures like").
                </p>
              </div>
            </div>

            {/* Potentization Explanation Box */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-lg space-y-6">
              <span className="grid size-12 place-items-center rounded-2xl bg-accent/10 text-accent">
                <Atom size={26} />
              </span>
              <h3 className="font-display text-2xl font-bold text-foreground">
                The Science of Potentization
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Homoeopathic remedies are diluted to such an extent that there can be no possible
                side-effects from even the most toxic substances. The dilution process is known as{" "}
                <strong>'Potentization'</strong>.
              </p>
              <div className="space-y-3 border-t border-slate-100 pt-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Ultra-Diluted Form:</strong> Serial dilution coupled with rhythmic
                    succussion releases the energetic dynamic power of medicinal substances.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Toxic Residue:</strong> Even substances that are toxic in crude
                    form become completely harmless and curative in potentized form.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Non-Addictive &amp; Safe:</strong> Remedies do not create chemical
                    dependencies and do not compromise organ function.
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs font-semibold text-primary">
                ✓ Validated by over 200+ years of continuous worldwide clinical application.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Homoeopathy? (6 Core Pillars) */}
      <section className="border-y border-slate-200 bg-slate-50 py-16 sm:py-24">
        <div className={wrap}>
          <SectionHeading
            align="center"
            eyebrow="Global Popularity"
            title="Why Homoeopathy?"
            description="Homoeopathy is the second most widely used system of medicine in the world, with popularity growing by 25% to 50% annually throughout the last decade."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "Extremely Effective",
                desc: "When the correct constitutional remedy is selected, results can be rapid, complete, and permanent without lingering chronic remnants.",
                accent: "text-primary",
                bg: "bg-primary/10",
              },
              {
                icon: ShieldCheck,
                title: "Completely Safe",
                desc: "Even newborn babies and pregnant women can use homoeopathy safely. Remedies can also be taken alongside other medication without unwanted interactions.",
                accent: "text-accent",
                bg: "bg-accent/10",
              },
              {
                icon: Leaf,
                title: "100% Natural",
                desc: "Homeopathic remedies are prepared from natural ingredients — botanical, mineral, and bio-organic elements crafted under strict pharmacopoeia.",
                accent: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                icon: HeartPulse,
                title: "Empowers the Immune System",
                desc: "Works in harmony with your body rather than suppressing reflexes. (For example, cough medicines suppress the cough reflex, which is the body's natural attempt to clear the lungs).",
                accent: "text-accent",
                bg: "bg-accent/10",
              },
              {
                icon: CheckCircle2,
                title: "Non-Addictive",
                desc: "Homeopathic remedies are not addictive — once relief is felt, you stop taking them. If no relief is felt, you are simply taking the incorrect remedy.",
                accent: "text-primary",
                bg: "bg-primary/10",
              },
              {
                icon: Dna,
                title: "Holistic & Root-Cause",
                desc: "It treats all symptoms as one whole manifestation. By addressing the deep root cause rather than transient symptoms, conditions do not recur.",
                accent: "text-primary",
                bg: "bg-primary/10",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-xs transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:-translate-y-1"
              >
                <span
                  className={`grid size-12 place-items-center rounded-xl ${pillar.bg} ${pillar.accent}`}
                >
                  <pillar.icon size={24} />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Homoeopathy vs Allopathy */}
      <section className={section}>
        <div className={wrap}>
          <SectionHeading
            align="center"
            eyebrow="Comparative Analysis"
            title="Homoeopathy vs. Allopathy"
            description="Understanding the fundamental difference between chemical symptom suppression and true root-cause vital force restoration."
          />

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Allopathy Card */}
            <div className="rounded-3xl border border-rose-200 bg-rose-50/40 p-7 sm:p-9 shadow-xs space-y-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-rose-100 px-3.5 py-1 text-xs font-bold text-rose-700">
                  Conventional Allopathic Model
                </span>
                <span className="text-xs font-bold text-rose-500 uppercase">
                  Symptom Suppression
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                The Suppressive Approach
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                The allopathic approach to curing disease is to <strong>"suppress"</strong> outward
                symptoms with strong chemical drugs, acting against the body's natural healing
                forces.
              </p>
              <div className="space-y-3.5 border-t border-rose-200/60 pt-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>
                    <strong>Masking, Not Curing:</strong> Strong synthetic drugs temporarily mask
                    symptoms. When drugs are stopped, symptoms return in full glory and often in an
                    aggravated state.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>
                    <strong>Eradicating Only Bacteria/Viruses:</strong> Clinical bacterial and viral
                    complaints are the <em>end result</em> of an internal imbalance. Eradicating
                    only the pathogen does not address the underlying susceptibility.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="text-rose-500 font-bold">✕</span>
                  <span>
                    <strong>Immunity Depletion:</strong> Forcing the body with synthetic chemicals
                    over time weakens the Vital Healing Force, leaving the body more vulnerable to
                    future infections.
                  </span>
                </div>
              </div>
            </div>

            {/* Homeopathy Card */}
            <div className="rounded-3xl border border-primary/30 bg-primary/5 p-7 sm:p-9 shadow-md space-y-5">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary/15 px-3.5 py-1 text-xs font-bold text-primary">
                  Classical Homeopathic Model
                </span>
                <span className="text-xs font-bold text-primary uppercase">
                  Vital Force Healing
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                The Restorative Approach
              </h3>
              <p className="text-sm leading-relaxed text-slate-700">
                In contrast, Homoeopathy is built around the natural healing laws of nature. It
                recognizes that true disease is an energetic imbalance in the body's{" "}
                <strong>Vital Healing Force</strong>.
              </p>
              <div className="space-y-3.5 border-t border-primary/20 pt-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Strengthening the Whole:</strong> By raising the vital force, the body
                    naturally repels bacteria and viruses so infections cannot take hold.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>5-Dimensional Care:</strong> Resolves imbalances across Genetic,
                    Psychological, Emotional, Functional (Metabolic), and Clinical spheres.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" />
                  <span>
                    <strong>Zero Adverse Residue:</strong> Preserves digestive, hepatic, and renal
                    vitality without surgical or pharmacological toxicity.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* The Modern Patient Renaissance */}
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
            <h4 className="font-display text-lg font-bold text-foreground">
              The Worldwide Renaissance of Homoeopathic Medicine
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              "The patient is nowadays more enlightened than ever and has for a long time been no
              longer prepared to 'swallow', in the truest sense of the word, every side effect.
              Thus, in recent times there has even been a gratifying change in prescribing habits in
              favor of natural, homoeopathic treatment — allowing prophylactic and therapeutic
              intervention without having to worry about adverse reactions."
            </p>
          </div>
        </div>
      </section>

      {/* 4. Why Effective? The Science of Micro-Doses & Hormesis */}
      <section className="border-t border-slate-200 bg-slate-900 py-16 sm:py-24 text-white">
        <div className={wrap}>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white">
              Scientific Mechanisms
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl text-white leading-tight">
              Why Is Homoeopathy So Effective?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              According to homoeopathic doctrine,{" "}
              <strong>the more diluted the solution, the more potent it becomes</strong>. How does
              the information in such minute quantities transfer to the body?
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {/* Liquid Crystallization & Imprinting */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm space-y-4">
              <span className="grid size-11 place-items-center rounded-xl bg-primary text-white shadow-xs">
                <Microscope size={22} />
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Liquid Crystallization &amp; Memory
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                Repeated succussion creates an electrochemical pattern stored in the water carrier
                that spreads like liquid crystallization through the body's own water, triggering
                bio-electromagnetic field imprinting.
              </p>
              <p className="text-xs text-slate-400 border-t border-white/10 pt-3">
                <strong>Ayurvedic Parallel:</strong> Ayurveda similarly uses gold-potentized water,
                transmitting therapeutic energy without molecular degradation.
              </p>
            </div>

            {/* The Scientific Law of Hormesis */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm space-y-4">
              <span className="grid size-11 place-items-center rounded-xl bg-accent text-white shadow-xs">
                <Activity size={22} />
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                The Phenomenon of Hormesis
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                Scientists call this phenomenon <strong>Hormesis</strong>: very diluted
                micro-concentrations produce profound biological responses.
              </p>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-slate-300 space-y-1">
                <p className="font-bold text-white">Michigan State University Research:</p>
                <p>
                  Microdoses equivalent to a 9X dilution stimulated crop yield by{" "}
                  <strong>30% (tomatoes)</strong>, <strong>21% (carrots)</strong>, and{" "}
                  <strong>25% (corn)</strong>.
                </p>
              </div>
            </div>

            {/* Biological Hormones & Einstein's Law */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm space-y-4">
              <span className="grid size-11 place-items-center rounded-xl bg-primary text-white shadow-xs">
                <Atom size={22} />
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Micro-Doses in Nature &amp; Physics
              </h3>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                Thyroid hormone in human blood is present at only{" "}
                <strong>1 part per 10 billion</strong> — yet this micro-amount regulates the entire
                metabolism of the human body.
              </p>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs text-slate-300 space-y-1">
                <p className="font-bold text-white">Einstein’s Energy Law (E = mc²):</p>
                <p>
                  Just as splitting the nucleus of an atom releases tremendous dynamic energy,
                  homoeopathic potentization splits medicinal atoms into finer particles, generating
                  dynamic curative energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Consultation CTA Section */}
      <section className={section}>
        <div className={`${wrap} max-w-4xl text-center space-y-6`}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-bold text-accent">
            <HeartHandshake size={15} /> Clinical Consultation
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Experience the Restorative Power of Classical Homoeopathy
          </h2>
          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground max-w-2xl mx-auto">
            Consult Dr. Rajeev Kumar and our clinical board across Ranchi, Patna, Kolkata, and Delhi
            for individualized, root-cause healing.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <PrimaryLink to="/appointments">
              <CalendarDays className="size-4" />
              Book In-Clinic Consultation (₹100 OPD)
            </PrimaryLink>
            <Button
              asChild
              variant="outline"
              className="border-slate-300 bg-white text-slate-800 hover:bg-slate-100 font-bold transition-colors"
            >
              <Link to="/about">
                <Award className="size-4 text-primary mr-1.5" />
                About Dr. Rajeev &amp; ABHI Homeo Hall
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}

export function ResultsPage() {
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    const list = ["All", ...Array.from(new Set(stories.map((s) => s.category)))];
    return list;
  }, []);

  const visible = useMemo(() => {
    return stories.filter((story) => category === "All" || story.category === category);
  }, [category]);

  const featured = stories[0];

  return (
    <SiteFrame>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-slate-50 via-white to-white py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className={`${wrap} relative`}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm">
              <span className="size-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
              <span>Verified Outcomes</span>
              <span className="text-muted-foreground/60">·</span>
              <span>15+ Years</span>
              <span className="hidden sm:inline text-muted-foreground/60">·</span>
              <span className="hidden sm:inline">10,000+ Recoveries</span>
            </div>
            <h1 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl lg:leading-[1.15]">
              Documented Patient Recovery Stories &amp; Clinical Outcomes
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore real patient journeys treated across our Ranchi, Patna, Kolkata, and Delhi
              clinics. Classical constitutional prescribing, root-cause diagnostics, and pure ABHI
              Homeo Hall remedies without toxic side-effects or steroid dependency.
            </p>

            {/* 4 Outcome Metrics Ribbon */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-center">
                <span className="font-display text-2xl sm:text-3xl font-bold text-primary">
                  92.4%
                </span>
                <p className="mt-1 text-xs font-semibold text-slate-700">Clinical Improvement</p>
                <p className="text-[10px] text-muted-foreground">Documented outcome rate</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-center">
                <span className="font-display text-2xl sm:text-3xl font-bold text-emerald-600">
                  0%
                </span>
                <p className="mt-1 text-xs font-semibold text-slate-700">Steroid Reliance</p>
                <p className="text-[10px] text-muted-foreground">Zero chemical suppressants</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-center">
                <span className="font-display text-2xl sm:text-3xl font-bold text-accent">
                  10,000+
                </span>
                <p className="mt-1 text-xs font-semibold text-slate-700">Families Treated</p>
                <p className="text-[10px] text-muted-foreground">Across 4 metro hubs</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-center">
                <div className="flex items-center justify-center gap-1 font-display text-2xl sm:text-3xl font-bold text-amber-500">
                  <span>4.9</span>
                  <Star size={20} className="fill-amber-400 text-amber-400" />
                </div>
                <p className="mt-1 text-xs font-semibold text-slate-700">Google Rating</p>
                <p className="text-[10px] text-muted-foreground">500+ verified reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Breakthrough Case Spotlight */}
      {featured && (
        <section className="border-b border-border bg-slate-50/70 py-12 sm:py-16">
          <div className={wrap}>
            <div className="mb-6 flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <Sparkles size={14} className="text-primary" />
                <span>Featured Breakthrough Case</span>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground">
                <ShieldCheck size={14} className="text-emerald-600" /> Pre- &amp; Post-Clinical
                Tracking
              </span>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-100">
              <div className="grid gap-0 lg:grid-cols-[1.1fr_1.3fr]">
                {/* Visual Area */}
                <div className="relative min-h-[300px] lg:min-h-full w-full bg-slate-100">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="rounded-lg bg-black/60 backdrop-blur-xs px-3 py-1.5 text-xs font-medium">
                      {featured.city} · {featured.duration}
                    </span>
                    <span className="rounded-lg bg-emerald-600 px-3 py-1.5 text-xs font-bold">
                      {featured.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-col justify-between p-6 sm:p-10">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          Pediatric Case Study · {featured.age}
                        </span>
                        <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-foreground">
                          {featured.title}
                        </h2>
                      </div>
                    </div>

                    <p className="mt-2 text-xs font-semibold text-muted-foreground">
                      Patient: {featured.patientName} · Diagnosed Condition: {featured.condition}
                    </p>

                    {/* Before vs After Box */}
                    <div className="mt-5 space-y-3 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-xs">
                      <div className="flex items-start gap-2.5">
                        <span className="shrink-0 rounded-md bg-red-100 px-2 py-0.5 text-[10px] font-bold text-red-700">
                          Initial State
                        </span>
                        <p className="text-slate-600 leading-relaxed">{featured.beforeCondition}</p>
                      </div>
                      <div className="border-t border-slate-200 pt-2.5 flex items-start gap-2.5">
                        <span className="shrink-0 rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                          Documented Outcome
                        </span>
                        <p className="font-medium text-slate-800 leading-relaxed">
                          {featured.afterOutcome}
                        </p>
                      </div>
                    </div>

                    {/* Patient Quote */}
                    <div className="mt-5 rounded-2xl border border-primary/15 bg-primary/5 p-4">
                      <Quote className="size-4 text-primary/40 mb-1" />
                      <p className="text-xs italic text-slate-700 leading-relaxed">
                        "{featured.quote}"
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-5">
                    <div className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Attending Physician:</span>{" "}
                      {featured.doctor}
                    </div>
                    <Button
                      asChild
                      className="h-11 rounded-xl bg-accent px-6 text-xs font-bold text-white shadow-none hover:bg-accent/90"
                    >
                      <Link to="/appointments">
                        Consult for Similar Case <ArrowRight size={14} className="ml-1.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Main Filter & Stories Grid Section */}
      <section className={section}>
        <div className={wrap}>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                <Activity size={14} className="text-primary" />
                Case Studies Directory
              </div>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Browse Patient Recoveries by Specialty
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Showing {visible.length} documented clinical recoveries across our clinic network.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => {
                const count =
                  item === "All"
                    ? stories.length
                    : stories.filter((s) => s.category === item).length;
                return (
                  <Button
                    key={item}
                    variant={category === item ? "default" : "outline"}
                    size="sm"
                    className={`rounded-xl text-xs font-bold transition-all ${
                      category === item
                        ? "bg-primary text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                    onClick={() => setCategory(item)}
                  >
                    <span>{item}</span>
                    <span
                      className={`ml-1.5 rounded-full px-1.5 py-0.2 text-[10px] ${
                        category === item ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {count}
                    </span>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Stories Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((story) => (
              <StoryCard key={story.id} {...story} />
            ))}
          </div>

          {/* Empty State if filter yields 0 */}
          {visible.length === 0 && (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
              <HeartPulse size={40} className="mx-auto text-slate-400" />
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                No case studies in this category yet
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Please select another specialty or view all clinical records.
              </p>
              <Button
                onClick={() => setCategory("All")}
                className="mt-4 rounded-xl bg-primary text-xs font-bold text-white"
              >
                View All Categories
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Google Verified Patient Reviews Strip */}
      <section className="border-t border-border bg-slate-50/70 py-16 sm:py-20">
        <div className={wrap}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1 text-xs font-bold text-slate-700 shadow-sm">
              <GoogleLogoIcon className="size-4" />
              <span>Google Verified Reviews · 4.9 ★★★★★ Rating</span>
            </div>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
              What Families Say About Dr. Rajeev's Clinic
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Independent reviews submitted by patients visiting our Ranchi, Patna, Kolkata, and
              Delhi consultation centers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 6).map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. The 4 Pillars of Clinical Verification */}
      <section className="border-t border-border bg-white py-16 sm:py-20">
        <div className={wrap}>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
              <ShieldCheck className="size-3.5 text-primary" />
              Evidence &amp; Methodology
            </div>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
              How We Verify &amp; Measure Outcomes
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Our systematic clinical protocol bridges traditional classical homeopathy with modern
              pathology benchmarks.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs">
              <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary font-display font-bold text-sm">
                01
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Diagnostic Tracking
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                We track objective biomarkers: pre- and post-treatment ultrasound scans, IgE allergy
                counts, thyroid profiles, and stool/blood panels.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs">
              <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent font-display font-bold text-sm">
                02
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Constitutional Totality
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Prescriptions target the whole individual—mental state, thermal affinity, and
                physiological reactivity—addressing susceptibility rather than isolated symptoms.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs">
              <span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 font-display font-bold text-sm">
                03
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Certified German Remedies
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                All medicines are sourced from licensed German manufacturers via ABHI Homeo Hall,
                ensuring ultra-pure potentization free from adulterants or heavy metals.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-xs">
              <span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-blue-600 font-display font-bold text-sm">
                04
              </span>
              <h3 className="mt-4 font-display text-base font-bold text-foreground">
                Relapse Prevention
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                By strengthening the patient's vital immune force, recovery is permanent. Follow-ups
                ensure health stability without lifelong dependency on medicines.
              </p>
            </div>
          </div>

          {/* Compliance & Consent Note */}
          <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-xs leading-relaxed text-slate-600">
            <strong>Clinical Notice &amp; Patient Privacy:</strong> Individual recovery times vary
            based on health chronicity, prior pharmacological history, and adherence to dietary
            posology. Case studies and reviews are documented and published with full informed
            patient or parental consent. Dr. Rajeev's clinics practice evidence-informed classical
            homeopathy adhering to recognized AYUSH clinical guidelines.
          </div>
        </div>
      </section>

      {/* 6. Immediate Consultation Call-to-Action */}
      <section className="border-t border-border bg-slate-900 py-14 text-white">
        <div className={wrap}>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="inline-block rounded-md bg-accent/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                Start Your Recovery
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                Ready to Experience Root-Cause Healing?
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Book an OPD consultation at Ranchi, Patna, Kolkata, or Delhi, or speak directly with
                our senior care desk.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="h-11 rounded-xl bg-accent px-5 text-xs font-bold text-white shadow-none hover:bg-accent/90"
              >
                <Link to="/appointments">
                  Schedule In-Clinic OPD <ArrowRight size={14} className="ml-1.5" />
                </Link>
              </Button>
              <Button
                asChild
                className="h-11 rounded-xl bg-emerald-600 px-5 text-xs font-bold text-white shadow-none hover:bg-emerald-700"
              >
                <a
                  href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hello Dr. Rajeev's Clinic, I would like to schedule a consultation regarding my health concerns.")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={15} className="mr-2" /> WhatsApp Care Desk
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}

export function AppointmentsPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="Patient Intake"
        title="Schedule An In-Clinic OPD Consultation"
        description="Select your preferred clinic location across Ranchi, Patna, Kolkata, or Delhi. Our case coordinator will confirm your exact slot."
      />
      <section className={section}>
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1.2fr_.8fr] items-stretch`}>
          <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-md sm:p-10">
            <AppointmentForm />
          </div>

          <aside className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <div className="space-y-6">
              <div>
                <span className="grid size-12 place-items-center rounded-xl bg-accent text-white shadow-xs">
                  <HeartPulse size={24} />
                </span>
                <h2 className="mt-5 font-display text-2xl font-bold text-foreground">
                  OPD Centers &amp; Timings
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  All our centers in Ranchi, Patna, Kolkata, and Delhi are fully equipped with
                  dedicated consultation chambers and ABHI Homeo Hall dispensing counters.
                </p>
              </div>

              <div className="space-y-3 border-t border-border pt-4 text-xs">
                <p className="font-semibold text-foreground">Weekly OPD Hours:</p>
                <p className="flex items-center gap-2 text-muted-foreground">
                  <Clock3 size={14} className="text-primary" /> Monday to Sunday: 10:00 AM – 8:00 PM
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-4 shadow-xs">
                <p className="text-xs font-semibold uppercase text-muted-foreground">
                  Urgent Assistance
                </p>
                <a
                  href={`tel:${urgentPhone.replaceAll(" ", "")}`}
                  className="mt-1 flex items-center gap-1.5 text-base font-bold text-accent hover:underline"
                >
                  <Phone size={15} /> {urgentPhone}
                </a>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs text-muted-foreground">
              Prior case history and medical reports can be shared via WhatsApp before consultation.
            </div>
          </aside>
        </div>
      </section>
    </SiteFrame>
  );
}

export function BlogPage() {
  const [category, setCategory] = useState("All");
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(posts.map((p) => p.category)))],
    [],
  );
  const filtered = posts.filter((p) => category === "All" || p.category === category);

  return (
    <SiteFrame>
      <PageIntro
        eyebrow="Clinical Knowledge Base"
        title="Dr. Rajeev's Health Insights &amp; Clinical Guides"
        description="Evidence-conscious articles and clinical perspectives on homeopathic practice, pediatric care, and chronic wellness."
      />
      <section className={section}>
        <div className={wrap}>
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <Button
                  key={item}
                  variant={category === item ? "default" : "outline"}
                  size="sm"
                  className={
                    category === item
                      ? "bg-primary text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  }
                  onClick={() => setCategory(item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}

export function BlogDetailPage({ slug }: { slug: string }) {
  const post = posts.find((item) => item.slug === slug);
  if (!post) {
    return (
      <SiteFrame>
        <PageIntro
          eyebrow="Clinical Notes"
          title="Article Not Found"
          description="The requested health update could not be located."
        />
        <div className={`${wrap} py-12 text-center`}>
          <Button asChild>
            <Link to="/blog">Return to Health Insights</Link>
          </Button>
        </div>
      </SiteFrame>
    );
  }

  return (
    <SiteFrame>
      <PageIntro eyebrow={post.category} title={post.title} description={post.summary} />
      <article className={`${wrap} max-w-4xl py-14 sm:py-20`}>
        {post.image && (
          <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200">
            <img src={post.image} alt={post.title} className="aspect-[16/9] w-full object-cover" />
          </div>
        )}
        <div className="flex items-center gap-3 text-xs text-muted-foreground pb-6 border-b border-border">
          <span>Published by Dr. Rajeev's Clinical Desk</span>
          <span>·</span>
          <span>{post.date}</span>
          {post.readTime && (
            <>
              <span>·</span>
              <span>{post.readTime}</span>
            </>
          )}
        </div>
        <div className="mt-8 text-base leading-relaxed text-foreground/90 sm:text-lg sm:leading-loose">
          {post.body}
        </div>
        <div className="mt-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
          >
            <ArrowRight className="rotate-180" size={16} /> Back to all articles
          </Link>
        </div>
      </article>
    </SiteFrame>
  );
}

export function ActivitiesPage() {
  const [activeTab, setActiveTab] = useState<
    "All" | "News" | "Events" | "Awards" | "Gallery" | "Stories"
  >("All");
  const [galleryCategory, setGalleryCategory] = useState("All");

  const newsArticles = [
    {
      publication: "The Times Health / Eastern Chronicle",
      date: "October 2026",
      tag: "Featured Press Coverage",
      title:
        "How Dr. Rajeev Kumar Built Eastern India's Foremost Classical Homeopathy & German Medicine Hub",
      summary:
        "From humble beginnings in Gopalganj to arriving in Ranchi with just ₹5,000, Dr. Rajeev Kumar has translated restricted dreams into a regional healthcare leader. Today, ABHI Homeo Hall and its modern clinics across Ranchi, Patna, Kolkata, and Delhi set the benchmark for non-toxic classical healing.",
      readMoreText: "Read Coverage Summary",
      highlight: "Over 10,000 families treated annually with ₹100 OPD pledge.",
    },
    {
      publication: "State Medical Journal / AYUSH Today",
      date: "August 2026",
      tag: "Hospital Initiative",
      title:
        "Eastern Zone's First Private 30-Bed Classical Homeopathic Hospital Announced in Ranchi",
      summary:
        "Envisaged by Dr. Rajeev Kumar, the upcoming 30-bed healthcare facility will feature dedicated chronic care chambers, on-site pathology, physical therapy integration, and an advanced German homeopathic pharmacy dispensing certified dilutions.",
      readMoreText: "View Hospital Project Details",
      highlight: "Inpatient chronic disease stabilization & intensive natural recovery.",
    },
    {
      publication: "Dainik Jagran / Prabhat Khabar",
      date: "July 2026",
      tag: "Public Health Feature",
      title: "Dr. Rajeev's ₹100 OPD Consultation Model Commended for Universal Healthcare Equity",
      summary:
        "While private healthcare costs soar across major metros, Dr. Rajeev Kumar's clinics maintain a transparent ₹100 OPD consultation fee across Ranchi, Patna, Kolkata, and Delhi, ensuring classical homeopathic care remains accessible to all families.",
      readMoreText: "Read Public Health Report",
      highlight: "Zero commercial markups on consultations; Thursday free clinic sustained.",
    },
    {
      publication: "Ranchi Express Health Desk",
      date: "May 2026",
      tag: "Scientific Outreach",
      title:
        "Awareness Drives on Micro-Dosing and the Permanent Eradication of Chronic Disease Root Causes",
      summary:
        "Dr. Rajeev Kumar led scientific seminars across urban and rural Jharkhand dispelling myths about homeopathy, detailing how ultra-diluted micro-doses stimulate the body's natural Vital Force to clear eczema, asthma, and kidney stones without surgery.",
      readMoreText: "Explore Seminar Highlights",
      highlight: "Educational outreach reaching 20,000+ citizens across Eastern India.",
    },
  ];

  const eventsList = [
    {
      title: "Weekly Free Thursday Shirdi Sai Baba Seva Clinic",
      frequency: "Every Thursday (Ongoing Since 2012)",
      location: "Main Road Flagship Clinic & Temple Camps, Ranchi",
      category: "Philanthropic Seva",
      badge: "Weekly Free OPD",
      overview:
        "In deep devotion to Shirdi Sai Baba, Dr. Rajeev conducts 100% free OPD consultations for underprivileged and rural patients every Thursday. Consultation fees are waived and free genuine German medicine kits are provided.",
      impact: "10,000+ underprivileged patients treated free since inception.",
    },
    {
      title: "Autism Awareness & Pediatric Sensory Integration Workshop",
      frequency: "World Autism Month (Annual Flagship)",
      location: "Ranchi & Kolkata Auditorium Centers",
      category: "Pediatric Workshop",
      badge: "Child Development",
      overview:
        "An educational symposium for parents, special educators, and therapists presenting Dr. Rajeev's published manual 'Autism Care & Holistic Guidance'. Demonstrating dietary strategies, sensory calming routines, and gentle homeopathic neuro-support.",
      impact: "1,200+ families empowered with actionable home-care sensory guidance.",
    },
    {
      title: "Mobile Rural Health Screening & Medicine Distribution Drive",
      frequency: "Quarterly Outreach Program",
      location: "Gopalganj, Bhagalpur & Rural Ranchi Districts",
      category: "Rural Outreach",
      badge: "Community Screening",
      overview:
        "Mobile clinical teams equipped with blood pressure monitors, pulse examination kits, and basic diagnostics travel to remote villages, providing free geriatric arthritis checkups and essential constitutional homeopathic kits.",
      impact: "3,500+ rural villagers screened across 24 remote village clusters.",
    },
    {
      title: "National Scientific Symposium on Classical Potentization & Hormesis",
      frequency: "National AYUSH Convention",
      location: "New Delhi Convention Center",
      category: "Medical Keynote",
      badge: "Keynote Lecture",
      overview:
        "Dr. Rajeev Kumar delivered a keynote lecture presenting documented clinical recoveries in non-surgical kidney stone dissolution (11mm calculus) and inhaler de-escalation in chronic bronchial asthma before an audience of 500+ AYUSH physicians.",
      impact: "Peer-reviewed case presentations commended by AYUSH senior directors.",
    },
  ];

  const awardsList = [
    {
      year: "2025",
      title: "AYUSH Healthcare Excellence Award",
      organization: "Eastern Zone Health Board & AYUSH Federation",
      citation:
        "Conferred upon Dr. Rajeev Kumar for 15+ years of clinical excellence, pioneering work in non-toxic classical homeopathy, and objective documentation of chronic recovery milestones.",
      category: "Clinical Excellence",
    },
    {
      year: "2024",
      title: "Best German Homeopathic Distributor & Pharmacy Leader",
      organization: "Indian Pharmaceutical & AYUSH Supply Alliance",
      citation:
        "Awarded to ABHI Homeo Hall for maintaining an unadulterated, certified German medicine inventory and establishing Eastern India's largest express medicine courier distribution network.",
      category: "Pharmaceutical Supply",
    },
    {
      year: "2023",
      title: "Philanthropist Physician of the Year",
      organization: "Social Welfare Council of Jharkhand",
      citation:
        "Honoring Dr. Rajeev Kumar's steadfast commitment to free Thursday health camps, rural medical seva drives, and maintaining the transparent ₹100 OPD pledge for working-class citizens.",
      category: "Social Impact",
    },
    {
      year: "2024",
      title: "Pioneer in Pediatric & Autism Guidance",
      organization: "Child Development & Holistic Health Forum",
      citation:
        "In recognition of transformative clinical work in gentle pediatric immunity, tonsillitis surgery avoidance, and compassionate neuro-developmental autism care.",
      category: "Child Health Pioneer",
    },
  ];

  const galleryImages = [
    {
      title: "Clinical Consultation Chamber",
      category: "Clinics",
      location: "Main Road Flagship, Ranchi",
      date: "Daily Practice",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&h=480&q=80",
      caption:
        "Dr. Rajeev Kumar conducting thorough constitutional case taking and personal pulse evaluation.",
    },
    {
      title: "Weekly Thursday Free Seva Camp",
      category: "Health Camps",
      location: "Temple Site, Ranchi",
      date: "Every Thursday",
      image:
        "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=700&h=480&q=80",
      caption:
        "Free medicine distribution and health screenings for underprivileged families in honor of Sai Baba.",
    },
    {
      title: "ABHI Homeo Hall German Dispensary",
      category: "Dispensary",
      location: "Central Pharmacy Hub, Ranchi",
      date: "Licensed Unit",
      image:
        "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=700&h=480&q=80",
      caption:
        "State-of-the-art storage and precision dispensing of certified German dilutions and biochemic salts.",
    },
    {
      title: "AYUSH Scientific Keynote Presentation",
      category: "Awards",
      location: "National Convention, New Delhi",
      date: "Annual Summit",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=700&h=480&q=80",
      caption:
        "Dr. Rajeev addressing healthcare delegates on documented non-surgical kidney stone dissolution.",
    },
    {
      title: "Autism Guidance & Parent Workshop",
      category: "Health Camps",
      location: "Community Center, Kolkata",
      date: "Special Session",
      image:
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=700&h=480&q=80",
      caption:
        "Empowering parents and caregivers with actionable daily routines from the Autism Care Guidebook.",
    },
    {
      title: "Clinical Board Case Conference",
      category: "Clinics",
      location: "OPD Center, Patna",
      date: "Weekly Review",
      image:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=700&h=480&q=80",
      caption:
        "Senior homeopathic practitioners and diagnostic consultants analyzing pre- and post-USG reports.",
    },
  ];

  const visibleGallery =
    galleryCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === galleryCategory);

  return (
    <SiteFrame>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-slate-50 via-white to-white py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className={`${wrap} relative`}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm">
              <span className="size-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
              <span>Clinical Milestones</span>
              <span className="text-muted-foreground/60">·</span>
              <span>Community Impact</span>
              <span className="hidden sm:inline text-muted-foreground/60">·</span>
              <span className="hidden sm:inline">AYUSH Excellence</span>
            </div>
            <h1 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl lg:leading-[1.15]">
              Clinic Activities, News, Events &amp; Honors
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore Dr. Rajeev Kumar &amp; ABHI Homeo Hall's journey of healing: free community
              health camps, national healthcare awards, scientific media features, philanthropic
              seva drives, and verified recovery milestones across Ranchi, Patna, Kolkata, and
              Delhi.
            </p>

            {/* 4 Metric Badges Ribbon */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-center">
                <span className="font-display text-2xl sm:text-3xl font-bold text-primary">
                  15+
                </span>
                <p className="mt-1 text-xs font-semibold text-slate-700">Years of Excellence</p>
                <p className="text-[10px] text-muted-foreground">Estd. 2003 in Ranchi</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-center">
                <span className="font-display text-2xl sm:text-3xl font-bold text-accent">
                  150+
                </span>
                <p className="mt-1 text-xs font-semibold text-slate-700">Free Health Camps</p>
                <p className="text-[10px] text-muted-foreground">Rural &amp; temple seva</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-center">
                <span className="font-display text-2xl sm:text-3xl font-bold text-emerald-600">
                  25+
                </span>
                <p className="mt-1 text-xs font-semibold text-slate-700">Media Press Features</p>
                <p className="text-[10px] text-muted-foreground">National &amp; state journals</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm text-center">
                <span className="font-display text-2xl sm:text-3xl font-bold text-amber-500">
                  50,000+
                </span>
                <p className="mt-1 text-xs font-semibold text-slate-700">Seva Beneficiaries</p>
                <p className="text-[10px] text-muted-foreground">Underprivileged families</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Section Filter Tabs */}
      <section className="sticky top-14 sm:top-16 z-20 border-b border-border bg-white/95 backdrop-blur-md py-2.5 sm:py-3">
        <div className={wrap}>
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto no-scrollbar scroll-smooth px-1 py-1">
            {[
              { id: "All", label: "All Highlights" },
              { id: "News", label: "News & Media" },
              { id: "Events", label: "Events & Camps" },
              { id: "Awards", label: "Awards & Honors" },
              { id: "Gallery", label: "Photo Gallery" },
              { id: "Stories", label: "Community Stories" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`whitespace-nowrap rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-primary text-white shadow-sm"
                    : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. News & Media Coverage */}
      {(activeTab === "All" || activeTab === "News") && (
        <section className={section}>
          <div className={wrap}>
            <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <FileText size={13} className="text-primary" />
                  Press &amp; Publications
                </div>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
                  In The News: Media Coverage &amp; Articles
                </h2>
              </div>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Documented features across leading national newspapers and medical health journals.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {newsArticles.map((article) => (
                <article
                  key={article.title}
                  className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 hover:shadow-xl hover:border-primary/40"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <span className="rounded-full bg-primary/10 px-3 py-0.5 text-[11px] font-bold text-primary">
                        {article.tag}
                      </span>
                      <span className="text-[11px] font-semibold text-muted-foreground">
                        {article.date}
                      </span>
                    </div>

                    <p className="mt-3 text-xs font-bold text-accent uppercase tracking-wider">
                      {article.publication}
                    </p>

                    <h3 className="mt-2 font-display text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {article.summary}
                    </p>

                    <div className="mt-4 rounded-xl border border-slate-200/80 bg-slate-50/70 p-3 text-xs text-slate-700">
                      <strong>Key Highlight:</strong> {article.highlight}
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-bold text-primary">
                    <span className="inline-flex items-center gap-1 group-hover:underline">
                      {article.readMoreText} <ArrowRight size={13} />
                    </span>
                    <span className="text-[11px] text-muted-foreground font-normal">
                      Verified Press Archive
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Events & Community Seva Camps */}
      {(activeTab === "All" || activeTab === "Events") && (
        <section className={`border-t border-border bg-slate-50/70 ${section}`}>
          <div className={wrap}>
            <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm">
                  <CalendarDays size={13} className="text-accent" />
                  Community Seva &amp; Workshops
                </div>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
                  Events, Camps &amp; Scientific Outreach
                </h2>
              </div>
              <p className="text-xs text-muted-foreground sm:text-sm">
                Active social responsibility drives, free Thursday clinics, and autism educational
                symposiums.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {eventsList.map((event) => (
                <div
                  key={event.title}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <span className="rounded-full bg-accent/10 px-3 py-0.5 text-[11px] font-bold text-accent">
                        {event.badge}
                      </span>
                      <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        {event.category}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg sm:text-xl font-bold text-foreground leading-snug">
                      {event.title}
                    </h3>

                    <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <Clock3 size={14} className="text-primary shrink-0" />
                        <span>
                          <strong>Timing:</strong> {event.frequency}
                        </span>
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin size={14} className="text-accent shrink-0" />
                        <span>
                          <strong>Location:</strong> {event.location}
                        </span>
                      </p>
                    </div>

                    <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {event.overview}
                    </p>

                    <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/60 p-3 text-xs text-emerald-900 font-medium flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{event.impact}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Button
                      asChild
                      variant="outline"
                      className="h-9 rounded-xl border-slate-200 text-xs font-bold text-slate-800 hover:bg-slate-50"
                    >
                      <Link to="/contact">
                        Inquire About Next Camp <ArrowRight size={13} className="ml-1" />
                      </Link>
                    </Button>
                    <span className="text-[11px] text-muted-foreground font-semibold">
                      Free Community Access
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Awards & Recognitions Showcase */}
      {(activeTab === "All" || activeTab === "Awards") && (
        <section className={`border-t border-border bg-white ${section}`}>
          <div className={wrap}>
            <div className="mx-auto max-w-2xl text-center mb-12">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                <Award size={14} className="text-amber-500" />
                Honors &amp; Accolades
              </div>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Awards &amp; Recognitions
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Recognized by medical boards, pharmaceutical alliances, and social welfare
                institutions for excellence in classical AYUSH healthcare.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {awardsList.map((award) => (
                <div
                  key={award.title}
                  className="relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50/70 p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-amber-400/50"
                >
                  <div className="absolute top-0 inset-x-0 h-1 rounded-t-3xl bg-gradient-to-r from-amber-400 via-primary to-accent" />
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-amber-50 text-amber-500 border border-amber-200/60 shadow-xs">
                        <Award size={24} />
                      </span>
                      <span className="font-display text-lg font-bold text-primary">
                        {award.year}
                      </span>
                    </div>

                    <span className="mt-4 inline-block rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                      {award.category}
                    </span>

                    <h3 className="mt-2 font-display text-lg font-bold text-foreground leading-snug">
                      {award.title}
                    </h3>

                    <p className="mt-1 text-xs font-semibold text-accent">{award.organization}</p>

                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                      "{award.citation}"
                    </p>
                  </div>

                  <div className="mt-5 border-t border-slate-200/80 pt-3 flex items-center justify-between text-[11px] font-semibold text-slate-600">
                    <span className="flex items-center gap-1">
                      <ShieldCheck size={13} className="text-emerald-600" /> Verified Honor
                    </span>
                    <span className="text-primary font-bold">AYUSH India</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Visual Photo Gallery */}
      {(activeTab === "All" || activeTab === "Gallery") && (
        <section className={`border-t border-border bg-slate-50/70 ${section}`}>
          <div className={wrap}>
            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm">
                  <Sparkles size={13} className="text-primary" />
                  Visual Moments
                </div>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-foreground">
                  Photo Gallery: Camps, Clinics &amp; Events
                </h2>
              </div>

              {/* Gallery Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {["All", "Health Camps", "Clinics", "Dispensary", "Awards"].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setGalleryCategory(cat)}
                    className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                      galleryCategory === cat
                        ? "bg-primary text-white shadow-xs"
                        : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visibleGallery.map((item) => (
                <div
                  key={item.title}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:shadow-xl hover:border-primary/40"
                >
                  <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-slate-800 shadow-sm">
                        {item.category}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[11px] font-medium opacity-90">
                        {item.location} · {item.date}
                      </span>
                      <h3 className="font-display text-base font-bold text-white leading-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4 bg-white flex-1 flex flex-col justify-between">
                    <p className="text-xs leading-relaxed text-muted-foreground">{item.caption}</p>
                    <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 text-[11px] text-primary font-bold">
                      <span>Documented Activity</span>
                      <span className="text-slate-500 font-normal">ABHI Homeo Hall</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Community Success Stories & Social Impact */}
      {(activeTab === "All" || activeTab === "Stories") && (
        <section className={`border-t border-border bg-white ${section}`}>
          <div className={wrap}>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                <HandHeart size={14} className="text-accent" />
                Community Impact
              </div>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Compassionate Healthcare in Action
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Rooted in deep family values inherited from Late Kamleshwar Prasad, Dr. Rajeev
                Kumar's mission bridges quality healthcare with selfless public service.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
                <div>
                  <span className="grid size-12 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <HandHeart size={24} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    Shirdi Sai Baba Seva Movement
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                    Every Thursday since 2012, no underprivileged patient is turned away. Fees and
                    medicine costs are entirely condoned. Over 10,000 families across Ranchi have
                    found relief from chronic suffering through this sustained weekly seva.
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-200/80 pt-4 text-xs font-semibold text-primary">
                  100% Free Consultations &amp; Medicines
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
                <div>
                  <span className="grid size-12 place-items-center rounded-2xl bg-accent/10 text-accent">
                    <HeartPulse size={24} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    The ₹100 OPD Pledge
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                    In an era where medical consultation fees create economic hardship, Dr. Rajeev's
                    clinics across Ranchi, Patna, Kolkata, and Delhi maintain a fixed ₹100 OPD fee,
                    ensuring top-tier classical homeopathy remains accessible to all.
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-200/80 pt-4 text-xs font-semibold text-accent">
                  Universal Healthcare Accessibility
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
                <div>
                  <span className="grid size-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <Building2 size={24} />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    30-Bed Hospital Vision
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">
                    Taking classical homeopathy into mainstream inpatient care, Dr. Rajeev has laid
                    the groundwork for Eastern Zone's first dedicated 30-bed private homeopathic
                    hospital with pathology and comprehensive wellness support.
                  </p>
                </div>
                <div className="mt-6 border-t border-slate-200/80 pt-4 text-xs font-semibold text-emerald-700">
                  Advancing Homeopathy Infrastructure
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 8. Direct Collaboration & Appointment Call-to-Action */}
      <section className="border-t border-border bg-slate-900 py-14 text-white">
        <div className={wrap}>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="inline-block rounded-md bg-accent/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                Community Partnership &amp; Care
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl">
                Collaborate On A Health Camp Or Consult
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Organize a free community health camp with our team, or schedule an in-clinic
                consultation.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="h-11 rounded-xl bg-accent px-5 text-xs font-bold text-white shadow-none hover:bg-accent/90"
              >
                <Link to="/appointments">
                  Book In-Clinic OPD <ArrowRight size={14} className="ml-1.5" />
                </Link>
              </Button>
              <Button
                asChild
                className="h-11 rounded-xl bg-emerald-600 px-5 text-xs font-bold text-white shadow-none hover:bg-emerald-700"
              >
                <a
                  href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hello Dr. Rajeev's Clinic, I would like to inquire about organizing a community health camp or attending your upcoming activities.")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={15} className="mr-2" /> WhatsApp Seva Desk
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 rounded-xl border-slate-700 bg-slate-800 text-xs font-bold text-white shadow-none hover:bg-slate-700"
              >
                <a href={`tel:${urgentPhone.replaceAll(" ", "")}`}>
                  <Phone size={14} className="mr-2 text-accent" /> Call Urgent OPD
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Ranchi Flagship OPD");
  const [inquiryType, setInquiryType] = useState("General Medical Consultation");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    setReferenceId(`RC-2026-${randomCode}`);
    setSent(true);
  };

  return (
    <SiteFrame>
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-slate-50 via-white to-white py-14 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className={`${wrap} relative`}>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 sm:gap-2 rounded-2xl sm:rounded-full border border-slate-200 bg-white px-3 sm:px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm">
              <span className="size-2 shrink-0 rounded-full bg-emerald-500 animate-pulse" />
              <span>Direct Patient Desk</span>
              <span className="text-muted-foreground/60">·</span>
              <span>4 Metro OPD Centers</span>
              <span className="hidden sm:inline text-muted-foreground/60">·</span>
              <span className="hidden sm:inline">7-Day Care</span>
            </div>
            <h1 className="font-display text-3xl font-bold leading-tight text-foreground sm:text-5xl lg:leading-[1.15]">
              Connect With Our Medical Care Coordinators
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Direct communication channels for our Ranchi, Patna, Kolkata, and Delhi clinics.
              Consult with senior homeopathic practitioners in person, arrange online case triage,
              or order genuine medicines from ABHI Homeo Hall.
            </p>

            {/* Quick Reassurance Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                <Zap size={14} className="text-amber-500" />
                <span>15-Min Response Time</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                <Building2 size={14} className="text-primary" />
                <span>4 Metro OPD Centers</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                <HeartPulse size={14} className="text-accent" />
                <span>₹100 OPD Consultation</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>100% Confidential Triage</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Top High-Priority Direct Channels Strip */}
      <section className="border-b border-border bg-slate-50/70 py-10 sm:py-12">
        <div className={wrap}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Urgent OPD Helpline */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-accent/20 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-accent/40">
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent">
                  <PhoneCall size={20} />
                </span>
                <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-bold text-accent">
                  Urgent Triage
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Urgent OPD Helpline
                </h3>
                <p className="mt-1 font-display text-lg font-bold text-foreground">{urgentPhone}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Immediate phone triage for acute flare-ups and same-day clinic tokens.
                </p>
              </div>
              <Button
                asChild
                className="mt-4 h-9 w-full rounded-lg bg-accent text-xs font-bold text-white shadow-none hover:bg-accent/90"
              >
                <a href={`tel:${urgentPhone.replaceAll(" ", "")}`}>
                  <Phone size={13} className="mr-1.5" /> Call Helpline
                </a>
              </Button>
            </div>

            {/* WhatsApp Clinic Desk */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-emerald-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-emerald-400">
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
                  <MessageCircle size={20} />
                </span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                  Live Chat
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  WhatsApp Desk
                </h3>
                <p className="mt-1 font-display text-lg font-bold text-foreground">
                  +91 {whatsappPhone.slice(2)}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Send previous prescriptions, upload lab reports, or check OPD schedule.
                </p>
              </div>
              <Button
                asChild
                className="mt-4 h-9 w-full rounded-lg bg-emerald-600 text-xs font-bold text-white shadow-none hover:bg-emerald-700"
              >
                <a
                  href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hello Dr. Rajeev's Clinic, I would like to inquire about consultation and OPD timings.")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={13} className="mr-1.5" /> WhatsApp Desk
                </a>
              </Button>
            </div>

            {/* ABHI Homeo Hall Dispensary */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-blue-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-400">
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-blue-50 text-blue-600">
                  <ShoppingBag size={20} />
                </span>
                <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                  Dispensary
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Medicine Orders
                </h3>
                <p className="mt-1 font-display text-lg font-bold text-foreground">{mainPhone}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  ABHI Homeo Hall authentic German dilutions & pan-India courier delivery.
                </p>
              </div>
              <Button
                asChild
                className="mt-4 h-9 w-full rounded-lg bg-blue-600 text-xs font-bold text-white shadow-none hover:bg-blue-700"
              >
                <a href={`tel:${mainPhone.replaceAll(" ", "")}`}>
                  <Phone size={13} className="mr-1.5" /> Call Dispensary
                </a>
              </Button>
            </div>

            {/* Official Clinical Email */}
            <div className="group relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-400">
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-slate-100 text-slate-700">
                  <Mail size={20} />
                </span>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                  Official Email
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Case Summaries
                </h3>
                <p className="mt-1 font-display text-sm font-bold text-foreground break-all">
                  {clinicEmail}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                  Email diagnostic summaries, second opinions, and medical discharge cards.
                </p>
              </div>
              <Button
                asChild
                variant="outline"
                className="mt-4 h-9 w-full rounded-lg border-slate-300 bg-white text-xs font-bold text-slate-800 shadow-none hover:bg-slate-50"
              >
                <a href={`mailto:${clinicEmail}`}>
                  <Mail size={13} className="mr-1.5" /> Email Care Desk
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Grid: 4 Clinic Centers + Interactive Consultation Intake */}
      <section className={section}>
        <div className={wrap}>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] items-start">
            {/* Left Column: 4 Clinic Centers */}
            <div>
              <div className="mb-8">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <Building2 className="size-3.5 text-primary" />
                  Our Clinic Network
                </div>
                <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  OPD Clinic Centers
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Visit any of our 4 fully-equipped clinical centers for in-person consultation,
                  pulse examination, and on-site pharmacy dispensary collection.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {clinicContacts.map((clinic) => (
                  <ClinicCard key={clinic.city} clinic={clinic} />
                ))}
              </div>

              {/* Affordable Care Pledge & Sai Baba Free Thursday Banner */}
              <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="flex items-start gap-3.5">
                  <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                    <HandHeart size={18} />
                  </span>
                  <div>
                    <h4 className="font-display text-sm font-bold text-foreground">
                      Affordable Healthcare Pledge & Free Thursday OPD
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      In line with Dr. Rajeev Kumar's philanthropic vision, our standard OPD
                      consultation fee is maintained at just <strong>₹100</strong> across all
                      centers. In devotion to Sai Baba, every Thursday consultations are{" "}
                      <strong>100% free</strong> at our Ranchi center for underprivileged families.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Confidential Medical Consultation & Inquiry Desk */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-8 shadow-xl shadow-slate-100">
              <div className="flex items-center justify-between gap-3 border-b border-border pb-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                    <Stethoscope className="size-3 text-primary" />
                    Direct Consultation Desk
                  </div>
                  <h2 className="mt-2 font-display text-2xl font-bold text-foreground">
                    Send An Inquiry
                  </h2>
                </div>
                <span className="grid size-10 place-items-center rounded-2xl bg-slate-100 text-slate-700">
                  <FileText size={20} />
                </span>
              </div>

              {sent ? (
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/60 p-6 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 shadow-sm">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground">
                    Inquiry Successfully Submitted!
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-emerald-700">
                    Reference Token: {referenceId || "RC-2026-7842"}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Thank you for reaching out. Our clinical case coordinator will review your
                    request and get in touch with you shortly via phone or WhatsApp to finalize your
                    consultation time.
                  </p>

                  <div className="mt-6 space-y-2.5">
                    <Button
                      asChild
                      className="h-11 w-full rounded-xl bg-emerald-600 text-xs font-bold text-white hover:bg-emerald-700"
                    >
                      <a
                        href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(`Hi Dr. Rajeev Clinic Desk, I just submitted an inquiry (${referenceId}). Please confirm my consultation.`)}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MessageCircle size={15} className="mr-2" /> Open WhatsApp Desk Directly
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSent(false);
                        setName("");
                        setPhone("");
                        setEmail("");
                        setMessage("");
                      }}
                      className="h-11 w-full rounded-xl border-slate-200 bg-white text-xs font-bold text-slate-700 hover:bg-slate-50"
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-foreground">
                      Patient Full Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="name"
                      className="mt-1.5 h-11 rounded-xl border-slate-200 bg-slate-50/50 text-sm focus:bg-white"
                      placeholder="e.g. Priya Sharma"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-foreground">
                        WhatsApp Phone <span className="text-red-500">*</span>
                      </label>
                      <Input
                        required
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        autoComplete="tel"
                        className="mt-1.5 h-11 rounded-xl border-slate-200 bg-slate-50/50 text-sm focus:bg-white"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-foreground">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <Input
                        required
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        className="mt-1.5 h-11 rounded-xl border-slate-200 bg-slate-50/50 text-sm focus:bg-white"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-foreground">
                        Preferred Clinic Center <span className="text-red-500">*</span>
                      </label>
                      <select
                        aria-label="Preferred Clinic Center"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-sm text-foreground focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="Ranchi Flagship OPD">Ranchi Flagship OPD (Main Road)</option>
                        <option value="Patna OPD Center">Patna OPD Center (Kankarbagh)</option>
                        <option value="Kolkata OPD Desk">Kolkata OPD Desk (Salt Lake)</option>
                        <option value="Delhi NCR Consultation Hub">
                          Delhi NCR Consultation Hub (South Ext)
                        </option>
                        <option value="Online Doctor Review & Courier">
                          Online Doctor Review & Courier
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-foreground">
                        Health Concern / Department <span className="text-red-500">*</span>
                      </label>
                      <select
                        aria-label="Health Concern or Department"
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="mt-1.5 h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-sm text-foreground focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="General Medical Consultation">
                          General Medical Consultation
                        </option>
                        <option value="Autism & Pediatric Developmental Care">
                          Autism & Pediatric Care
                        </option>
                        <option value="Chronic Skin, Eczema & Psoriasis">
                          Chronic Skin & Allergies
                        </option>
                        <option value="Kidney Stones & Renal Health">
                          Kidney & Gallbladder Stones
                        </option>
                        <option value="Arthritis & Joint Disorders">Joint Pain & Arthritis</option>
                        <option value="Digestive & Liver Disorders">
                          Digestive & Liver Health
                        </option>
                        <option value="Female Health & PCOD/PCOS">Female Health & PCOD</option>
                        <option value="ABHI German Medicine Inquiries">
                          ABHI Medicine Order Inquiry
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-foreground">
                      Describe Your Symptoms or Medical Concern{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm focus:bg-white focus-visible:ring-2 focus-visible:ring-primary"
                      placeholder="Please share duration of complaints, any diagnosed conditions, or specific questions for Dr. Rajeev's team..."
                    />
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-slate-50 border border-slate-200/80 px-3.5 py-2.5 text-xs text-muted-foreground">
                    <Lock size={14} className="shrink-0 text-slate-500" />
                    <span>
                      <strong>100% Confidential:</strong> Your medical information is strictly
                      protected and shared only with our attending clinical doctors.
                    </span>
                  </div>

                  <Button
                    type="submit"
                    className="h-12 w-full rounded-xl bg-accent text-accent-foreground font-bold hover:bg-accent/90 shadow-md text-sm transition-all"
                  >
                    Submit Consultation Inquiry <ArrowRight className="size-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. What to Expect When Visiting Our OPD Centers */}
      <section className="border-t border-border bg-slate-50/70 py-16 sm:py-20">
        <div className={wrap}>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm">
              <Sparkles className="size-3.5 text-accent" />
              Clinical Experience
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
              What to Expect When Visiting Our Clinics
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              A structured, patient-centric protocol designed to uncover the root cause rather than
              merely masking symptoms.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {/* Step 1 */}
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary font-display font-bold">
                  01
                </span>
                <span className="text-[11px] font-semibold text-muted-foreground">Step 1</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                Past Records & Triage
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Bring your previous doctor prescriptions, lab diagnostics, and blood panels. Our
                coordinators organize your chronological history before the doctor consultation
                begins.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl bg-accent/10 text-accent font-display font-bold">
                  02
                </span>
                <span className="text-[11px] font-semibold text-muted-foreground">Step 2</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                Constitutional Case Taking
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                A dedicated 30–45 minute consultation exploring the totality of symptoms: physical
                ailments, emotional stress patterns, thermal sensitivities, and lifestyle factors.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="grid size-10 place-items-center rounded-xl bg-emerald-50 text-emerald-600 font-display font-bold">
                  03
                </span>
                <span className="text-[11px] font-semibold text-muted-foreground">Step 3</span>
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                Genuine German Remedies
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Your tailored remedy is dispensed directly from our licensed ABHI Homeo Hall
                pharmacy, using certified German-manufactured dilutions with precise dosage
                guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Patient FAQs Section */}
      <section className="border-t border-border bg-white py-16 sm:py-20">
        <div className={`${wrap} max-w-4xl`}>
          <div className="text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
              <BookOpen className="size-3.5 text-primary" />
              Patient Queries
            </div>
            <h2 className="mt-3 font-display text-2xl font-bold text-foreground sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Common questions regarding our clinic locations, appointments, and care protocols.
            </p>
          </div>

          <div className="mt-10">
            <Accordion type="single" collapsible className="space-y-3">
              <AccordionItem value="item-1" className="rounded-xl border border-border px-5 py-1">
                <AccordionTrigger className="text-left font-display text-base font-bold text-foreground hover:no-underline">
                  Do I need to book an appointment before visiting the clinic?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  While walk-in patients are accepted at all our centers, we strongly recommend
                  booking a token in advance via our website form, phone helpline, or WhatsApp. This
                  ensures your waiting time is minimized and our senior doctors have your medical
                  history pre-prepared.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="rounded-xl border border-border px-5 py-1">
                <AccordionTrigger className="text-left font-display text-base font-bold text-foreground hover:no-underline">
                  Are Dr. Rajeev's clinics open on Sundays?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Yes, all 4 of our OPD centers in Ranchi, Patna, Kolkata, and Delhi operate 7 days
                  a week, Monday through Sunday from 10:00 AM to 8:00 PM. Weekend slots fill
                  quickly, so booking 1–2 days prior is advised.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="rounded-xl border border-border px-5 py-1">
                <AccordionTrigger className="text-left font-display text-base font-bold text-foreground hover:no-underline">
                  What is Dr. Rajeev's Free Thursday Clinic?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Dr. Rajeev Kumar is an ardent devotee of Shirdi Sai Baba. In service to humanity,
                  he holds completely free consultations every Thursday for underprivileged and
                  needy patients at our Ranchi clinic, along with medicine subsidies.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="rounded-xl border border-border px-5 py-1">
                <AccordionTrigger className="text-left font-display text-base font-bold text-foreground hover:no-underline">
                  Can I get medicines delivered to my doorstep if I live outside these 4 cities?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Yes! Through ABHI Homeo Hall's centralized distribution network, we safely
                  dispatch authentic German homeopathic remedies, mother tinctures, and customized
                  biochemic compounds across all Indian states and pin codes via express registered
                  courier.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="rounded-xl border border-border px-5 py-1">
                <AccordionTrigger className="text-left font-display text-base font-bold text-foreground hover:no-underline">
                  Can homeopathic remedies be taken alongside allopathic medicines?
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  Yes. Classical homeopathic medicines work on the organism's vital bio-regulatory
                  force and do not interfere with conventional allopathic pharmaceuticals. Patients
                  should maintain a 30-minute interval between medicines and never abruptly stop
                  essential chronic medications (e.g. insulin or cardiac drugs) without their
                  doctor's supervision.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* 6. Immediate Assistance Bottom Banner */}
      <section className="border-t border-border bg-slate-900 py-12 text-white">
        <div className={wrap}>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="inline-block rounded-md bg-accent/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-accent">
                Immediate Patient Assistance
              </span>
              <h3 className="mt-2 font-display text-xl font-bold sm:text-2xl">
                Need Prompt Clinical Guidance Today?
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Our senior patient care coordinator is ready to answer your questions and route your
                case.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="h-11 rounded-xl bg-accent px-5 text-xs font-bold text-white shadow-none hover:bg-accent/90"
              >
                <a href={`tel:${urgentPhone.replaceAll(" ", "")}`}>
                  <Phone size={15} className="mr-2" /> Call Urgent Desk
                </a>
              </Button>
              <Button
                asChild
                className="h-11 rounded-xl bg-emerald-600 px-5 text-xs font-bold text-white shadow-none hover:bg-emerald-700"
              >
                <a
                  href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent("Hello Dr. Rajeev's Clinic, I need assistance with consultation scheduling.")}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={15} className="mr-2" /> WhatsApp Care Desk
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}

export function AutismBookPage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="Specialized Family Resource"
        title="Autism Care &amp; Holistic Guidance Book"
        description="A practical educational manual compiled by Dr. Rajeev for parents and caregivers navigating developmental and sensory challenges in children."
      />
      <section className={section}>
        <div className={`${wrap} grid gap-10 md:grid-cols-[.8fr_1.2fr] items-center`}>
          <div className="grid min-h-80 place-items-center rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-xs">
            <BookOpen size={72} strokeWidth={1.3} className="text-primary" />
          </div>
          <div className="space-y-5">
            <span className="inline-block rounded-md bg-accent/10 px-2.5 py-0.5 text-xs font-bold text-accent">
              Official Clinic Publication
            </span>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Empowering Families with Knowledge &amp; Compassion
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Learn about holistic homeopathic approaches, behavioral and dietary observation, and
              constructive home support strategies. The book serves as an educational companion
              alongside specialized developmental therapy.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                asChild
                className="bg-accent text-accent-foreground font-bold hover:bg-accent/90 shadow-md"
              >
                <a href="https://shop.rajeevclinic.com" target="_blank" rel="noreferrer">
                  <ShoppingBag className="size-4 mr-1.5" />
                  Order Book from Shop
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-300 bg-white text-slate-800 hover:bg-slate-100"
              >
                <a
                  href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
                    "Hello Dr. Rajeev's Clinic, I would like to inquire about ordering the Autism Care Book.",
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="size-4 mr-1.5 text-emerald-600" />
                  Enquire on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}

export function SheChildCarePage() {
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="Specialized Department"
        title="She &amp; Child Care — Dedicated Women &amp; Pediatric Wellness"
        description="Gentle, natural clinical protocols for adolescent, maternal, hormonal, and early childhood health."
      />
      <section className={section}>
        <div className={`${wrap} grid gap-12 lg:grid-cols-[1fr_.85fr]`}>
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">
              Care Shaped Around Family Life
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Women's hormonal health, menstrual irregularities, PCOD/PCOS, and pediatric complaints
              like recurring childhood coughs, allergies, and dentition troubles require patient,
              constitutional consideration rather than aggressive chemical suppression.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Our clinical team conducts empathetic, confidential consultations in a comfortable
              environment for mothers, young women, and children.
            </p>
            <div className="pt-2">
              <PrimaryLink to="/appointments">
                <CalendarDays className="size-4" />
                Schedule Women &amp; Child Consultation
              </PrimaryLink>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="font-display text-xl font-bold text-foreground">
              Common Areas of Focus
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {[
                "PCOD / PCOS and Menstrual Cycle Harmony",
                "Perimenopausal & Hormonal Transitions",
                "Pediatric Recurrent Colds, Sinus & Tonsillitis",
                "Infant & Child Digestive Sensitivity",
                "Childhood Skin Conditions (Eczema, Cradle Cap)",
              ].map((item) => (
                <li key={item} className="flex gap-2.5">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}

const policyCopy: Record<
  string,
  { title: string; description: string; sections: { heading: string; body: string }[] }
> = {
  privacy: {
    title: "Privacy Policy",
    description: "How Dr. Rajeev's Clinic respects and safeguards your health data.",
    sections: [
      {
        heading: "Collection of Information",
        body: "Patient contact information and medical concerns shared through our inquiry forms are used solely to coordinate your clinical appointments and facilitate healthcare advice.",
      },
      {
        heading: "Confidentiality & Security",
        body: "We implement secure administrative procedures to ensure your personal health consultations remain private and are accessible only to treating practitioners and authorized coordinators.",
      },
      {
        heading: "Inquiries",
        body: `For privacy-related questions, email us at ${clinicEmail}.`,
      },
    ],
  },
  terms: {
    title: "Terms of Use",
    description: "Guidelines and legal terms governing the use of this clinic website.",
    sections: [
      {
        heading: "Educational Purpose Only",
        body: "The content provided on this website is for general informational awareness. It is not intended to substitute for personal medical diagnosis or treatment by a qualified doctor.",
      },
      {
        heading: "Clinical Appointments",
        body: "Form submissions represent appointment requests. Exact consultation timings and dispensary pickup slots are confirmed by our clinical desk.",
      },
    ],
  },
  refund: {
    title: "Cancellation & Refund Policy",
    description: "Our policies regarding consultation appointments and medicine orders.",
    sections: [
      {
        heading: "Appointment Rescheduling",
        body: "Patients may reschedule their in-clinic OPD consultation by giving at least 24 hours notice to the clinic desk.",
      },
      {
        heading: "Medicine Dispensary Orders",
        body: "Remedies prepared by ABHI HOMEO HALL are individualized constitutional preparations and are dispensed upon prescription review.",
      },
    ],
  },
};

export function PolicyPage({ policy }: { policy: "privacy" | "terms" | "refund" }) {
  const content = policyCopy[policy];
  return (
    <SiteFrame>
      <PageIntro
        eyebrow="Legal & Administrative"
        title={content.title}
        description={content.description}
      />
      <section className={section}>
        <div className={`${wrap} max-w-4xl space-y-8`}>
          {content.sections.map((sec) => (
            <div
              key={sec.heading}
              className="rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-8"
            >
              <h2 className="font-display text-xl font-bold text-foreground">{sec.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {sec.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SiteFrame>
  );
}

export const LegalPage = PolicyPage;
