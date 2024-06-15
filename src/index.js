import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';

import FileView from './route/files';
import BooksView from "./route/books";
import DriveView from "./route/drive";
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
        <nav className="navbar navbar-expand-lg navbar-light bg-dark text-white">
            <div className="container">

                <a className="navbar-brand text-white" href="/">
                    <h4>CITAD <i className=" bi bi-explicit"></i> X <span style={{fontSize: '15px'}}>22</span></h4>
                </a>

                <ul className="nav nav-pills text-white">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active text-white" id="pills-annoucement-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-annoucement" type="button" role="tab" aria-controls="pills-annoucement"
                                aria-selected="false">Announcement
                        </button>
                    </li>
                    {/*<li className="nav-item" role="presentation">*/}
                    {/*    <button className="nav-link active text-white" id="pills-syllabus-tab" data-bs-toggle="pill"*/}
                    {/*            data-bs-target="#pills-syllabus" type="button" role="tab" aria-controls="pills-syllabus"*/}
                    {/*            aria-selected="true">Syllabus*/}
                    {/*    </button>*/}
                    {/*</li>*/}
                    <li className="nav-item" role="presentation">
                        <button className="nav-link text-white" id="pills-routine-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-routine" type="button" role="tab" aria-controls="pills-routine"
                                aria-selected="false">Routine
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link text-white" id="pills-ct-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-ct" type="button" role="tab"
                                aria-controls="pills-ct"
                                aria-selected="false">CT/Assignment
                        </button>
                    </li>
                    {/*<li className="nav-item" role="presentation">*/}
                    {/*  <button className="nav-link text-white" id="pills-class-link-tab" data-bs-toggle="pill" data-bs-target="#pills-class-link" type="button" role="tab" aria-controls="pills-class-link" aria-selected="false">Class Links</button>*/}
                    {/*</li>*/}

                    {/* <li className="nav-item" role="presentation">
                    <button className="nav-link text-white" id="pills-update-tab" data-bs-toggle="pill"
                             data-bs-target="#pills-update" type="button" role="tab" aria-controls="pills-files"
                                aria-selected="false">Weekly Updates
                        </button>
                    </li> */}
                    <li className="nav-item" role="presentation">
                        <button className="nav-link text-white" id="pills-file-tab" data-bs-toggle="pill"
                                data-bs-target="#pills-file" type="button" role="tab" aria-controls="pills-files"
                                aria-selected="false">Files
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
        </nav>

        <div className="tab-content" id="pills-tabContent">
            {/*<div className="tab-pane fade show active" id="pills-syllabus" role="tabpanel"*/}
            {/*     aria-labelledby="pills-syllabus-tab">*/}
            {/*    <SyllabusView/>*/}
            {/*</div>*/}
            <div className="tab-pane fade show active" id="pills-annoucement" role="tabpanel"
                 aria-labelledby="pills-annoucement-tab">
                <AnnouncementView/>
            </div>
            <div className="tab-pane fade" id="pills-routine" role="tabpanel"
                 aria-labelledby="pills-routine-tab">
                <RoutineView/>
            </div>
            <div className="tab-pane fade" id="pills-class-link" role="tabpanel" aria-labelledby="pills-class-link-tab">
                <ClassLinkView/>
            </div>
            <div className="tab-pane fade" id="pills-drive" role="tabpanel" aria-labelledby="pills-drive-tab">
                <DriveView/>
            </div>
            <div className="tab-pane fade" id="pills-books" role="tabpanel" aria-labelledby="pills-books-tab">
                <BooksView/>
            </div>
            <div className="tab-pane fade" id="pills-file" role="tabpanel" aria-labelledby="pills-file-tab">
                <FileView/>
            </div>
            <div className="tab-pane fade" id="pills-update" role="tabpanel" aria-labelledby="pills-update-tab">
                <UpdateView/>
            </div>
            <div className="tab-pane fade" id="pills-ct" role="tabpanel"  aria-labelledby="pills-ct-tab">
                <CTView/>
            </div>
        </div>

        {/* <div className="views">
    <span className="views">
        <img src="https://visitor-badge.glitch.me/badge?page_id=citadex18" alt="Views"/>
    </span>
        </div> */}
    </div>,

    rootElement
);
registerServiceWorker();