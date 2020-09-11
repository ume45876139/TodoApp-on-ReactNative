import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  headerTitle: {
    marginTop:20,
    backgroundColor:'#0000cd',
    color:'white',
    fontSize: 60,
    fontWeight: '700'
  },

  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#0000cd',
    borderRadius: 50,
    position: 'absolute',
    bottom:40,
    right:20,
    shadowOffset: {
      width: 3,height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 0.7
  },

  buttonText: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 36,
    fontWeight: '700'
  },
  
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },

  inputTask: {
    width: '80%',
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
    backgroundColor: 'white',
    fontSize: 20
  },

  buttonWrapper :{
    flexDirection: "row"
  },

  cancelButton: {
    width: 80,
    position: "relative",
    top: 10,
    right: 10,
    alignItems: "center",
    color: 'white',
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    shadowOffset: {
      width: 3,height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 0.7
  },

  submitButton: {
    width: 80,
    position: "relative",
    top: 10,
    left: 10,
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    shadowOffset: {
      width: 3,height: 3
    },
    shadowRadius: 4,
    shadowOpacity: 0.7
  },

  addButtonText: {
    color: 'white'
  },

itemWrapper: {
  flex:1,
  borderColor: 'gray',
  borderWidth: 1,
  borderRadius: 5,
  padding: 10,
  marginVertical: 8,
  marginHorizontal: 16,
  flexDirection: "row",
  marginBottom: 10,
},

eachItem: {
  flex:0.8,
  fontSize: 20,
  alignSelf: 'center'
},

switchPosition: { 
  flex:0.2,
  alignSelf:'center', 
  position:'absolute', 
  right: 10
}

});

export default styles;
