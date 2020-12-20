module.exports = {
    root: true,
    env: {
        node: true
    },
    extends:["plugin:vue/strongly-recommended", "@vue/standard"],
    rules: {
        'no-unused-vars': 1,
        camelcase: 0,
        "no-mixed-operators": 0,
        "no-return-await": 0,
        "standard/computed-property-even-spacing": 0,
        "space-before-function-paren": 0,
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 1,
        "vue/no-use-v-if-with-v-for": 0,
        "vue/require-v-for-key": 0,
        "vue/valid-v-for": 0,
        "vue/valid-v-model": 0,
        "vue/no-side-effects-in-computed-properties": 0,
        "vue/no-parsing-error": 0,
        "vue/attribute-hyphenation": 0,
        "vue/html-closing-bracket-newline": 0,
        "vue/html-closing-bracket-spacing": 0,
        "vue/mustache-interpolation-spacing": 0,
        "vue/html-self-closing": [
            "error",
            {
                html: {
                    void: "never",
                    normal: "never",
                    component: "always"
                },
                svg: "never",
                math: "never"
            }
        ],
        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: 3,
                multiline: {
                    max: 1,
                    allowFirstLine: true
                }
            }
        ],
        "vue/multiline-html-element-content-newline": 0,
        "vue/singleline-html-element-content-newline": 0,
        "vue/require-default-prop": 0,
        "vue/order-in-components": [
            "error",
            {
                order: [
                    "el",
                    "name",
                    "parent",
                    "functional",
                    ["delimiters", "comments"],
                    ["components", "directives", "filters"],
                    "extends",
                    "mixins",
                    "inheritAttrs",
                    "model",
                    ["props", "propsData"],
                    "data",
                    "computed",
                    "watch",
                    "LIFECYCLE_HOOKS",
                    "methods",
                    ["template", "render"],
                    "renderError"
                ]
            }
        ]
    },
    parserOptions: {
        parser: "babel-eslint"
    },
    globals: {
        __ENV__: true,
        config: false,
        common: false
    }
};
