const withAuthorization = ( OriginalComponent ) => {
    return bashkim => {
        // Check if user is authenticated
        const isAuthenticated = true;

        if (isAuthenticated) {
            return <OriginalComponent {...bashkim} />;
        } else {
            alert("You don\'t have access to this component")
        }

    };
};

export default withAuthorization;