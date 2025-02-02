import WordRotate from "~/registry/miami/ui/word-rotate"

export default async function WordRotateDemo() {
   return (
      <WordRotate
         className="text-4xl font-bold text-black dark:text-white"
         words={["Word", "Rotate"]}
      />
   )
}
