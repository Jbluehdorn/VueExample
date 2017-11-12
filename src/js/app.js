import Vue from 'vue'

const app = new Vue({
    el: '#app',
    data: {
        countA: 1,
        countB: 2,
        countC: 3
    },
    methods: {
        incrementA() {
            this.countA++;
        },
        incrementB() {
            this.countB++;
        },
        incrementC() {
            this.countC++;
        },
        decrementA() {
            this.countA--;
        },
        decrementB() {
            this.countB--;
        },
        decrementC() {
            this.countC--;
        }
    },
    computed: {
        total: function() {
            return this.countA + this.countB + this.countC;
        }
    }
})