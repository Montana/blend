module.exports = {
    meta: {
        docs: {
            description: 'Prevents the use of async function declaration',
            category: 'Possible Errors',
            recommended: true,
        },
    },

    create: function(context) {
        const verify = function(node) {
            if (!node.async) return

            context.report({
                node,
                message: 'no async function declaration',
            })
        }

        return {
            FunctionDeclaration: verify,
            FunctionExpression: verify,
        }
    },
}