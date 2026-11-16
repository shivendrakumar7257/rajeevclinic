import { useMemo, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  CheckCircle,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { clinicContacts, whatsappPhone } from "@/data/clinic";
import { conditions, getConditionImage } from "@/data/conditions";

const labelStyle = "mb-1.5 block text-xs font-semibold text-foreground";
const fieldStyle =
  "h-11 rounded-lg border-border bg-background text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

export function ClinicCard({ clinic }: { clinic: (typeof clinicContacts)[number] }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl hover:border-primary/50 transform-gpu cursor-pointer">
      {/* Top Brand Accent Line */}
      <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary via-primary to-accent" />

      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-block rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
            {'tag' in clinic && clinic.tag ? clinic.tag : "OPD Center"}
          </span>
          <h3 className="mt-2 font-display text-xl font-bold text-foreground">
            {clinic.city}
          </h3>
        </div>
        <span className="grid size-9 place-items-center rounded-full border border-slate-200 bg-slate-100 text-slate-700">
          <Building2 size={18} />
        </span>
      </div>

      <p className="mt-3 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
        <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
        {clinic.address}
      </p>

      {'features' in clinic && Array.isArray(clinic.features) && clinic.features.length > 0 && (
        <div className="mt-2.5 flex flex-wrap gap-1.5">
          {clinic.features.map((feat: string) => (
            <span
              key={feat}
              className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600"
            >
              {feat}
            </span>
          ))}
        </div>
      )}

      <div className="mt-3 flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700">
        <Clock3 size={14} className="text-slate-500" />
        <span>Mon–Sun · 10:00 AM–8:00 PM</span>
      </div>

      <a
        href={`tel:${clinic.phone.replaceAll(" ", "")}`}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
      >
        <Phone size={15} />
        {clinic.phone}
      </a>

      <div className="mt-auto flex gap-2.5 pt-6">
        <Button asChild className="h-10 flex-1 bg-accent text-white font-bold hover:bg-accent/90 shadow-none rounded-lg text-xs">
          <a href={`tel:${clinic.phone.replaceAll(" ", "")}`}>
            <Phone className="size-3.5" />
            Call OPD
          </a>
        </Button>
        <Button asChild variant="outline" className="h-10 flex-1 border-slate-200 bg-white text-slate-800 hover:bg-slate-100 font-bold rounded-lg text-xs">
          <a href={clinic.directions} target="_blank" rel="noreferrer">
            <MapPin className="size-3.5 text-slate-600" />
            Directions
          </a>
        </Button>
      </div>
    </article>
  );
}

type AppointmentValues = {
  consultation: string;
  city: string;
  concern: string;
  description: string;
  name: string;
  phone: string;
  email: string;
  gender: string;
  date: string;
  time: string;
};

