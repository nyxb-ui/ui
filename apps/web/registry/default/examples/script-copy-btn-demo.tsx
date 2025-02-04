import { ScriptCopyBtn } from "~/registry/default/ui/script-copy-btn"

export default function ScriptCopyBtnDemo() {
   const customCommandMap = {
      npm: "npm run nyxb add button",
      yarn: "yarn nyxb add button",
      pnpm: "pnpm dlx nyxb@latest add button",
      bun: "bun x nyxb@latest add button",
   }
   return (
      <ScriptCopyBtn
         showMultiplePackageOptions={true}
         codeLanguage="shell"
         lightTheme="nord"
         darkTheme="vitesse-dark"
         commandMap={customCommandMap}
      />
   )
}
