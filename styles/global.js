import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 18,
    color: '#444',
    fontWeight: 'bold',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e9ecf5'
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccd6eb',
    padding: 5,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 6,
    textAlign: 'center',
  },
});