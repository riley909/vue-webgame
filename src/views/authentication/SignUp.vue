<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col cols="auto">
        <v-card width="460">
          <v-card-text class="text-center px-12 py-16">
            <div class="text-h4 font-weight-black mb-10">회원가입</div>
            <v-text-field v-model="message1" label="이메일" clearable prepend-icon="mdi-email" />
            <v-text-field v-model="message1" label="비밀번호" clearable prepend-icon="mdi-lock-outline" />
            <v-text-field v-model="message1" label="비밀번호 확인" clearable prepend-icon="mdi-lock-outline" />
            <v-btn block x-large color="primary" class="mt-6">가입하기</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
