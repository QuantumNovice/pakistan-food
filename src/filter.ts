import { App } from 'vue';

export function currency(value: number) {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW'
  }).format(value);
}

export default {
  install(app: App) {
    app.config.globalProperties.$filters = {
      currency
    };
    app.provide('filters', {
      currency
    });
  }
};
