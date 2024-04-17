import { title } from "@/components/primitives";

export default function AboutPage() {
	return (
		<div>
			<h1 className={title()}>About</h1>
			<hr/>
			<p className={title()}>Easy</p>
        <h1 className={title({ color: "violet" })}>Buy&nbsp;</h1>

		<p>We founded a Shop to bring the best and low Prices for nice MeMes</p>
		</div>
	);
}
