import { atom, useAtom } from 'jotai'

import type { Mail } from '~/app/(app)/examples/mail/data'
import { mails } from '~/app/(app)/examples/mail/data'

interface Config {
   selected: Mail['id'] | null
}

const configAtom = atom<Config>({
   selected: mails[0].id,
})

export function useMail() {
   return useAtom(configAtom)
}
