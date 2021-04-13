<template>
    <v-container fluid class="login">
        <v-layout justify-center align-center column class="info">
            <div class="display-2 font-weight-black">
                Log In
            </div>
            <v-form ref="form" v-model="isFormValid" lazy-validation>
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    required
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    :type="'password'"
                    required
                ></v-text-field>
            </v-form>
            <v-btn
                :disabled="!isFormValid"
                color="success"
                class="mr-4"
                @click="submit"
            >
                Submit
            </v-btn>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        isFormValid: false,
        email: '',
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'Email must be valid'
        ],
        password: '',
        passwordRules: [v => !!v || 'Password is required']
    }),
    name: 'Log-In',
    methods: {
        async submit() {
            console.log(this.email);
            if (this.isFormValid) {
                this.$store.dispatch('LogIn', {
                    email: this.email,
                    password: this.password
                });
            }
        }
    }
};
</script>

<style scoped>
.login {
    background: url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80');
    background-size: cover;
    width: 100%;
    height: 100%;
}
.info {
    background-color: white !important;
    width: 70%;
    height: 70%;
    margin-top: 7.5%;
    margin-left: 15%;
}
input {
    border-style: solid;
}
</style>
