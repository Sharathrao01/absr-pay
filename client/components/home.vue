<template>
  <div>
    <navbar :props="response"></navbar>
    <!-- {{ response }} -->
    <accountCard :response="response" class="ml-52" />
  </div>
</template>

<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const { getToken } = useJwtToken();

const route = useRoute();
const custId = route.params.customerID;

// Use ref to make response reactive
const response = ref(null);

const fetchData = async () => {

  const token = getToken();
  console.log(token)
  
  if (!token) {
    // Handle the case where the token is not available
    return;
  }
  const credentials = {
    custId: `${custId}`,
    token:token
  };

  const jsonData = JSON.stringify(credentials);
  const result = await axios.post(
    'http://localhost:4000/api/v1/auth/profile',
    jsonData,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (result.data) {
    console.log(result.data.accNo.accNum);
    //alert('User Data extracted successfully');
    // Update the response with the result
    response.value = result.data;
  } else {
    alert('error');
  }
};

onMounted(() => {
  // Call fetchData when the component is mounted
  fetchData();
});
</script>


