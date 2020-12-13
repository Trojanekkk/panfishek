<template>
    <div id="new">
        <p>Mode: Guess</p>
        <p>
           Sync: Now
        </p>
        <p>
            Full panel
        </p>
        <p>
            Login
        </p>
    </div>
</template>

<script>
export default {
    name: 'Panel',
    data () {
        return {
            word: '',
            translation: ''
        }
    }
}
</script>

<style scoped>
p {
    font-size: 17px;
}
</style>
