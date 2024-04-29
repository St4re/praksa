<template>
    <div :style="flexStyles">
        <slot></slot>
    </div>
</template>

<script>
import { computed } from "vue";

export default {
    props: {
        flexDirection: String,
        flexWrap: String,
        flexBasis: String,
        justifyContent: String,
        alignItems: String,
        gap: String,    
        flexGrow: String,
        flexShrink: String,
    },
    setup(props) {
        const flexStyles = computed(() => ({
            flexDirection: props.flexDirection,
            flexWrap: props.flexWrap,
            flexBasis: props.flexBasis,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems,
            gap: props.gap + "px",
            flexGrow: props.flexGrow,
            flexShrink: props.flexShrink
        }));
        return {
            flexStyles
        };
    },
}
</script>
<style scoped>
div {
    display:flex;
}
</style>