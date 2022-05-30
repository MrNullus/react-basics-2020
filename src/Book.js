import React from "react";

const Book = ({ img, title, author }) => {
	// *** props destructuring
	// const { img, title, author } = props;

	// *** Attribute, eventHandler
	// onClicke, onMouseOver,

	const clickHandler = (e) => {
		console.log(e);
		console.log(e.target);
		alert("Hello World");
	};
	const complexExample = (author) => {
		console.log(author);
	};

	return (
		<article
			className="book"
			onMouseOver={() => {
				console.log(title);
			}}
		>
			<img style={{ width: "300px" }} src={img} alt="" />

			<h1>{title}</h1>
			<h4
				style={{ color: "#262626", fontSize: "0.75rem", marginTop: "0.25rem" }}
			>
				{author}
			</h4>
			<button type="button" onClick={clickHandler}>
				reference example
			</button>

			<button type="button" onClick={complexExample(author)}>
				more complex example
			</button>
		</article>
	);
};

export default Book;
