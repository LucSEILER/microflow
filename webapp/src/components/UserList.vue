<template>
    <div>
        <h1>Users List</h1>
        <ul v-if="users.length">
        <li v-for="user in users" :key="user.id">
            <strong>{{ user.name }}</strong> - {{ user.email }}
        </li>
        </ul>
        <p v-else>Loading users...</p>
    </div>
</template>
  
<script>
    import axios from 'axios';

    export default {
        data() {
            return {
            users: [], // Contiendra les données récupérées
            };
        },
        created() {
            this.fetchUsers();
        },
        methods: {
            async fetchUsers() {
            try {
                const response = await axios.get('http://localhost:3000/api/v1');
                this.users = response.data.users; // Stocke les données dans "users"
            } catch (error) {
                console.error('Error fetching users:', error);
            }
            },
        },
    };
</script>

<style scoped>
  h1 {
    color: #2c3e50;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 8px;
    background: #f4f4f4;
    margin: 4px 0;
    border-radius: 4px;
  }
</style>
  