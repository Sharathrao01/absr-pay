<template>
    <div class="border-solid border-black border-4 p-4 w-3/12 h-48">
        <div class=" font-semibold text-center">
            <h1 class="text-2xl">Total Withdrawals</h1>
           
            <!-- <h1 class="text-xl pt-3">Rs. 6000.00</h1> -->
            <h1 class="text-xl pt-2 pb-3">Acc Type : savings</h1>
            <button @click="navigateTo(`/withdraw-${props ? props.accNo.accNum:''}`)" class="border-2 border-black rounded-md border-solid p-1 text-lg font-semibold bg-green-600">withdraw</button>
        </div>
    </div>
</template>

<script setup>
//const {props} = defineProps(['props'])

const {props} = defineProps(['props']);
//const custId = ref(props.accNo._id);
const custId = ref('')
onMounted(async () => {
  //custId.value = props.accNo._id;
});

const getToParams = () => {
     return custId.value
    ? {
        name: `withdraw-${custId.value}`,
        params: {
          custId: props.accNo.custId,
          accountNumber: props.accNo.accNum
        }
      }
    : {};
};

</script>