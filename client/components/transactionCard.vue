<template>
    <div class="border-solid border-black border-4 p-4 w-3/12 h-48">
        <div class=" font-semibold text-center">
           
            <h1 class="text-2xl">Total Transactions</h1>
            <!-- <h1 class="text-xl pt-3">Rs. 8000.00</h1> -->
            <h1 class="text-xl pt-2 pb-3">Acc Type : savings</h1>
            <nuxt-link :props="props" class="border-2 border-black rounded-md border-solid p-1 text-lg font-semibold bg-green-600" :to="`/checkbook-${props ? props.accNo.custId : ''}`">Check Transactions</nuxt-link>
            
        </div>
    </div>
</template>

<script setup>

const {props} = defineProps(['props'])


</script>