const styles = StyleSheet.create({
  
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "20px",
    },
    topicCard: {
      margin: "10px",
      padding: "15px",
      border: "1px solid #ddd",
      borderRadius: "5px",
    },
    topicTitle: {
      fontWeight: "bold",
      fontSize: "1.2rem",
      marginBottom: "5px",
    },
    commentSection: {
      marginLeft: "20px",
      marginBottom: "10px",
    },
    comment: {
      marginBottom: "5px",
      padding: "5px",
      border: "1px solid #ddd",
      borderRadius: "3px",
    },
    inputField: {
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "10px 15px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
    },
  };
  
  styles.newCommentInput = {
    ...styles.inputField,
    width: "100%",
  };
  
  styles.commentButton = {
    ...styles.button,
    marginLeft: "5px",
  };
  