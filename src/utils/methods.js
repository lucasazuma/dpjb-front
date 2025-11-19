export const TranslateOperation = (operation) => {
    switch (operation) {
        case "Create":
            return "Criação"
        case "Update":
            return "Atualização"
        default:
            return "Deleção"
    }
}