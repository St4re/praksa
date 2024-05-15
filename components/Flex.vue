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
            validator(value) {
                return ["row", "row-reverse", "column", "column-reverse", "initial", "inherit"].includes(value)
            }
        },
        flexWrap: {
            validator(value) {
                return ["nowrap", "wrap", "wrap-reverse", "initial", "inherit"].includes(value)
            }
        },
        flexBasis: {
            validator(value) {
                return [Number, "auto", "initial", "inherit"].includes(value)
            }
        },
        justifyContent: {
            validator(value) {
                return ["flex-start", "flex-end", "center", "space-between", "space-around", "space-evenly", "initial", "inherit"].includes(value)
            }
        },
        alignItems: {
            validator(value) {
                return ["normal", "stretch", "center", "flex-start", "flex-end", "start", "end", "baseline", "initial", "inherit"].includes(value)
            }
        },
        gap: {
            validator: function (value) {
                // Regular expression to check for one or two numbers or specific keywords
                const validGapRegex = /^(initial|inherit|(\d+(px|em|%)?\s?\d*(px|em|%)?))$/;
                return validGapRegex.test(value);
            }
        },
        flexGrow: {
            validator(value) {
                return [Number, "initial", "inherit"].includes(value)
            }
        },
        flexShrink: {
            validator(value) {
                return [Number, "initial", "inherit"].includes(value)
            }
        },
    },
    setup(props) {
        const flexStyles = computed(() => ({
            flexDirection: props.flexDirection,
            flexWrap: props.flexWrap,
            flexBasis: props.flexBasis,
            justifyContent: props.justifyContent,
            alignItems: props.alignItems,
            gap: props.gap,
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
    display: flex;
}
</style>