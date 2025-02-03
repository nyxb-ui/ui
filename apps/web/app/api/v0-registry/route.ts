import { NextResponse } from "next/server"

export async function POST(request: Request) {
   try {
      const registryItem = await request.json()

      // Create a temporary URL for the modified registry item
      const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3333"
      const tempId = Math.random().toString(36).substring(7)
      const tempUrl = `${baseUrl}/api/v0-registry/${tempId}`

      // Store the registry item in memory (or you could use Redis/other storage)
      tempRegistry.set(tempId, registryItem)

      // Set cleanup timeout (e.g., 5 minutes)
      setTimeout(
         () => {
            tempRegistry.delete(tempId)
         },
         5 * 60 * 1000,
      )

      return NextResponse.json({ url: tempUrl })
   } catch (error) {
      return NextResponse.json(
         { error: "Failed to process registry item" },
         { status: 500 },
      )
   }
}

// In-memory storage for temporary registry items
const tempRegistry = new Map<string, any>()

export async function GET(request: Request) {
   try {
      const url = new URL(request.url)
      const tempId = url.pathname.split("/").pop()

      if (!tempId || !tempRegistry.has(tempId)) {
         return NextResponse.json(
            { error: "Registry item not found" },
            { status: 404 },
         )
      }

      const registryItem = tempRegistry.get(tempId)
      return NextResponse.json(registryItem)
   } catch (error) {
      return NextResponse.json(
         { error: "Failed to retrieve registry item" },
         { status: 500 },
      )
   }
}
