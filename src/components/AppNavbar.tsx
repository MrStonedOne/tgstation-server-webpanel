import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FormattedMessage } from "react-intl";
import { RouteComponentProps, withRouter } from "react-router";
import CSSTransition from "react-transition-group/CSSTransition";

import { Components } from "../ApiClient/generatedcode/_generated";
import InternalError, { GenericErrors } from "../ApiClient/models/InternalComms/InternalError";
import InternalStatus, { StatusCode } from "../ApiClient/models/InternalComms/InternalStatus";
import ServerClient, { ServerInfoErrors } from "../ApiClient/ServerClient";
import UserClient from "../ApiClient/UserClient";
import CredentialsProvider from "../ApiClient/util/CredentialsProvider";
import LoginHooks from "../ApiClient/util/LoginHooks";
import { matchesPath } from "../utils/misc";
import RouteController from "../utils/RouteController";
import { AppCategories, AppRoute, AppRoutes } from "../utils/routes";
import ErrorAlert from "./utils/ErrorAlert";

interface IProps extends RouteComponentProps {
    category?: {
        name: string;
        key: string;
    };
}

interface IState {
    currentUser: Components.Schemas.User | null;
    serverInformation: Components.Schemas.ServerInformation | null;
    userNameError: InternalError<GenericErrors> | null;
    serverInfoError: InternalError<ServerInfoErrors> | null;
    loggedIn: boolean;
    //so we dont actually use the routes but it allows us to make react update the component
    routes: AppRoute[];
    categories: typeof AppCategories;
    focusedCategory: string;
    focusTimer?: number;
}

