import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import LinkView from './route/link';
import BooksView from "./route/books";
import DriveView from "./route/drive";
import StudentView from './route/student';
import TeacherView from './route/teacher';
import RoutineView from "./route/routine";
import ClassLinkView from "./route/class-link";
import UpdateView from "./route/updates";
import registerServiceWorker from './registerServiceWorker';
import SyllabusView from "./route/syllabus";
import CTView from "./route/ct";
import AnnouncementView from "./route/announcement";
const rootElement = document.getElementById("root");

ReactDOM.render(
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-white">
    <div className="container">

      <a className="navbar-brand text-white" href="/">
      
        <div className ="row">
          <div className ="col-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box-seam-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z"/></svg>
          </div>
          <div className ="col-2 logo">
            <h4>BU <i class="bi bi-explicit"></i> T CSE<span style={{ fontSize: '15px' }}> 22</span></h4>
          </div>
        </div>
      
        
      </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <ul className="nav nav-pills text-white ms-auto mb-2 mb-lg-0">
          <li className="nav-item" role="presentation">
            <button className="nav-link active text-white p-2" id="pills-home-tab" data-bs-toggle="pill"
              data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
              aria-selected="false">Home
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-routine-tab" data-bs-toggle="pill"
              data-bs-target="#pills-routine" type="button" role="tab" aria-controls="pills-routine"
              aria-selected="false">Detailed Routine
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-ct-tab" data-bs-toggle="pill"
              data-bs-target="#pills-ct" type="button" role="tab"
              aria-controls="pills-ct"
              aria-selected="false">Exam Details
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-teacher-tab" data-bs-toggle="pill"
              data-bs-target="#pills-teacher" type="button" role="tab" aria-controls="pills-teacher"
              aria-selected="false">Teacher Info
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-student-tab" data-bs-toggle="pill"
              data-bs-target="#pills-student" type="button" role="tab"
              aria-controls="pills-student"
              aria-selected="false">Student Info
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-link-tab" data-bs-toggle="pill"
              data-bs-target="#pills-link" type="button" role="tab" aria-controls="pills-link"
              aria-selected="false">Links
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-drive-tab" data-bs-toggle="pill"
              data-bs-target="#pills-drive" type="button" role="tab" aria-controls="pills-drive"
              aria-selected="false">Drive
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-books-tab" data-bs-toggle="pill"
              data-bs-target="#pills-books" type="button" role="tab" aria-controls="pills-books"
              aria-selected="false">Books
            </button>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" type="button" href="https://moodle.cse.buet.ac.bd/"
              target="_blank" rel="noreferrer">Moodle</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div className="nav collapse navbar-collapse offcanvas bg-dark" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
    <div className="offcanvas-header">
      <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Menu</h5>
      <button type="button" className="btn-close btn-close-white text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="navbar offcanvas-body">
      <ul className="nav nav-pills text-white justify-content-center ms-auto mb-2 mb-lg-0">
      <li className="nav-item" role="presentation">
            <button className="nav-link active text-white" id="pills-home-tab" data-bs-toggle="pill"
              data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
              aria-selected="false">Home
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-routine-tab" data-bs-toggle="pill"
              data-bs-target="#pills-routine" type="button" role="tab" aria-controls="pills-routine"
              aria-selected="false">Detailed Routine
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-ct-tab" data-bs-toggle="pill"
              data-bs-target="#pills-ct" type="button" role="tab"
              aria-controls="pills-ct"
              aria-selected="false">Exam Details
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-teacher-tab" data-bs-toggle="pill"
              data-bs-target="#pills-teacher" type="button" role="tab" aria-controls="pills-teacher"
              aria-selected="false">Teacher Info
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-student-tab" data-bs-toggle="pill"
              data-bs-target="#pills-student" type="button" role="tab"
              aria-controls="pills-student"
              aria-selected="false">Student Info
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-link-tab" data-bs-toggle="pill"
              data-bs-target="#pills-link" type="button" role="tab" aria-controls="pills-link"
              aria-selected="false">Links
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-drive-tab" data-bs-toggle="pill"
              data-bs-target="#pills-drive" type="button" role="tab" aria-controls="pills-drive"
              aria-selected="false">Drive
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link text-white" id="pills-books-tab" data-bs-toggle="pill"
              data-bs-target="#pills-books" type="button" role="tab" aria-controls="pills-books"
              aria-selected="false">Books
            </button>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" type="button" href="https://moodle.cse.buet.ac.bd/"
              target="_blank" rel="noreferrer">Moodle</a>
          </li>
      </ul>
    </div>
  </div>

  <div className="tab-content" id="pills-tabContent">
    <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
      aria-labelledby="pills-home-tab">
      <AnnouncementView/>
    </div>
    <div className="tab-pane fade" id="pills-routine" role="tabpanel"
      aria-labelledby="pills-routine-tab">
      <RoutineView />
    </div>
    <div className="tab-pane fade" id="pills-class-link" role="tabpanel" aria-labelledby="pills-class-link-tab">
      {/* <ClassLinkView/> */}
    </div>
    <div className="tab-pane fade" id="pills-drive" role="tabpanel" aria-labelledby="pills-drive-tab">
      <DriveView />
    </div>
    <div className="tab-pane fade" id="pills-books" role="tabpanel" aria-labelledby="pills-books-tab">
      <BooksView />
    </div>
    <div className="tab-pane fade" id="pills-link" role="tabpanel" aria-labelledby="pills-link-tab">
      <LinkView />
    </div>
    <div className="tab-pane fade" id="pills-update" role="tabpanel" aria-labelledby="pills-update-tab">
      {/* <UpdateView/> */}
    </div>
    <div className="tab-pane fade" id="pills-ct" role="tabpanel" aria-labelledby="pills-ct-tab">
      <CTView/>
    </div>
    <div className="tab-pane fade" id="pills-student" role="tabpanel" aria-labelledby="pills-student-tab">
      <StudentView />
    </div>
    <div className="tab-pane fade" id="pills-teacher" role="tabpanel"
      aria-labelledby="pills-routine-tab">
      <TeacherView />
    </div>
  </div>

        {/* <div className="views">
    <span className="views">
        <img src="https://visitor-badge.glitch.me/badge?page_id=citadex18" alt="Views"/>
    </span>
        </div> */}
      <div className="views"><span className="views"><a href="https://hits.sh/buetcse22.netlify.app/"><img alt="Hits" src="https://hits.sh/buetcse22.netlify.app.svg"/></a></span></div>
    </div>,

    rootElement
);
registerServiceWorker();
