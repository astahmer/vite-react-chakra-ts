module.exports = {
    printWidth: 120,
    tabWidth: 4,
    arrowParens: "always",
    useTabs: false,
    semi: true,
    singleQuote: false,
    trailingComma: "es5",
    importOrder: ["dotenv/config", `^@\//(.*)$`, "^[./]"],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: [require("@trivago/prettier-plugin-sort-imports")],
};
