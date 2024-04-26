<template>
    <div class="box">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="fakeBtn">Edit</div>
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
}

.line {
    background-color: #EDF2F7;
    color: white;
    height: 20px;
    margin-left: 10%;
    margin-bottom: 2%;
    width: 60%;
    animation: fade 1.5s ease-in-out infinite;
    opacity: 0.7;
    border-radius: 3px;
}

.fakeBtn {
    background-color: #EDF2F7;
    padding: 5px 45px;
    border-radius: 7px;
    font-weight: bold;
    font-size: 1.3em;
    margin: 0 auto;
    margin-top: 12%;
    color: #00000000;
    animation: fade 1.5s ease-in-out infinite;
    opacity: 0.7;
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

@media screen and (max-width: 1280px) {
    .fakeBtn {
        font-size: 1.2em;
    }
}

@media screen and (max-width: 768px) {
    .fakeBtn {
        padding: 5px 25px;
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
}

@media screen and (max-width: 400px) {
    .fakeBtn {
        padding: 5px 23px;
        font-size: 0.9em;
    }

    .box {
        padding-bottom: 7%;
        margin-bottom: 7%;
    }
}
</style>