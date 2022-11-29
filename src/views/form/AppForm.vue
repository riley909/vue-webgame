<template>
  <v-container>
    <v-card>
      <v-card-text>
        <app-text-field
          v-model="customValue"
          :counter="10"
          label="이름"
          placeholder="여기에 입력해 주세요"
        ></app-text-field>
        <app-text-field
          v-model="customValue"
          :counter="10"
          label="나이"
          placeholder="여기에 입력해 주세요"
        ></app-text-field>
        <app-text-field
          v-model="customValue"
          :counter="10"
          label="닉네임"
          placeholder="여기에 입력해 주세요"
        ></app-text-field>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import AppTextField from '@/components/app/TextField';

export default {
  name: 'AppForm',
  components: {
    AppTextField,
  },
  data: () => ({
    customValue: null,
  }),
};
</script>

<style lang="scss" scoped></style>
