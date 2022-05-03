import React from "react";

const Blogs = () => {
  return (
    <div className="container my-5">
      {/* q1 answer  */}
      <div>
        <h2>Q1: What is the difference between javascript and nodejs?</h2>
        <h4>Answer:</h4>
        <table className="table table-bordered border-dark fs-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Javascript</th>
              <th scope="col">NodeJS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                JavaScript is a scripting or programming language that enables
                us to create dynamically updating content, control multimedia,
                animate images, and pretty much everything else.
              </td>
              <td>
                NodeJS is a cross-platform and open-source Javascript runtime
                environment that allows the javascript to be run on the
                server-side.
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Javascript is basically used on the client-side.</td>
              <td>NodeJS is mostly used on the server-side.</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>
                Javascript is capable enough to add HTML and play with the DOM.
              </td>
              <td>Nodejs does not have capability to add HTML tags.</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>
                Without NodeJS, Javascript can only be run in the browsers.
              </td>
              <td>
                We can run Javascript outside the browser with the help of
                NodeJS.
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>
                JavaScript running any engine like Spider monkey (FireFox),
                JavaScript Core (Safari), V8 (Google Chrome).
              </td>
              <td>
                Node JS only run in a V8 engine which mainly used by google
                chrome.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* q2 answer  */}
      <div className="my-5">
        <h2>Q2: When should you use nodejs and when should you use mongodb?</h2>
        <h4>Answer:</h4>
        <strong className="fs-4">
          <u>Use case of NodeJS:</u>
        </strong>
        <p className="fs-5">
          Knowing JavaScript gives a developer a good start with Node.js.
          Node.js, being an open-source project, encourages support and
          contribution aimed at the improvement and adoption of the platform.
          Browse npm (Node.js package manager) for 650,000 free code packages
          that you can reuse with Node.js. Typical use cases for NodeJS include:
        </p>
        <ol className="fs-5">
          <li>Real-time applications.</li>
          <li>IoT applications.</li>
          <li>Collaborative tools.</li>
          <li>Data streaming applications.</li>
          <li>Applications relying on scalability.</li>
          <li>
            Application that is not perform any CPU intensive task (e.g: Image
            Processing).
          </li>
        </ol>
        <strong className="fs-4">
          <u>Use case of MongoDB:</u>
        </strong>
        <p className="fs-5">
          MongoDB is a general-purpose database used in various ways to support
          applications in many different industries. MongoDB has found a home in
          many different businesses and functions because it solves
          long-standing problems in data management and software development.
          Typical use cases for MongoDB include:
        </p>
        <ol className="fs-5">
          <li>Integrating large amounts of diverse data</li>
          <li>Describing complex data structures that evolve</li>
          <li>Delivering data in high-performance applications</li>
          <li>Supporting hybrid and multi-cloud applications</li>
          <li>Supporting agile development and collaboration</li>
        </ol>
      </div>

      {/* q3 answer  */}
      <div className="mb-5">
        <h2>Q3: What is the difference between SQL and NoSQL databases?</h2>
        <h4>Answer:</h4>
        <table className="table table-bordered border-dark fs-4">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">SQL Databases</th>
              <th scope="col">NoSQL Databases</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                SQL databases use structured query language and have a
                predefined schema.
              </td>
              <td>
                NoSQL databases have dynamic schemas for unstructured data.
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>SQL databases are relational</td>
              <td>NoSQL databases are non-relational.</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>SQL databases are best suited for complex queries.</td>
              <td>NoSQL databases are not so good for complex queries.</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>SQL databases are table-based.</td>
              <td>
                NoSQL databases are document, key-value, graph, or wide-column
                stores.
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>SQL databases are vertically scalable.</td>
              <td>NoSQL databases are horizontally scalable.</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* q4 answer  */}
      <div>
        <h2>Q4: What is the purpose of jwt and how does it work?</h2>
        <h4>Answer:</h4>
        <strong className="fs-4">
          <u>Purpose of JWT:</u>
        </strong>
        <p className="fs-5">
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. This
          information can be verified and trusted because it is digitally
          signed. We use JWT for authorization of user. Once the user is logged
          in, each subsequent request will include the JWT, allowing the user to
          access routes, services, and resources that are permitted with that
          token.JSON Web Tokens are a good way of securely transmitting
          information between parties. Because JWTs can be signed—for example,
          using public/private key pairs—you can be sure the senders are who
          they say they are.
        </p>
        <strong className="fs-4">
          <u>How JWT works:</u>
        </strong>
        <p className="fs-5">
          JSON Web Tokens consist of three parts separated by dots (.), which
          are Header,Payload and Signature. Header contains the type of
          token,The payload contains the claims and The signature is used to
          verify the message wasn't changed along the way. In authentication,
          when the user successfully logs in using their credentials, a JSON Web
          Token will be returned. Since tokens are credentials, great care must
          be taken to prevent security issues. In general, we should not keep
          tokens longer than required. We also should not store sensitive
          session data in browser storage due to lack of security. Whenever the
          user wants to access a protected route or resource, the user agent
          should send the JWT, typically in the Authorization header using the
          Bearer schema.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
