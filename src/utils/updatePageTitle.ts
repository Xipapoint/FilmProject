export const updatePageTitle = (title: string) => {
    const base = "FilmTime"

    if (title) {
        document.title = `${title} | ${base}`
    } else {
        document.title = base
    }
}