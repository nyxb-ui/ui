import WordPullUp from '~/registry/miami/ui/word-pull-up'

export default async function WordPullUpDemo() {
   return (
      <WordPullUp
         className="text-4xl font-bold tracking-[-0.02em] text-black md:text-7xl md:leading-[5rem] dark:text-white"
         words="Word Pull Up"
      />
   )
}
