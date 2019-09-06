import * as express from "express";

export const register = ( app: express.Application ) => {

    const isAuthenticated = {
        sub: "00abc12defg3hij4k5l6",
        // tslint:disable-next-line:object-literal-sort-keys
        name: "First Last",
        locale: "eu-EU",
        preferred_username: "account@company.com",
        given_name: "First",
        family_name: "Last",
        zoneinfo: "Europe/Lisbon",
        updated_at: 1539283620
    };

    // define a route handler for the default home page
    app.get( "/", ( req: any, res ) => {
        const user = req.userContext ? req.userContext.userinfo : null;
        res.render( "index", { isAuthenticated, user } );
    } );

    // define a secure route handler for the login page that redirects to /guitars
    app.get( "/login", ( req, res ) => {
        res.redirect( "/guitars" );
    } );

    // define a route to handle logout
    app.get( "/logout", ( req: any, res ) => {
        req.logout();
        res.redirect( "/" );
    } );

    // define a secure route handler for the guitars page
    app.get( "/guitars", ( req: any, res ) => {
        const user = req.userContext ? req.userContext.userinfo : null;
        // tslint:disable-next-line: object-literal-shorthand
        res.render( "guitars", { isAuthenticated: isAuthenticated, user } );
    } );
};
