<template>
    <div id="new">
        <p>
            <b-button-toolbar class="float-right">
                <b-button-group class="mr-1">
                    <b-button variant="outline-primary" @click="getItem">View</b-button>
                </b-button-group>
            </b-button-toolbar>
        </p>
    </div>
</template>

<script>
export default {
    name: 'All',
    data () {
        return {
            flashcards: [],
            fishka: ''
        }
    },
    methods: {
        getItem: function () {
            this.flashcards = localStorage.getItem('panfishek')
            if (this.flashcards) {
                this.fishka = JSON.parse(this.flashcards)[0].word
                alert(this.flashcards)
                alert(this.fishka)
            }
        }
    }
}
</script>

<style scoped>
p {
    font-size: 17px;
}
</style>
