<template>
    <div v-if="isCircle" :style="{ width: size + 'px', height: size + 'px' }" style="border-radius: 50%;"></div>
    <div v-else-if="isFill" style="width:100%; height:100%;"></div>
    <div v-else :style="{ width: width + 'px', height: height + 'px' }">
    </div>
</template>

<script>
import { ref } from "vue"

export default {
    props: {
        width: String,
        height: String,
        circle: Boolean,
        size: String,
        fill: Boolean,
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
    width: 50px;
    height: 20px;
    background-color: #EDF2F7;
    animation: fade 1.5s ease-in-out infinite;
    opacity: 0.7;
    border-radius: 5px;
    overflow: hidden;
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