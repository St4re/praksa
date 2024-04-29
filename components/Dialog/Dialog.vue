<template>
    <div>
        <h1>DIALOG</h1>
    </div>
</template>

<script>
export default {
    name: "Dialog"
    props: {
        open: {
            type: Boolean,
        },
        initialFocus: {
            type: HTMLElement,
        },
        as: {
            type: String | Component,
            default: "div",
        },
        static: {
            type: Boolean,
            default: false,
        },
        unmount: {
            type: Boolean,
            default: true,
        }
    },
    setup(props) {
        
        return {}
    }
}
</script>

<style lang="scss" scoped>
div {
    background-color: red;
}
</style>