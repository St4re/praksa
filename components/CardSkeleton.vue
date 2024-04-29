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
    min-width: 270px;
    max-width: 270px;
    min-height: 350px;
    max-height: 550px;
    width: 15vw;
    height: 62vh;
    border-radius: 10px;
    background-color: #fff;
    padding-bottom: 5%;
    flex-grow: 1;
    animation: boxFade 1.5s ease-in-out infinite;
}

.line {
    height: 19px;
    margin-left: 10%;
    margin-bottom: 2%;
    width: 60%;
    border-radius: 7px;
}

.fakeBtn {
    width: 130px;
    height: 40px;
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
</style>