import deuLogo from "../assets/logos/deu_logo.png";
import anadoluLogo from "../assets/logos/anadolu_logo.png";
import styles from "./cv.module.css";

function Cv() {
  return (
    <div className="row" id="cv">
      <div className="col-md-8">
        <div className="mt-5">
          <h3>About</h3>
          <p>
            I graduated from Dokuz Eylül University in 2017 with a degree in
            law. After 5 years of working as the owner of the law office, I
            decided to change my career to pursue my ambition for software
            development.
          </p>
          <p>
            I have been always interested in software and how they are built so
            that interest has driven me to start learning to code. For over 1
            year, I attended a variety of courses about software development
            especially frontend technologies. I got some certificates from udemy
            and patika.dev. You can check below in the certificates section.
          </p>
          <p>
            I have done some projects for learning purposes and thanks to these
            projects improved myself in a variety of technologies, libraries,
            and frameworks, etc. Some of the and important ones are html, css,
            bootstrap, tailwindcss, javascript, npm, web pack, babel, git, jest,
            testing-library. I used backend technologies like node.js,
            express.js, socket.io, mongodb, redis etc. for providing API for my
            frontend projects. In one of my projects, I also experience firebase
            which is used for authentication and making API because of quick
            adaptation. I also used netlify, heroku, and some hosting services
            for publishing my projects.
          </p>
          <p>
            My future plan is to build visually stunning and functional user
            interfaces by using new technologies in the correct combination.
            Also, I have been eagerly exploring frontend technologies and my
            plan is to gain professional proficiency in them.
          </p>
          <p>
            Nowadays, I put together all my information to create 2 different
            freelance projects about e-commerce and transportation.
          </p>
          <p>
            Apart from coding, I enjoy camping and playing tennis. I planned to
            create a website about my camping routes for sharing all of my
            experiences and funny moments.
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="mb-2 mt-5">
          <h3 className="mb-4">Education</h3>
          <div className="d-flex mb-4">
            <div className="pe-2">
              <img
                src={deuLogo}
                alt="Dokuz Eylül University Logo"
                width="60"
                height="50"
              ></img>
            </div>
            <div>
              <h5 className="mb-1">Dokuz Eylül University</h5>
              <p className="mb-1">Faculty of Law</p>
              <small className="text-muted">İzmir,Turkey</small>
            </div>
          </div>
          <div className="d-flex">
            <div className="pe-2">
              <img
                src={anadoluLogo}
                alt="Anadolu University Logo"
                width="60"
                height="50"
              ></img>
            </div>
            <div>
              <h5 className="mb-1">Anadolu University</h5>
              <p className="mb-1">
                Faculty of Economics - International Relations
              </p>
              <small className="text-muted">Eskişehir,Turkey</small>
            </div>
          </div>
        </div>
        <div className="mb-2 mt-5">
          <h3>Certificates</h3>
          <h6 className="mt-3">
            <a
              href="https://www.hackerrank.com/certificates/7311d01f05b7"
              className="text-decoration-none me-2 position-relative"
              target="_blank"
            >
              <p className="me-2 mb-0 d-inline">
                HackerRank | Javascript (Basic) Certificate
              </p>
              <svg
                className="link-svg position-absolute"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z"
                ></path>
              </svg>
            </a>
            <small className="text-muted d-block">2023</small>
          </h6>
          <h6 className="mt-3">
            <a
              href="https://app.patika.dev/certificates/812cc61d"
              className="text-decoration-none me-2 position-relative"
              target="_blank"
            >
              <p className="me-2 mb-0 d-inline">
                Patika.dev | Intermadiate Frontend Web Development Path
              </p>
              <svg
                className="link-svg position-absolute"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z"
                ></path>
              </svg>
            </a>
            <small className="text-muted d-block">2023</small>
          </h6>
          <h6 className="mt-3">
            <a
              href="https://www.udemy.com/certificate/UC-8ca0866b-9355-4709-af3a-3df8cc7e77f5/"
              className="text-decoration-none me-2 position-relative"
              target="_blank"
            >
              <p className="me-2 mb-0 d-inline">
                Udemy | Modern Web Development
              </p>
              <svg
                className="link-svg position-absolute"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z"
                ></path>
              </svg>
            </a>
            <small className="text-muted d-block">2023</small>
          </h6>
          <h6 className="mt-3">
            <a
              href="https://app.patika.dev/certificates/f5929031/"
              className="text-decoration-none me-2 position-relative"
              target="_blank"
            >
              <p className="me-2 mb-0 d-inline">
                Patika.dev | Beginner Frontend Web Development Path
              </p>
              <svg
                className="link-svg position-absolute"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 10.82a1 1 0 0 0-1 1V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h7.18a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7.18a1 1 0 0 0-1-1Zm3.92-8.2a1 1 0 0 0-.54-.54A1 1 0 0 0 21 2h-6a1 1 0 0 0 0 2h3.59L8.29 14.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L20 5.41V9a1 1 0 0 0 2 0V3a1 1 0 0 0-.08-.38Z"
                ></path>
              </svg>
            </a>
            <small className="text-muted d-block">2022</small>
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Cv;
