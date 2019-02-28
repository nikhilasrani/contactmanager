import React from "react";

export default function About() {
  return (
    <div>
      <h1 className="display-4"> About Contact Manager</h1>
      <p className="lead">
        A simple CRUD application built in React that uses axios to make GET,
        DELETE, POST and PUT HTTP requests to a fake REST API.
      </p>
      <p className="lead">Created by Nikhil Asrani</p>
      <p className="text-secondary">Version 1.2.0</p>
    </div>
  );
}
