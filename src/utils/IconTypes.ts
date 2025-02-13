const materialSymbolIcons = [
    "material-symbols:movie",
    "material-symbols:trending-up-rounded",
    "material-symbols:favorite",
    "material-symbols:event-upcoming"
] as const

export type IconName = (typeof materialSymbolIcons)[number]