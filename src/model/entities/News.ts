
// super simplified
export interface News {
    title: string, // i.e. "Nouveau programme de fidélité"
    body: string,
    linkText: string, // i.e. "voir plus"
    linkPath: string, // i.e. {Server.STATIC_ROOT}/news/{title}
    iconName: string // material icon name, i.e. "eye"
}
