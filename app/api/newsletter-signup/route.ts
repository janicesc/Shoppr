import { NextResponse } from "next/server"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { ok: false, error: "Server is missing Supabase configuration." },
      { status: 500 }
    )
  }

  try {
    const body = (await request.json()) as { email?: string }
    const normalizedEmail = (body.email ?? "").trim().toLowerCase()

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 })
    }

    const response = await fetch(`${supabaseUrl}/rest/v1/newsletter_signups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email: normalizedEmail }),
    })

    if (response.ok) {
      return NextResponse.json({ ok: true, duplicate: false })
    }

    const errorBody = (await response.json().catch(() => null)) as { code?: string } | null
    if (errorBody?.code === "23505") {
      // Already subscribed; keep UX positive.
      return NextResponse.json({ ok: true, duplicate: true })
    }

    return NextResponse.json({ ok: false, error: "Could not save your signup right now." }, { status: 500 })
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request payload." }, { status: 400 })
  }
}
