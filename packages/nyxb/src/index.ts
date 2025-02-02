#!/usr/bin/env node
import { Command } from "commander"
import { add } from "~/src/commands/add"
import { build } from "~/src/commands/build"
import { diff } from "~/src/commands/diff"
import { info } from "~/src/commands/info"
import { init } from "~/src/commands/init"
import { migrate } from "~/src/commands/migrate"
import { template } from "~/src/commands/template"
import packageJson from "../package.json"

process.on("SIGINT", () => process.exit(0))
process.on("SIGTERM", () => process.exit(0))

async function main() {
   const program = new Command()
      .name("nyxb")
      .description("add components and dependencies to your project")
      .version(
         packageJson.version || "1.0.0",
         "-v, --version",
         "display the version number",
      )

   program
      .addCommand(init)
      .addCommand(add)
      .addCommand(diff)
      .addCommand(migrate)
      .addCommand(template)
      .addCommand(info)
      .addCommand(build)

   program.parse()
}

main()

export * from "./registry/api"
