import type { FormEvent } from "react";
import { useState } from "react";
import { Mail, MessageSquare, Send } from "lucide-react";
import { toast } from "react-hot-toast";

export default function Contact() {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const submit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        const formData = new FormData(form);

        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        try {
            setLoading(true);

            const response = await fetch(
                "http://localhost:5001/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        message,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to send message");
            }

            setSent(true);
            form.reset();

            toast.success("Message sent successfully!");

        } catch (error) {
            console.error("Contact form error:", error);

            toast.error(
                error instanceof Error
                    ? error.message
                    : "Failed to send message"
            );

        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="pt-28">
            <section className="px-4 py-20 sm:px-6 sm:py-28">
                <div className="mx-auto max-w-5xl">
                    <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr] lg:items-start">

                        <div>
                            <p className="eyebrow">Contact</p>

                            <h1 className="text-5xl font-semibold tracking-[-.04em] sm:text-6xl">
                                Let’s talk about{" "}
                                <span className="gradient-text dm-serif italic font-normal">
                                    SEO.
                                </span>
                            </h1>

                            <p className="section-copy mt-6">
                                Have a question, feature idea or feedback?
                                Send a message and we’ll get back to you.
                            </p>

                            <div className="mt-8 space-y-3">
                                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                                    <Mail
                                        className="text-accent"
                                        size={19}
                                    />

                                    <span className="text-sm">
                                        anik.kumar.iiitr@gmail.com
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
                                    <MessageSquare
                                        className="text-accent"
                                        size={19}
                                    />

                                    <span className="text-sm">
                                        Product feedback & feature requests
                                    </span>
                                </div>
                            </div>
                        </div>

                        <form
                            onSubmit={submit}
                            className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-black/5 sm:p-8"
                        >
                            <div className="grid gap-5 sm:grid-cols-2">

                                <label className="text-sm font-medium">
                                    Name

                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                                        placeholder="Your name"
                                    />
                                </label>

                                <label className="text-sm font-medium">
                                    Email

                                    <input
                                        required
                                        name="email"
                                        type="email"
                                        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                                        placeholder="you@example.com"
                                    />
                                </label>

                            </div>

                            <label className="mt-5 block text-sm font-medium">
                                Message

                                <textarea
                                    required
                                    name="message"
                                    rows={6}
                                    className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent"
                                    placeholder="How can we help?"
                                />
                            </label>

                            <button
                                type="submit"
                                disabled={loading || sent}
                                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-foreground py-3.5 text-sm font-semibold text-background disabled:opacity-60"
                            >
                                {loading
                                    ? "Sending..."
                                    : sent
                                    ? "Message sent"
                                    : "Send message"}

                                {!loading && !sent && <Send size={15} />}
                            </button>

                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}