export default withRouter(
    class AppNavbar extends React.Component<IProps, IState> {
        public constructor(props: IProps) {
            super(props);
            this.logoutClick = this.logoutClick.bind(this);
            this.loadServerInformation = this.loadServerInformation.bind(this);
            this.loadUserInformation = this.loadUserInformation.bind(this);
            this.loadServerInfo = this.loadServerInfo.bind(this);
            this.loadUserInfo = this.loadUserInfo.bind(this);
            this.loginSuccess = this.loginSuccess.bind(this);
            this.logout = this.logout.bind(this);
            this.refresh = this.refresh.bind(this);

            this.state = {
                loggedIn: !!CredentialsProvider.isTokenValid(),
                routes: [],
                categories: AppCategories,
                focusedCategory: this.props.category?.name || "",
                serverInfoError: null,
                userNameError: null,
                currentUser: null,
                serverInformation: null
            };
        }

        private loadServerInfo(
            info: InternalStatus<Components.Schemas.ServerInformation, ServerInfoErrors>
        ) {
            this.setState({
                serverInformation: info.code == StatusCode.OK ? info.payload : null,
                serverInfoError: info.code == StatusCode.ERROR ? info.error : null
            });
        }

        private loadUserInfo(user: InternalStatus<Components.Schemas.User, GenericErrors>) {
            this.setState({
                currentUser: user.code == StatusCode.OK ? user.payload : null,
                userNameError: user.code == StatusCode.ERROR ? user.error : null
            });
        }

        private loginSuccess() {
            this.setState({
                loggedIn: true
            });
        }

        private logout() {
            this.setState({
                loggedIn: false
            });
        }

        private refresh(routes: Array<AppRoute>) {
            this.setState({
                routes
            });
        }

        public async componentDidMount(): Promise<void> {
            LoginHooks.addHook(this.loadServerInformation);
            ServerClient.on("loadServerInfo", this.loadServerInfo);

            LoginHooks.addHook(this.loadUserInformation);
            UserClient.on("loadUserInfo", this.loadUserInfo);

            LoginHooks.on("loginSuccess", this.loginSuccess);
            ServerClient.on("logout", this.logout);

            this.setState({
                routes: await RouteController.getRoutes()
            });

            if (CredentialsProvider.isTokenValid()) {
                await this.loadServerInformation();
                await this.loadUserInformation();
            }

            RouteController.on("refresh", this.refresh);
        }

        public componentWillUnmount(): void {
            ServerClient.removeListener("loadServerInfo", this.loadServerInfo);
            UserClient.removeListener("loadUserInfo", this.loadUserInfo);
            LoginHooks.removeListener("loginSuccess", this.loginSuccess);
            ServerClient.removeListener("logout", this.logout);
            RouteController.removeListener("refresh", this.refresh);
        }

        public componentDidUpdate(prevProps: Readonly<IProps>) {
            if (
                this.props.category !== undefined &&
                this.props.category.key !== prevProps.category?.key
            ) {
                this.setState({
                    focusedCategory: this.props.category.name
                });
            }
        }

        public render(): React.ReactNode {
            return (
                <React.Fragment>
                    <Navbar
                        className="shadow-lg"
                        expand={this.state.loggedIn ? "lg" : undefined}
                        collapseOnSelect
                        variant="dark"
                        bg={
                            this.state.userNameError || this.state.serverInfoError
                                ? "danger"
                                : "primary"
                        }>
                        <Navbar.Brand
                            onClick={() => {
                                this.props.history.push(
                                    AppRoutes.home.link || AppRoutes.home.route,
                                    {
                                        reload: true
                                    }
                                );
                            }}
                            className="mr-auto">
                            {this.renderVersion()}
                        </Navbar.Brand>
                        <Navbar.Toggle className="mr-2" aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="text-right mr-2" style={{ minWidth: "0px" }}>
                            <Nav className="mr-auto overflow-auto fancyscroll">
                                {!this.state.loggedIn ? (
                                    <Nav.Item>
                                        <Nav.Link
                                            onClick={() => {
                                                this.props.history.push(
                                                    AppRoutes.home.link || AppRoutes.home.route,
                                                    { reload: true }
                                                );
                                            }}
                                            active={true}>
                                            <FormattedMessage id="routes.login" />
                                        </Nav.Link>
                                    </Nav.Item>
                                ) : (
                                    Object.values(this.state.categories).map(cat => {
                                        if (!cat.leader.cachedAuth) return;
                                        return (
                                            <div
                                                key={cat.name}
                                                className="d-flex"
                                                onMouseEnter={() => {
                                                    const timer = window.setTimeout(() => {
                                                        this.setState({
                                                            focusedCategory: cat.name,
                                                            focusTimer: undefined
                                                        });
                                                    }, 130);
                                                    this.setState({
                                                        focusTimer: timer
                                                    });
                                                }}
                                                onMouseLeave={() => {
                                                    window.clearTimeout(this.state.focusTimer);
                                                    this.setState({
                                                        focusTimer: undefined
                                                    });
                                                }}
                                                onClick={() => {
                                                    window.clearTimeout(this.state.focusTimer);
                                                    this.setState({
                                                        focusedCategory: cat.name,
                                                        focusTimer: undefined
                                                    });
                                                }}>
                                                <Nav.Item>
                                                    <Nav.Link
                                                        onClick={() => {
                                                            this.props.history.push(
                                                                cat.leader.link || cat.leader.route,
                                                                { reload: true }
                                                            );
                                                        }}
                                                        active={matchesPath(
                                                            this.props.location.pathname,
                                                            cat.leader.route,
                                                            !cat.leader.navbarLoose
                                                        )}>
                                                        <FormattedMessage id={cat.leader.name} />
                                                    </Nav.Link>
                                                </Nav.Item>
                                                {Object.values(cat.routes).filter(
                                                    value => value.cachedAuth
                                                ).length >= 2 ? (
                                                    <CSSTransition
                                                        in={this.state.focusedCategory === cat.name}
                                                        classNames="anim-collapse"
                                                        className="nowrap anim-collapse-all"
                                                        addEndListener={(node, done) => {
                                                            node.addEventListener(
                                                                "transitionend",
                                                                done,
                                                                false
                                                            );
                                                        }}
                                                        onMouseEnter={() => {
                                                            this.setState({
                                                                focusedCategory: cat.name
                                                            });
                                                        }}>
                                                        <div>
                                                            <Nav>
                                                                <div className="py-2 d-none d-lg-inline">
                                                                    <FontAwesomeIcon icon="angle-right" />
                                                                </div>
                                                                <Nav className="bg-darkblue mx-1 rounded">
                                                                    {cat.routes.map(val => {
                                                                        if (val.catleader) return; //we already display this but differently
                                                                        if (!val.cachedAuth) return;
                                                                        if (!val.visibleNavbar)
                                                                            return;

                                                                        return (
                                                                            <Nav.Item
                                                                                key={val.name}>
                                                                                <Nav.Link
                                                                                    onClick={() => {
                                                                                        this.props.history.push(
                                                                                            val.link ||
                                                                                                val.route,
                                                                                            {
                                                                                                reload: true
                                                                                            }
                                                                                        );
                                                                                    }}
                                                                                    active={matchesPath(
                                                                                        this.props
                                                                                            .location
                                                                                            .pathname,
                                                                                        val.route,
                                                                                        !val.navbarLoose
                                                                                    )}>
                                                                                    <FormattedMessage
                                                                                        id={
                                                                                            val.name
                                                                                        }
                                                                                    />
                                                                                </Nav.Link>
                                                                            </Nav.Item>
                                                                        );
                                                                    })}

                                                                    <div className="py-2 d-none d-lg-inline mr-1">
                                                                        <FontAwesomeIcon icon="grip-lines-vertical" />
                                                                    </div>
                                                                </Nav>
                                                            </Nav>
                                                        </div>
                                                    </CSSTransition>
                                                ) : (
                                                    ""
                                                )}
                                            </div>
                                        );
                                    })
                                )}
                            </Nav>
                            {this.renderUser()}
                        </Navbar.Collapse>
                    </Navbar>
                    {this.state.serverInfoError ? (
                        <ErrorAlert error={this.state.serverInfoError} />
                    ) : (
                        ""
                    )}
                    {this.state.userNameError ? (
                        <ErrorAlert error={this.state.userNameError} />
                    ) : (
                        ""
                    )}
                </React.Fragment>
            );
        }

        private renderVersion(): React.ReactNode {
            if (!this.state.loggedIn) {
                return <FormattedMessage id="generic.appname" />;
            }
            if (this.state.serverInfoError)
                return (
                    <div>
                        <div className="align-top d-inline-block px-1">
                            <FontAwesomeIcon icon="exclamation-circle" />
                        </div>
                        <div className="d-inline-block">
                            <FormattedMessage id="navbar.server_error" />
                        </div>
                    </div>
                );
            if (this.state.serverInformation)
                return (
                    <React.Fragment>
                        <FormattedMessage id="generic.appname" />
                        {" v"}
                        {this.state.serverInformation.version!}
                    </React.Fragment>
                );

            return "loading"; //TODO: add a spinner;
        }

        private renderUser(): React.ReactNode {
            if (!this.state.loggedIn)
                return (
                    <React.Fragment>
                        <Button
                            onClick={() => {
                                this.props.history.push(
                                    AppRoutes.config.link || AppRoutes.config.route,
                                    { reload: true }
                                );
                            }}
                            variant={
                                this.state.serverInfoError || this.state.userNameError
                                    ? "danger"
                                    : "primary"
                            }>
                            <FontAwesomeIcon icon="cogs" />
                        </Button>
                        <Button
                            onClick={() => {
                                this.props.history.push(
                                    AppRoutes.info.link || AppRoutes.info.route,
                                    { reload: true }
                                );
                            }}
                            variant={
                                this.state.serverInfoError || this.state.userNameError
                                    ? "danger"
                                    : "primary"
                            }>
                            <FontAwesomeIcon icon="info-circle" />
                        </Button>
                    </React.Fragment>
                );

            return (
                <Nav.Item className="ml-auto">
                    <Dropdown>
                        <Dropdown.Toggle
                            id="user-dropdown"
                            type="button"
                            variant={
                                this.state.serverInfoError || this.state.userNameError
                                    ? "danger"
                                    : "primary"
                            }
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            {this.state.userNameError ? (
                                <div>
                                    <div className="align-top d-inline-block px-1">
                                        <FontAwesomeIcon icon="exclamation-circle" />
                                    </div>
                                    <div className="d-inline-block">
                                        <FormattedMessage id="navbar.user_error" />
                                    </div>
                                </div>
                            ) : this.state.currentUser ? (
                                this.state.currentUser.name
                            ) : (
                                "loading" //TODO: add spinner
                            )}
                        </Dropdown.Toggle>
                        <Dropdown.Menu alignRight className="text-right">
                            <Dropdown.Item
                                onClick={() => {
                                    this.props.history.push(
                                        AppRoutes.info.link || AppRoutes.info.route,
                                        { reload: true }
                                    );
                                }}>
                                <FormattedMessage id="routes.info" />
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    this.props.history.push(
                                        AppRoutes.config.link || AppRoutes.config.route,
                                        { reload: true }
                                    );
                                }}>
                                <FormattedMessage id="routes.config" />
                            </Dropdown.Item>
                            {AppRoutes.passwd.cachedAuth ? (
                                <Dropdown.Item
                                    onClick={() => {
                                        this.props.history.push(
                                            AppRoutes.passwd.link || AppRoutes.passwd.route,
                                            { reload: true }
                                        );
                                    }}>
                                    <FormattedMessage id="routes.passwd" />
                                </Dropdown.Item>
                            ) : (
                                ""
                            )}
                            <Dropdown.Item
                                onClick={() => {
                                    ServerClient.emit("purgeCache");
                                }}>
                                <FormattedMessage id="navbar.purgecache" />
                            </Dropdown.Item>
                            <Dropdown.Item
                                onClick={() => {
                                    this.props.history.replace(this.props.location.pathname, {
                                        reload: true
                                    });
                                }}>
                                <FormattedMessage id="navbar.refresh" />
                            </Dropdown.Item>
                            <Dropdown.Item onClick={this.logoutClick}>
                                <FormattedMessage id="navbar.logout" />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav.Item>
            );
        }

        private logoutClick(): void {
            ServerClient.logout();
        }

        private async loadServerInformation(): Promise<void> {
            const info = await ServerClient.getServerInfo();
            this.setState({
                serverInformation: info.code == StatusCode.OK ? info.payload : null,
                serverInfoError: info.code == StatusCode.ERROR ? info.error : null
            });
        }

        private async loadUserInformation(): Promise<void> {
            const response = await UserClient.getCurrentUser();
            this.setState({
                currentUser: response.code == StatusCode.OK ? response.payload : null,
                userNameError: response.code == StatusCode.ERROR ? response.error : null
            });
        }
    }
);
