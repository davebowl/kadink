/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// reactstrap components
import {
	Button,
	Card,
	CardHeader,
	CardBody,
	FormGroup,
	Form,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col,
} from "reactstrap";
import { LOGIN_QUERY } from "../queries/login";
import { useMutation } from "@apollo/react-hooks";
import Header from "../components/header";

// core components
// import DemoNavbar from "components/Navbars/DemoNavbar.js";
// import SimpleFooter from "components/Footers/SimpleFooter.js";
const Login = () => {
	const [userObject, setUserObject] = React.useState({
		identifier: "",
		password: "",
	});
	const main = React.useRef(null);
	const [loginMutation] = useMutation(LOGIN_QUERY);
	const handleObjectChange = (e) => {
		e.persist();
		setUserObject((state) => {
			return { ...state, [e.target.name]: e.target.value };
		});
	};
}
	const handleLoginSubmit = (e) => {
		e.preventDefault();
		console.log("did I go blammo?");
		loginMutation({
			variables: { input: userObject },
			update: (cache, { data: { loginMutation } }) => {
				const data = cache.readQuery({ query: LOGIN_QUERY });
				data.userObject = [loginMutation];
				cache.writeQuery({ query: LOGIN_QUERY }, data);
		}
		});

	React.useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
		main.current.scrollTop = 0;
	}, []);
	return (
		<>
			{/* <DemoNavbar /> */}
			<main ref={main}>
				<section className="section section-shaped section-lg">
					<div className="shape shape-style-1 bg-gradient-default">
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
					</div>
					<Container className="pt-lg-7">
						<Row className="justify-content-center">
							<Col lg="5">
								<Card className="bg-secondary shadow border-0">
									<CardHeader className="bg-white pb-5">
										<div className="text-muted text-center mb-3">
											<small>Sign in with</small>
										</div>
										<div className="btn-wrapper text-center">
											<Button
												className="btn-neutral btn-icon"
												color="default"
												href="#pablo"
												onClick={(e) =>
													e.preventDefault()
												}
											>
												<span className="btn-inner--icon mr-1">
													{/* <img
                              alt="..."
                              src={require("assets/img/icons/common/github.svg")}
                            /> */}
												</span>
												<span className="btn-inner--text">
													Github
												</span>
											</Button>
											<Button
												className="btn-neutral btn-icon ml-1"
												color="default"
												href="#pablo"
												onClick={(e) =>
													e.preventDefault()
												}
											>
												<span className="btn-inner--icon mr-1">
													{/* <img
                              alt="..."
                              src={require("assets/img/icons/common/google.svg")}
                            /> */}
												</span>
												<span className="btn-inner--text">
													Google
												</span>
											</Button>
										</div>
									</CardHeader>
									<CardBody className="px-lg-5 py-lg-5">
										<div className="text-center text-muted mb-4">
											<small>
												Or sign in with credentials
											</small>
										</div>
										<Form role="form">
											<FormGroup className="mb-3">
												<InputGroup className="input-group-alternative">
													<InputGroupAddon addonType="prepend">
														<InputGroupText>
															<i className="ni ni-email-83" />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														placeholder="Username or Email"
														type="text"
														name="identifier"
														value={
															userObject.identifier
														}
														onChange={(e) =>
															handleObjectChange(
																e
															)
														}
													/>
												</InputGroup>
											</FormGroup>
											<FormGroup>
												<InputGroup className="input-group-alternative">
													<InputGroupAddon addonType="prepend">
														<InputGroupText>
															<i className="ni ni-lock-circle-open" />
														</InputGroupText>
													</InputGroupAddon>
													<Input
														placeholder="Password"
														type="password"
														autoComplete="off"
														name="password"
														value={
															userObject.password
														}
														onChange={(e) =>
															handleObjectChange(
																e
															)
														}
													/>
												</InputGroup>
											</FormGroup>
											<div className="custom-control custom-control-alternative custom-checkbox">
												<input
													className="custom-control-input"
													id=" customCheckLogin"
													type="checkbox"
												/>
												<label
													className="custom-control-label"
													htmlFor=" customCheckLogin"
												>
													<span>Remember me</span>
												</label>
											</div>
											<div className="text-center">
												<Button
													className="my-4"
													color="primary"
													type="button"
													onClick={(e) =>
														handleLoginSubmit(e)
													}
												>
													Sign in
												</Button>
											</div>
										</Form>
									</CardBody>
								</Card>
								<Row className="mt-3">
									<Col xs="6">
										<a
											className="text-light"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
										>
											<small>Forgot password?</small>
										</a>
									</Col>
									<Col className="text-right" xs="6">
										<a
											className="text-light"
											href="#pablo"
											onClick={(e) => e.preventDefault()}
										>
											<small>Create new account</small>
										</a>
									</Col>
								</Row>
							</Col>
						</Row>
					</Container>
				</section>
			</main>
			{/* <SimpleFooter /> */}
		</>
	);
};

export default Login;
