<template>
    <div class="register">
        <div class="logo">
            <img class="logo__image" src='images/check.png'/>
            <span class="logo__text">to do list</span>
        </div>

        <div class="register_window">
            <div class="register__info">
                <span class="register__info__span">ZARESTRUJ SIĘ JUŻ DZIŚ </span>
                <span class="register__info__span">I TWÓRZ SWOJE WŁASNE ZADANIA I PRZYPOMNIENIA</span>
            </div>

            <form class="register__content">
                <span class="register__errors" v-if="errors" v-text="Object.values(errors).flat().join()"></span>
                <input type="text" placeholder="Nazwa użytkownika" v-model="form.username" name="username">
                <input type="password" placeholder="Hasło" v-model="form.password" name="password">
                <input type="password" placeholder="Powtórz hasło" v-model="form.password_confirmation" name="password_confirmation">
                <button @click.prevent="saveForm" type="submit" class="register_button">ZARESTRUJ</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                form:
                {
                    username: '',
                    password: '',
                    password_confirmation: ''
                },
                errors: ""
            }
        },
        methods:
        {
            saveForm()
            {
                axios.post('/api/register', this.form).then(() =>
                {
                    console.log("Saved");
                }).catch((error) =>
                {
                    this.errors = error.response.data.errors;
                    console.log(error);
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import 'resources/sass/register.scss';
</style>