export function AppointmentForm({ compact = false }: { compact?: boolean }) {
  const [values, setValues] = useState<AppointmentValues>({
    consultation: "In-Clinic OPD",
    city: "Ranchi",
    concern: "",
    description: "",
    name: "",
    phone: "",
    email: "",
    gender: "Female",
    date: new Date().toISOString().slice(0, 10),
    time: "10:00 AM - 12:00 PM (Morning)",
  });
  const [submitted, setSubmitted] = useState(false);
  const [statusPhone, setStatusPhone] = useState("");
  const [statusShown, setStatusShown] = useState(false);

  const onField =
    (key: keyof AppointmentValues) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setValues((current) => ({ ...current, [key]: event.target.value }));

  const setChoice = (key: keyof AppointmentValues, value: string) =>
    setValues((current) => ({ ...current, [key]: value }));

  const visibleConditions = useMemo(() => conditions.slice(0, 30), []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center sm:p-8 shadow-sm">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-accent text-white shadow-md">
          <Check size={28} />
        </span>
        <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
          Thank you, {values.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Your request for an <strong className="text-foreground">{values.consultation}</strong> in{" "}
          <strong className="text-foreground">{values.city}</strong> has been received. Our clinic
          care coordinator will call you to confirm your slot.
        </p>
        <div className="mx-auto mt-6 max-w-sm rounded-lg border border-border bg-card p-4 text-left text-sm shadow-xs">
          <p className="flex justify-between py-1 border-b border-border/50">
            <span className="text-muted-foreground">Concern:</span>
            <span className="font-medium text-foreground">{values.concern || "General Consultation"}</span>
          </p>
          <p className="flex justify-between py-1 border-b border-border/50">
            <span className="text-muted-foreground">Preferred:</span>
            <span className="font-medium text-foreground">{values.date} · {values.time}</span>
          </p>
          <p className="flex justify-between py-1">
            <span className="text-muted-foreground">Phone:</span>
            <span className="font-medium text-foreground">{values.phone}</span>
          </p>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition-all"
            href={`https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
              `Hello Dr. Rajeev's Clinic, I submitted an appointment request for ${values.name} (${values.city}).`
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} />
            Quick Confirm on WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
          >
            New Request
          </button>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Demo request only; an advisor will reach out to verify and finalize your booking.
        </p>
      </div>
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 1-Step Unified Appointment Booking Form */}
        <div>
          <span className={labelStyle}>Consultation Mode</span>
          <div className="grid grid-cols-2 gap-3 mt-1.5">
            {[
              { name: "In-Clinic OPD", icon: Building2, desc: "In-person consultation" },
              { name: "Senior Doctor Review", icon: Stethoscope, desc: "Complete case review" },
            ].map((item) => {
              const Icon = item.icon;
              const active = values.consultation === item.name;
              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setChoice("consultation", item.name)}
                  className={`flex flex-col items-center justify-center rounded-xl border p-3.5 text-center transition-colors ${
                    active
                      ? "border-primary bg-slate-50 font-bold text-primary shadow-xs ring-2 ring-primary/30"
                      : "border-slate-200 bg-white text-slate-800 hover:border-primary/50 hover:bg-slate-50"
                  }`}
                >
                  <Icon className={`size-5 mb-1 ${active ? "text-primary" : "text-muted-foreground"}`} />
                  <span className="text-xs sm:text-sm font-semibold">{item.name}</span>
                  <span className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Location & Concern */}
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={labelStyle}>
            Preferred Clinic City *
            <select
              required
              value={values.city}
              onChange={onField("city")}
              className={`mt-1.5 w-full border px-3 ${fieldStyle}`}
            >
              {clinicContacts.map((clinic) => (
                <option key={clinic.city} value={clinic.city}>
                  {clinic.city} OPD Center
                </option>
              ))}
            </select>
          </label>

          <label className={labelStyle}>
            Main Health Concern / Specialty *
            <select
              required
              value={values.concern}
              onChange={onField("concern")}
              className={`mt-1.5 w-full border px-3 ${fieldStyle}`}
            >
              <option value="">Select a condition or specialty</option>
              {visibleConditions.map((condition) => (
                <option key={condition.slug} value={condition.name}>
                  {condition.name} ({condition.category})
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Patient Contact Info */}
        <div className="grid gap-4 sm:grid-cols-2">
          <label className={labelStyle}>
            Full Name *
            <Input
              required
              autoComplete="name"
              value={values.name}
              onChange={onField("name")}
              className={`${fieldStyle} mt-1.5`}
              placeholder="Patient full name"
            />
          </label>

          <label className={labelStyle}>
            Mobile Number (WhatsApp) *
            <Input
              required
              type="tel"
              autoComplete="tel"
              pattern="[+0-9 ()-]{8,}"
              value={values.phone}
              onChange={onField("phone")}
              className={`${fieldStyle} mt-1.5`}
              placeholder="+91 98765 43210"
            />
          </label>

          <label className={labelStyle}>
            Email Address *
            <Input
              required
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={onField("email")}
              className={`${fieldStyle} mt-1.5`}
              placeholder="email@example.com"
            />
          </label>

          <label className={labelStyle}>
            Gender *
            <select
              required
              value={values.gender}
              onChange={onField("gender")}
              className={`mt-1.5 w-full border px-3 ${fieldStyle}`}
            >
              <option>Female</option>
              <option>Male</option>
              <option>Child</option>
              <option>Prefer not to say</option>
              <option>Other</option>
            </select>
          </label>

          <label className={labelStyle}>
            Preferred Date *
            <Input
              required
              type="date"
              min={new Date().toISOString().slice(0, 10)}
              value={values.date}
              onChange={onField("date")}
              className={`${fieldStyle} mt-1.5`}
            />
          </label>

          <label className={labelStyle}>
            Preferred Time Slot *
            <select
              required
              value={values.time}
              onChange={onField("time")}
              className={`mt-1.5 w-full border px-3 ${fieldStyle}`}
            >
              {[
                "10:00 AM - 12:00 PM (Morning)",
                "12:00 PM - 02:00 PM (Noon)",
                "02:00 PM - 04:00 PM (Afternoon)",
                "04:00 PM - 06:00 PM (Evening)",
                "06:00 PM - 08:00 PM (Late Evening)",
              ].map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Symptoms or Notes */}
        <label className={labelStyle}>
          Brief Health History or Symptoms (Optional)
          <Textarea
            value={values.description}
            onChange={onField("description")}
            placeholder="Describe your symptoms, how long you've experienced them, or specific questions..."
            className="mt-1.5 min-h-20 rounded-lg border-border bg-background text-sm"
          />
        </label>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            className="w-full h-12 bg-accent text-accent-foreground font-bold text-sm sm:text-base hover:bg-accent/90 rounded-xl transition-colors shadow-none"
          >
            Confirm OPD Appointment Request <ArrowRight className="size-4 ml-1.5" />
          </Button>
          <p className="mt-2 text-center text-xs text-muted-foreground">
            Our clinic care coordinator will promptly call or WhatsApp you to confirm your consultation schedule.
          </p>
        </div>
      </form>

      {!compact && (
        <div className="mt-8 border-t border-border pt-6">
          <form
            className="flex flex-wrap items-end gap-2"
            onSubmit={(event) => {
              event.preventDefault();
              setStatusShown(true);
            }}
          >
            <label className="min-w-0 flex-1 text-xs font-semibold">
              Track Existing Appointment Status
              <Input
                type="tel"
                required
                pattern="[+0-9 ()-]{8,}"
                value={statusPhone}
                onChange={(event) => setStatusPhone(event.target.value)}
                placeholder="Enter your registered phone number"
                className={`${fieldStyle} mt-1`}
              />
            </label>
            <Button type="submit" variant="outline" className="h-11">
              Check Status
            </Button>
          </form>
          {statusShown && (
            <div className="mt-3 rounded-lg border border-slate-200 bg-slate-50 p-3 text-xs text-slate-700 flex items-center justify-between">
              <span>Appointment status lookup active. Contact clinic desk for immediate priority routing.</span>
              <a href={`tel:${clinicContacts[0].phone.replaceAll(" ", "")}`} className="font-bold text-primary underline">
                Call Clinic
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export function GoogleLogoIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export function ReviewCard({
  review,
}: {
  review: {
    name: string;
    city: string;
    condition: string;
    excerpt: string;
    rating?: number;
    timeAgo?: string;
    avatar?: string;
    verified?: boolean;
  };
}) {
  const [imgError, setImgError] = useState(false);
  const initials = review.name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-md select-none text-slate-900">
      {/* Top Header: Reviewer Image + Name + Google Logo */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {review.avatar && !imgError ? (
            <img
              src={review.avatar}
              alt={review.name}
              onError={() => setImgError(true)}
              className="size-12 rounded-full object-cover border-2 border-primary/20 shadow-xs"
              loading="lazy"
            />
          ) : (
            <div className="grid size-12 place-items-center rounded-full bg-gradient-to-tr from-primary to-accent text-white font-bold text-sm shadow-xs">
              {initials}
            </div>
          )}
          <div>
            <h4 className="font-display text-base font-bold text-slate-900 leading-tight">
              {review.name}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1.5 font-medium">
              <span>{review.city}</span>
              {review.timeAgo && (
                <>
                  <span>•</span>
                  <span>{review.timeAgo}</span>
                </>
              )}
            </p>
          </div>
        </div>

        {/* Google G logo with Verified pill */}
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
            <GoogleLogoIcon className="size-3.5" />
            <span>Google</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
            <CheckCircle size={11} /> Verified
          </span>
        </div>
      </div>

      {/* 5 Stars Rating Bar */}
      <div className="mt-4 flex items-center gap-2">
        <div className="flex gap-0.5 text-amber-500" aria-label="5 Star Rating">
          {[...Array(review.rating ?? 5)].map((_, i) => (
            <Star key={i} size={15} fill="currentColor" />
          ))}
        </div>
        <span className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-bold text-slate-700">
          {review.condition}
        </span>
      </div>

      {/* Review Text: Clean, High Readability, NO BLUR */}
      <p className="mt-3.5 flex-1 text-sm leading-relaxed text-slate-700 line-clamp-4">
        "{review.excerpt}"
      </p>

      {/* Footer Tag */}
      <div className="mt-4 border-t border-slate-100 pt-3 flex items-center justify-between text-[11px] text-slate-500 font-medium">
        <span>Verified Google Patient</span>
        <span className="text-primary font-bold">Dr. Rajeev's Clinic</span>
      </div>
    </article>
  );
}

export function ConditionCard({
  name,
  slug,
  category,
  image,
  summary,
  tags,
}: {
  name: string;
  slug: string;
  category?: string;
  image?: string;
  summary?: string;
  tags?: string[];
}) {
  const displayImage = image || getConditionImage(slug, category);

  return (
    <Link
      to="/conditions/$slug"
      params={{ slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-primary/50 transform-gpu cursor-pointer"
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={displayImage}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
        {category && (
          <span className="absolute top-3 left-3 rounded-full bg-white/95 px-2.5 py-0.5 text-[11px] font-bold text-primary shadow-xs backdrop-blur-xs">
            {category}
          </span>
        )}
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="font-display text-base font-bold text-white drop-shadow-sm group-hover:text-primary-foreground transition-colors">
            {name}
          </h3>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-4 bg-white">
        <div>
          {summary ? (
            <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {summary}
            </p>
          ) : (
            <p className="text-xs text-muted-foreground">
              Evidence-conscious holistic homeopathic protocol &amp; OPD care.
            </p>
          )}

          {tags && tags.length > 0 && (
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mt-3.5 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-primary">
          <span>View Care Protocol</span>
          <span className="grid size-6 place-items-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
            <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </Link>
  );
}
