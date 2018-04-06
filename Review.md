# Review Questions

## What is Node.js?

Node.js is an environment that lets us run Javascript outside of the browser.

## What is Express?

Express is a minimalistic framework for Node that handles a lot of basic functionality, including routes, and CRUD methods to a server.

## Mention two parts of Express that you learned about this week.

I learned about express's body parser middleware, as well as the ability to create different routers to break a project into subcomponents.

## What is Middleware?

Middleware is code that sits between the request and response and performs some desired effect. This could be anything from altering the data itself (as in the tagsToUpperCase function we implemented) or adding a layer of security to requests.

## What is a Resource?

A resource is some set of data/useful information. So a resource could be a collection of blog posts, or a list of users, etc.

## What can the API return to help clients know if a request was successful?

A status somewhere in the 200 range.

## How can we partition our application into sub-applications?

We can break off end point handling into different routers. So we can have /api/users use the userRouter and api/posts use the postRouter.

## What is CORS and why do we need it?

CORS is cross origin resource sharing. This means that we can request information across different domains. This option is not allowed by default for security reasons, but we can allow it by installing the cors middleware.
