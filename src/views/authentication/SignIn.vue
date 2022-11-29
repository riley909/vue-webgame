<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <validation-observer ref="observer" v-slot="{ invalid }">
              <v-form @submit.prevent="signIn">
                <div class="text-h4 font-weight-black mb-10">로그인</div>

                <validation-provider v-slot="{ errors }" name="이메일" :rules="{ required: true }">
                  <v-text-field
                    v-model="email"
                    label="이메일"
                    clearable
                    prepend-icon="mdi-email"
                    :error-messages="errors"
                  />
                </validation-provider>

                <validation-provider v-slot="{ errors }" name="비밀번호" :rules="{ required: true }">
                  <v-text-field
                    v-model="password"
                    label="비밀번호"
                    clearable
                    prepend-icon="mdi-lock-outline"
                    :error-messages="errors"
                  />
                </validation-provider>

                <v-btn type="submit" block x-large color="primary" class="mt-6" :disabled="invalid">로그인</v-btn>
                <div class="mt-5">
                  <router-link to="/" class="text-decoration-none">홈</router-link> |
                  <router-link to="/authentication/sign-up" class="text-decoration-none">회원가입</router-link>
                </div>
              </v-form>
            </validation-observer>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'SignIn',
  data: () => ({
    email: null,
    password: null,
  }),
  methods: {
    async signIn() {
      // $ref.observer.validate() = 결과값을 promise로 반환
      const result = await this.$refs.observer.validate();
      if (result) {
        alert('로그인!');
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
