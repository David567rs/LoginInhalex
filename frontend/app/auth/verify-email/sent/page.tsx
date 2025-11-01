import { Suspense } from "react"
import VerifyEmailSent from "@/components/auth/verify-email-sent"

export const dynamic = "force-dynamic"

export default function VerifyEmailSentPage() {
  return (
    <Suspense fallback={<div className="text-center text-muted-foreground p-10">Cargando…</div>}>
      <VerifyEmailSent />
    </Suspense>
  )
}
