<template>
    <div v-if="isCircle || isFill" :class="{circle:isCircle, fill:isFill}"></div>
    <div v-else :style="{ width: width + 'px', height: height + 'px' }"></div>
</template>

<script>
import { ref } from "vue"

export default {
    props: {
        width: {
            type: String,
            default: "100",
        },
        height: {
            type: String,
            default: "20",
        },
        circle: {
            type: Boolean,
            default: false,
        },
        fill: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const isCircle = ref(false)
        const isFill = ref(false)

        if (props.fill) {
            isFill.value = true;
        }
        if (props.circle) {
            isCircle.value = true;
        }
        return { isCircle, isFill }
    }
}
</script>

<style lang="scss" scoped>
div {
    background-color: #EDF2F7;
    animation: fade 1.5s ease-in-out infinite;
    opacity: 0.7;
    border-radius: 5px;
    overflow: hidden;
}

.circle {
    border-radius: 50%;
    width: v-bind(width);
    height: v-bind(height);
}

.fill {
    width: 100%;
    height: 100%;
}

@keyframes fade {
    0% {
        background-color: #EDF2F7;
    }

    50% {
        background-color: #A0AEC0;
    }

    100% {
        background-color: #EDF2F7;
    }
}
</style>