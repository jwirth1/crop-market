<template>
    <v-container fluid class="signup">
        <v-layout justify-center align-center column class="info">
            <div class="display-2 font-weight-black">
                Sign Up
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
                <v-text-field
                    v-model="passwordMatch"
                    :rules="passwordMatchRules.concat(passwordMatches)"
                    label="Re-Type Password"
                    :type="'password'"
                    required
                ></v-text-field>
                <v-radio-group v-model="type">
                    <v-radio
                        label="Farmer"
                        value="Farmer"
                    ></v-radio>
                    <v-radio
                        label="Service Provider"
                        value="Service Provider"
                    ></v-radio>
                </v-radio-group>
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    required
                ></v-text-field>
                <v-btn
                    :disabled="!isFormValid"
                    color="success"
                    class="mr-4"
                    @click="submit"
                >
                    Submit
                </v-btn>
            </v-form>
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
        passwordRules: [
            v => !!v || 'Password is required',
            v =>
                (v && v.length >= 6) ||
                'Password must contain at least 6 characters'
        ],
        passwordMatch: '',
        passwordMatchRules: [v => !!v || 'Type your password again'],
        type: '',
        name: '',
        nameRules: [
            v => !!v || 'Name is required'
        ]
    }),
    computed: {
        passwordMatches() {
            return () =>
                this.password === this.passwordMatch || 'Password must match';
        }
    },
    name: 'Sign-Up',
    methods: {
        async submit() {
            if (this.isFormValid) {
                console.log(this.email, this.password, this.type, this.name);
                this.$store.dispatch('SignUp', {
                    email: this.email,
                    password: this.password,
                    type: this.type,
                    name: this.name
                });
            }
        }
    }
};
</script>

<style scoped>
.signup {
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
