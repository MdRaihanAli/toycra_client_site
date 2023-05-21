import React from 'react'

function Blogs() {
    return (
        <div className='bg_color'>
            <div className="container py-md-5">
                <div className="row g-4">
                    <div className="col-md-6">
                        <div>
                            <div className="card">

                                <div className="card-body">
                                    <h4 className="card-title tomato_color">What is an access tokan and refresh token? How do they work and where should we store them on the client-side?</h4>
                                    <br />
                                    <div className="card-text">
                                        <p><span className="fw-bold">Access Token:</span> A credential used to authenticate and authorize a cleent to access protected resurces on a server.</p>
                                        <p><span className="fw-bold">Refresh Token:</span> A credntial used to obtain a new access token without re-authenticating, helping maintain long-term sessions and security.</p>
                                        <p><span className="fw-bold">Storage:</span>  Access tokens should be stored securely on the client-side, such as in memory or local storage, and transmitted over secure channels. Refresh tokens should be stored securely, such as in an HTTP-only cookie or secure storage, to mitigate against theft or misuse..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6">
                        <div>
                            <div className="card">

                                <div className="card-body">
                                    <h4 className="card-title tomato_color">Compare SQL and NoSQL databases?</h4>
                                    <br />
                                    <div className="card-text">
                                        <p> <span className="fw-bold">SQL Detabases:</span> Stractured query language SQL is used.
                                            Predefined schema and data integrity enforcement.
                                            Suitable for structured data and complex relationships.
                                            Transactions, strict cosistency, and complex joins.
                                            Examples: MySQL, PostgreSQL, Oracle.</p>
                                        <p> <span className="fw-bold">NoSQL Databases:</span> Flexible data model, no predefined schema.
                                            Handle unstructured, semi-structured, and structured data.
                                            Horizontal scalability for large-scale distributed systems.
                                            Emphasize high availbility, scalability, and performance.
                                            Examples: MongoDB, Cassandra, Redis..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div>
                            <div className="card">

                                <div className="card-body">
                                    <h4 className="card-title tomato_color">Compare SQL and NoSQL detabases?</h4>
                                    <br />
                                    <div className="card-text">
                                        <p> <span className="fw-bold">Express.js:</span> Express.js: A minemalist web framework for Node.js, providing tools for handling HTTP requests, routing, middleware management, and response generation</p>
                                        <p> <span className="fw-bold">NestJS:</span>  A progressive Node.js framework with TypeScript, inspired by Angelar, focusing on modularity, dependency injection, and easy integration with other libraries, providing a structured and scalable platform far server-side applications.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div>
                            <div className="card">

                                <div className="card-body">
                                    <h4 className="card-title tomato_color">what is MongoDB aggragate and how does it work ?</h4>
                                    <br />
                                    <div className="card-text">
                                        <p>method in MangoDB is used to perform advanced data processing and analysis operations on documents within a collection. It uses an aggregation pipeline consisting of stages to filter, transform, and aggregate data. Each stage processes the dcuments sequentially, with the output of one stage becoming the input for the next. It allows for complex queries, transformations, aggregations, and computations on data in a single query..</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs