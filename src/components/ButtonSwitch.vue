<template>
    <span
        @mouseover="hover = true"
        @mouseout="hover = false"
    >
        <b-icon 
            :icon="myIcon" 
            class="float-right icon" 
            font-scale="0.75" 
            shift-v="-8" 
            title="delete this fishka"
        ></b-icon>
    </span>
</template>

<script>
export default {
    name: 'ButtonSwitch',
    data () {
        return {
            hover: false,
            myIcon: 'x-circle'
        }
    },
    watch: {
        hover: function () {
            if (this.hover)
                this.myIcon = 'x-circle-fill'
            else
                this.myIcon = 'x-circle'
        }
    }
}
</script>

<style scoped>
.icon {
    color: red
}
</style>