import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Стили для PDF
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    backgroundColor: '#f8f9fa',
    color: '#212529',
  },
  section: {
    marginBottom: 20,
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
  },
});

// Компонент PDF-документа
const PortfolioPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Portfolio PDF</Text>
        <Text>This is a sample PDF document generated for the portfolio.</Text>
      </View>
    </Page>
  </Document>
);

export default PortfolioPDF;
