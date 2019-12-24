import React from "react";
import logo from "@images/logo.svg";
import { app, logoContainer, logoStyle, title } from "./Home.module.scss";

export default () => (
	<div className={app}>
		<div className={logoContainer}>
			<img className={logoStyle} src={logo} alt="" />
			<h1 className={title}>React Bare Bones Kit</h1>
			<h1 className={title}>Edit ./components and save to reload.</h1>
		</div>
	</div>
);
