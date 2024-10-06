
            'use client'

            import Link from "next/link"

            export default function Component() {
              return (<nav
                  className="text-muted-foreground grid gap-4 text-sm" x-chunk="dashboard-04-chunk-0"
               >
                  <Link href="#" className="text-primary font-semibold">
                     General
                  </Link>
                  <Link href="#">Security</Link>
                  <Link href="#">Integrations</Link>
                  <Link href="#">Support</Link>
                  <Link href="#">Organizations</Link>
                  <Link href="#">Advanced</Link>
               </nav>)
            }