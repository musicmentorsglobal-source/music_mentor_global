import { FormEvent, useMemo, useState } from "react";
import MusicCornerDecor from "@/components/MusicCornerDecor";
import { Button } from "@/components/ui/button";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  notes: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  notes: "",
};

const ContactDetailsSection = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = useMemo(
    () => (data: FormValues): FormErrors => {
      const nextErrors: FormErrors = {};
      const trimmedName = data.name.trim();
      const trimmedEmail = data.email.trim();
      const trimmedPhone = data.phone.trim();
      const trimmedNotes = data.notes.trim();

      if (!trimmedName) {
        nextErrors.name = "Name is required.";
      } else if (trimmedName.length < 2 || trimmedName.length > 50) {
        nextErrors.name = "Name must be between 2 and 50 characters.";
      } else if (!/^[A-Za-z\s]+$/.test(trimmedName)) {
        nextErrors.name = "Name must contain only letters and spaces.";
      }

      if (!trimmedEmail) {
        nextErrors.email = "Email is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(trimmedEmail)) {
        nextErrors.email = "Enter a valid email address.";
      }

      if (!trimmedPhone) {
        nextErrors.phone = "Phone number is required.";
      } else if (!/^[6-9]\d{9}$/.test(trimmedPhone)) {
        nextErrors.phone = "Enter a valid Indian 10-digit mobile number.";
      }

      if (trimmedNotes) {
        if (trimmedNotes.length < 5 || trimmedNotes.length > 2000) {
          nextErrors.notes = "Notes must be between 5 and 2000 characters when provided.";
        }
      }

      return nextErrors;
    },
    []
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    const hasErrors = Object.keys(nextErrors).length > 0;
    setSubmitted(!hasErrors);
    if (!hasErrors) {
      setValues(initialValues);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 bg-[#f3f1ee] overflow-hidden">
      <MusicCornerDecor />
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-3xl border border-white/80 bg-white/85 backdrop-blur-sm shadow-[0_20px_36px_rgba(84,69,111,0.12)] p-6 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#54456f] text-center mb-8">
            Contact Details
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#54456f] mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={values.name}
                onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))}
                className="w-full rounded-xl border border-[#d9d1df] bg-white px-4 py-3 text-[#54456f] placeholder:text-[#8a81a0] focus:outline-none focus:ring-2 focus:ring-primary/35"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#54456f] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
                  className="w-full rounded-xl border border-[#d9d1df] bg-white px-4 py-3 text-[#54456f] placeholder:text-[#8a81a0] focus:outline-none focus:ring-2 focus:ring-primary/35"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#54456f] mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  value={values.phone}
                  onChange={(e) => setValues((prev) => ({ ...prev, phone: e.target.value.replace(/\D/g, "") }))}
                  className="w-full rounded-xl border border-[#d9d1df] bg-white px-4 py-3 text-[#54456f] placeholder:text-[#8a81a0] focus:outline-none focus:ring-2 focus:ring-primary/35"
                  placeholder="Enter 10-digit mobile number"
                />
                {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-semibold text-[#54456f] mb-2">
                Notes (Optional)
              </label>
              <textarea
                id="notes"
                rows={5}
                value={values.notes}
                onChange={(e) => setValues((prev) => ({ ...prev, notes: e.target.value }))}
                className="w-full rounded-xl border border-[#d9d1df] bg-white px-4 py-3 text-[#54456f] placeholder:text-[#8a81a0] focus:outline-none focus:ring-2 focus:ring-primary/35 resize-y"
                placeholder="Write your notes here..."
              />
              {errors.notes && <p className="text-sm text-red-600 mt-1">{errors.notes}</p>}
            </div>

            <div className="pt-2 flex justify-center">
              <Button
                type="submit"
                className="bg-primary text-primary-foreground rounded-full px-10 py-6 text-sm md:text-base font-semibold uppercase tracking-wider hover:bg-primary/90"
              >
                Subscribe
              </Button>
            </div>

            {submitted && (
              <p className="text-center text-sm text-green-700 font-medium">
                Details submitted successfully.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsSection;
