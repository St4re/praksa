<template>
    <div :style="flexStyles">
        <slot></slot>
    </div>
</template>

<script>
import { computed } from "vue";
export default {
    props: {
        flexDirection: {
            type: String,
            default: "row",
        },
        flexWrap: {
            type: String,
            default: "nowrap"
        },
        flexBasis: {
            type: String,
            default: "auto"
        },
        justifyContent: {
            type: String,
            default: "flex-start"
        },
        alignItems: {
            type: String,
            default: "normal"
        },
        gap: {
            type: String,
            default: "normal"
        },
        flexGrow: {
            type: String,
            default: "0"
        },
        flexShrink: {
            type: String,
            default: "1"
        },
    },
    setup(props) {
        const flexStyles = computed(() => ({
            display: "flex",
            flexDirection: props.flexDirection,
            flexWrap: props.flexWrap,
            flexBasis: props.flexBasis,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems,
            gap: props.gap + "px",
            flexGrow: props.flexGrow,
            flexShrink: props.flexShrink
        }));
        console.log(flexStyles.value)
        return {
            flexStyles
        };
    },
}
</script>