import { Golos_Text, Inter } from 'next/font/google'

export const inter = Inter({
    subsets: ['cyrillic'],
    variable: '--font-inter',
    display: 'swap'
})

export const golos_text = Golos_Text({
    subsets: ['cyrillic'],
    variable: '--font-golos-text',
    display: 'swap'
})