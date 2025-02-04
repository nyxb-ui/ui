/* eslint-disable no-console */
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { z } from "zod"

import { octokit } from "~/lib/octokit"

const bodySchema = z.object({
   owner: z.string(),
   repo: z.string(),
})

export async function POST(request: NextRequest) {
   const body = await request.json()
   try {
      const { owner, repo } = bodySchema.parse(body)
      console.log("Owner:", owner)
      console.log("Repo:", repo)

      const response = await octokit.request(
         "GET /repos/{owner}/{repo}/zipball",
         {
            owner,
            repo,
            headers: {
               "X-GitHub-Api-Version": "2022-11-28",
            },
         },
      )

      if (response.status !== 200) {
         console.error("GitHub API Error:", response.status, response.data)
         return NextResponse.json(
            { success: false, error: "GitHub API request failed" },
            { status: 500 },
         )
      }

      console.log("GitHub API response:", response)

      const status = response.status
      const downloadUrl = response.url
      console.log("Download URL:", downloadUrl)

      return NextResponse.json({ success: true, status, downloadUrl })
   } catch (error: any) {
      console.error("Error in /api/repo/download:", error)
      return NextResponse.json(
         { success: false, error: error.message },
         { status: 500 },
      )
   }
}

POST.config = {
   api: {
      bodyParser: false,
      externalResolver: true,
   },
}
