import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import "./Project.css";
// import data from "./PortfolioData.js"
import booksearch from "../../images/book-search-desktop3.png";
import bookwarm from "../../images/bookwarm-desktop3.png";
import weather from "../../images/weather-desktop3.png";
import employeetracker from "../../images/employee-tracker3.png";
import getgrub from "../../images/get_grub_desktop3.png";
import riskmanager from "../../images/risk-app-desktop3.png";

export default class Projects extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 3,
    showNavigation: true,
    config: config.slow,
  };

  slides = [
    {
      key: uuidv4(),
      id: 0,
      content: (
        <a href="#booksearch" style={{ width: "20%", height: "100%" }}>
          <img src={booksearch} alt="1" />
        </a>
      ),
      name: "Book-Search",
      images: [
        "https://drive.google.com/file/d/1WjEJ7Otl1wPuJ-QDUhe-FtwTJywUJGA1/view?usp=sharing",
        "path/book-search-desktop.png",
        "/book-search-desktop2.png",
        "/book-search-ipad.png",
        "/book-search-ipad2.png",
        "/book-search-mobile.png",
      ],
      Decription:
        "React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. Also use Node, Express and MongoDB so that users can save books to review or purchase later.",
      tech: "React, Express, MongoDB, Node, Heroku, FireBase",
      repo: "https://github.com/niroshanwitharana/GoogleBook_Search",
      deployed: "https://booksapp7517.web.app/",
    },
    {
      key: uuidv4(),
      id: 1,
      content: (
        <a href="#riskmanager" style={{ width: "20%", height: "100%" }}>
          <img src={riskmanager} alt="2" />
        </a>
      ),
      name: "Risk-Manager",
      images: [
        "https://drive.google.com/file/d/12oy8R6lC3IU8CR0_haDGuNChGYFIGDO-/view?usp=sharing",
        "/risk-app-desktop1.png",
        "/risk-app-desktop2.png",
        "/risk-app-ipad.png",
        "/risk-app-ipad2.png",
        "/risk-app-mobile1.png",
        "/risk-app-mobile2.png",
      ],
      Decription:
        "This is a risk management application, created for use on engineering projects.Users can create a project (with a title, description, location) and can create risks associated with their project. Risks are given a likelihood and severity score which is used to calculate the overall risk score. Users can comment on risks and can see comments left by other users. Risks can be viewed on a map and are colour coded depending on their risk score. Registration and login is required to use the application.",
      tech:
        "GoogleMap-API,Bcrypt, Passport-Local, Material-UI, MERN Stack (MongoDB, Express, React and Node.js), Heroku, FireBase",
      front: "https://github.com/meeday/Risk-Manager-Frontend",
      back: "https://github.com/JoeDodgson/Risk-Manager-Backend",
      deployed: "https://risk-manager-jmni-d4284.web.app/login",
    },
    {
      key: uuidv4(),
      id: 2,
      content: (
        <a href="#employeetracker" style={{ width: "20%", height: "100%" }}>
          <img src={employeetracker} alt="3" />
        </a>
      ),
      name: "Employee-Tracker",
      images: [
        "https://drive.google.com/file/d/1dP9GAZYuYgtZHWY3bLzVSg4TYTJsQAd6/view?usp=sharing",
        "/employee-tracker1.png",
        "/employee-tracker12.png",
        "/employee-tracker3.png",
        "/employee-tracker4.png",
      ],
      Decription:
        "This is a command line application that allows users to add departments, roles, employees, view departments, roles and employees. Users can also update employee roles, view employees by manager, delete departments, roles and employees.",
      tech: "node, inquirer, and MySQL.",
      repo: "https://github.com/niroshanwitharana/Employee-Tracker",
      // deployed: "",
    },
    {
      key: uuidv4(),
      id: 3,
      content: (
        <a href="#bookwarm" style={{ width: "20%", height: "100%" }}>
          <img src={bookwarm} alt="4" />
        </a>
      ),
      name: "BookWorm",
      images: [
        "https://drive.google.com/file/d/18SCctE6KVqGAM1D5ql1WO_TZ4UnwatFS/view?usp=sharing",
      ],
      Decription:
        "BookWorm is a web site where Users can search book by title, author or genre. Users can add books in to a list and delete from the list. Full descriptions of the book can be viewed, a target read date can be added.",
      tech:
        "HTML5/CSS3, Bootstrap, Font Awsome, JavaScript, Google Books APIs, LocalStorage",
      repo: "https://github.com/niroshanwitharana/Bookworm",
      deployed: "https://joedodgson.github.io/Bookworm/home.html",
    },
    {
      key: uuidv4(),
      id: 4,
      content: (
        <a href="#getgrub" style={{ width: "20%", height: "100%" }}>
          <img src={getgrub} alt="5" />
        </a>
      ),
      name: "Get Grub",
      images: [
        "https://drive.google.com/file/d/1hIuWWMpXtlRtIaFCfnKXVCmMY9vgPIDF/view?usp=sharing",
        "/get_grub_desktop1.png",
        "/get_grub_desktop2.png",
        "/get-grub-app.herokuapp.com_(Moto G4).png",
        "/get-grub-app.herokuapp.com_dashboard (1).png",
        "/get-grub-app.herokuapp.com_member (1).png",
        "get-grub-app.herokuapp.com_member(iPhone 5_SE).png",
      ],
      Decription:
        "Get Grub is a recipe finding application. This was my second project which I worked on as part of a team. We used Trello board insted of canban board to plan our tasks, write psudocode and keep track of how we approached the tasks within the planned time frame using Grapph. We had a daily stand-up meetings and followed Agile process. User can login with google-ID, We used Passport and google Oauth to Authenticate and Authorize. Users can search recipies, add them in to My-list, delete them, add their own changes to recipies as comments and also update comments.",
      tech:
        "HTML5/CSS3, Bootstrap, Materialize, JavaScript, API's, Node.js, Express.js, Handlebars, Sequelize, PostgreSQL, bcryptjs, Heroku.",
      repo: "https://github.com/meeday/git_grub",
      deployed: "http://get-grub-app.herokuapp.com/guest",
    },
    {
      key: uuidv4(),
      id: 5,
      content: (
        <a href="#weather" style={{ width: "20%", height: "100%" }}>
          <img src={weather} alt="6" />
        </a>
      ),
      name: "Weather-Dashboard",
      images: [
        "https://drive.google.com/file/d/1hIuWWMpXtlRtIaFCfnKXVCmMY9vgPIDF/view?usp=sharing",
        "/get_grub_desktop1.png",
        "/get_grub_desktop2.png",
        "/get-grub-app.herokuapp.com_(Moto G4).png",
        "/get-grub-app.herokuapp.com_dashboard (1).png",
        "/get-grub-app.herokuapp.com_member (1).png",
        "get-grub-app.herokuapp.com_member(iPhone 5_SE).png",
      ],
      Decription:
        "Get Grub is a recipe finding application. This was my second project which I worked on as part of a team. We used Trello board insted of canban board to plan our tasks, write psudocode and keep track of how we approached the tasks within the planned time frame using Grapph. We had a daily stand-up meetings and followed Agile process. User can login with google-ID, We used Passport and google Oauth to Authenticate and Authorize. Users can search recipies, add them in to My-list, delete them, add their own changes to recipies as comments and also update comments.",
      tech:
        "HTML5/CSS3, Bootstrap, Materialize, JavaScript, API's, Node.js, Express.js, Handlebars, Sequelize, PostgreSQL, bcryptjs.",
      repo: "https://github.com/meeday/git_grub",
      deployed: "http://get-grub-app.herokuapp.com/guest",
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });
  // onChangeInput = (e) => {
  //   this.setState({
  //     [e.target.name]: parseInt(e.target.value, 10) || 0,
  //   });
  // };

  render() {
    return (
      <div className="Projects">
        <div className="proLable">
          <label htmlFor="edu">Projects Portfolio</label>
        </div>
        <div
          className="carouselItems"
          style={{
            width: "100%",
            margin: "30px 0px",
            paddingBottom: "20px",
            padding: "10px",
          }}
        >
          <div
            className="carouselDiv"
            style={{ height: "-webkit-fill-available", width: "70%" }}
          >
            <Carousel
              slides={this.slides}
              goToSlide={this.state.goToSlide}
              offsetRadius={this.state.offsetRadius}
              showNavigation={this.state.showNavigation}
              animationConfig={this.state.config}
            />
          </div>
          {/* <div className="changeTransition"> */}
          {/* <div
              className="goto"
              style={{
                margin: "0 auto",
                marginTop: "2rem",
                width: "50%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div>
                <label>Go to slide: {this.currentItem}</label>
                <input name="goToSlide" onChange={this.onChangeInput} />
              </div>
              <div>
                <label>Offset Radius: </label>
                <input name="offsetRadius" onChange={this.onChangeInput} />
              </div>
              <div>
                <label>Show navigation: </label>
                <input
                  type="checkbox"
                  checked={this.state.showNavigation}
                  name="showNavigation"
                  onChange={(e) => {
                    this.setState({ showNavigation: e.target.checked });
                  }}
                />
              </div>
              <div>
                <button
                  onClick={() => {
                    this.setState({ config: config.gentle });
                  }}
                  disabled={this.state.config === config.gentle}
                >
                  Gentle Transition
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    this.setState({ config: config.slow });
                  }}
                  disabled={this.state.config === config.slow}
                >
                  Slow Transition
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    this.setState({ config: config.wobbly });
                  }}
                  disabled={this.state.config === config.wobbly}
                >
                  Wobbly Transition
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    this.setState({ config: config.stiff });
                  }}
                  disabled={this.state.config === config.stiff}
                >
                  Stiff Transition
                </button>
              </div>
            </div> */}
          {/* </div> */}
        <div className="content">
          <div className="relLink">
            <label>{this.slides[this.state.goToSlide].name}</label>
          </div>
          <div className="Description">
            {this.slides[this.state.goToSlide].Decription}
          </div>
          <div className="Description">
            Tech Stack : {this.slides[this.state.goToSlide].tech}
          </div>
        </div>
        {this.slides[this.state.goToSlide].repo ? (
          <div className="relLink">
            <Button
              className="deployButton"
              variant="contained"
              color="default"
              href={this.slides[this.state.goToSlide].repo}
              target="#blank"
              >
              Link to GitHub Repo
            </Button>
          </div>
        ) : (
          <>
            <div className="relLink">
              <Button
                className="deployButton"
                variant="contained"
                color="default"
                href={this.slides[this.state.goToSlide].front}
                target="#blank"
                >
                Link to GitHub FrontEnd Repo
              </Button>
            </div>
            <div className="relLink">
              <Button
                className="deployButton"
                variant="contained"
                color="default"
                href={this.slides[this.state.goToSlide].back}
                target="#blank"
                >
                Link to GitHub BackEnd Repo
              </Button>
            </div>
          </>
        )}
        {this.slides[this.state.goToSlide].deployed ? (
          <div className="relLink">
            <Button
              className="deployButton"
              variant="contained"
              color="default"
              href={this.slides[this.state.goToSlide].deployed}
              target="#blank"
              >
              Link to Deployed App
            </Button>
          </div>
        ) : null}
        </div>
      </div>
    );
  }
}
