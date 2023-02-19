import React from 'react';

// Create 'context' object
	// data type of object that can be used to store information that can be shared to other components within the app
	// approach to passing information between components and allows easier access by avoiding the use of the prop drilling



const UserContext = React.createContext();

// the 'provider' property allows other component to consume/ use the context object and supply the necessary information

// call this to App JS
export const UserProvider = UserContext.Provider;

// call this to Login page
export default UserContext;