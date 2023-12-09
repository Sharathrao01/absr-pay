<template>
    <div class=" w-full flex justify-center items-center">
        <div class="bg-emerald-700 w-2/6 mt-24 mb-16 rounded-3xl">
            <h1 class="text-5xl flex justify-center mt-5 font-serif">PIN CHANGE</h1>
            <!-- <img width="96" height="96" class="ml-56 mt-5" src="https://img.icons8.com/fluency-systems-filled/96/user.png" alt="user"/> -->
            <div class="flex justify-center">
            <form @submit="onSubmit" class="mt-10 ml-20">
                <input type="text" v-model="accountNo" placeholder="Account Number" class="p-3 w-5/6 bg-black mb-6 text-white text-xl">
                <input type="text" v-model="pin" placeholder="new PIN" class="p-3 w-5/6 bg-black text-white text-xl mb-6">
                <input type="text" v-model="pin1" placeholder="Confirm PIN" class="p-3 w-5/6 bg-black text-white text-xl">
                <!-- <nuxt-link class="border-solid border-2 border-black p-3 text-2xl font-bold bg-black text-yellow-50" to="/">Login</nuxt-link> -->
                <button type="submit" class="border-2 border-solid border-black p-3 text-xl bg-black text-white mt-5 ml-14 mb-4 rounded-lg">Proceed</button>
                <!-- <button onclick="signup" class="border-2 border-solid border-black p-3 text-xl bg-black text-white mt-5 ml-14 mb-4 rounded-lg">Open Account</button> -->
                <!-- <NuxtLink to="/" class="border-solid border-2 border-black p-3 text-2xl font-bold bg-black text-yellow-50">Login</NuxtLink> -->
                <NuxtLink to="/" class="border-2 border-solid border-black p-3 text-xl bg-black text-white mt-5 ml-14 mb-4 rounded-lg">Cancel</NuxtLink>
                
            </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios'
var pin = ref("")
var pin1 = ref("")
var accountNo = ref("")

const onSubmit = async (e) => {
    e.preventDefault();

//     if(pin.value!=pin1.value)
// {
//     alert("Please enter the same pin to confirm")
// }

    const credentials = {
        "accno" : `${accountNo.value}`,
        "pin" : `${pin.value}`,
        "updatedPin" : `${pin1.value}`
    }
    //console.log(pin.value)

    try {
  const jsonData = JSON.stringify(credentials); // Stringify credentials object
  const response = await axios.post('http://localhost:4000/api/v1/auth/changePIN', jsonData, {
    headers: {
      'Content-Type': 'application/json'
     }
    });
    if(response.status===200)
    {
        alert("PIN Change successfull!");
        navigateTo('/');
    }
    else
    {
        alert("error",error)
    }
    }
    catch (error)
    {
        console.error("Error:", error);
    alert("Error, Please try again!");
    }

}

</script>