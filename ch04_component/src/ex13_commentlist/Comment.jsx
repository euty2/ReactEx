const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid gray",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    }
};

function Comment(props){
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src = "https://cdn-icons-png.flaticon.com/512/2648/2648723.png" style={styles.image} alt=""/>
            </div>

            <div style={styles.contentContainer}>
                <span style={styles.nameText}>Albert</span>
                <span style={styles.commentText}>나의 댓글 컴포넌트입니다.</span>
            </div>
        </div>
    )
}

export default Comment;