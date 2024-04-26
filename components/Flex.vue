<template>
    <div>

    </div>
</template>

<script>

export default {
    props: {
        flexDirection: {
            type: String,
            default: "row",
        },
        flexWrap: String,
        flexBasis: String,
        justifyContent: String,
        alignItems: String,
        flexGap: String,
        flexGrow: String,
        flexShrink: String,
    },
    setup(props) {

    },
}
</script>

<style lang="scss" scoped>
div {
    display:flex;
}
</style>