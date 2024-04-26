<template>
    <div class="box">
        <div class="line" v-for="number in 8">
            <Skeleton fill />
        </div>
        <div class="fakeBtn">
            <Skeleton fill />
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.box {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #fff;
    padding-bottom: 15%;
    animation: boxFade 1.5s ease-in-out infinite;
}

.line {
    height: 4%;
    margin-left: 10%;
    margin-bottom: 2%;
    width: 60%;
    border-radius: 7px;
}

.fakeBtn {
    width: 50%;
    height: 8%;
    border-radius: 7px;
    margin: 0 auto;
    margin-top: 12%;
}

@keyframes boxFade {
    0% {
        background-color: #fff;
    }

    50% {
        background-color: #EDF2F7;
    }

    100% {
        background-color: #fff;
    }
}

@media screen and (max-width: 1280px) {
    .fakeBtn {
        font-size: 1.2em;
    }
}

@media screen and (max-width: 768px) {
    .fakeBtn {
        height:10%;
        width:40%;
    }

    .line {
        margin-left: 8%;
    }
}

@media screen and (max-width: 480px) {
    .fakeBtn {
        font-size: 1.1em;
        margin-top: 8%;
    }
    .box {
        padding-bottom: 7%;
        margin-bottom: 7%;
    }
}

@media screen and (max-width: 400px) {
    .fakeBtn {
        height:12%;
        width:40%;
    }
}
</style>