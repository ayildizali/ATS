<template>
  <div>
    <vue-good-table
        :columns="columns"
        :fixed-header="true"
        :pagination-options="{
              enabled: true,
              setCurrentPage: 2,
        }" :rows="rows"
        :search-options="{
              enabled: true,
              mode: 'records'
        }"
        max-height="700px"
        styleClass="vgt-table condensed"
        theme="polar-bear"
    />
  </div>
</template>
<!---->
<script lang="ts">
export default {
  name: 'my-component',
  data() {
    return {
      columns: [
        {
          label: 'Araç Kullanıcısı',
          field: 'name',
        },
        {
          label: 'Tarih',
          field: 'history',
          type: 'data',
        },
        {
          label: 'Fatura',
          field: 'fatura',
          type: 'number',
        },
        {
          label: 'Fatura Unvanı',
          field: 'InvoiceTitle'
        },
        {
          label: 'Plaka',
          field: 'plate',
          type: 'number'
        },
        {
          label: 'İL',
          field: 'province'
        },
        {
          label: 'Fatura Tutarı',
          field: 'amount',
          type: 'number'
        },
        {
          label: 'KM',
          field: 'km',
          type: 'number'
        },
        {
          label: 'Oto Lastik',
          field: 'tire',
          type: 'number'
        },
        {
          label: 'Bakım Türü',
          field: 'care',
        },
        {
          label: 'Açıklama',
          field: 'explanation',
        },


      ],
      rows: [
        {
          id: 1,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 2,
          name: "Bunyad Ahmedli ",
          history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 3,
          name: "Kadir Kılıç ",
          history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 3,
          name: "Kadir Kılıç ",
          history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 3,
          name: "Kadir Kılıç ",
          // history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 3,
          name: "Kadir Kılıç ",
          history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 4,
          name: " Mustafa Yaprak ",
          history: '10.02.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 5,
          name: "Ali Koç  ",
          history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 6,
          name: "Ali AY",
          history: '3.08.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 7,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 8,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 9,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 10,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 11,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 12,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 13,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 14,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },
        {
          id: 15,
          name: "Muhammed Mustafa Yaprak ",
          history: '24.10.2023',
          fatura: 'Fatura',
          InvoiceTitle: 'Öz Asm Oto',
          plate: '34 HYD 1234',
          province: 'Gaziantep',
          amount: '₺200.000,00',
          km: '150.000 KM',
          tire: '205/55 R 16 (Goodyear)',
          care: 'Temizlik',
          explanation: ''

        },


      ],
    };
  },
};
</script>

<style scoped>

</style>