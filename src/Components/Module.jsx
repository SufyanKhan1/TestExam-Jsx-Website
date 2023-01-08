import React from "react";
import "./Css/Module.css";
// import bg from "./img/bg.jpg";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";
import img3 from "./img/img3.jpg";
import img4 from "./img/img4.jpg";
import { SiGoogleclassroom } from "react-icons/si";
import pic from "./img/pic.png";
import { TbNotes } from "react-icons/tb";
import { AiOutlineContacts } from "react-icons/ai";
import { FaBook, FaHistory, FaMoneyBillAlt } from "react-icons/fa";
import { MdPayment, MdOutlineFeedback } from "react-icons/md";
import { BiMessageSquareDetail } from "react-icons/bi";
import service from "./img/service.jpg";
import { BsBook } from "react-icons/bs";
import { Row, Col } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import {} from "@ant-design/icons/lib/icons";
import FormBox from "./Daz";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const Module = () => {
  return (
    <>
      <div className="main-Container">
        <div className="top-nav">
          <Row style={{ justifyContent: "flex-end" }}>
            <Col lg={4} sm={7} md={4}>
              <div>
                <MailOutlined style={{ padding: "0px 0px" }} />
                info@myonline.com
              </div>
            </Col>
            |
            <Col lg={4} sm={7} md={4}>
              <div className="num">
                {" "}
                <PhoneOutlined style={{ padding: "0px 0px" }} />
                +190078601 | Toll Free
              </div>
            </Col>
          </Row>
        </div>
        <div className="navbar2">
          <FormBox />
        </div>
        <div className="navbar">
          <ul className="ul-navbar">
            <li className="navbar">Home</li>
            <li className="navbar">Online Class Help</li>
            <li className="navbar">Online Certification</li>
            <li className="navbar">Online Exam Help</li>
            <li className="navbar">
              <button className="btn-chat">CHAT NOW</button>
            </li>
          </ul>
        </div>
        <div className="section-two">
          {/* <div className="img">
            <img src={bg} alt={bg} width="100%" />
          </div> */}
          <div
            className="main"
            style={{
              display: "flex",
              color: "#fff",
              // position: "absolute",
              // top: "50%",
              padding: "0px 80px",
              // left: "50%",
              // transform: "translate(-50%, -50%)"
            }}
          >
            <Row gutter={[10, 10]}>
              <Col lg={12} sm={12} md={11}>
                <div className="intro">
                  <span style={{ color: "#ffb545", fontSize: "20px" }}>
                    Do You Have a Hard Time with Your Online Courses?
                  </span>
                  <h2 className="h2-main" style={{ width: "280px" }} >
                    Manage your online classes with our assistance and earn top
                    grades.
                  </h2>
                  <p>
                    Our online class assistants are available to provide
                    outstanding assistance.
                  </p>
                  <div style={{ display: "flex", padding: "20px 0px" }}>
                    <div>
                      <FaBook fill="#ffb545" size={50} />
                      <h4 >Coverage of all topics</h4>
                    </div>
                    <div
                    // style={{ padding: "0px 40px" }}
                    >
                      <FaHistory fill="#ffb545" size={50} />
                      <h4 >Prompt Delivery</h4>
                    </div>
                    <div>
                      <FaMoneyBillAlt fill="#ffb545" size={50} />
                      <h4 >Guaranteed Refund</h4>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={12} sm={12} md={13}>
                <div className="form-div">
                  <Form>
                    <Row
                      gutter={[10, 0]}
                      // style={{ width: "400px", height: "370px" }}
                    >
                      <Col xs={12} md={12} lg={24} style={{ height: "30px" }}>
                        <Form.Item>
                          <h2 className="h2-form" style={{ color: "#fff" }}>
                            Get a Quote Right Away
                          </h2>
                        </Form.Item>
                      </Col>
                      <Col
                        xs={12}
                        md={12}
                        lg={24}
                        //  style={{ height: "50px" }}
                      >
                        <Form.Item>
                          <h4 style={{ color: "#fff" }}>
                            or Call Now{" "}
                            <a
                              style={{ color: "#000" }}
                              href="tel:090078601"
                            >
                              090078601
                            </a>
                          </h4>
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} lg={12}>
                        <Form.Item name="first_name">
                          <Input
                            type="First_name"
                            placeholder="Enter First Name"
                            name="first_name"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} lg={12}>
                        <Form.Item name="last_name">
                          <Input
                            type="First_name"
                            placeholder="Enter Last Name"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} lg={12}>
                        <Form.Item>
                          <Input
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                          />
                        </Form.Item>
                      </Col>
                      <Col sm={24} md={12} lg={12}>
                        <Form.Item>
                          <Input
                            name="number"
                            type="phone_number"
                            placeholder="Your Phone Number"
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} md={12} lg={24}>
                        <Form.Item>
                          {/* <Input  name="message" placeholder="Talk about your project" /> */}
                          <TextArea
                            style={{ resize: "none" }}
                            rows={3}
                            placeholder="Talk about your project"
                          ></TextArea>
                        </Form.Item>
                      </Col>
                      <Col
                        xs={24}
                        md={12}
                        lg={24}
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Form.Item>
                          <Button
                            style={{
                              // marginLeft: "120px",
                              // width: "120px",
                              // height: "50px",
                              borderRadius: "45px",
                            }}
                          >
                            Submit
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="section-three">
          <div className="section-three-container">
            <Row className="row" style={{ justifyContent: "space-evenly" }}>
              <Col lg={12} sm={24} md={12}>
                <div
                  style={{
                    // width: "540px",
                    paddingLeft: "10px",
                  }}
                >
                  <Col lg={24} sm={24} md={24}>
                    {" "}
                    <span className="toward">
                      THE FIRST STEP TO ACADEMIC SUCCESS
                    </span>
                  </Col>
                  <p
                    style={{
                      fontSize: "45px",
                      lineHeight: "40px",
                      margin: "0px",
                      paddingTop: "30px",
                    }}
                  >
                    All-Inclusive <b>Online Class</b> Assistance.
                  </p>
                  <p className="text">
                    My assistance provides you with the best online academic
                    support from qualified subject-matter experts who are
                    committed to your success!
                  </p>
                  <span style={{ opacity: "0.7" }}>
                    {" "}
                    <p className="para">
                      Are you unable to enroll in your online course because of
                      your hectic schedule? Are you interested in obtaining
                      additional assistance that will make your life easier? We
                      at My Online Classes Taker know how challenging it can be
                      to be a student.
                    </p>
                    <ol className="ol">
                      <li>Expert Academic Tutors</li>
                      <li>Trusted by Students Around the World</li>
                      <li>Services With No Extra Fees</li>
                      <li>100% Satisfaction Assured</li>
                      <li>24/7 Support for Customers</li>
                    </ol>
                  </span>
                </div>
              </Col>
              <Col lg={10} sm={24} md={8}>
                <div>
                  <img
                    className="img"
                    src={img1}
                    alt={img1}
                    width="224px"
                    height="235px"
                    style={{ padding: "10px 20px" }}
                  />
                  <img
                    className="img"
                    src={img2}
                    alt={img2}
                    width="224px"
                    height="190px"
                  />
                  <img
                    className="img"
                    src={img3}
                    alt={img3}
                    width="224px"
                    height="190px"
                    style={{ padding: "40px 20px" }}
                  />
                  <img
                    className="img"
                    src={img4}
                    alt={img4}
                    width="224px"
                    height="190px"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="section-four">
          <div className="services">
            <Row
              className="row-services"
              style={{
                // height: "300px",
                backgroundColor: "#30398d",
                // display: "flex",
                // alignItems: "center",
              }}
            >
              <Col lg={8} sm={24} md={8}>
                {" "}
                <div className="class">
                  <span>{<SiGoogleclassroom size={50} />}</span>
                  <h4 className="service-heading">Online Class Assistance</h4>
                  <p style={{ width: "300px" }}>
                    We are here to assist you in achieving perfect attendance
                    and good grades if you are having difficulty staying on top
                    of your studies.
                  </p>
                </div>
                {/* <div
                  className="line"
                  style={{
                    backgroundColor: "white",
                    height: "100px",
                    width: "1px",
                    marginTop: "8%",
                  }}
                ></div> */}
              </Col>
              <Col lg={8} sm={24} md={8}>
                {" "}
                <div className="exam">
                  <span>
                    {" "}
                    <TbNotes size={50} />
                  </span>
                  <h4 className="service-heading">Online Exam Assistance</h4>
                  <p style={{ width: "300px" }}>
                    You can rest assured that your online tests will be
                    adequately covered thanks to our exceptional support.
                  </p>
                </div>
                {/* <div
                  className="line"
                  style={{
                    backgroundColor: "white",
                    // height: "100px",
                    width: "1px",
                    marginTop: "8%",
                  }}
                ></div> */}
              </Col>
              <Col lg={8} sm={24} md={8}>
                {" "}
                <div className="course">
                  <span>
                    <BsBook size={50} />
                  </span>
                  <h4 className="service-heading">Online Course Assistance</h4>
                  <p style={{ width: "300px" }}>
                    Are you compelled to enroll in an online course for which
                    you have no time or interest? The best online course
                    solution is then available to alleviate your burden.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="section-five">
          <div className="five-container">
            <Row>
              <Col lg={24} sm={24} md={20}>
                <div className="sub-container">
                  <span style={{ color: "#ffb545", fontSize: "22px" }}>
                    <b>Best Online Classes Takers</b>
                  </span>
                  <h2 style={{ fontSize: "45px", margin: "0" }}>
                  What We Can Do for You
                  </h2>
                  <p style={{ textAlign: "justify" }}>
                    What We Can Do for You My Online Classes Taker gives you the
                    opportunity to effortlessly earn top grades! We provide the
                    most effective academic solutions geared toward your
                    success.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className="container">
            <Row gutter={[10, 10]}>
              <Col lg={8} sm={12} md={8}>
                <div className="container-box">
                  <TbNotes size={50} />
                  <h3>Online Certification</h3>
                  <p className="pax">
                    Is it necessary for you to enroll in an online course that
                    you either lack the time or an interest in? You will then
                    have access to the best option for taking a course online to
                    reduce your workload. Our simplified online course services
                    are intended to assist you with your online classes and
                    exams throughout the semester. Check out our packages that
                    include everything.
                  </p>
                </div>
              </Col>
              <Col lg={8} sm={12} md={8}>
                <div
                  className="container-box"
                  //  style={{ margin: "0px 40px" }}
                >
                  <TbNotes size={50} />
                  <h3>ONLINE CLASS HELP</h3>
                  <p className="pax">
                    We have the knowledge and skills to help you get perfect
                    attendance and good grades if you're having trouble keeping
                    up with your studies. We have hundreds of skilled students
                    eager to impart their unparalleled knowledge. So, why are
                    you sitting around for so long?
                    <br /> Hire the best tutors and get the assistance you need
                    by calling us!
                  </p>
                </div>
              </Col>
              <Col lg={8} sm={12} md={8}>
                <div className="container-box">
                  <TbNotes size={50} />
                  <h3>ONLINE EXAM HELP</h3>
                  <p className="pax">
                    Are you being compelled to attend an online course in which
                    you have no interest or time? Then we have the ideal online
                    course for you. Our streamlined online course. Not just your
                    online lessons and examinations, but the full semester, are
                    covered by services. Consider our all-inclusive package
                    offerings.Our instructors have excelled in their academic
                    fields.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="section-six" style={{ margin: "5%" }}>
          <div className="container-six">
            <Row gutter={[10, 10]}>
              <Col lg={12} sm={24} md={16}>
                <div className="left">
                  <span style={{ color: "#ffb545", fontSize: "18px" }}>
                    We Make Your Life Simpler
                  </span>
                  <h2>Professional Online Class Takers</h2>
                  <p
                  // style={{ width: "420px" }}
                  >
                    {" "}
                    <strong>
                      Get in touch with experts who will assist you in passing
                      your online class, exams, or the entire course.
                    </strong>
                  </p>
                  <p
                  // style={{ width: "420px", color: "#666666" }}
                  >
                    The leading website My Online Classes Taker, based in the
                    United States, provides assistance to students seeking to
                    hire online tutors for their classes. Your assignments and
                    tests will be handled by the best professionals in the
                    industry at our company.
                  </p>
                  <p
                  // style={{ width: "420px", color: "#666666" }}
                  >
                    24/7 support is available from our dedicated team. Contact
                    our professionals right away to find out more.
                  </p>
                </div>
              </Col>
              <Col lg={12} sm={24} md={8}>
                <div className="right">
                  <img
                    src={service}
                    alt={service}
                    width="350px"
                    height="358px"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div
          className="section-seven"
          style={{ backgroundColor: "#292B43", paddingBottom: "8%" }}
        >
          <div className="container-seven">
            <Row>
              <Col lg={24} sm={18} md={18}>
                <p
                  style={{
                    color: "#ffb545",
                    fontSize: "18px",
                    textAlign: "center",
                    margin: "0",
                    padding: "0",
                  }}
                >
                  STEPS TOWARD ACADEMIC SUCCESS
                </p>
                <h2 style={{ color: "#fff", textAlign: "center" }}>
                  {" "}
                  How to Place Your Order
                </h2>
                <p
                  className="seven-para"
                  style={{
                    color: "#fff",
                    fontSize: "20px",
                    width: "600px",
                    textAlign: "center",
                    marginBottom: "90px",
                    paddingLeft: "160px",
                  }}
                >
                  In order to process your order as quickly as possible, My
                  Online Classes Taker has included a straightforward yet
                  efficient procedure.
                </p>
              </Col>
            </Row>
            <Row gutter={[10, 80]}>
              <Col lg={6} xs={12} sm={12} md={6}>
                <div id="blue">
                  <div
                    className="line"
                    style={{
                      position: "absolute",
                      bottom: "160px",
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                      marginLeft: "80px",
                      marginTop: "8%",
                      color: "#fff",
                      fontSize: "30px",
                      textAlign: "center",
                      fontWeight: "800",
                      backgroundColor: "#ffb545",
                    }}
                  >
                    1
                  </div>
                  <div
                    id="blue"
                    style={{
                      // width: "270px",
                      backgroundColor: "#ffb545",
                      // display: "flex",
                      // flexDirection: "column",
                      padding: "20px 40px",
                    }}
                  >
                    <AiOutlineContacts
                      size={40}
                      fill="white"
                      style={{ paddingLeft: "40px" }}
                    />
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        fontWeight: "700",
                      }}
                    >
                      CONTACT
                    </span>
                    <p
                      style={{
                        width: "120px",
                        margin: "0px",
                        textAlign: "center",
                      }}
                    >
                      Send us a message or give us a call to place an order
                      right away.
                    </p>
                  </div>
                  {/* <div className="line-end"></div> */}
                </div>
              </Col>
              <Col lg={6} xs={12} sm={12} md={6}>
                <div
                  className="line"
                  style={{
                    position: "absolute",
                    bottom: "160px",

                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    marginLeft: "80px",
                    marginTop: "8%",
                    color: "#fff",
                    fontSize: "30px",
                    textAlign: "center",
                    fontWeight: "800",
                    backgroundColor: "#ffb545",
                  }}
                >
                  2
                </div>
                <div
                  id="blue"
                  style={{
                    // width: "270px",
                    backgroundColor: "#ffb545",
                    // display: "flex",
                    // flexDirection: "column",
                    padding: "20px 30px",
                  }}
                >
                  <BiMessageSquareDetail
                    size={40}
                    fill="white"
                    style={{ paddingLeft: "40px" }}
                  />
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "700",
                    }}
                  >
                    SHARE DETAILS
                  </span>
                  <p
                    style={{
                      width: "120px",
                      margin: "0px",
                      textAlign: "center",
                    }}
                  >
                    It is essential to get going right away. Please let us know
                    what you need.
                  </p>
                </div>
                {/* <div className="line-end"></div> */}
              </Col>
              <Col lg={6} xs={12} sm={12} md={6}>
                <div
                  className="line"
                  style={{
                    position: "absolute",
                    bottom: "160px",

                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    marginLeft: "80px",
                    marginTop: "8%",
                    color: "#fff",
                    fontSize: "30px",
                    textAlign: "center",
                    fontWeight: "800",
                    backgroundColor: "#ffb545",
                  }}
                >
                  3
                </div>
                <div
                  id="blue"
                  style={{
                    // width: "270px",
                    backgroundColor: "#ffb545",
                    // display: "flex",
                    // flexDirection: "column",
                    padding: "20px 40px",
                  }}
                >
                  <MdPayment
                    size={40}
                    fill="white"
                    style={{ paddingLeft: "40px" }}
                  />
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "700",
                    }}
                  >
                    MAKE PAYMENT
                  </span>
                  <p
                    style={{
                      width: "120px",
                      margin: "0px",
                      textAlign: "center",
                    }}
                  >
                    In order to get started right away, you will need to pay.
                  </p>
                </div>
                {/* <div className="line-end"></div> */}
              </Col>
              <Col lg={6} xs={12} sm={12} md={6}>
                <div
                  className="line"
                  style={{
                    position: "absolute",
                    bottom: "160px",
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    marginLeft: "80px",
                    marginTop: "8%",
                    color: "#fff",
                    fontSize: "30px",
                    textAlign: "center",
                    fontWeight: "800",
                    backgroundColor: "#ffb545",
                  }}
                >
                  4
                </div>
                <div
                  id="blue"
                  style={{
                    // width: "270px",
                    backgroundColor: "#ffb545",
                    // display: "flex",
                    // flexDirection: "column",
                    padding: "20px 30px",
                  }}
                >
                  <MdOutlineFeedback
                    size={40}
                    fill="white"
                    style={{ paddingLeft: "40px" }}
                  />
                  <span
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontWeight: "700",
                    }}
                  >
                    GIVE FEEDBACK
                  </span>
                  <p
                    style={{
                      width: "120px",
                      margin: "0px",
                      textAlign: "center",
                    }}
                  >
                    Your feedback is necessary for us to improve and serve you
                    better.
                  </p>
                </div>
                {/* <div className="line-end"></div> */}
              </Col>
            </Row>
          </div>
        </div>
        <div className="section-footer">
          <Row gutter={[60, 10]}>
            <Col lg={8} xs={12} sm={12} md={8}>
              <div className="footer">
                <div>
                  <h3
                    style={{
                      color: "#ffb545",
                      fontSize: "22px",
                      margin: "15px 0px",
                    }}
                  >
                    My Online Class Taker
                  </h3>
                  <b>SERVICE DISCLAIMER</b>
                  <p style={{ width: "220px", textAlign: "justify" }}>
                    My Online Classes Taker is a student academic help service
                    provider from the United States. Whatever assistance and
                    assistance we provide is in accordance with ethical laws and
                    academic standards. Our services only serve informational
                    purposes.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6} xs={12} sm={12} md={6}>
              <div className="footer">
                <div>
                  <h4 className="footer-header">Navigate our site</h4>
                  <ul className="ul-footer">
                    <li>Home</li>
                    <li>Online Certification</li>
                    <li>Online Class Help</li>
                    <li>Online Exam Help</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={4} xs={12} sm={12} md={6}>
              <div className="footer">
                <div>
                  <h4 className="footer-header"> Explore</h4>
                  <ul className="ul-footer">
                    <li>Home</li>
                    <li>Privacy Policy</li>
                    <li>Terms % Condition</li>
                    <li>FAQs</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col lg={6} xs={12} sm={12} md={6}>
              <div className="footer">
                <div>
                  <h4 className="footer-header">Information</h4>
                  <ul className="ul-footer">
                    <li>Phone</li>
                    <li>090078601</li>
                    <li>Email</li>
                    <li>info@onlinetaker.com</li>
                    <li>
                      <img
                        style={{ paddingTop: "10px" }}
                        src={pic}
                        alt={pic}
                        width="160px"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="section-footer">
          <span
            style={{
              fontSize: "20px",
              paddingTop: "30px",
              paddingBottom: "20px",
            }}
          >
            My Online Classes Taker - &copy; 2023. | All rights reserved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Module;
