<template>
    <div id="all">
        <p v-for="(fc, index) in flashcards" v-bind:key="index">
            <b>{{ fc.word }}</b> <span class="stats" title="fishka's stats (correct / all)">(0/3)</span>
            <ButtonSwitch @click.native="$emit('remove-item', index)"/>
            <br>
            <span class="translation">
                {{ fc.translation }}
                <b-icon icon="cloud-slash" class="float-right" font-scale="0.75" shift-v="-8" title="the fishka is not synchronized"></b-icon>
            </span>
        </p>
    </div>
</template>

<script>
import ButtonSwitch from '@/components/ButtonSwitch.vue'

export default {
    name: 'All',
    components: {
        ButtonSwitch
    },
    props: ['flashcards'],
    methods: {
        myEvent: function () {
            alert('hi')
            this.$emit('update-cart')
        }
    }
}
</script>

<style scoped>
p {
    font-size: 15px;
}
#all {
    font-size: 15px;
}
.stats {
    font-weight: 300;
    margin-left: .5rem;
}
.translation {
    color: lightslategray;
}
</style>
