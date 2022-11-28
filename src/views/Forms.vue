<template>
  <v-container>
    <v-card>
      <v-card-title> Form Validation </v-card-title>
      <v-card-text>
        <validation-observer ref="observer" v-slot="{ invalid }">
          <v-form @submit.prevent="submit">
            <validation-provider v-slot="{ errors }" name="Name" rules="required|max:10">
              <v-text-field v-model="name" label="Name" :error-messages="errors" :counter="10" />
            </validation-provider>

            <validation-provider
              v-slot="{ errors }"
              name="PhoneNumber"
              :rules="{ required: true, numeric: true, digits: 11 }"
            >
              <v-text-field v-model="phoneNumber" label="PhoneNumber" :error-messages="errors" :counter="11" />
            </validation-provider>

            <validation-provider v-slot="{ errors }" name="E-mail" :rules="{ required: true, email: true }">
              <v-text-field v-model="email" label="E-mail" :error-messages="errors" />
            </validation-provider>

            <validation-provider v-slot="{ errors }" name="Select" :rules="{ required: true }">
              <v-select v-model="select" label="Select" :items="items" :error-messages="errors" />
            </validation-provider>

            <validation-provider v-slot="{ errors }" name="CheckBox" :rules="{ required: true }">
              <v-checkbox v-model="checkbox" label="CheckBox" value="1" :error-messages="errors" />
            </validation-provider>

            <v-btn class="mr-4" color="primary" type="submit" :disabled="invalid">Submit</v-btn>
            <v-btn>Clear</v-btn>
          </v-form>
        </validation-observer>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate';
import { max, required, numeric, digits, email } from 'vee-validate/dist/rules';
extend('max', {
  ...max,
  message: '{_field_}는 {length}자를 초과할 수 없습니다.',
});

extend('required', {
  ...required,
  message: '{_field_}는 필수값 입니다.',
});
extend('numeric', {
  ...numeric,
  message: '{_field_} 필드는 숫자로만 구성되어야 합니다.',
});
extend('digits', {
  ...digits,
  message: '{_field_} 필드는 {length} 자리여야 합니다.',
});
extend('email', {
  ...email,
  message: '잘못 입력된 이메일 주소 입니다.',
});
export default {
  name: 'Forms',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    name: null,
    phoneNumber: null,
    email: null,
    select: null,
    checkbox: null,
    items: [
      { text: '아이템1', value: 1 },
      { text: '아이템2', value: 2 },
      { text: '아이템3', value: 3 },
    ],
  }),
  methods: {
    submit() {
      this.$refs.observer.validate().then((result) => {
        console.log('result', result);
      });
    },
    clear() {
      this.name = null;
      this.phoneNumber = null;
      this.email = null;
      this.select = null;
      this.checkbox = null;
    },
  },
};
</script>

<style lang="scss" scoped></style>
