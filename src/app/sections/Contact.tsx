import React from 'react'
import ImageTextContact from '../components/ImageTextContact'
import texts from '../../content/texts.json'
import { buildWhatsAppLink } from '../../utils/whatsapp'

type Props = {}

const Contact = (props: Props) => {
    const dev = process.env.NODE_ENV === 'development'
    const warnMissing = (key: string) => {
        if (dev) {
            console.warn(`[contact] Missing key: ${key}`)
        }
    }
    const getText = (value: string | undefined, key: string) => {
        if (!value) {
            warnMissing(key)
            return ''
        }
        return value
    }

    const contact = texts?.contact
    if (!contact) {
        warnMissing('contact')
    }

    const title = contact?.title ?? {}
    const panel = contact?.panel ?? {}
    const image = contact?.image ?? {}
    const chips = Array.isArray(contact?.chips) ? contact?.chips : []
    if (!Array.isArray(contact?.chips)) {
        warnMissing('contact.chips')
    }

    const phone = getText(panel.phone, 'contact.panel.phone')
    const panelMessage = getText(panel.waText, 'contact.panel.waText')
    const panelLink = buildWhatsAppLink(phone, panelMessage)

    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:items-center'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <p className='text-xs uppercase tracking-[0.4em] text-[#6e6254]'>{getText(contact?.badge, 'contact.badge')}</p>
                        <h2 className='mt-3 text-3xl md:text-5xl font-title text-[#1b1916]'>
                            {getText(title.prefix, 'contact.title.prefix')}
                            <span className='color-text-beige'>{getText(title.accent, 'contact.title.accent')}</span>
                        </h2>
                        <p className='mt-4 text-[#3f3831] text-base md:text-lg leading-relaxed'>
                            {getText(contact?.description, 'contact.description')}
                        </p>
                    </div>
                    <div className='relative -mt-2 md:-mt-6'>
                        <ImageTextContact alt={getText(image.alt, 'contact.image.alt')}></ImageTextContact>
                    </div>
                </div>

                <div className='rounded-[2.5rem] bg-[#141311] text-white p-6 md:p-10 shadow-[0_22px_60px_rgba(0,0,0,0.35)] border border-white/10'>
                    <div className='flex flex-col gap-6'>
                        <div>
                            <p className='text-xs uppercase tracking-[0.3em] text-[#c8ab88]'>{getText(panel.badge, 'contact.panel.badge')}</p>
                            <h3 className='mt-3 text-2xl md:text-3xl font-title'>{getText(panel.title, 'contact.panel.title')}</h3>
                            <p className='mt-3 text-white/70 text-sm md:text-base leading-relaxed'>
                                {getText(panel.subtitle, 'contact.panel.subtitle')}
                            </p>
                        </div>

                        <div className='flex flex-wrap gap-2'>
                            {chips.map((chip, index) => {
                                const chipLabel = getText(chip?.label, `contact.chips.${index}.label`)
                                const chipMessage = getText(chip?.waText, `contact.chips.${index}.waText`)
                                const chipLink = buildWhatsAppLink(phone, chipMessage)

                                return (
                                    <a
                                        key={`chip-${index}`}
                                        href={chipLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className='inline-flex items-center justify-center rounded-full border border-[#c8ab88]/25 bg-white/5 px-4 py-2 text-xs md:text-sm font-semibold text-[#f3eadb] transition hover:border-[#c8ab88]/60 hover:bg-[#c8ab88]/15'
                                    >
                                        {chipLabel}
                                    </a>
                                )
                            })}
                        </div>

                        <div className='rounded-[28px] bg-white/5 border border-[#c8ab88]/20 px-4 py-4 md:px-5 md:py-4 flex flex-col md:flex-row md:items-center gap-4'>
                            <div className='flex items-center gap-3 flex-1'>
                                <span className='flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/15 border border-[#25D366]/30'>
                                    <span className='h-3 w-3 rounded-full bg-[#25D366]'></span>
                                </span>
                                <div>
                                    <p className='text-xs uppercase tracking-[0.22em] text-white/55'>{getText(panel.whatsappLabel, 'contact.panel.whatsappLabel')}</p>
                                    <p className='text-lg md:text-xl font-semibold text-white'>{phone}</p>
                                </div>
                            </div>
                            <a
                                href={panelLink}
                                target="_blank"
                                rel="noreferrer"
                                className='w-full md:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm md:text-base font-semibold text-[#0b0f0c] shadow-[0_10px_25px_rgba(37,211,102,0.35)] transition hover:bg-[#38e377]'
                            >
                                {getText(panel.ctaLabel, 'contact.panel.ctaLabel')}
                            </a>
                        </div>

                        <p className='text-xs text-white/60'>{getText(panel.microcopy, 'contact.panel.microcopy')}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
