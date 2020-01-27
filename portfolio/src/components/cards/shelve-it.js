import React from "react";

function ShelveIt() {
  return (
    <div class="text-center">
      <div>
        <svg
          class="bd-placeholder-img rounded-circle"
          xmlns="http://www.w3.org/2000/svg"
          preserveaspectratio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: 140x140"
          height="140"
          width="140"
        >
          <rect width="100%" height="100%" fill="#777"></rect>
          <text x="50%" y="50%" fill="#777" dy=".3em">
            140x140
          </text>
        </svg>
      </div>
      <h2>Shelve It</h2>
      <p>
        Shelve-It is a group project at Southern Methodist University bootcamp.
        The team members are Justin Cheng, Emir Velasqez, Jhalya Young, and
        Hibah Shafi. This our first full stack project and the languages and
        technologies we will be using will be HTML, CSS, Bootstrap, JavaScript,
        jQuery, Node Express, MySQL, SQL, ORM, CRUD, MVC, quill editor, After
        Effects, Firebase DB, etc. The idea for this project came from our
        passion to read books and support unpublished authors. Our target
        audience are readers and authors.
      </p>
      <p>
        <a
          class="btn btn-secondary"
          href="https://github.com/1Fungi99/Shelve-It"
          role="button"
        >
          View details
        </a>
      </p>
    </div>
  );
}

export default ShelveIt;
