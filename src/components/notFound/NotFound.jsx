
const NotFound = () => {
    return (
        <div className="error-page">
            <div className="error-container">
                <h1 className="error-code">404</h1>
                <h2 className="error-message">Page Not Found</h2>
                <p className="error-description">
                    The page you are looking for might have been removed, had its name changed, or is temporarily
                    unavailable.
                </p>
                <a href="/" className="error-button">
                    Go Back to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;