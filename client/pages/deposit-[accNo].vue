
<template>
    <Navbar></Navbar>
    <div class="flex justify-center mt-16">
        <div class="bg-emerald-500 w-3/5 h-4/6 rounded-2xl border border-black">
            <h1 class="flex justify-center text-4xl p-4">Deposit Form</h1>
            <form @submit.prevent="submit" class="p-5">
                <div>
                    <label class="text-2xl">Account Number : </label>
                    <input type="text" v-model="accNumber"  class="pt-2 pb-2 pl-5 bg-stone-500 text-2xl ml-6 w-60">
                </div>
               
                <br>
                <div>
                    <label class="text-2xl">Deposit Amount : Rs</label>
                    <input type="number" placeholder="Amount" v-model="depositAmount" class="p-2 bg-stone-500 ml-1.5 text-2xl font-semibold w-36">
                </div>
                <input class="mt-10 w-5 h-5" type="checkbox" v-model="agreed" name="check" id="">
                <label for="check" class="pl-2 text-xl">I agree, to deposit a sum of</label><span class="pl-2 text-xl">{{ depositAmount }}</span><label class="pl-2 text-xl">to the account with accNumber : {{ accNumber }} </label>
                <div class="ml-48">
                <button type="submit" class="bg-black rounded-lg p-4 text-2xl font-medium text-white mt-10 ml-28">Deposit</button>
                <!-- <NuxtLink to="/home" class="bg-black rounded-lg p-4 text-2xl font-medium text-white mt-10 ml-28">Cancel</NuxtLink> -->
                <!-- <button type="button" @click="history.back()">Cancel</button> -->
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import  axios  from 'axios';
let agreed = ref(false);


const route = useRoute();
let accNumber = ref("")
let depositAmount = 0;
accNumber = route.params.accNo


//const custId = await axios.post
const submit = async () => {

    if (agreed) {
        // API call with accNumber and depositAmount
        const requestData = {
            accNo: `${accNumber}`,
            amount: `${depositAmount}`,
        };

        try {
            const jsonData = JSON.stringify(requestData);
            const response = await axios.post('http://localhost:4000/api/v1/account/deposit', jsonData, {
        headers: {
          'Content-Type': 'application/json'
      }
      });
            // Handle the response as needed
            if(response)
            {
                alert('Deposited successfully!');
            }
            else
            {
                alert(error)
            }
        } catch (error) {
            console.error('Error:', error);
            // Handle the error as needed
        }
    } else {
        // Alert the user to check the checkbox
        alert('Please check the checkbox before depositing.');
    }
};

</script>
